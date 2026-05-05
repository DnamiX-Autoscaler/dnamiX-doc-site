import React from "react";
import {
  X,
  BookOpen,
  Rocket,
  Settings,
  Activity,
  Brain,
  ShieldAlert,
  Server,
  Terminal,
  FileText,
  HelpCircle,
  Boxes,
} from "lucide-react";
import LOGO from "../../assets/DnamiX_for_dark.png";

const sidebarGroups = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      { label: "Introduction", href: "/docs/introduction" },
      { label: "What is DnamiX?", href: "/docs/what-is-dinamix" },
      { label: "Architecture", href: "/docs/architecture" },
    ],
  },
  {
    title: "Quick Start",
    icon: Rocket,
    items: [
      { label: "CLI Setup", href: "/docs/quick-start/cli-setup" },
      { label: "Helm Chart Setup", href: "/docs/quick-start/helm-setup" },
      { label: "Installer Script", href: "/docs/quick-start/script-setup" },
    ],
  },
  {
    title: "Installation",
    icon: Terminal,
    items: [
      { label: "Prerequisites", href: "/docs/installation/prerequisites" },
      { label: "dnx init", href: "/docs/installation/dnx-init" },
      { label: "dnx deploy", href: "/docs/installation/dnx-deploy" },
      { label: "Verify Installation", href: "/docs/installation/verify" },
    ],
  },
  {
    title: "Core Components",
    icon: Boxes,
    items: [
      { label: "Metrics Collection", href: "/docs/metrics-collection" },
      { label: "ML Prediction", href: "/docs/ml-prediction" },
      { label: "Scaling Execution", href: "/docs/scaling-execution" },
      { label: "Anomaly Detection", href: "/docs/anomaly-detection" },
    ],
  },
  {
    title: "Configuration",
    icon: Settings,
    items: [
      { label: "Prometheus", href: "/docs/configuration/prometheus" },
      { label: "Istio", href: "/docs/configuration/istio" },
      { label: "ServiceMonitor", href: "/docs/configuration/servicemonitor" },
      { label: "Dashboard", href: "/docs/configuration/dashboard" },
    ],
  },
  {
    title: "API Reference",
    icon: Server,
    items: [
      { label: "Metrics API", href: "/docs/api/metrics-api" },
      { label: "Dataset API", href: "/docs/api/dataset-api" },
      { label: "Scaling API", href: "/docs/api/scaling-api" },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    items: [
      { label: "Troubleshooting", href: "/docs/troubleshooting" },
      { label: "Examples", href: "/docs/examples" },
      { label: "Feedback", href: "/feedback" },
    ],
  },
];

const iconMap = {
  "Metrics Collection": Activity,
  "ML Prediction": Brain,
  "Anomaly Detection": ShieldAlert,
  Examples: FileText,
};

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-800">
          <a href="/" className="flex items-center gap-3">
            <div>
              <img src={LOGO} alt="DnamiX Logo" className="h-5" />
              <p className="mt-2 text-xs text-slate-500">Docs v1.0</p>
            </div>
          </a>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="h-[calc(100vh-4rem)] overflow-y-auto px-4 py-5">
          {sidebarGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div key={group.title} className="mb-7">
                <div className="flex items-center gap-2 px-2 mb-3 text-xs font-bold tracking-wider uppercase text-slate-500">
                  <GroupIcon size={14} />
                  {group.title}
                </div>

                <div className="space-y-1">
                  {group.items.map((item) => {
                    const ItemIcon = iconMap[item.label];

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 text-sm transition rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white"
                      >
                        {ItemIcon && <ItemIcon size={15} />}
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
