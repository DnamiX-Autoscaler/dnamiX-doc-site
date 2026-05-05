import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";
import TOC from "./TOC";

const MainLayout = ({
  children,
  title = "DnamiX Documentation",
  headings = [],
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Topbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="w-full lg:pl-72 xl:pr-72">
          <div className="mx-auto max-w-5xl px-5 py-10 md:px-10">
            <div className="mb-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-8 shadow-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                DnamiX Intelligent Autoscaling Framework
              </p>
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-slate-400">
                Production-ready documentation for deploying, configuring, and
                operating the DnamiX Kubernetes-native predictive autoscaling
                platform.
              </p>
            </div>

            <article className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-blue-400 prose-code:text-blue-300">
              {children}
            </article>

            <Footer />
          </div>
        </main>

        <TOC headings={headings} />
      </div>
    </div>
  );
};

export default MainLayout;
