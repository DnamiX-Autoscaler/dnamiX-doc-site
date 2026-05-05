import React from "react";
import { Menu, Search, Moon, ExternalLink } from "lucide-react";

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl lg:pl-72">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-xl text-slate-300 hover:bg-slate-800 lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div className="items-center hidden gap-2 px-4 py-2 text-sm border rounded-full border-slate-800 bg-slate-900 text-slate-400 md:flex">
            <Search size={16} />
            <input
              placeholder="Search documentation..."
              className="bg-transparent outline-none w-72 placeholder:text-slate-600"
            />
            {/* <kbd className="rounded-md border border-slate-700 px-1.5 py-0.5 text-[10px] text-slate-500">
              Ctrl K
            </kbd> */}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/DnamiX-Autoscaler"
            target="_blank"
            rel="noreferrer"
            className="items-center hidden gap-2 px-3 py-2 text-sm border rounded-full border-slate-800 text-slate-300 hover:bg-slate-900 md:flex"
          >
            {/* <Github size={16} /> */}
            GitHub
          </a>

          <a
            href="/docs/quick-start/cli-setup"
            className="items-center hidden gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#870470] rounded-full hover:bg-[#870470]/80  sm:flex"
          >
            Get Started
            <ExternalLink size={15} />
          </a>

          <button className="p-2 border rounded-xl border-slate-800 text-slate-300 hover:bg-slate-900">
            <Moon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
