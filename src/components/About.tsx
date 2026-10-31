import React from "react";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section className="bg-[#09090B] text-gray-300">
      <div className="px-[3%] py-10 md:py-15">
        <p className="mb-4 sm:mb-4 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          Hello! I&apos;m Ritik, a <span className="text-neutral-300">Frontend Developer</span> based in India.
        </p>
        <p className="mb-4 sm:mb-1 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I&apos;m passionate about building scalable, user-friendly web applications that solve real-world problems — I care about clean, maintainable UI and getting the details right.
        </p>
        <p className="mb-4 sm:mb-1 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          Right now I&apos;m building <span className="text-neutral-300">high-performance web solutions</span> with React.js, Tailwind CSS and API integration at <span className="text-neutral-300">Trident Techlabs Ltd</span>.
        </p>
        <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I&apos;m always looking for new opportunities to learn and grow.
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-6 py-2 sm:py-4">
          <a
            href="https://github.com/RitikChawla197"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ritikchawla197"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
          <a
            href="mailto:ritikchawla197@gmail.com"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            Email <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
