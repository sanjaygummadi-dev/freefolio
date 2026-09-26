import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/hooks/use-theme";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Color theme colors
    const isDark = theme === "dark";
    const primaryColor = isDark ? 0x0099ff : 0x0071e3;
    const secondaryColor = isDark ? 0x8844ff : 0x00aaff;
    const particleColor = isDark ? 0x66ccff : 0x3388ff;

    // 1. Particle Cloud
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 80;
      posArray[i + 1] = (Math.random() - 0.5) * 120;
      posArray[i + 2] = (Math.random() - 0.5) * 40;
      scaleArray[i / 3] = Math.random() * 2 + 0.5;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      color: particleColor,
      transparent: true,
      opacity: isDark ? 0.45 : 0.25,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 2. Floating 3D Geometry 1: Torus Knot Wireframe
    const torusGeo = new THREE.TorusKnotGeometry(4.5, 1.2, 100, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.12 : 0.08,
    });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    torusKnot.position.set(-18, 10, -10);
    scene.add(torusKnot);

    // 3. Floating 3D Geometry 2: Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(5, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.14 : 0.07,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(20, -15, -12);
    scene.add(icoMesh);

    // 4. Floating Octahedron
    const octGeo = new THREE.OctahedronGeometry(3.5, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.15 : 0.08,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(-14, -30, -8);
    scene.add(octMesh);

    // Mouse tracking & smooth interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll tracking
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize listener
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate objects
      torusKnot.rotation.x = elapsedTime * 0.2 + mouseY * 0.5;
      torusKnot.rotation.y = elapsedTime * 0.25 + mouseX * 0.5;

      icoMesh.rotation.x = -elapsedTime * 0.15 + mouseY * 0.4;
      icoMesh.rotation.y = elapsedTime * 0.3 + mouseX * 0.4;

      octMesh.rotation.x = elapsedTime * 0.3;
      octMesh.rotation.z = elapsedTime * 0.2;

      // Vertical drift with scroll
      const scrollOffset = scrollY * 0.015;
      camera.position.y = -scrollOffset * 0.3;
      camera.position.x = mouseX * 1.5;

      // Particle subtle rotation
      particles.rotation.y = elapsedTime * 0.03 + mouseX * 0.2;
      particles.rotation.x = mouseY * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particleGeo.dispose();
      particleMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-80 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
