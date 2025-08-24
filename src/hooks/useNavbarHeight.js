import { useEffect, useState } from "react";

export default function useNavbarHeight() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) setNavHeight(navbar.getBoundingClientRect().height);

    const handleResize = () => {
      if (navbar) setNavHeight(navbar.getBoundingClientRect().height);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return navHeight;
}
