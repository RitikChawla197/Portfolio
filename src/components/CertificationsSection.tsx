import React from "react";
import { ArrowUpRight } from "lucide-react";

const ClaudeIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-label="Claude">
    <path fill="#d97757" d="m95.815 38.848 3.465 1.98v1.486l-.99 3.465-42.08 9.901-3.956-9.83z" />
    <path fill="#d97757" d="m80.076 9.73 4.845 1.016 1.286 1.585 1.226 3.799-.508 2.422-28.239 38.613-9.406-9.406 26.04-34.17z" />
    <path fill="#d97757" d="m55.716 3.7 2.97-1.98 2.475.99 2.475 3.465-6.78 40.755-4.605-3.131-1.98-5.446L53.736 7.66z" />
    <path fill="#d97757" d="M23.959 4.352 27.01.454 29 0l3.95.577 1.949 1.526L49.102 33.59l5.137 14.961-6.01 3.342L25.32 10.322z" />
    <path fill="#d97757" d="m9.18 25.979-.99-3.962 2.972-3.465 3.465.495h.99L36.41 34.393l6.435 4.95 8.911 6.931-4.95 8.416-4.455-3.465-2.97-2.97-28.714-20.298z" />
    <path fill="#d97757" d="M3.24 51.72 1 49.244v-2.202l2.24-.768 25.248 1.485 24.753 1.98-.804 4.93-47.216-2.454z" />
    <path fill="#d97757" d="M18.092 77.488h-4.95l-1.968-2.266v-2.71l8.404-5.94 34.166-21.75 3.458 5.907z" />
    <path fill="#d97757" d="m27.498 91.324-1.98.495-2.97-1.486.495-2.475 29.208-38.614 3.96 5.446L34.43 83.403z" />
    <path fill="#d97757" d="m52.25 96.274-1.485 1.98-2.97.99-2.475-1.98-1.486-2.97 7.426-40.1 4.456.496z" />
    <path fill="#d97757" d="M77.499 85.383v3.96l-.495 1.485-1.98.99-3.466-.46-23.796-35.416 9.439-7.193 7.92 14.357.744 5.197z" />
    <path fill="#d97757" d="m88.885 79.442.495 2.475-1.485 1.98-1.485-.495-8.416-5.94-12.871-11.387-9.901-6.93 2.97-9.406 4.95 2.97 2.97 5.445z" />
    <path fill="#d97757" d="m82.448 54.195 12.377.99 2.97 1.98 1.98 2.97v2.138L94.33 64.59l-27.723-6.93-11.386-.496 2.97-10.396 7.921 5.94z" />
  </svg>
);

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-6 w-6" role="img" aria-label="Google">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

type Cert = {
  title: string;
  issuer: string;
  date: string;
  href: string;
  icon: React.ReactNode;
};

const certifications: Cert[] = [
  {
    title: "Claude Academy: Claude 101",
    issuer: "Anthropic",
    date: "Oct 2026",
    href: "https://academy.claude.com/verify/122a2b04ac3fd7d3089c9fd9245809d9",
    icon: <ClaudeIcon />,
  },
  {
    title: "Claude Academy: AI Fluency — Framework and Foundations",
    issuer: "Anthropic",
    date: "Oct 2026",
    href: "https://academy.claude.com/verify/c0c40e906126a308bc5362c329e6603f",
    icon: <ClaudeIcon />,
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud · Simplilearn SkillUp",
    date: "Oct 2025",
    href: "https://simpli-web.app.link/e/J64UkdG1GXb",
    icon: <GoogleIcon />,
  },
];

const CertificationsSection = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-10 md:px-[3%]">
      {certifications.map((c) => (
        <a
          key={c.title}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-transparent p-4 backdrop-blur-xl transition-all duration-150 hover:border-white/25 hover:bg-white/5 md:gap-4 md:p-5"
        >
          <div className="relative h-10 w-10 shrink-0 md:h-12 md:w-12">
            <span className="absolute -inset-[2px] rounded-[14px] border border-white/20" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[12px] border border-white/10 bg-white/5">
              {c.icon}
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="flex flex-wrap items-center gap-2 font-space-grotesk text-base font-semibold leading-snug tracking-tight md:text-xl">
              <span>{c.title}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-white/80" />
            </h2>
            <div className="text-sm text-secondary/80">{c.issuer}</div>
            <div className="mt-0.5 text-xs text-secondary/80 md:text-sm">{c.date}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CertificationsSection;
