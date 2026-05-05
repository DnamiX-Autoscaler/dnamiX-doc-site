export const SITE_CONFIG = {
  name: "DnamiX",
  title: "DnamiX Documentation",
  description:
    "Kubernetes-native intelligent predictive autoscaling framework for microservices.",
  version: "v1.0.0",
  githubOrg: "https://github.com/DnamiX-Autoscaler",
  metricsCollectorRepo:
    "https://github.com/DnamiX-Autoscaler/metrics-collector",
  dashboardRepo: "https://github.com/DnamiX-Autoscaler/organizations-dashboard",
  docsBasePath: "/docs/introduction",
};

export const API_CONFIG = {
  defaultBaseUrl:
    import.meta.env.VITE_DINAMIX_API_BASE_URL || "http://localhost:8000",
  prometheusUrl:
    import.meta.env.VITE_DINAMIX_PROMETHEUS_URL || "http://localhost:9090",
  environment: import.meta.env.VITE_DINAMIX_ENVIRONMENT || "development",
};

export const DIAGRAM_PATHS = {
  overallArchitecture:
    "/images/diagrams/architecture/dinamix-overall-architecture.png",
  dataFlow: "/images/diagrams/data-flow/metrics-collection-pipeline.png",
  etlPipeline: "/images/diagrams/metrics/etl-pipeline.png",
  stressIndex: "/images/diagrams/metrics/stress-index-flow.png",
  mlPrediction: "/images/diagrams/ml/ml-prediction-pipeline.png",
  scalingExecution: "/images/diagrams/scaling/scaling-execution-flow.png",
  anomalyDetection: "/images/diagrams/anomaly/anomaly-detection-flow.png",
};
