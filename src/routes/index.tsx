import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useTheme } from "@/hooks/use-theme";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Layout,
  Code2,
  Gauge,
  Menu,
  X,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
  PhoneCall,
  Sun,
  Moon,
  Shield,
  Heart,
  Users,
  Star,
} from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjay Gummadi — Premium Freelance Web Design & Development" },
      { name: "description", content: "Helping businesses build beautiful, performant digital experiences. Premium freelance design and development." },
      { property: "og:title", content: "Sanjay Gummadi — Premium Freelance Web Design & Development" },
      { property: "og:description", content: "Helping businesses build beautiful, performant digital experiences." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#terms", label: "Terms" },
  { href: "#contact", label: "Contact" },
];

const PROJECTS = [
  { image: project1, client: "[CLIENT NAME]", title: "[PROJECT TITLE]", description: "[PROJECT DESCRIPTION]", url: "[PROJECT URL]" },
  { image: project2, client: "[CLIENT NAME]", title: "[PROJECT TITLE]", description: "[PROJECT DESCRIPTION]", url: "[PROJECT URL]" },
  { image: project3, client: "[CLIENT NAME]", title: "[PROJECT TITLE]", description: "[PROJECT DESCRIPTION]", url: "[PROJECT URL]" },
  { image: project4, client: "[CLIENT NAME]", title: "[PROJECT TITLE]", description: "[PROJECT DESCRIPTION]", url: "[PROJECT URL]" },
];

const SERVICES = [
  {
    icon: Layout,
    title: "Website Design",
    description:
      "Clean, modern business websites designed around your brand — clear structure, confident typography and layouts that make visitors trust you within seconds.",
  },
  {
    icon: Sparkles,
    title: "Landing Pages",
    description:
      "High-converting single-page sites for launches, ads and campaigns, with focused messaging, strong visuals and one obvious next step for the visitor.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Hand-built with React and Tailwind CSS — fast, responsive, easy to maintain, and wired up with contact forms, WhatsApp enquiries, maps and analytics.",
  },
  {
    icon: Gauge,
    title: "Website Optimization",
    description:
      "Speed, SEO and mobile fixes for existing sites: lighter images, cleaner code, better Core Web Vitals and metadata that helps you rank and load instantly.",
  },
];

const STATS = [
  { value: "2+", label: "Years of experience" },
  { value: "10+", label: "Projects delivered" },
  { value: "10+", label: "Happy clients" },
  { value: "100%", label: "Responsive builds" },
];

const REASONS = [
  {
    title: "Modern Design",
    description:
      "Every site is designed from scratch — no recycled templates. Generous whitespace, strong type and subtle motion so your business looks premium.",
  },
  {
    title: "Fully Responsive",
    description:
      "Tested on phones, tablets, laptops and large screens. Your site looks and works exactly right on the device your customer actually uses.",
  },
  {
    title: "Fast Delivery",
    description:
      "Timelines are set from your requirements and agreed before we start — landing pages typically move quickly, larger sites are planned in clear stages.",
  },
  {
    title: "Ongoing Support",
    description:
      "Free support for 14 days after launch for fixes and small tweaks, plus optional monthly maintenance for updates, backups and new sections.",
  },
];

const PROCESS = [
  { n: "01", title: "Discovery", description: "A short call to understand your business, audience and goals." },
  { n: "02", title: "Planning", description: "Scope, sitemap, content checklist and an agreed timeline." },
  { n: "03", title: "Design", description: "A refined, distinctive interface shared for your feedback." },
  { n: "04", title: "Development", description: "Built in React with performance and accessibility in mind." },
  { n: "05", title: "Testing", description: "Polished across devices, browsers and edge cases." },
  { n: "06", title: "Launch", description: "Deployed to your domain, then monitored and improved." },
];

