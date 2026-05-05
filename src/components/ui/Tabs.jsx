import React, { useState } from "react";

const Tabs = ({ tabs = [] }) => {
  const [active, setActive] = useState(tabs[0]?.key);

  const activeTab = tabs.find((tab) => tab.key === active);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-3">
      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              active === tab.key
                ? "bg-blue-600 text-white"
                : "bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
        {activeTab?.content}
      </div>
    </div>
  );
};

export default Tabs;
