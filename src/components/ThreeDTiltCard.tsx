import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface ThreeDTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  depth?: number;
  glowColor?: string;
}

export function ThreeDTiltCard({
  children,
  className = "",
  maxTilt = 12,
  depth = 30,
  glowColor = "rgba(0, 162, 255, 0.15)",
}: ThreeDTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Spring physics for smooth non-jarring 60fps tilt motion
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    rotateX.set(rotX);
    rotateY.set(rotY);

    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative h-full w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className={`relative h-full w-full rounded-3xl transition-shadow duration-300 ${
          isHovered
            ? "shadow-[0_20px_50px_rgba(0,113,227,0.15)] dark:shadow-[0_20px_50px_rgba(0,162,255,0.2)]"
            : ""
        } ${className}`}
      >
        {/* Dynamic Specular Spotlight / Glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, ${glowColor}, transparent 60%)`,
          }}
        />

        {/* 3D Surface Highlight Border */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-white/20 dark:border-white/10 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Card Content with 3D Depth Layer */}
        <div style={{ transform: `translateZ(${depth}px)`, transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
