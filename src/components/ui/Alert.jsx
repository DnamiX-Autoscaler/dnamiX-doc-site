import React from "react";
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const styles = {
  info: {
    icon: Info,
    box: "border-blue-900/60 bg-blue-950/30 text-blue-100",
    iconColor: "text-blue-400",
  },
  success: {
    icon: CheckCircle,
    box: "border-emerald-900/60 bg-emerald-950/30 text-emerald-100",
    iconColor: "text-emerald-400",
  },
  warning: {
    icon: AlertTriangle,
    box: "border-yellow-900/60 bg-yellow-950/30 text-yellow-100",
    iconColor: "text-yellow-400",
  },
  error: {
    icon: XCircle,
    box: "border-red-900/60 bg-red-950/30 text-red-100",
    iconColor: "text-red-400",
  },
};

const Alert = ({ type = "info", title, children }) => {
  const config = styles[type];
  const Icon = config.icon;

  return (
    <div className={`my-6 rounded-3xl border p-5 ${config.box}`}>
      <div className="flex gap-4">
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${config.iconColor}`} />

        <div>
          {title && <h4 className="mb-1 font-bold text-white">{title}</h4>}
          <div className="text-sm leading-6 text-slate-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
