import React from "react";
import { ArrowUpRight, Award } from "lucide-react";
import localCertifications from "@/data/certifications.json";

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

const HelsinkiIcon = () => (
  <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" role="img" aria-label="University of Helsinki">
    <path fill="#ffffff" d="M452 0h96v97h-96V0zm0 903h96v97h-96v-97zm380-358q-32-20-38-74-25 3-44-3-28-10-40-42-6-13-12-47t-13-52q-12-32-33-56-33-35-74-50-37-14-78-11 30 19 37 46 6 23-7 41t-36 19-42-12q-8-5-35-27-22-18-40-26-26-12-58-12-25 0-51 13 24 3 40 16 13 12 24 32 3 7 16 39 10 23 27 36t44 22q-13 6-38 6-29 0-55-15-20-11-45-36t-43-36q-28-16-61-16-16 0-29 4t-19 9q23 3 42 14 23 15 23 34 0 11-7 17t-19 5-23-12q-18-20-43-33t-54-12q-13 0-26 3T0 339q34 5 58 28t45 72q15 35 33 51 24 23 64 23 5 0 29-3 20-2 31 0 17 2 27 13 9 8 12 21 2 6 5 23 2 15 6 23 10 21 28 31 21 11 56 11-19 19-54 21-32 2-65-9t-49-28q2 46 25 80 25 37 68 50 49 14 113-4 18-5 30-1t19 24q16 41 71 35 48-5 79 6t59 42q8-81-77-135-15-9-23-19-6-8-9-19l-4-17q16 18 38 28 17 8 43 14 82 10 110 52 2-23-6-42-6-15-19-29-10-10-26-22-19-15-23-18-11-10-13-18 19 12 36 17t38 5q7-1 27-6t31-4q16 0 28 7 15 9 27 29 29-18 68-15 35 3 64 21-12-30-34-52-17-18-44-33-12-7-47-23-28-14-43-24zm-284 36h-96v-97h96v97z" />
  </svg>
);

type IconKey = "claude" | "google" | "helsinki";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  href: string;
  icon?: IconKey | string;
};

const icons: Record<IconKey, React.ReactNode> = {
  claude: <ClaudeIcon />,
  google: <GoogleIcon />,
  helsinki: <HelsinkiIcon />,
};

// Raw URL of the Gist that holds the list, e.g.
// https://gist.githubusercontent.com/<user>/<gist-id>/raw/certifications.json
// (no commit hash in the URL, so it always serves the latest revision)
const CERTIFICATIONS_URL = process.env.CERTIFICATIONS_URL;
// how often (seconds) the site re-reads the Gist
const REVALIDATE = 3600;

const isCert = (value: unknown): value is Cert => {
  if (!value || typeof value !== "object") return false;
  const c = value as Record<string, unknown>;
  return (
    ["title", "issuer", "date", "href"].every((key) => typeof c[key] === "string") &&
    // the list comes from outside the repo, so only allow real links (no javascript: URLs)
    (c.href as string).startsWith("https://")
  );
};

// the Gist is the source of truth; the bundled JSON keeps the section filled if it's unset or unreachable
async function getCertifications(): Promise<Cert[]> {
  if (!CERTIFICATIONS_URL) return localCertifications as Cert[];
  try {
    const res = await fetch(CERTIFICATIONS_URL, { next: { revalidate: REVALIDATE } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: unknown = await res.json();
    if (!Array.isArray(data)) throw new Error("expected a JSON array");
    const certs = data.filter(isCert);
    return certs.length ? certs : (localCertifications as Cert[]);
  } catch (err) {
    console.error("Failed to load certifications from Gist:", err);
    return localCertifications as Cert[];
  }
}

// `icon` is either a built-in key above or an https:// image URL (any issuer's logo, set from the Gist)
const CertIcon = ({ cert }: { cert: Cert }) => {
  if (cert.icon && Object.hasOwn(icons, cert.icon)) return icons[cert.icon as IconKey];
  if (cert.icon?.startsWith("https://")) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={cert.icon} alt={cert.issuer} className="h-6 w-6 object-contain" loading="lazy" />;
  }
  return <Award className="h-6 w-6 text-white/70" aria-label={cert.issuer} />;
};

const CertificationsSection = async () => {
  const certifications = await getCertifications();

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
              <CertIcon cert={c} />
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
