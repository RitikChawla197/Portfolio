export type ProjectStatus = "live" | "discontinued" | "building";

export type ProjectAnimation = { title: string; src: string };

export type Project = {
  id: number;
  name: string;
  description: string;
  image?: string;
  video?: string;
  link?: string;
  github?: string;
  status?: ProjectStatus;
  projectBg?: string;
  tech?: string[];
  badge?: string;
  restricted?: boolean;
  animations?: ProjectAnimation[];
};

export const projects: Project[] = [
  {
    id: 0,
    name: "Async (TASQ)",
    description:
      "A full-stack task & project management platform — Kanban boards, subtasks, comments, attachments, time logs, team management, notifications and automation rules.",
    image: "/assets/images/async-diagonal.png",
    projectBg: "/Project/ProjectBackground/bg-1.png",
    link: "https://tasqmanage.vercel.app/",
    status: "live",
    tech: ["Next.js", "React", "Redux Toolkit", "FastAPI", "PostgreSQL"],
    animations: [
      { title: "Kanban drag & drop", src: "/animations/async/kanban-drag-drop-v4.html" },
      { title: "Task completion", src: "/animations/async/task-completion-checkbox-v2.html" },
      { title: "Bulk actions", src: "/animations/async/multi-select-bulk-actions-v2.html" },
      { title: "Notifications", src: "/animations/async/toast-notifications.html" },
      { title: "Assignees", src: "/animations/async/avatar-assignee-stack-v2.html" },
      { title: "Empty state", src: "/animations/async/empty-state-illustration.html" },
    ],
  },
  {
    id: 1,
    name: "Pocket CFO",
    description:
      "An AI-powered personal finance dashboard that tracks net worth, burn rate and cash runway, flags risky spending and gives Hinglish CFO advice via Gemini, Claude or OpenRouter — with FIRE, tax and what-if simulators.",
    image: "/assets/images/pocket-cfo-diagonal-right.png",
    projectBg: "/Project/ProjectBackground/bg-2.png",
    link: "https://pocketcfogem.vercel.app/",
    status: "live",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "FastAPI", "PostgreSQL"],
  },
  {
    id: 2,
    name: "Nexus Wealth",
    description:
      "A mutual-fund investment calculator & wealth-projection studio: SIP with step-up or lumpsum, an SWP withdrawal phase, inflation-adjusted values, INR/USD/EUR, a solvency check and downloadable PDF reports — on web and as an Android app.",
    image: "/assets/images/nexus-wealth-diagonal.png",
    projectBg: "/Project/ProjectBackground/bg-3.png",
    status: "live",
    badge: "Vibe Coded",
    tech: ["React", "TypeScript", "Vite", "Recharts", "jsPDF", "Capacitor"],
    animations: [
      { title: "SIP vs Lumpsum", src: "/animations/nexus-wealth/sip-lumpsum-tab-switch.html" },
      { title: "Corpus growth", src: "/animations/nexus-wealth/corpus-growth-line-chart.html" },
      { title: "Wealth multiplier", src: "/animations/nexus-wealth/wealth-multiplier-counter.html" },
      { title: "Solvency check", src: "/animations/nexus-wealth/solvency-diagnostic-state-change.html" },
      { title: "Slider sync", src: "/animations/nexus-wealth/slider-count-up.html" },
      { title: "Milestones", src: "/animations/nexus-wealth/milestone-cards-entrance.html" },
      { title: "Currency toggle", src: "/animations/nexus-wealth/currency-toggle.html" },
      { title: "Year-by-year table", src: "/animations/nexus-wealth/year-by-year-table-reveal.html" },
    ],
  },
];
