import React from "react";

const Section = ({
  id,
  backgroundColor = "white", // Default to white
  fullWidth = false,
  noPadding = false,
  className = "",
  children,
}) => {
  // Map prop colors to Tailwind classes
  const bgColors = {
    caramel: "bg-brand-caramel",
    espresso: "bg-brand-espresso",
    cream: "bg-brand-cream",
    blush: "bg-brand-blush",
    chocolate: "bg-brand-chocolate",
    mint: "bg-brand-mint",
    charcoal: "bg-brand-charcoal",
    white: "bg-white",
  };

  // Standard vertical padding (Py) - Reduced for better viewport fit
  const paddingClass = noPadding ? "" : "py-8 sm:py-12 md:py-16";

  return (
    <section
      id={id}
      className={`
        relative 
        ${bgColors[backgroundColor] || "bg-transparent"} 
        ${paddingClass} 
        ${className}
      `}
    >
      {/* Container: Max width 1400px as per design system, centered, with horizontal padding */}
      <div
        className={`
        ${fullWidth ? "w-full" : "container mx-auto max-w-[1400px] px-6 md:px-12"}
      `}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
