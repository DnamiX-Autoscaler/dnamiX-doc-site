import React from "react";
import Badge from "../ui/Badge";

const DocHeader = ({ title, description, tags = [], version = "v1.0" }) => {
  return (
    <div className="mb-10 border-b border-slate-800 pb-6">
      {/* Version + Tags */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge color="blue">{version}</Badge>

        {tags.map((tag, i) => (
          <Badge key={i} color="purple">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
        {title}
      </h1>

      {/* Description */}
      <p className="mt-4 text-slate-400 text-lg max-w-3xl">{description}</p>
    </div>
  );
};

export default DocHeader;
