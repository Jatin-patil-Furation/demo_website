"use client";
import { useEffect } from "react";

const BarkWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://d3a1eo0ozlzntn.cloudfront.net/assets/js/frontend-v2/widgets-v2.24a197bed6.v2.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="text-white">
      <a
        href="https://www.bark.com/en/us/company/furation-tech-solutions/DMegb/"
        target="_blank"
        className="bark-widget"
        data-type="pro"
        data-id="DMegb"
        data-image="large-navy"
        data-version="3.0"
      >
        Furation Tech Solutions
      </a>
    </div>
  );
};

export default BarkWidget;
