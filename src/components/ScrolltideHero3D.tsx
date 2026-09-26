import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Shield, Check, Heart, Star, Sparkles, Code2, Globe, Cpu, Zap, Layers } from "lucide-react";
import projectEmber from "@/assets/project-ember.jpg";
import projectSmile from "@/assets/project-smilecare.jpg";
import projectIron from "@/assets/project-ironforge.jpg";

export function ScrolltideHero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  // Scroll Progress relative to hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth springs for scroll animation
  const springConfig = { stiffness: 90, damping: 24, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // 3D Transforms driven by Scroll position
  const rotateXRaw = useTransform(smoothProgress, [0, 0.6], [22, 0]);
  const rotateYRaw = useTransform(smoothProgress, [0, 0.6], [-12, 0]);
  const scaleRaw = useTransform(smoothProgress, [0, 0.6], [0.90, 1.02]);
  const translateZRaw = useTransform(smoothProgress, [0, 0.6], [-80, 0]);
  const opacityRaw = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0.4]);

  // Mouse tilt interaction state
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0, glowX: 50, glowY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setMouseTilt({
      x: ((y - centerY) / centerY) * -8,
      y: ((x - centerX) / centerX) * 8,
      glowX: (x / rect.width) * 100,
      glowY: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0, glowX: 50, glowY: 50 });
  };

  const showcaseProjects = [
    { title: "Ember & Spice", image: projectEmber, tag: "Restaurant & Dining" },
    { title: "SmileCare", image: projectSmile, tag: "Healthcare & Clinic" },
    { title: "Ironforge Gym", image: projectIron, tag: "Fitness Studio" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative mt-12 md:mt-20 w-full"
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{
          opacity: opacityRaw,
          scale: scaleRaw,
        }}
        className="mx-auto max-w-5xl px-4 sm:px-6"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: rotateXRaw,
            rotateY: rotateYRaw,
            z: translateZRaw,
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: mouseTilt.x,
            rotateY: mouseTilt.y,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative rounded-[2.5rem] bg-background/90 dark:bg-card/90 backdrop-blur-2xl border border-border/80 shadow-[0_25px_70px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_80px_rgba(0,162,255,0.18)] p-4 sm:p-6 md:p-8 overflow-hidden transition-shadow duration-500 group"
        >
          {/* Ambient Specular Beam */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] transition-opacity duration-300 opacity-70"
            style={{
              background: `radial-gradient(800px circle at ${mouseTilt.glowX}% ${mouseTilt.glowY}%, rgba(0, 162, 255, 0.14), transparent 60%)`,
            }}
          />

          {/* Top Browser / App Header bar */}
          <div
            className="flex items-center justify-between pb-4 border-b border-border/60 mb-6"
            style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs font-mono text-muted-foreground hidden sm:inline-block">
                sanjaygummadi-portfolio.dev
              </span>
            </div>

            {/* Interactive Tab Switchers */}
            <div className="flex items-center gap-1.5 p-1 bg-muted/80 rounded-full border border-border/50 text-xs">
              {showcaseProjects.map((proj, idx) => (
                <button
                  key={proj.title}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-300 font-medium ${
                    activeTab === idx
                      ? "bg-background text-foreground shadow-sm scale-105"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {proj.title}
                </button>
              ))}
            </div>
          </div>

          {/* Main Visual Display */}
          <div
            className="relative aspect-[16/9] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-surface border border-border/60 shadow-inner group/display"
            style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
          >
            <motion.img
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={showcaseProjects[activeTab].image}
              alt={showcaseProjects[activeTab].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/display:scale-105"
            />

            {/* Gradient Overlay & Tag */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white">
                  {showcaseProjects[activeTab].tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-white/80 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> Interactive 3D Demo
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                {showcaseProjects[activeTab].title}
              </h3>
            </div>
          </div>

          {/* Floating 3D Parallax Badge 1 - Left side */}
          <motion.div
            style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
            className="absolute left-6 bottom-10 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-background/90 dark:bg-card/90 backdrop-blur-xl border border-border shadow-xl pointer-events-none"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Performance</p>
              <p className="text-sm font-semibold text-foreground">100 / 100 Lighthouse</p>
            </div>
          </motion.div>

          {/* Floating 3D Parallax Badge 2 - Right side */}
          <motion.div
            style={{ transform: "translateZ(90px)", transformStyle: "preserve-3d" }}
            className="absolute right-6 top-24 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-background/90 dark:bg-card/90 backdrop-blur-xl border border-border shadow-xl pointer-events-none"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</p>
              <p className="text-sm font-semibold text-foreground">Ready for Launch</p>
            </div>
          </motion.div>

          {/* Bottom Features Toolbar */}
          <div
            className="mt-6 pt-5 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
            style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
              <Globe className="w-4 h-4 text-primary" /> Responsive Design
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
              <Cpu className="w-4 h-4 text-primary" /> React & TypeScript
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
              <Layers className="w-4 h-4 text-primary" /> Smooth 3D Motion
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
              <Code2 className="w-4 h-4 text-primary" /> Clean Architecture
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
