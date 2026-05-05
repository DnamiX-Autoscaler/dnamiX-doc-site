import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const CodeBlock = ({ code = "", language = "bash", title = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="my-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-5 py-3">
        <div>
          {title && (
            <p className="text-sm font-semibold text-slate-200">{title}</p>
          )}
          <p className="text-xs uppercase tracking-wider text-slate-500">
            {language}
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre className="overflow-x-auto p-5 text-sm leading-7 text-blue-100">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
