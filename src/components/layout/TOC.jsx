import React from "react";

const defaultHeadings = [
  { id: "overview", label: "Overview" },
  { id: "installation", label: "Installation" },
  { id: "configuration", label: "Configuration" },
  { id: "verification", label: "Verification" },
];

const TOC = ({ headings = defaultHeadings }) => {
  return (
    <aside className="fixed right-0 top-16 hidden h-[calc(100vh-4rem)] w-72 border-l border-slate-800 bg-slate-950/70 px-6 py-8 xl:block">
      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
        On this page
      </p>

      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className="block border-l border-slate-800 pl-3 text-sm text-slate-500 transition hover:border-blue-500 hover:text-blue-400"
          >
            {heading.label}
          </a>
        ))}
      </nav>

      <div className="mt-10 rounded-2xl border border-blue-900/40 bg-blue-950/20 p-4">
        <p className="text-sm font-semibold text-blue-300">Need help?</p>
        <p className="mt-2 text-xs text-slate-400">
          Check troubleshooting or submit feedback for missing documentation.
        </p>
        <a
          href="/feedback"
          className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300"
        >
          Send feedback →
        </a>
      </div>
    </aside>
  );
};

export default TOC;
