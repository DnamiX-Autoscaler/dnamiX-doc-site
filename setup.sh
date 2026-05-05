# chmod +x setup.sh
# ./setup.sh

#!/bin/bash

echo "Creating remaining DnamiX folders inside existing project..."

# COMPONENTS
mkdir -p src/components/layout
touch src/components/layout/{MainLayout.jsx,Sidebar.jsx,Topbar.jsx,Footer.jsx,TOC.jsx}

mkdir -p src/components/ui
touch src/components/ui/{Button.jsx,Card.jsx,Badge.jsx,Tabs.jsx,CodeBlock.jsx,Alert.jsx}

mkdir -p src/components/docs
touch src/components/docs/{DocContent.jsx,DocHeader.jsx,DocSection.jsx,Diagram.jsx,StepFlow.jsx}

mkdir -p src/components/blog
touch src/components/blog/{BlogCard.jsx,BlogList.jsx,BlogContent.jsx}

mkdir -p src/components/feedback
touch src/components/feedback/{FeedbackForm.jsx,RatingStars.jsx}

mkdir -p src/components/search
touch src/components/search/{SearchBar.jsx,SearchResults.jsx}

# PAGES (if not exists)
mkdir -p src/pages
touch src/pages/{Home.jsx,Docs.jsx,Blog.jsx,Examples.jsx,Feedback.jsx,NotFound.jsx}

# CONTENT DOCS
mkdir -p src/content/docs/{introduction,what-is-dinamix}
touch src/content/docs/introduction/index.mdx
touch src/content/docs/what-is-dinamix/index.mdx

mkdir -p src/content/docs/architecture
touch src/content/docs/architecture/{overview.mdx,data-flow.mdx,component-breakdown.mdx,diagrams.mdx}

mkdir -p src/content/docs/quick-start
touch src/content/docs/quick-start/{index.mdx,cli-setup.mdx,helm-setup.mdx,script-setup.mdx}

mkdir -p src/content/docs/installation
touch src/content/docs/installation/{prerequisites.mdx,dnx-init.mdx,dnx-deploy.mdx,verify-installation.mdx}

mkdir -p src/content/docs/configuration
touch src/content/docs/configuration/{prometheus.mdx,istio.mdx,servicemonitor.mdx,dashboard.mdx}

mkdir -p src/content/docs/metrics-collection
touch src/content/docs/metrics-collection/{overview.mdx,data-pipeline.mdx,preprocessing.mdx,stress-index.mdx}

mkdir -p src/content/docs/ml-prediction
touch src/content/docs/ml-prediction/{overview.mdx,feature-engineering.mdx,models.mdx}

mkdir -p src/content/docs/scaling-execution
touch src/content/docs/scaling-execution/{overview.mdx,validation.mdx,rollback.mdx}

mkdir -p src/content/docs/anomaly-detection
touch src/content/docs/anomaly-detection/{overview.mdx,detection-strategies.mdx}

mkdir -p src/content/docs/api-reference
touch src/content/docs/api-reference/{metrics-api.mdx,dataset-api.mdx,scaling-api.mdx}

mkdir -p src/content/docs/troubleshooting
touch src/content/docs/troubleshooting/{common-errors.mdx,debug-guide.mdx}

mkdir -p src/content/docs/examples
touch src/content/docs/examples/{ecommerce.mdx,fintech.mdx,healthcare.mdx}

# BLOG CONTENT
mkdir -p src/content/blog
touch src/content/blog/{post-1.mdx,post-2.mdx,scaling-strategies.mdx}

# DATA
mkdir -p src/data
touch src/data/{sidebar.js,routes.js,navigation.js}

# HOOKS
mkdir -p src/hooks
touch src/hooks/{useDocs.js,useSidebar.js,useSearch.js}

# STYLES
mkdir -p src/styles
touch src/styles/{globals.css,markdown.css,theme.css}

# UTILS
mkdir -p src/utils
touch src/utils/{mdxParser.js,tocGenerator.js,codeHighlighter.js}

# CONSTANTS
mkdir -p src/constants
touch src/constants/{config.js,theme.js}

echo "All folders & files created successfully!"