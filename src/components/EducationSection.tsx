import React from "react";
import { GraduationCap } from "lucide-react";

type Edu = {
  degree: string;
  school: string;
  date: string;
  detail?: string;
};

const education: Edu[] = [
  {
    degree: "Masters in Computer Application",
    school: "Chandigarh University",
    date: "2021 - 2023",
    detail: "GPA: 7",
  },
  {
    degree: "Bachelors in Vocational Studies (Software Engineering)",
    school: "Guru Gobind Singh Indraprastha University",
    date: "2018 - 2021",
    detail: "GPA: 8",
  },
];

const EducationSection = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-10 md:px-[3%]">
      {education.map((e) => (
        <div
          key={e.degree}
          className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-transparent p-4 backdrop-blur-xl transition-all duration-150 md:gap-4 md:p-5"
        >
          <div className="relative h-10 w-10 shrink-0 md:h-12 md:w-12">
            <span className="absolute -inset-[2px] rounded-[14px] border border-white/20" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[12px] border border-white/10 bg-white/5">
              <GraduationCap className="h-5 w-5 text-white/80 md:h-6 md:w-6" />
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="flex flex-wrap items-center gap-2 font-space-grotesk text-base font-semibold leading-snug tracking-tight md:text-xl">
              <span>{e.degree}</span>
            </h2>
            <div className="text-sm text-secondary/80">{e.school}</div>
            <div className="mt-0.5 text-xs text-secondary/80 md:text-sm">{e.date}</div>
            {e.detail && (
              <div className="mt-2 text-sm text-secondary/80">{e.detail}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
