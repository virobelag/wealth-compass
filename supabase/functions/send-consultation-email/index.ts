import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  message?: string;
}

// In-memory rate limiting store (resets on function cold start)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_MAX_REQUESTS = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window

/**
 * Escape HTML special characters to prevent HTML injection in emails
 */
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

/**
 * Check rate limit for an IP address
 * Returns true if rate limit is exceeded
 */
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // New window - reset the counter
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  // Increment counter
  record.count++;
  rateLimitStore.set(ip, record);
  return false;
}

/**
 * Get client IP from request headers
 */
function getClientIp(req: Request): string {
  // Try various headers that might contain the real IP
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }
  
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) {
    return cfConnectingIp;
  }
  
  return "unknown";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check rate limit
    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      console.warn("Rate limit exceeded for IP:", clientIp);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { fullName, email, phone, location, message }: ConsultationRequest = await req.json();

    // Validate required fields
    if (!fullName || !email || !phone || !location) {
      console.warn("Missing required fields in consultation request");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn("Invalid email format in consultation request");
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate input lengths to prevent abuse
    if (fullName.length > 100 || email.length > 255 || phone.length > 30 || location.length > 200 || (message && message.length > 2000)) {
      console.warn("Input validation failed: field too long");
      return new Response(
        JSON.stringify({ error: "Input validation failed" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Processing consultation request");

    // Escape all user inputs for safe HTML embedding
    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeLocation = escapeHtml(location);
    const safeMessage = message ? escapeHtml(message) : null;

    // Send notification email to company
    const companyEmailResponse = await resend.emails.send({
      from: "Virobel <onboarding@resend.dev>",
      to: ["contact@virobel.com"],
      subject: `New Consultation Request from ${safeFullName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0A1628; color: #F5F0E6;">
          <h1 style="color: #C9A962; border-bottom: 1px solid #C9A962; padding-bottom: 10px;">
            New Consultation Request
          </h1>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #C9A962; margin-bottom: 5px;">Contact Information</h3>
            <p><strong>Name:</strong> ${safeFullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #D4B978;">${safeEmail}</a></p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Location:</strong> ${safeLocation}</p>
          </div>
          
          ${safeMessage ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #C9A962; margin-bottom: 5px;">Message</h3>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>
          ` : ''}
          
          <hr style="border: none; border-top: 1px solid #1E3A5F; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">
            This inquiry was submitted through the Virobel website.
          </p>
        </div>
      `,
    });

    console.log("Company email sent successfully");

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "Virobel <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your inquiry - Virobel",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0A1628; color: #F5F0E6;">
          <h1 style="color: #C9A962; border-bottom: 1px solid #C9A962; padding-bottom: 10px;">
            Thank You, ${safeFullName}
          </h1>
          
          <p style="line-height: 1.6;">
            We have received your consultation request and appreciate your interest in Virobel.
          </p>
          
          <p style="line-height: 1.6;">
            A member of our team will review your inquiry and reach out to you within 
            <strong style="color: #C9A962;">1-2 business days</strong> to discuss how we can help 
            you achieve your wealth management goals.
          </p>
          
          <p style="line-height: 1.6;">
            In the meantime, feel free to explore our website to learn more about our 
            investment philosophy and services.
          </p>
          
          <div style="margin: 30px 0; padding: 20px; background-color: #1E3A5F; border-left: 3px solid #C9A962;">
            <p style="margin: 0; font-style: italic;">
              "Protecting & Growing Generational Wealth"
            </p>
          </div>
          
          <p>
            Warm regards,<br/>
            <strong style="color: #C9A962;">The Virobel Team</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #1E3A5F; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">
            If you did not submit this inquiry, please disregard this email.
          </p>
        </div>
      `,
    });

    console.log("User confirmation email sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