const TERMS = [
  {
    title: "Project Scope",
    body: "The pages, sections and features we agree in writing before starting form the project scope. Anything added later is quoted separately so budgets stay predictable.",
  },
  {
    title: "Payments",
    body: "50% advance to reserve the schedule and begin work, 50% on approval before final deployment. Payments via UPI or bank transfer, with a receipt for every payment.",
  },
  {
    title: "Revisions",
    body: "Two rounds of design revisions are included at the design stage. Further revisions, or changes after development starts, are billed at an hourly rate shared upfront.",
  },
  {
    title: "Delivery Timeline",
    body: "Timelines depend on the requirement and are confirmed in the proposal. Delays in content, images or feedback move the delivery date by the same duration.",
  },
  {
    title: "Ownership",
    body: "Once the final payment is cleared, the design, code and content are fully yours. Third-party fonts, images, plugins and licences remain under their own terms.",
  },
  {
    title: "Communication",
    body: "WhatsApp for quick updates, email for documents and approvals. Messages are answered within 24 hours on working days, with a progress update each week.",
  },
  {
    title: "Refund Policy",
    body: "The advance covers planning and design time and is non-refundable once work begins. If the project is cancelled before design starts, the advance is refunded in full.",
  },
  {
    title: "Support",
    body: "14 days of free post-launch support for bugs and minor text or image changes. Optional monthly maintenance covers updates, backups, monitoring and new sections.",
  },
  {
    title: "Privacy",
    body: "Your files, credentials and business information stay confidential and are never shared. Enquiries sent through this site reach me directly on WhatsApp and email only.",
  },
];

