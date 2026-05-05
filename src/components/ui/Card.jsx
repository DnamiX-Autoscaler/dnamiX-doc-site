import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ title, description, icon: Icon }) => {
  return (
    <div className="mb-5 flex items-start gap-4">
      {Icon && (
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400">
          <Icon size={22} />
        </div>
      )}

      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        )}
      </div>
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="text-sm text-slate-300">{children}</div>;
};

export default Card;
