import React from "react";

const StepFlow = ({ steps = [] }) => {
  return (
    <div className="my-10 space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          {/* Step Number */}
          <div className="flex-shrink-0">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
              {index + 1}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h4 className="text-white font-semibold mb-2">{step.title}</h4>

            <p className="text-slate-400 text-sm">{step.description}</p>

            {step.code && (
              <pre className="mt-3 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-blue-300 overflow-x-auto">
                <code>{step.code}</code>
              </pre>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepFlow;
