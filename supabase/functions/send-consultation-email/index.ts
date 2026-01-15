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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, phone, location, message }: ConsultationRequest = await req.json();

    // Validate required fields
    if (!fullName || !email || !phone || !location) {
      console.error("Missing required fields:", { fullName, email, phone, location });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Sending consultation email for:", fullName, email);

    // Send notification email to company
    const companyEmailResponse = await resend.emails.send({
      from: "Virobel <onboarding@resend.dev>",
      to: ["info@virobel.com"], // Replace with your actual company email
      subject: `New Consultation Request from ${fullName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0A1628; color: #F5F0E6;">
          <h1 style="color: #C9A962; border-bottom: 1px solid #C9A962; padding-bottom: 10px;">
            New Consultation Request
          </h1>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #C9A962; margin-bottom: 5px;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #D4B978;">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Location:</strong> ${location}</p>
          </div>
          
          ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #C9A962; margin-bottom: 5px;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <hr style="border: none; border-top: 1px solid #1E3A5F; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">
            This inquiry was submitted through the Virobel website.
          </p>
        </div>
      `,
    });

    console.log("Company email sent:", companyEmailResponse);

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "Virobel <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your inquiry - Virobel",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0A1628; color: #F5F0E6;">
          <h1 style="color: #C9A962; border-bottom: 1px solid #C9A962; padding-bottom: 10px;">
            Thank You, ${fullName}
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

    console.log("User confirmation email sent:", userEmailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
