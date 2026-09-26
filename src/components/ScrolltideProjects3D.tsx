import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { ThreeDTiltCard } from "./ThreeDTiltCard";

interface Project {
  image: string;
  client: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
}

interface ScrolltideProjects3DProps {
  projects: Project[];
}

export function ScrolltideProjects3D({ projects }: ScrolltideProjects3DProps) {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {projects.map((project, i) => (
        <ProjectCard3D key={project.title} project={project} index={i} />
      ))}
    </div>
  );
}

function ProjectCard3D({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const springConfig = { stiffness: 100, damping: 24, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // 3D Perspective scroll entry transforms
  const rotateX = useTransform(smoothProgress, [0, 1], [15, 0]);
  const y = useTransform(smoothProgress, [0, 1], [80, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.4, 1], [0.3, 0.8, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.92, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        y,
        opacity,
        scale,
        perspective: 1200,
      }}
      className="h-full"
    >
      <ThreeDTiltCard maxTilt={10} depth={35}>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group block h-full rounded-3xl bg-card border border-border/80 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)] flex flex-col justify-between"
        >
          {/* Image Container with 3D Depth */}
          <div className="relative aspect-[16/10] overflow-hidden bg-surface">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            />

            {/* Hover Spotlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-lg">
                Explore Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-background/80 dark:bg-card/80 backdrop-blur-md border border-border/60 text-foreground">
                {project.client}
              </span>
            </div>
          </div>

          {/* Content Details */}
          <div className="p-7 md:p-8 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="w-9 h-9 rounded-full bg-muted border border-border/60 grid place-items-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-accent-foreground">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-accent uppercase">
                <Sparkles className="w-3.5 h-3.5" /> 3D Responsive Build
              </span>
            </div>
          </div>
        </a>
      </ThreeDTiltCard>
    </motion.div>
  );
}
