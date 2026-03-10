import { useState, useEffect } from "react";

const PRIMER_BREAKPOINTS = {
  regular: 768,
  wide: 1400,
};

type PrimerViewportRange = "narrow" | "regular" | "wide";

function usePrimerViewportRange(): PrimerViewportRange {
  const [viewportRange, setViewportRange] = useState<PrimerViewportRange>("narrow");

  useEffect(() => {
    const updateRange = () => {
      const width = window.innerWidth;
      if (width >= PRIMER_BREAKPOINTS.wide) {
        setViewportRange("wide");
      } else if (width >= PRIMER_BREAKPOINTS.regular) {
        setViewportRange("regular");
      } else {
        setViewportRange("narrow");
      }
    };
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => {
      window.removeEventListener("resize", updateRange);
    };
  }, []);

  return viewportRange;
}

export default usePrimerViewportRange;
