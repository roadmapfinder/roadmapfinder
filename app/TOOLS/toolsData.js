import {
  Monitor,
  Smartphone,
  Palette,
  PenTool,
  Film,
  Server,
  Code,
  Bitcoin,
  Brain,
  Network,
} from "lucide-react";

export const toolsData = [
  {
    id: "web-development",
    name: "Web Development",
    icon: Monitor,
    color: "bg-blue-100 text-blue-600",
    tools: [
      {
        name: "VS Code",
        description: "Powerful code editor with extensive extensions",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "GitHub",
        description: "Version control and collaboration platform",
        link: "https://github.com/",
      },
      {
        name: "Netlify",
        description: "Deployment and hosting platform for web projects",
        link: "https://www.netlify.com/",
      },
      {
        name: "Vercel",
        description: "Platform for frontend frameworks and static sites",
        link: "https://vercel.com/",
      },
      {
        name: "Postman",
        description: "API development and testing environment",
        link: "https://www.postman.com/",
      },
      {
        name: "Chrome DevTools",
        description: "Built-in debugging tools for web development",
        link: "https://developers.google.com/web/tools/chrome-devtools",
      },
      {
        name: "Figma",
        description: "Interface design and prototyping tool",
        link: "https://www.figma.com/",
      },
      {
        name: "CodeSandbox",
        description: "Online code editor for web applications",
        link: "https://codesandbox.io/",
      },
      {
        name: "WebStorm",
        description: "Integrated development environment for JavaScript",
        link: "https://www.jetbrains.com/webstorm/",
      },
      {
        name: "Lighthouse",
        description: "Automated auditing tool for web quality metrics",
        link: "https://developers.google.com/web/tools/lighthouse",
      },
    ],
  },
  {
    id: "app-development",
    name: "App Development",
    icon: Smartphone,
    color: "bg-green-100 text-green-600",
    tools: [
      {
        name: "Android Studio",
        description: "Official IDE for Android development",
        link: "https://developer.android.com/studio",
      },
      {
        name: "Xcode",
        description: "IDE for Apple platforms development",
        link: "https://developer.apple.com/xcode/",
      },
      {
        name: "Flutter",
        description: "UI toolkit for building natively compiled applications",
        link: "https://flutter.dev/",
      },
      {
        name: "React Native",
        description: "Framework for building native apps with React",
        link: "https://reactnative.dev/",
      },
      {
        name: "Expo",
        description: "Platform for making universal React applications",
        link: "https://expo.dev/",
      },
      {
        name: "Firebase",
        description: "App development platform with tools and infrastructure",
        link: "https://firebase.google.com/",
      },
      {
        name: "Postman",
        description: "API development and testing environment",
        link: "https://www.postman.com/",
      },
      {
        name: "Bitrise",
        description: "Mobile continuous integration and delivery",
        link: "https://www.bitrise.io/",
      },
      {
        name: "App Center",
        description: "DevOps for mobile app development",
        link: "https://appcenter.ms/",
      },
      {
        name: "Notion",
        description: "All-in-one workspace for notes and project management",
        link: "https://www.notion.so/",
      },
    ],
  },
  {
    id: "ui-ux",
    name: "UI/UX",
    icon: Palette,
    color: "bg-purple-100 text-purple-600",
    tools: [
      {
        name: "Figma",
        description: "Collaborative interface design and prototyping tool",
        link: "https://www.figma.com/",
      },
      {
        name: "Adobe XD",
        description: "Vector-based user experience design tool",
        link: "https://www.adobe.com/products/xd.html",
      },
      {
        name: "Framer",
        description: "Interactive design and prototyping tool",
        link: "https://www.framer.com/",
      },
      {
        name: "Zeplin",
        description: "Connected workspace for product teams",
        link: "https://zeplin.io/",
      },
      {
        name: "Sketch",
        description: "Digital design platform for Mac",
        link: "https://www.sketch.com/",
      },
      {
        name: "Balsamiq",
        description: "Rapid wireframing tool",
        link: "https://balsamiq.com/",
      },
      {
        name: "Overflow",
        description: "User flow diagramming tool for designers",
        link: "https://overflow.io/",
      },
      {
        name: "Whimsical",
        description: "Visual workspace for thinking and collaboration",
        link: "https://whimsical.com/",
      },
      {
        name: "Contrast Checker",
        description: "Accessibility tool for checking color contrast",
        link: "https://webaim.org/resources/contrastchecker/",
      },
      {
        name: "ColorHunt",
        description: "Color palette discovery platform",
        link: "https://colorhunt.co/",
      },
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    icon: PenTool,
    color: "bg-pink-100 text-pink-600",
    tools: [
      {
        name: "Adobe Photoshop",
        description: "Raster graphics editor for photo editing",
        link: "https://www.adobe.com/products/photoshop.html",
      },
      {
        name: "Illustrator",
        description: "Vector graphics editor for illustrations",
        link: "https://www.adobe.com/products/illustrator.html",
      },
      {
        name: "Canva",
        description: "Online design and publishing platform",
        link: "https://www.canva.com/",
      },
      {
        name: "Affinity Designer",
        description: "Professional graphic design software",
        link: "https://affinity.serif.com/en-us/designer/",
      },
      {
        name: "CorelDRAW",
        description: "Vector illustration and page layout software",
        link: "https://www.coreldraw.com/",
      },
      {
        name: "GIMP",
        description: "Free and open-source raster graphics editor",
        link: "https://www.gimp.org/",
      },
      {
        name: "Fotor",
        description: "Online photo editor and design maker",
        link: "https://www.fotor.com/",
      },
      {
        name: "Pixlr",
        description: "Suite of online photo editors",
        link: "https://pixlr.com/",
      },
      {
        name: "Gravit",
        description: "Full-featured free vector design app",
        link: "https://www.designer.io/",
      },
      {
        name: "Remove.bg",
        description: "Remove image backgrounds automatically",
        link: "https://www.remove.bg/",
      },
    ],
  },
  {
    id: "video-editing",
    name: "Video Editing",
    icon: Film,
    color: "bg-red-100 text-red-600",
    tools: [
      {
        name: "Adobe Premiere Pro",
        description: "Timeline-based video editing software",
        link: "https://www.adobe.com/products/premiere.html",
      },
      {
        name: "Final Cut Pro",
        description: "Professional video editing software for Mac",
        link: "https://www.apple.com/final-cut-pro/",
      },
      {
        name: "DaVinci Resolve",
        description: "Color correction and non-linear video editing",
        link: "https://www.blackmagicdesign.com/products/davinciresolve/",
      },
      {
        name: "CapCut",
        description: "All-in-one video editing application",
        link: "https://www.capcut.com/",
      },
      {
        name: "After Effects",
        description: "Visual effects and motion graphics software",
        link: "https://www.adobe.com/products/aftereffects.html",
      },
      {
        name: "Filmora",
        description: "Easy-to-use video editor for beginners",
        link: "https://filmora.wondershare.com/",
      },
      {
        name: "RunwayML",
        description: "AI-powered creative tools for video editing",
        link: "https://runwayml.com/",
      },
      {
        name: "Animoto",
        description: "Online video maker for social media",
        link: "https://animoto.com/",
      },
      {
        name: "VEED",
        description: "Online video editor for creators",
        link: "https://www.veed.io/",
      },
      {
        name: "Clipchamp",
        description: "Online video editor with templates",
        link: "https://clipchamp.com/",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: Server,
    color: "bg-orange-100 text-orange-600",
    tools: [
      {
        name: "Docker",
        description: "Container platform for application deployment",
        link: "https://www.docker.com/",
      },
      {
        name: "Kubernetes",
        description: "Container orchestration system",
        link: "https://kubernetes.io/",
      },
      {
        name: "Jenkins",
        description: "Open-source automation server",
        link: "https://www.jenkins.io/",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD platform integrated with GitHub",
        link: "https://github.com/features/actions",
      },
      {
        name: "Travis CI",
        description: "Continuous integration service",
        link: "https://travis-ci.org/",
      },
      {
        name: "CircleCI",
        description: "CI/CD platform for software development",
        link: "https://circleci.com/",
      },
      {
        name: "Terraform",
        description: "Infrastructure as code software tool",
        link: "https://www.terraform.io/",
      },
      {
        name: "AWS CLI",
        description: "Command-line interface for AWS services",
        link: "https://aws.amazon.com/cli/",
      },
      {
        name: "Azure DevOps",
        description: "Set of development tools for teams",
        link: "https://azure.microsoft.com/en-us/services/devops/",
      },
      {
        name: "Ansible",
        description: "IT automation platform",
        link: "https://www.ansible.com/",
      },
    ],
  },
  {
    id: "programming",
    name: "Programming",
    icon: Code,
    color: "bg-indigo-100 text-indigo-600",
    tools: [
      {
        name: "Git",
        description: "Distributed version control system",
        link: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        description: "Platform for code hosting and collaboration",
        link: "https://github.com/",
      },
      {
        name: "Visual Studio Code",
        description: "Source code editor with debugging support",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "IntelliJ",
        description: "IDE for Java and other JVM languages",
        link: "https://www.jetbrains.com/idea/",
      },
      {
        name: "PyCharm",
        description: "IDE for Python development",
        link: "https://www.jetbrains.com/pycharm/",
      },
      {
        name: "Replit",
        description: "Online IDE for collaborative coding",
        link: "https://replit.com/",
      },
      {
        name: "Jupyter Notebook",
        description: "Interactive computing environment",
        link: "https://jupyter.org/",
      },
      {
        name: "StackBlitz",
        description: "Online IDE for web development",
        link: "https://stackblitz.com/",
      },
      {
        name: "Prettier",
        description: "Opinionated code formatter",
        link: "https://prettier.io/",
      },
      {
        name: "ESLint",
        description: "Static code analysis tool for JavaScript",
        link: "https://eslint.org/",
      },
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain",
    icon: Bitcoin,
    color: "bg-yellow-100 text-yellow-600",
    tools: [
      {
        name: "Remix IDE",
        description: "Browser-based compiler and IDE for Solidity",
        link: "https://remix.ethereum.org/",
      },
      {
        name: "Metamask",
        description: "Crypto wallet and gateway to blockchain apps",
        link: "https://metamask.io/",
      },
      {
        name: "Hardhat",
        description: "Development environment for Ethereum software",
        link: "https://hardhat.org/",
      },
      {
        name: "Truffle",
        description: "Development framework for Ethereum",
        link: "https://www.trufflesuite.com/",
      },
      {
        name: "Ganache",
        description: "Personal blockchain for Ethereum development",
        link: "https://www.trufflesuite.com/ganache",
      },
      {
        name: "Alchemy",
        description: "Blockchain developer platform",
        link: "https://www.alchemy.com/",
      },
      {
        name: "Infura",
        description: "API suite for Ethereum and IPFS",
        link: "https://infura.io/",
      },
      {
        name: "Etherscan",
        description: "Block explorer for Ethereum blockchain",
        link: "https://etherscan.io/",
      },
      {
        name: "OpenZeppelin",
        description: "Library for secure smart contract development",
        link: "https://openzeppelin.com/",
      },
      {
        name: "SolidityScan",
        description: "Security scanner for Solidity contracts",
        link: "https://solidityscan.com/",
      },
    ],
  },
  {
    id: "ai-ml",
    name: "AI/ML",
    icon: Brain,
    color: "bg-teal-100 text-teal-600",
    tools: [
      {
        name: "Jupyter",
        description: "Interactive computing environment for data science",
        link: "https://jupyter.org/",
      },
      {
        name: "Colab",
        description: "Free Jupyter notebook environment by Google",
        link: "https://colab.research.google.com/",
      },
      {
        name: "TensorFlow",
        description: "Open-source machine learning platform",
        link: "https://www.tensorflow.org/",
      },
      {
        name: "PyTorch",
        description: "Open-source machine learning library",
        link: "https://pytorch.org/",
      },
      {
        name: "HuggingFace",
        description: "Platform for building ML applications",
        link: "https://huggingface.co/",
      },
      {
        name: "Scikit-learn",
        description: "ML library for classical algorithms",
        link: "https://scikit-learn.org/",
      },
      {
        name: "Weights & Biases",
        description: "MLOps platform for experiment tracking",
        link: "https://wandb.ai/",
      },
      {
        name: "OpenAI Playground",
        description: "Interface to experiment with AI models",
        link: "https://beta.openai.com/playground",
      },
      {
        name: "RunwayML",
        description: "Platform for creative AI tools",
        link: "https://runwayml.com/",
      },
      {
        name: "MLflow",
        description: "Platform for ML lifecycle management",
        link: "https://mlflow.org/",
      },
    ],
  },
  {
    id: "system-design",
    name: "System Design",
    icon: Network,
    color: "bg-cyan-100 text-cyan-600",
    tools: [
      {
        name: "Draw.io",
        description: "Diagramming tool for flowcharts and wireframes",
        link: "https://draw.io/",
      },
      {
        name: "Excalidraw",
        description: "Virtual collaborative whiteboard",
        link: "https://excalidraw.com/",
      },
      {
        name: "Lucidchart",
        description: "Cloud-based diagramming software",
        link: "https://www.lucidchart.com/",
      },
      {
        name: "Whimsical",
        description: "Visual workspace for diagrams and docs",
        link: "https://whimsical.com/",
      },
      {
        name: "Cacoo",
        description: "Online diagram and wireframing tool",
        link: "https://cacoo.com/",
      },
      {
        name: "Mermaid.js",
        description: "Markdown-inspired tool for diagrams",
        link: "https://mermaid-js.github.io/",
      },
      {
        name: "PlantUML",
        description: "Open-source tool to create diagrams from text",
        link: "https://plantuml.com/",
      },
      {
        name: "Diagrams.net",
        description: "Free diagram software",
        link: "https://www.diagrams.net/",
      },
      {
        name: "Notion",
        description: "All-in-one workspace for notes and databases",
        link: "https://www.notion.so/",
      },
      {
        name: "Miro",
        description: "Online collaborative whiteboard platform",
        link: "https://miro.com/",
      },
    ],
  },
];