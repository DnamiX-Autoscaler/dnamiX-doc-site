export const docRoutes = {
  "/docs/introduction": () => import("@/content/docs/introduction/index.mdx"),
  "/docs/what-is-dinamix": () =>
    import("@/content/docs/what-is-dinamix/index.mdx"),

  "/docs/architecture/overview": () =>
    import("@/content/docs/architecture/overview.mdx"),
  "/docs/architecture/data-flow": () =>
    import("@/content/docs/architecture/data-flow.mdx"),
  "/docs/architecture/component-breakdown": () =>
    import("@/content/docs/architecture/component-breakdown.mdx"),
  "/docs/architecture/diagrams": () =>
    import("@/content/docs/architecture/diagrams.mdx"),

  "/docs/quick-start": () => import("@/content/docs/quick-start/index.mdx"),
  "/docs/quick-start/cli-setup": () =>
    import("@/content/docs/quick-start/cli-setup.mdx"),
  "/docs/quick-start/helm-setup": () =>
    import("@/content/docs/quick-start/helm-setup.mdx"),
  "/docs/quick-start/script-setup": () =>
    import("@/content/docs/quick-start/script-setup.mdx"),

  "/docs/installation/prerequisites": () =>
    import("@/content/docs/installation/prerequisites.mdx"),
  "/docs/installation/dnx-init": () =>
    import("@/content/docs/installation/dnx-init.mdx"),
  "/docs/installation/dnx-deploy": () =>
    import("@/content/docs/installation/dnx-deploy.mdx"),
  "/docs/installation/verify-installation": () =>
    import("@/content/docs/installation/verify-installation.mdx"),

  "/docs/configuration/prometheus": () =>
    import("@/content/docs/configuration/prometheus.mdx"),
  "/docs/configuration/istio": () =>
    import("@/content/docs/configuration/istio.mdx"),
  "/docs/configuration/servicemonitor": () =>
    import("@/content/docs/configuration/servicemonitor.mdx"),
  "/docs/configuration/dashboard": () =>
    import("@/content/docs/configuration/dashboard.mdx"),

  "/docs/metrics-collection/overview": () =>
    import("@/content/docs/metrics-collection/overview.mdx"),
  "/docs/metrics-collection/data-pipeline": () =>
    import("@/content/docs/metrics-collection/data-pipeline.mdx"),
  "/docs/metrics-collection/preprocessing": () =>
    import("@/content/docs/metrics-collection/preprocessing.mdx"),
  "/docs/metrics-collection/stress-index": () =>
    import("@/content/docs/metrics-collection/stress-index.mdx"),

  "/docs/ml-prediction/overview": () =>
    import("@/content/docs/ml-prediction/overview.mdx"),
  "/docs/ml-prediction/feature-engineering": () =>
    import("@/content/docs/ml-prediction/feature-engineering.mdx"),
  "/docs/ml-prediction/models": () =>
    import("@/content/docs/ml-prediction/models.mdx"),

  "/docs/scaling-execution/overview": () =>
    import("@/content/docs/scaling-execution/overview.mdx"),
  "/docs/scaling-execution/validation": () =>
    import("@/content/docs/scaling-execution/validation.mdx"),
  "/docs/scaling-execution/rollback": () =>
    import("@/content/docs/scaling-execution/rollback.mdx"),

  "/docs/anomaly-detection/overview": () =>
    import("@/content/docs/anomaly-detection/overview.mdx"),
  "/docs/anomaly-detection/detection-strategies": () =>
    import("@/content/docs/anomaly-detection/detection-strategies.mdx"),

  "/docs/api-reference/metrics-api": () =>
    import("@/content/docs/api-reference/metrics-api.mdx"),
  "/docs/api-reference/dataset-api": () =>
    import("@/content/docs/api-reference/dataset-api.mdx"),
  "/docs/api-reference/scaling-api": () =>
    import("@/content/docs/api-reference/scaling-api.mdx"),

  "/docs/troubleshooting/common-errors": () =>
    import("@/content/docs/troubleshooting/common-errors.mdx"),
  "/docs/troubleshooting/debug-guide": () =>
    import("@/content/docs/troubleshooting/debug-guide.mdx"),

  "/docs/examples/ecommerce": () =>
    import("@/content/docs/examples/ecommerce.mdx"),
  "/docs/examples/fintech": () => import("@/content/docs/examples/fintech.mdx"),
  "/docs/examples/healthcare": () =>
    import("@/content/docs/examples/healthcare.mdx"),

  "/blog/post-1": () => import("@/content/blog/post-1.mdx"),
  "/blog/post-2": () => import("@/content/blog/post-2.mdx"),
  "/blog/scaling-strategies": () =>
    import("@/content/blog/scaling-strategies.mdx"),
};

export const getRouteLoader = (path) => docRoutes[path] || null;
