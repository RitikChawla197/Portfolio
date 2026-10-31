"use client";

import React, { useState } from "react";
import { GitHubIcon } from "@/app/icons/Githubicon";
import { useRouter } from "next/navigation";

const GITHUB_PROFILE = "https://github.com/RitikChawla197";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/ritikchawla197";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="border-b-2 border-borderGrey px-[2%] py-2 fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-400 z-50 bg-transparent backdrop-blur-2xl">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <p className="font-space-grotesk text-sm font-semibold text-white sm:text-xl">
            @code by RITIK
          </p>

          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            <div className="hidden items-center gap-6 md:flex lg:gap-6">
              <button
                className="font-sans font-medium text-white/60 hover:text-white transition-colors"
                onClick={() => router.push("/projectspage")}
              >
                Projects
              </button>

              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-white/60 hover:text-white hover:bg-[#1C1C1F] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                  />
                </svg>
              </a>

              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#1C1C1F] transition-colors"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>

            <button
              onClick={toggleMenu}
              className="flex h-6 w-6 flex-col items-center justify-center space-y-1 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-4 bg-white transition-all duration-300 ${
                  isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t-2 border-[#1C1C1F] px-4 pb-4">
            <div className="space-y-1 pt-3">
              <button
                className="block w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
                onClick={() => router.push("/projectspage")}
              >
                Projects
              </button>
              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
