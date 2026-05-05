import React from "react";

const colors = {
  blue: "bg-blue-500/10 text-blue-300 ring-blue-500/30",
  green: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
  yellow: "bg-yellow-500/10 text-yellow-300 ring-yellow-500/30",
  red: "bg-red-500/10 text-red-300 ring-red-500/30",
  purple: "bg-purple-500/10 text-purple-300 ring-purple-500/30",
  slate: "bg-slate-500/10 text-slate-300 ring-slate-500/30",
};

const Badge = ({ children, color = "blue", className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
