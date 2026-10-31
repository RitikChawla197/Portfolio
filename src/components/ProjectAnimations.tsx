"use client";

/**
 * Modal opened from a project card: one tab per animation, each a standalone HTML
 * page in an iframe. Only the active animation is mounted, so nothing runs in the
 * background; switching tabs remounts it fresh (restarts from the beginning), and
 * closing unmounts it entirely.
 */

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import type { ProjectAnimation } from "@/helpers/constants";

type Props = {
  open: boolean;
  onClose: () => void;
  heading: string;
  animations: ProjectAnimation[];
  liveHref?: string;
};

const ProjectAnimations = ({ open, onClose, heading, animations, liveHref }: Props) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (open) setActive(0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const current = animations[active];

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${heading} animations`}
        >
          <motion.div
            className="flex max-h-[94vh] w-[min(96vw,64rem)] flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-[#09090B] text-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="flex items-center justify-between gap-3 border-b border-neutral-800 px-5 py-3">
              <div className="min-w-0">
                <h2 className="truncate font-space-grotesk text-base font-semibold">{heading}</h2>
                <p className="text-xs text-secondary">Feature animations</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {liveHref && (
                  <a
                    href={liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
                  >
                    Visit live site
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-md p-1.5 text-secondary transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* tabs */}
            <div className="flex gap-2 overflow-x-auto border-b border-neutral-800 px-5 py-3" role="tablist">
              {animations.map((a, i) => (
                <button
                  key={a.src}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-sm transition-colors ${
                    i === active
                      ? "border-white bg-white text-black"
                      : "border-neutral-700 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {a.title}
                </button>
              ))}
            </div>

            {/* stage — only the active iframe is mounted (keyed so it restarts on tab change) */}
            <div className="relative h-[min(68vh,40rem)] bg-[#f2f3f6]">
              <iframe
                key={active}
                src={current.src}
                title={current.title}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ProjectAnimations;
