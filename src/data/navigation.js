export const topNavigation = [
  { title: "Docs", path: "/docs/introduction" },
  { title: "Quick Start", path: "/docs/quick-start" },
  { title: "API", path: "/docs/api-reference/metrics-api" },
  { title: "Examples", path: "/docs/examples/ecommerce" },
  { title: "Blog", path: "/blog/post-1" },
  { title: "Feedback", path: "/feedback" },
];

export const installOptions = [
  {
    title: "CLI-based setup",
    description: "Best for developers who want guided setup.",
    commands: [
      "npm install -g dinamix-cli",
      "dnx init",
      "dnx deploy",
      "dnx status",
    ],
    path: "/docs/quick-start/cli-setup",
  },
  {
    title: "Helm chart",
    description: "Best for DevOps and Kubernetes users.",
    commands: [
      "helm repo add dinamix https://charts.dinamix.ai",
      "helm install dinamix dinamix/dinamix-stack -f values.yaml",
    ],
    path: "/docs/quick-start/helm-setup",
  },
  {
    title: "GitHub installer script",
    description: "Best for academic demo and prototype deployment.",
    commands: [
      "git clone https://github.com/DnamiX-Autoscaler/dinamix-installer",
      "cd dinamix-installer",
      "./install.sh",
    ],
    path: "/docs/quick-start/script-setup",
  },
];

export const footerNavigation = [
  {
    title: "Product",
    links: [
      { title: "Architecture", path: "/docs/architecture/overview" },
      {
        title: "Metrics Collection",
        path: "/docs/metrics-collection/overview",
      },
      { title: "Scaling Execution", path: "/docs/scaling-execution/overview" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "CLI Setup", path: "/docs/quick-start/cli-setup" },
      { title: "API Reference", path: "/docs/api-reference/metrics-api" },
      { title: "Troubleshooting", path: "/docs/troubleshooting/common-errors" },
    ],
  },
];
