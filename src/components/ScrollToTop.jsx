import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
   const location = useLocation();

   useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const timeout = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeout);
  }, [location.key]);

  return null;
};

export default ScrollToTop;