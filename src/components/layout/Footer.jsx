import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 pt-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-white">DnamiX</h4>
          <p className="mt-2 text-sm text-slate-500">
            Intelligent predictive autoscaling framework for Kubernetes
            microservices.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Resources</h4>
          <div className="mt-2 flex flex-col gap-2 text-sm text-slate-500">
            <a href="/docs/architecture" className="hover:text-blue-400">
              Architecture
            </a>
            <a href="/docs/api/metrics-api" className="hover:text-blue-400">
              API Reference
            </a>
            <a href="/docs/examples" className="hover:text-blue-400">
              Examples
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Project</h4>
          <p className="mt-2 text-sm text-slate-500">
            Built for topology-aware predictive autoscaling research and
            real-world Kubernetes observability.
          </p>
        </div>
      </div>

      <p className="mt-8 text-xs text-slate-600">
        © {new Date().getFullYear()} DnamiX Autoscaler. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
