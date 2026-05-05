import React from "react";

const DocContent = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <div
        className="prose prose-invert max-w-none 
        prose-headings:scroll-mt-24 
        prose-a:text-blue-400 
        prose-code:text-blue-300 
        prose-pre:bg-slate-950 
        prose-pre:border prose-pre:border-slate-800
      "
      >
        {children}
      </div>
    </div>
  );
};

export default DocContent;
