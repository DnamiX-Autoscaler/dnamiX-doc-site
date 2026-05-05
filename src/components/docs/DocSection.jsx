import React from "react";

const DocSection = ({ id, title, children }) => {
  return (
    <section id={id} className="mt-12 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {title}
      </h2>

      <div className="text-slate-300 leading-7 space-y-4">{children}</div>
    </section>
  );
};

export default DocSection;