const NAME = "Sanjay Gummadi";
const EMAIL = "sanjaygummadi@dev.com";
const PHONE_DISPLAY = "+91 79891 95795";
const PHONE_DIAL = "+917989195795";
const WHATSAPP_NUMBER = "917989195795";
const WHATSAPP_MESSAGE = "Hi Sanjay, I'd like to start a project.";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/sanjay-gummadi",
  instagram: "https://www.instagram.com/sanjay_gummadi",
  github: "https://github.com/sanjaygummadi",
};

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Services />
        <WhyMe />
        <Process />
        <Terms />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="text-lg font-bold tracking-[0.2em] uppercase">
          S A N J A Y
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
              {active === l.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-foreground"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start Project
          </a>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center w-10 h-10 -mr-2"
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
              >
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section id="top" ref={ref} className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 dark:opacity-25"
        animate={{
          background: [
            "radial-gradient(60% 50% at 50% 0%, oklch(0.96 0.02 254) 0%, transparent 70%)",
            "radial-gradient(60% 50% at 50% 10%, oklch(0.97 0.015 280) 0%, transparent 70%)",
            "radial-gradient(60% 50% at 50% 0%, oklch(0.96 0.02 254) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-wide uppercase text-muted-foreground"
        >
          Premium Freelance Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] font-semibold tracking-tight text-balance"
        >
          Helping businesses build
          <br className="hidden sm:block" />
          <span className="text-muted-foreground"> beautiful digital experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 max-w-xl mx-auto text-lg text-muted-foreground"
        >
          Freelance web designer and developer building premium business websites and
          landing pages in React — designed for your brand, fast on every device and
          delivered ready to convert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-[15px] font-medium hover:opacity-90 transition-opacity"
          >
            Start Project <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-muted text-foreground px-6 py-3.5 text-[15px] font-medium hover:bg-border transition-colors"
          >
            View Projects
          </a>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mt-20 md:mt-28 relative"
    >
      <div className="relative mx-auto max-w-4xl aspect-[16/10] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-muted/50 border border-border shadow-[var(--shadow-elevated)]">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_60%)] opacity-[0.08] dark:opacity-[0.12]" />
          <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-[radial-gradient(circle_at_center,oklch(0.65_0.17_145)_0%,transparent_60%)] opacity-[0.06] dark:opacity-[0.10]" />
        </div>

        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Central trust core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-40 md:w-52 md:h-52">
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-border opacity-60"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-border opacity-40"
            />
            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-primary/10 blur-xl" />
            {/* Core badge */}
            <div className="absolute inset-8 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)] flex items-center justify-center">
              <Shield className="w-10 h-10 md:w-14 md:h-14 text-primary" strokeWidth={1.5} />
            </div>
            {/* Orbiting dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-24px]"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-success" />
            </motion.div>
          </div>
        </div>

        {/* Floating trust card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-40 md:w-52 p-4 md:p-5 rounded-2xl bg-background/80 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-success/15 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-success" />
            </div>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground">Trust</span>
          </div>
          <div className="text-2xl md:text-3xl font-semibold tracking-tight">10+</div>
          <div className="text-xs md:text-sm text-muted-foreground">Happy clients</div>
          <div className="mt-3 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 fill-primary text-primary" />
            ))}
          </div>
        </motion.div>

        {/* Floating loyalty card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-44 md:w-56 p-4 md:p-5 rounded-2xl bg-background/80 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground">Loyalty</span>
          </div>
          <div className="text-2xl md:text-3xl font-semibold tracking-tight">100%</div>
          <div className="text-xs md:text-sm text-muted-foreground">Projects delivered</div>
          <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full w-full bg-primary rounded-full" />
          </div>
        </motion.div>

        {/* Bottom people card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-full bg-background/90 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)] flex items-center gap-2"
        >
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-muted border border-background flex items-center justify-center">
              <Users className="w-3 h-3 text-muted-foreground" />
            </div>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground">Built for long-term partnerships</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground max-w-xl">{description}</p>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Selected Work"
            title="Selected projects, carefully crafted."
            description="A curated selection of recent collaborations."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-3xl bg-muted overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {p.client}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{p.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium relative">
                    Visit Website
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-28 md:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="What I do best."
            description="Focused offerings, executed with craft and care."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group h-full p-8 rounded-3xl bg-background border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 rounded-2xl bg-muted grid place-items-center transition-transform duration-300 group-hover:rotate-[8deg]">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-[15px]">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader eyebrow="Why work with me" title="Built for serious work." />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-foreground text-background grid place-items-center">
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-lg">
                    {r.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 border-t border-border pt-12">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-semibold tracking-tight">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-28 md:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader eyebrow="Process" title="A simple, transparent process." />
        </Reveal>

        <div className="mt-16 grid gap-4">
          {PROCESS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <div className="flex items-start md:items-center gap-6 md:gap-10 p-7 md:p-9 rounded-3xl bg-background border border-border transition-colors hover:border-foreground/20">
                <span className="text-2xl md:text-3xl font-semibold text-muted-foreground/60 tabular-nums w-12 shrink-0">
                  {step.n}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-10 min-w-0 flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Terms() {
  return (
    <section id="terms" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Terms & Conditions"
            title="Clear terms. No surprises."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TERMS.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.06}>
              <div className="h-full p-7 rounded-3xl bg-background border border-border">
                <h3 className="text-lg font-semibold tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-[15px]">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[0-9+\-\s()]*$/, "Only digits and + - ( ) are allowed")
    .optional()
    .or(z.literal("")),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget"),
  message: z.string().trim().min(20, "Message must be at least 20 characters").max(2000),
  agree: z.literal(true, { message: "You must agree to the terms" }),
});

type ContactValues = z.infer<typeof contactSchema>;

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { projectType: "", budget: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    const lines = [
      "New project enquiry",
      "",
      `Name: ${values.fullName}`,
      `Email: ${values.email}`,
      values.company ? `Company: ${values.company}` : null,
      values.phone ? `Phone: ${values.phone}` : null,
      `Project type: ${values.projectType}`,
      `Budget: ${values.budget}`,
      "",
      "Message:",
      values.message,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something great."
            description="Tell me about your project — I usually reply within 24 hours."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-7 md:p-10 rounded-3xl bg-background border border-border"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" error={errors.fullName?.message}>
                  <input {...register("fullName")} className={inputCls} autoComplete="name" />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input type="email" {...register("email")} className={inputCls} autoComplete="email" />
                </Field>
                <Field label="Company">
                  <input {...register("company")} className={inputCls} />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input {...register("phone")} className={inputCls} autoComplete="tel" />
                </Field>
                <Field label="Project Type" error={errors.projectType?.message}>
                  <select {...register("projectType")} className={inputCls}>
                    <option value="">Select…</option>
                    <option>Website Design</option>
                    <option>Landing Page</option>
                    <option>Web Development</option>
                    <option>Optimization</option>
                  </select>
                </Field>
                <Field label="Budget" error={errors.budget?.message}>
                  <select {...register("budget")} className={inputCls}>
                    <option value="">Select…</option>
                    <option>Under $2k</option>
                    <option>$2k – $5k</option>
                    <option>$5k – $10k</option>
                    <option>$10k+</option>
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" error={errors.message?.message}>
                  <textarea rows={5} {...register("message")} className={inputCls} />
                </Field>
              </div>

              <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  {...register("agree")}
                  className="mt-1 w-4 h-4 rounded border-border accent-[oklch(0.58_0.18_254)]"
                />
                <span>
                  I agree to the{" "}
                  <a href="#terms" className="text-foreground underline underline-offset-2">
                    Terms
                  </a>
                  .
                </span>
              </label>
              {errors.agree && (
                <p className="mt-1 text-sm text-destructive">{errors.agree.message}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-[15px] font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
                <ArrowRight className="w-4 h-4" />
              </button>

              {submitted && (
                <p className="mt-4 text-sm text-[var(--color-success)]">
                  Thanks — WhatsApp is opening with your message. Press send there.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8">
              <InfoRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <InfoRow icon={Phone} label="Phone" value={PHONE_DISPLAY} href={`tel:${PHONE_DIAL}`} />
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" fill="currentColor" /> WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_DIAL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                >
                  <PhoneCall className="w-4 h-4" /> Call now
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Social</p>
                <div className="mt-4 flex gap-3">
                  <SocialBtn icon={Linkedin} href={SOCIALS.linkedin} label="LinkedIn" />
                  <SocialBtn icon={Instagram} href={SOCIALS.instagram} label="Instagram" />
                  <SocialBtn icon={Github} href={SOCIALS.github} label="GitHub" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] outline-none transition-all focus:border-accent focus:shadow-[0_0_0_4px_oklch(0.58_0.18_254/0.12)]";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-2">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-destructive">{error}</span>}
    </label>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="flex items-start gap-4 group">
      <div className="w-11 h-11 rounded-full bg-background border border-border grid place-items-center shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="mt-1 text-lg font-medium group-hover:text-accent transition-colors break-all">
          {value}
        </p>
      </div>
    </a>
  );
}

function SocialBtn({
  icon: Icon,
  href,
  label,
}: {
  icon: typeof Linkedin;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-full bg-background border border-border grid place-items-center hover:bg-foreground hover:text-background transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <p className="text-lg font-semibold tracking-tight">{NAME}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Premium Freelance Services
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-4">Navigation</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-4">Social</p>
            <div className="flex gap-3">
              <SocialBtn icon={Linkedin} href={SOCIALS.linkedin} label="LinkedIn" />
              <SocialBtn icon={Instagram} href={SOCIALS.instagram} label="Instagram" />
              <SocialBtn icon={Github} href={SOCIALS.github} label="GitHub" />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}

function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-muted"
    >
      {mounted && theme === "dark" ? (
        <Sun className="w-[18px] h-[18px]" />
      ) : (
        <Moon className="w-[18px] h-[18px]" />
      )}
    </button>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`tel:${PHONE_DIAL}`}
        aria-label="Call now"
        className="w-14 h-14 rounded-full grid place-items-center bg-foreground text-background shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform hover:scale-110"
      >
        <PhoneCall className="w-6 h-6" />
      </a>
      <a
        href={whatsappLink(WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full grid place-items-center text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="w-6 h-6" fill="currentColor" />
      </a>
    </div>
  );
}
