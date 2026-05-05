import React from "react";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-950/40",
  secondary:
    "bg-slate-900 text-slate-100 border border-slate-800 hover:bg-slate-800",
  ghost: "text-slate-300 hover:bg-slate-900",
  danger: "bg-red-600 text-white hover:bg-red-500",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
