 
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function useScrollToAnchor() {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    const stateAnchor = location.state?.anchor;
    const targetId = hash || stateAnchor;
    if (!targetId) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location, navType]);
}
