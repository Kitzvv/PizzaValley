import { useEffect, useState } from "react";

function useSmoothScroll(handler, isOpen) {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = isSticky ? 100 : 200;
    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });
    if (isOpen) {
      handler();
    }
  };

  return { scrollToSection, isSticky };
}

export default useSmoothScroll;
