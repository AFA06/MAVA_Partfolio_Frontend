// src/hooks/useNavbarHeight.js
import { useEffect, useState } from "react";

export default function useNavbarHeight() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const compute = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) setNavHeight(navbar.getBoundingClientRect().height);
    };

    compute();
    window.addEventListener("resize", compute);
    // also recalc on font load (avoids layout shift)
    document.fonts?.ready?.then?.(compute);

    return () => window.removeEventListener("resize", compute);
  }, []);

  return navHeight;
}
