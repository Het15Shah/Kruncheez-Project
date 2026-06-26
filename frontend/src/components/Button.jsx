import React from "react";

const Button = ({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  onClick,
  type = "button",
  disabled = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
}) => {
  // Base styles: Flexbox for alignment, transition properties, font settings
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";

  // Rounded corners: As per design system (rounded-2xl for modern look)
  const roundedStyles = "rounded-2xl";

  // Variant styles mapping using Kruncheez design system colors
  const variantStyles = {
    primary:
      "bg-rich-chocolate text-cream hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-lg focus:ring-rich-chocolate",
    secondary:
      "bg-warm-caramel text-cream hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-lg focus:ring-warm-caramel",
    outline:
      "bg-cream border-2 border-rich-chocolate text-rich-chocolate hover:bg-rich-chocolate hover:text-cream hover:-translate-y-1 focus:ring-rich-chocolate",
    ghost:
      "bg-transparent text-warm-caramel hover:bg-soft-blush hover:text-deep-espresso",
  };

  // Size styles mapping
  const sizeStyles = {
    small: "px-6 py-2 text-sm h-10",
    medium: "px-8 py-3 text-base h-12",
    large: "px-10 py-4 text-lg h-14",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${roundedStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
