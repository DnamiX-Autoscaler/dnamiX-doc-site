import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <div className="w-72 border-r border-slate-800 hidden md:block">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
