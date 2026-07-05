import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Initialize directly if window is available (avoids the undefined flash)
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(max-width: " + (MOBILE_BREAKPOINT - 1) + "px)").matches;
    }
    return false;
  });

  React.useEffect(() => {
    const mql = window.matchMedia("(max-width: " + (MOBILE_BREAKPOINT - 1) + "px)");
    
    // Direct match check instead of checking window.innerWidth
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Modern event listener setup
    mql.addEventListener("change", onChange);
    
    // Sync initial state just in case
    setIsMobile(mql.matches);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}