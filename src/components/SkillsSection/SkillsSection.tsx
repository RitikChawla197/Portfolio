import React from "react";
import SkillPill from "./SkillPill";
import { skills, skillGroups } from "./constants";

const SkillSection = () => {
  return (
    <div className="px-[3%] py-10">
      {/* icon highlights */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillPill key={skill.name} skillName={skill.name} icon={skill.icon} />
        ))}
      </div>

      {/* full categorized stack */}
      <div className="mt-8 flex flex-col gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col gap-3 border-t border-[#1C1C1F] pt-5 sm:flex-row sm:gap-6"
          >
            <h3 className="shrink-0 font-geist-mono text-xs uppercase tracking-widest text-secondary sm:w-28 sm:pt-1">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 transition-colors hover:border-white/25 hover:bg-white/10 md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
