import {
  BookOpen,
  Rocket,
  Download,
  Settings,
  Activity,
  Brain,
  ShieldAlert,
  Server,
  HelpCircle,
  Boxes,
  Newspaper,
} from "lucide-react";

export const sidebar = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      { title: "Introduction", path: "/docs/introduction" },
      { title: "What is DnamiX?", path: "/docs/what-is-dinamix" },
      { title: "Architecture Overview", path: "/docs/architecture/overview" },
      { title: "Data Flow", path: "/docs/architecture/data-flow" },
      {
        title: "Component Breakdown",
        path: "/docs/architecture/component-breakdown",
      },
      { title: "Diagrams", path: "/docs/architecture/diagrams" },
    ],
  },
  {
    title: "Quick Start",
    icon: Rocket,
    items: [
      { title: "Overview", path: "/docs/quick-start" },
      { title: "CLI Setup", path: "/docs/quick-start/cli-setup" },
      { title: "Helm Setup", path: "/docs/quick-start/helm-setup" },
      { title: "Installer Script", path: "/docs/quick-start/script-setup" },
    ],
  },
  {
    title: "Installation",
    icon: Download,
    items: [
      { title: "Prerequisites", path: "/docs/installation/prerequisites" },
      { title: "dnx init", path: "/docs/installation/dnx-init" },
      { title: "dnx deploy", path: "/docs/installation/dnx-deploy" },
      {
        title: "Verify Installation",
        path: "/docs/installation/verify-installation",
      },
    ],
  },
  {
    title: "Configuration",
    icon: Settings,
    items: [
      { title: "Prometheus", path: "/docs/configuration/prometheus" },
      { title: "Istio", path: "/docs/configuration/istio" },
      { title: "ServiceMonitor", path: "/docs/configuration/servicemonitor" },
      { title: "Dashboard", path: "/docs/configuration/dashboard" },
    ],
  },
  {
    title: "Core Components",
    icon: Boxes,
    items: [
      {
        title: "Metrics Collection",
        path: "/docs/metrics-collection/overview",
        icon: Activity,
      },
      {
        title: "Data Pipeline",
        path: "/docs/metrics-collection/data-pipeline",
      },
      {
        title: "Preprocessing",
        path: "/docs/metrics-collection/preprocessing",
      },
      { title: "Stress Index", path: "/docs/metrics-collection/stress-index" },
      {
        title: "ML Prediction",
        path: "/docs/ml-prediction/overview",
        icon: Brain,
      },
      {
        title: "Feature Engineering",
        path: "/docs/ml-prediction/feature-engineering",
      },
      { title: "Models", path: "/docs/ml-prediction/models" },
      { title: "Scaling Execution", path: "/docs/scaling-execution/overview" },
      { title: "Validation", path: "/docs/scaling-execution/validation" },
      { title: "Rollback", path: "/docs/scaling-execution/rollback" },
      {
        title: "Anomaly Detection",
        path: "/docs/anomaly-detection/overview",
        icon: ShieldAlert,
      },
      {
        title: "Detection Strategies",
        path: "/docs/anomaly-detection/detection-strategies",
      },
    ],
  },
  {
    title: "API Reference",
    icon: Server,
    items: [
      { title: "Metrics API", path: "/docs/api-reference/metrics-api" },
      { title: "Dataset API", path: "/docs/api-reference/dataset-api" },
      { title: "Scaling API", path: "/docs/api-reference/scaling-api" },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    items: [
      { title: "Common Errors", path: "/docs/troubleshooting/common-errors" },
      { title: "Debug Guide", path: "/docs/troubleshooting/debug-guide" },
      { title: "E-Commerce Example", path: "/docs/examples/ecommerce" },
      { title: "FinTech Example", path: "/docs/examples/fintech" },
      { title: "Healthcare Example", path: "/docs/examples/healthcare" },
    ],
  },
  {
    title: "Blog",
    icon: Newspaper,
    items: [
      { title: "Why Traditional Autoscaling Fails", path: "/blog/post-1" },
      { title: "Importance of Observability", path: "/blog/post-2" },
      { title: "Modern Scaling Strategies", path: "/blog/scaling-strategies" },
    ],
  },
];
