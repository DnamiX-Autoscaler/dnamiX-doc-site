import React from "react";

const Diagram = ({ src, title, description }) => {
  return (
    <div className="my-10">
      {title && (
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      )}

      <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
        <img src={src} alt={title} className="w-full object-contain" />
      </div>

      {description && (
        <p className="mt-3 text-sm text-slate-400">{description}</p>
      )}
    </div>
  );
};

export default Diagram;
