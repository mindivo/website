export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  client: string;
  duration: string;
  role: string;
  category: string;
  image: string;
  gallery: string[];
  liveUrl: string;
  iconKey: "wrench" | "building" | "target" | "warehouse" | "stethoscope" | "mapPin" | "fileText";
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  techStack: { name: string; category: string }[];
  process: { step: number; title: string; description: string }[];
}

export const projects: ProjectDetail[] = [
  {
    id: "car-workshop",
    title: "AutoHub Workshop OS",
    tagline: "A polished workshop operations dashboard for appointments, vehicles, invoices, and customers.",
    description:
      "AutoHub is a full workshop management experience built for service teams that need a clean way to track customers, vehicles, appointments, invoices, analytics, and staff workflows from one place.",
    year: "2026",
    client: "Mindivo Demo Suite",
    duration: "Live deployment",
    role: "Product build, frontend engineering, deployment",
    category: "Operations / Automotive",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1632823471565-1ecdf5c21f8b?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=2670&auto=format&fit=crop",
    ],
    liveUrl: "https://car-workshop-management-software.vercel.app",
    iconKey: "wrench",
    challenge:
      "Workshop tools often split appointments, service status, vehicles, billing, and staff activity across separate screens or spreadsheets.",
    solution:
      "We shipped a unified web app with role-specific admin and client areas, mock operational data, appointment status workflows, and production-ready deployment on Vercel.",
    results: [
      { label: "Live app", value: "1" },
      { label: "Core modules", value: "8" },
      { label: "Deployment", value: "Vercel" },
      { label: "Status", value: "Online" },
    ],
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Prisma", category: "Data layer" },
      { name: "Vercel", category: "Hosting" },
    ],
    process: [
      { step: 1, title: "Model Workflows", description: "Defined the workshop entities and workflows: customers, vehicles, appointments, invoices, staff, and analytics." },
      { step: 2, title: "Build Interfaces", description: "Created focused admin and client views with scannable controls and operational dashboards." },
      { step: 3, title: "Stabilize Build", description: "Fixed production TypeScript issues and dependency resolution so the app could ship cleanly." },
      { step: 4, title: "Deploy", description: "Built and deployed the production app to Vercel with a stable public URL." },
    ],
  },
  {
    id: "crm-1",
    title: "Hudson Dealroom",
    tagline: "A real-estate sales CRM for launch teams, buyers, reservations, offers, and project pipelines.",
    description:
      "Hudson Dealroom is a lightweight Vite React app built around real-estate sales teams, with workspace switching, project inventory, buyer contacts, reservations, offers, calendar tasks, and pipeline reporting.",
    year: "2026",
    client: "Mindivo Demo Suite",
    duration: "Live deployment",
    role: "Frontend build and deployment",
    category: "CRM / Sales Operations",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop",
    ],
    liveUrl: "https://crm-1-weld.vercel.app",
    iconKey: "building",
    challenge:
      "Pre-construction and project-sales teams need a sharper tool than a generic CRM because buyers, units, offers, reservations, brokers, and launch targets all move together.",
    solution:
      "We built and deployed a dedicated real-estate CRM surface with workspace-level project data, offer creation, contact management, team tracking, calendar events, and pipeline goals.",
    results: [
      { label: "Bundle", value: "Static" },
      { label: "Build", value: "Vite" },
      { label: "Deployment", value: "Vercel" },
      { label: "Status", value: "Online" },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Vite", category: "Build" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Vercel", category: "Hosting" },
    ],
    process: [
      { step: 1, title: "Verify Build", description: "Repaired dependency shims and confirmed the production build locally." },
      { step: 2, title: "Configure Deploy", description: "Created a Vercel project under the Mindivo account without connecting Git." },
      { step: 3, title: "Ship", description: "Deployed the static build to production and assigned a public alias." },
      { step: 4, title: "Validate", description: "Checked the live URL for HTTP 200 availability." },
    ],
  },
  {
    id: "crm-2",
    title: "NexusCRM",
    tagline: "A full sales operations CRM for contacts, companies, deals, activities, and pipeline management.",
    description:
      "NexusCRM is a Vite React sales operations app with a structured sidebar, dashboard metrics, contact and company records, deal tracking, activity logging, and a kanban-style pipeline.",
    year: "2026",
    client: "Mindivo Demo Suite",
    duration: "Live deployment",
    role: "Frontend build and deployment",
    category: "CRM / Business Tools",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
    ],
    liveUrl: "https://crm-2-ivory.vercel.app",
    iconKey: "target",
    challenge:
      "Sales teams need a credible CRM workspace where accounts, contacts, activities, and deal movement can be understood quickly.",
    solution:
      "We validated the TypeScript build and deployed a polished NexusCRM production app with dashboard analytics, records management, and pipeline views.",
    results: [
      { label: "Build", value: "Clean" },
      { label: "Deployment", value: "Vercel" },
      { label: "Alias", value: "Live" },
      { label: "Status", value: "Online" },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Vite", category: "Build" },
      { name: "TypeScript", category: "Language" },
      { name: "Supabase SDK", category: "Integration" },
      { name: "Vercel", category: "Hosting" },
    ],
    process: [
      { step: 1, title: "Install", description: "Installed dependencies from the lockfile." },
      { step: 2, title: "Build", description: "Ran TypeScript and Vite production build checks." },
      { step: 3, title: "Deploy", description: "Created the Vercel project and deployed production output." },
      { step: 4, title: "Verify", description: "Confirmed the production alias returns HTTP 200." },
    ],
  },
  {
    id: "inventory-management",
    title: "StockPilot Inventory",
    tagline: "A clean inventory control app for stock, product, and operations visibility.",
    description:
      "StockPilot Inventory is a deployed operations dashboard for presenting product, stock, barcode, storage-zone, and business workflow management in a simple browser-based experience.",
    year: "2026",
    client: "Mindivo Demo Suite",
    duration: "Live deployment",
    role: "Frontend build and deployment",
    category: "Inventory / Operations",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565793979892-18b59f18b69f?q=80&w=2670&auto=format&fit=crop",
    ],
    liveUrl: "https://inventory-management-software-blond.vercel.app",
    iconKey: "warehouse",
    challenge:
      "Inventory software needs to make product and stock information easy to scan without burying operators in complexity.",
    solution:
      "We deployed a fast static Vite app that presents an inventory management product surface with a clean public URL.",
    results: [
      { label: "Build", value: "Clean" },
      { label: "Hosting", value: "Vercel" },
      { label: "Type", value: "Static" },
      { label: "Status", value: "Online" },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Vite", category: "Build" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Vercel", category: "Hosting" },
    ],
    process: [
      { step: 1, title: "Prepare", description: "Installed dependencies and preserved local agent instructions outside the deployment upload." },
      { step: 2, title: "Build", description: "Validated the TypeScript and Vite production output." },
      { step: 3, title: "Deploy", description: "Created and deployed the Vercel production project." },
      { step: 4, title: "Check", description: "Verified the live alias with an HTTP status check." },
    ],
  },
  {
    id: "medical-app",
    title: "Second Opinion AI",
    tagline: "A Next.js medical second-opinion app with file upload and AI-analysis workflow.",
    description:
      "Second Opinion AI is a Next.js app for presenting a patient-friendly workflow around uploading medical files, configuring an API key, and reviewing AI-assisted analysis output.",
    year: "2026",
    client: "Mindivo Demo Suite",
    duration: "Live deployment",
    role: "Next.js build, configuration, deployment",
    category: "Healthcare / AI Workflow",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581093458791-9d42e29a7a90?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2670&auto=format&fit=crop",
    ],
    liveUrl: "https://medical-app-eight-zeta.vercel.app",
    iconKey: "stethoscope",
    challenge:
      "The app needed a reliable Next 16 production build while avoiding workspace-root confusion in a multi-project directory.",
    solution:
      "We configured Turbopack to use the app root, validated the production build, and deployed the project to Vercel.",
    results: [
      { label: "Framework", value: "Next 16" },
      { label: "Build", value: "Clean" },
      { label: "Hosting", value: "Vercel" },
      { label: "Status", value: "Online" },
    ],
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Gemini SDK", category: "AI" },
      { name: "Vercel", category: "Hosting" },
    ],
    process: [
      { step: 1, title: "Install", description: "Installed dependencies from the app lockfile." },
      { step: 2, title: "Configure", description: "Pinned Turbopack root to the app directory for correct builds." },
      { step: 3, title: "Build", description: "Validated the production Next.js build." },
      { step: 4, title: "Deploy", description: "Deployed and verified the Vercel production alias." },
    ],
  },
  {
    id: "smool",
    title: "Smool",
    tagline: "A Flutter web app for geofence-based auto-mute and location-aware quiet zones.",
    description:
      "Smool is a Flutter app concept for pinning quiet places and automatically muting when users arrive, now published as a static Flutter web deployment.",
    year: "2026",
    client: "Mindivo Demo Suite",
    duration: "Live deployment",
    role: "Flutter web build and static deployment",
    category: "Mobile Utility / Flutter",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2670&auto=format&fit=crop",
    ],
    liveUrl: "https://smool-nine.vercel.app",
    iconKey: "mapPin",
    challenge:
      "The app was a Flutter project, so it needed a Flutter SDK and web build output before it could be hosted on Vercel.",
    solution:
      "We installed a temporary Flutter SDK, built a release web bundle, and deployed the static output to Vercel.",
    results: [
      { label: "Flutter", value: "3.41.9" },
      { label: "Output", value: "Web" },
      { label: "Hosting", value: "Vercel" },
      { label: "Status", value: "Online" },
    ],
    techStack: [
      { name: "Flutter", category: "Framework" },
      { name: "Dart", category: "Language" },
      { name: "Geolocator", category: "Location" },
      { name: "Shared Preferences", category: "Storage" },
      { name: "Vercel", category: "Hosting" },
    ],
    process: [
      { step: 1, title: "Provision SDK", description: "Downloaded and verified the official macOS arm64 Flutter stable SDK." },
      { step: 2, title: "Resolve Packages", description: "Fetched Flutter dependencies from the project lockfile." },
      { step: 3, title: "Build Web", description: "Generated the release `build/web` output." },
      { step: 4, title: "Deploy", description: "Published the static Flutter web app to Vercel." },
    ],
  },
  {
    id: "job-description-generator",
    title: "JD Forge",
    tagline: "An AI-powered job description generator that crafts inclusive, compelling JDs in seconds using Google Gemini.",
    description:
      "JD Forge is a React + Vite app that lets hiring teams enter role details, choose a tone, and instantly generate polished, bias-free job descriptions powered by Google Gemini AI. Output can be exported as a Word document.",
    year: "2026",
    client: "Mindivo Demo Suite",
    duration: "Live deployment",
    role: "Frontend build and deployment",
    category: "HR Tech / AI Tools",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2670&auto=format&fit=crop",
    ],
    liveUrl: "https://job-description-generator-tan.vercel.app",
    iconKey: "fileText",
    challenge:
      "Writing high-quality, inclusive job descriptions is time-consuming and inconsistent across teams, often resulting in generic or biased listings that deter qualified candidates.",
    solution:
      "We built a focused AI tool that takes structured role inputs — title, level, skills, tone — and uses Gemini to produce professional, inclusive JDs instantly, with Word export support.",
    results: [
      { label: "AI Model", value: "Gemini" },
      { label: "Export", value: "Word (.docx)" },
      { label: "Deployment", value: "Vercel" },
      { label: "Status", value: "Online" },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Vite", category: "Build" },
      { name: "TypeScript", category: "Language" },
      { name: "Gemini AI", category: "AI" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Vercel", category: "Hosting" },
    ],
    process: [
      { step: 1, title: "Design Inputs", description: "Defined the role input fields: title, level, department, required skills, tone, and company context." },
      { step: 2, title: "Integrate Gemini", description: "Built the Gemini API integration with markdown-to-HTML rendering for clean output display." },
      { step: 3, title: "Add Export", description: "Implemented Word document export so teams can drop generated JDs directly into their hiring workflow." },
      { step: 4, title: "Deploy", description: "Built and deployed the production app to Vercel with a stable public URL." },
    ],
  },
];

export function getProject(id: string): ProjectDetail | undefined {
  return projects.find((p) => p.id === id);
}
