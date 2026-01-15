import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures route navigation feels like a "real" page change by resetting scroll.
 * Without this, users who click links while at the bottom (e.g., in the footer)
 * stay at the bottom of the next route and it can look like navigation failed.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
