import { useCallback, useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { z } from "zod";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowUpRight, Check, Code2, Gauge, Github, Heart, Instagram, Layout, Linkedin, Mail, Menu, MessageCircle, Moon, Phone, PhoneCall, Shield, Sparkles, Star, Sun, Users, X } from "lucide-react";
//#region src/hooks/use-theme.ts
var STORAGE_KEY = "theme";
var current = "light";
var listeners = /* @__PURE__ */ new Set();
function apply(theme) {
	current = theme;
	document.documentElement.classList.toggle("dark", theme === "dark");
	document.documentElement.style.colorScheme = theme;
	listeners.forEach((l) => l(theme));
}
function useTheme() {
	const [theme, setTheme] = useState(current);
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		listeners.add(setTheme);
		apply(localStorage.getItem(STORAGE_KEY) ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
		setMounted(true);
		return () => {
			listeners.delete(setTheme);
		};
	}, []);
	return {
		theme,
		toggle: useCallback(() => {
			const next = current === "dark" ? "light" : "dark";
			localStorage.setItem(STORAGE_KEY, next);
			apply(next);
		}, []),
		mounted
	};
}
//#endregion
//#region src/assets/project-1.jpg
var project_1_default = "/assets/project-1-DTSxso3t.jpg";
//#endregion
//#region src/assets/project-2.jpg
var project_2_default = "/assets/project-2-BdFAd93I.jpg";
//#endregion
//#region src/assets/project-3.jpg
var project_3_default = "/assets/project-3-BwkTkL_e.jpg";
//#endregion
//#region src/assets/project-4.jpg
var project_4_default = "/assets/project-4-CWcEODW7.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var NAV_LINKS = [
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#terms",
		label: "Terms"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var PROJECTS = [
	{
		image: project_1_default,
		client: "[CLIENT NAME]",
		title: "[PROJECT TITLE]",
		description: "[PROJECT DESCRIPTION]",
		url: "[PROJECT URL]"
	},
	{
		image: project_2_default,
		client: "[CLIENT NAME]",
		title: "[PROJECT TITLE]",
		description: "[PROJECT DESCRIPTION]",
		url: "[PROJECT URL]"
	},
	{
		image: project_3_default,
		client: "[CLIENT NAME]",
		title: "[PROJECT TITLE]",
		description: "[PROJECT DESCRIPTION]",
		url: "[PROJECT URL]"
	},
	{
		image: project_4_default,
		client: "[CLIENT NAME]",
		title: "[PROJECT TITLE]",
		description: "[PROJECT DESCRIPTION]",
		url: "[PROJECT URL]"
	}
];
var SERVICES = [
	{
		icon: Layout,
		title: "Website Design",
		description: "Clean, modern business websites designed around your brand — clear structure, confident typography and layouts that make visitors trust you within seconds."
	},
	{
		icon: Sparkles,
		title: "Landing Pages",
		description: "High-converting single-page sites for launches, ads and campaigns, with focused messaging, strong visuals and one obvious next step for the visitor."
	},
	{
		icon: Code2,
		title: "Web Development",
		description: "Hand-built with React and Tailwind CSS — fast, responsive, easy to maintain, and wired up with contact forms, WhatsApp enquiries, maps and analytics."
	},
	{
		icon: Gauge,
		title: "Website Optimization",
		description: "Speed, SEO and mobile fixes for existing sites: lighter images, cleaner code, better Core Web Vitals and metadata that helps you rank and load instantly."
	}
];
var STATS = [
	{
		value: "2+",
		label: "Years of experience"
	},
	{
		value: "10+",
		label: "Projects delivered"
	},
	{
		value: "10+",
		label: "Happy clients"
	},
	{
		value: "100%",
		label: "Responsive builds"
	}
];
var REASONS = [
	{
		title: "Modern Design",
		description: "Every site is designed from scratch — no recycled templates. Generous whitespace, strong type and subtle motion so your business looks premium."
	},
	{
		title: "Fully Responsive",
		description: "Tested on phones, tablets, laptops and large screens. Your site looks and works exactly right on the device your customer actually uses."
	},
	{
		title: "Fast Delivery",
		description: "Timelines are set from your requirements and agreed before we start — landing pages typically move quickly, larger sites are planned in clear stages."
	},
	{
		title: "Ongoing Support",
		description: "Free support for 14 days after launch for fixes and small tweaks, plus optional monthly maintenance for updates, backups and new sections."
	}
];
var PROCESS = [
	{
		n: "01",
		title: "Discovery",
		description: "A short call to understand your business, audience and goals."
	},
	{
		n: "02",
		title: "Planning",
		description: "Scope, sitemap, content checklist and an agreed timeline."
	},
	{
		n: "03",
		title: "Design",
		description: "A refined, distinctive interface shared for your feedback."
	},
	{
		n: "04",
		title: "Development",
		description: "Built in React with performance and accessibility in mind."
	},
	{
		n: "05",
		title: "Testing",
		description: "Polished across devices, browsers and edge cases."
	},
	{
		n: "06",
		title: "Launch",
		description: "Deployed to your domain, then monitored and improved."
	}
];
var TERMS = [
	{
		title: "Project Scope",
		body: "The pages, sections and features we agree in writing before starting form the project scope. Anything added later is quoted separately so budgets stay predictable."
	},
	{
		title: "Payments",
		body: "50% advance to reserve the schedule and begin work, 50% on approval before final deployment. Payments via UPI or bank transfer, with a receipt for every payment."
	},
	{
		title: "Revisions",
		body: "Two rounds of design revisions are included at the design stage. Further revisions, or changes after development starts, are billed at an hourly rate shared upfront."
	},
	{
		title: "Delivery Timeline",
		body: "Timelines depend on the requirement and are confirmed in the proposal. Delays in content, images or feedback move the delivery date by the same duration."
	},
	{
		title: "Ownership",
		body: "Once the final payment is cleared, the design, code and content are fully yours. Third-party fonts, images, plugins and licences remain under their own terms."
	},
	{
		title: "Communication",
		body: "WhatsApp for quick updates, email for documents and approvals. Messages are answered within 24 hours on working days, with a progress update each week."
	},
	{
		title: "Refund Policy",
		body: "The advance covers planning and design time and is non-refundable once work begins. If the project is cancelled before design starts, the advance is refunded in full."
	},
	{
		title: "Support",
		body: "14 days of free post-launch support for bugs and minor text or image changes. Optional monthly maintenance covers updates, backups, monitoring and new sections."
	},
	{
		title: "Privacy",
		body: "Your files, credentials and business information stay confidential and are never shared. Enquiries sent through this site reach me directly on WhatsApp and email only."
	}
];
var NAME = "Sanjay Gummadi";
var EMAIL = "sanjaygummadi@dev.com";
var PHONE_DISPLAY = "+91 79891 95795";
var PHONE_DIAL = "+917989195795";
var WHATSAPP_NUMBER = "917989195795";
var WHATSAPP_MESSAGE = "Hi Sanjay, I'd like to start a project.";
var SOCIALS = {
	linkedin: "https://www.linkedin.com/in/sanjay-gummadi",
	instagram: "https://www.instagram.com/sanjay_gummadi",
	github: "https://github.com/sanjaygummadi"
};
function whatsappLink(message) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(Projects, {}),
				/* @__PURE__ */ jsx(Services, {}),
				/* @__PURE__ */ jsx(WhyMe, {}),
				/* @__PURE__ */ jsx(Process, {}),
				/* @__PURE__ */ jsx(Terms, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(FloatingActions, {})
		]
	});
}
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState("");
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		const ids = NAV_LINKS.map((l) => l.href.slice(1));
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(`#${e.target.id}`);
			});
		}, { rootMargin: "-40% 0px -55% 0px" });
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#top",
					className: "text-lg font-bold tracking-[0.2em] uppercase",
					children: "S A N J A Y"
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden md:flex items-center gap-9",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxs("a", {
						href: l.href,
						className: "relative text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: [l.label, active === l.href && /* @__PURE__ */ jsx(motion.span, {
							layoutId: "nav-underline",
							className: "absolute -bottom-1.5 left-0 right-0 h-px bg-foreground"
						})]
					}, l.href))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden md:flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(ThemeToggle, {}), /* @__PURE__ */ jsx("a", {
						href: "#contact",
						className: "inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity",
						children: "Start Project"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:hidden flex items-center gap-1",
					children: [/* @__PURE__ */ jsx(ThemeToggle, {}), /* @__PURE__ */ jsx("button", {
						onClick: () => setOpen((v) => !v),
						className: "inline-flex items-center justify-center w-10 h-10 -mr-2",
						"aria-label": "Toggle navigation",
						children: open ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
					})]
				})
			]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			className: "md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-6 flex flex-col gap-5",
				children: [NAV_LINKS.map((l) => /* @__PURE__ */ jsx("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "text-lg font-medium",
					children: l.label
				}, l.href)), /* @__PURE__ */ jsx("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium",
					children: "Start Project"
				})]
			})
		}) })]
	});
}
function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	useTransform(scrollYProgress, [0, 1], [0, 120]);
	useTransform(scrollYProgress, [0, .8], [1, .3]);
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		ref,
		className: "relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden",
		children: [/* @__PURE__ */ jsx(motion.div, {
			"aria-hidden": true,
			className: "absolute inset-0 -z-10 dark:opacity-25",
			animate: { background: [
				"radial-gradient(60% 50% at 50% 0%, oklch(0.96 0.02 254) 0%, transparent 70%)",
				"radial-gradient(60% 50% at 50% 10%, oklch(0.97 0.015 280) 0%, transparent 70%)",
				"radial-gradient(60% 50% at 50% 0%, oklch(0.96 0.02 254) 0%, transparent 70%)"
			] },
			transition: {
				duration: 18,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6 lg:px-10 text-center",
			children: [
				/* @__PURE__ */ jsx(motion.p, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "text-sm tracking-wide uppercase text-muted-foreground",
					children: "Premium Freelance Services"
				}),
				/* @__PURE__ */ jsxs(motion.h1, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .05
					},
					className: "mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] font-semibold tracking-tight text-balance",
					children: [
						"Helping businesses build",
						/* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: " beautiful digital experiences."
						})
					]
				}),
				/* @__PURE__ */ jsx(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .7,
						delay: .25
					},
					className: "mt-7 max-w-xl mx-auto text-lg text-muted-foreground",
					children: "Freelance web designer and developer building premium business websites and landing pages in React — designed for your brand, fast on every device and delivered ready to convert."
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .5,
						delay: .4
					},
					className: "mt-10 flex items-center justify-center gap-3",
					children: [/* @__PURE__ */ jsxs("a", {
						href: "#contact",
						className: "inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-[15px] font-medium hover:opacity-90 transition-opacity",
						children: ["Start Project ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
					}), /* @__PURE__ */ jsx("a", {
						href: "#projects",
						className: "inline-flex items-center gap-2 rounded-full bg-muted text-foreground px-6 py-3.5 text-[15px] font-medium hover:bg-border transition-colors",
						children: "View Projects"
					})]
				}),
				/* @__PURE__ */ jsx(HeroVisual, {})
			]
		})]
	});
}
function HeroVisual() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
	const opacity = useTransform(scrollYProgress, [
		0,
		.2,
		.8,
		1
	], [
		0,
		1,
		1,
		.6
	]);
	const scale = useTransform(scrollYProgress, [0, .3], [.95, 1]);
	return /* @__PURE__ */ jsx(motion.div, {
		ref,
		style: {
			y,
			opacity,
			scale
		},
		initial: {
			opacity: 0,
			y: 60
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: 1,
			delay: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "mt-20 md:mt-28 relative",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-4xl aspect-[16/10] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-muted/50 border border-border shadow-[var(--shadow-elevated)]",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 pointer-events-none",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_60%)] opacity-[0.08] dark:opacity-[0.12]" }), /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-[radial-gradient(circle_at_center,oklch(0.65_0.17_145)_0%,transparent_60%)] opacity-[0.06] dark:opacity-[0.10]" })]
				}),
				/* @__PURE__ */ jsxs("svg", {
					className: "absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", {
						id: "hero-grid",
						width: "40",
						height: "40",
						patternUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ jsx("path", {
							d: "M 40 0 L 0 0 0 40",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "0.5"
						})
					}) }), /* @__PURE__ */ jsx("rect", {
						width: "100%",
						height: "100%",
						fill: "url(#hero-grid)"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative w-40 h-40 md:w-52 md:h-52",
						children: [
							/* @__PURE__ */ jsx(motion.div, {
								animate: { rotate: 360 },
								transition: {
									duration: 30,
									repeat: Infinity,
									ease: "linear"
								},
								className: "absolute inset-0 rounded-full border border-dashed border-border opacity-60"
							}),
							/* @__PURE__ */ jsx(motion.div, {
								animate: { rotate: -360 },
								transition: {
									duration: 24,
									repeat: Infinity,
									ease: "linear"
								},
								className: "absolute inset-4 rounded-full border border-border opacity-40"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-8 rounded-full bg-primary/10 blur-xl" }),
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-8 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)] flex items-center justify-center",
								children: /* @__PURE__ */ jsx(Shield, {
									className: "w-10 h-10 md:w-14 md:h-14 text-primary",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ jsx(motion.div, {
								animate: { rotate: 360 },
								transition: {
									duration: 16,
									repeat: Infinity,
									ease: "linear"
								},
								className: "absolute inset-[-12px]",
								children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary" })
							}),
							/* @__PURE__ */ jsx(motion.div, {
								animate: { rotate: -360 },
								transition: {
									duration: 20,
									repeat: Infinity,
									ease: "linear"
								},
								className: "absolute inset-[-24px]",
								children: /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-success" })
							})
						]
					})
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .8,
						delay: .8
					},
					className: "absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-40 md:w-52 p-4 md:p-5 rounded-2xl bg-background/80 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-7 h-7 rounded-full bg-success/15 flex items-center justify-center",
								children: /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-success" })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground",
								children: "Trust"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-2xl md:text-3xl font-semibold tracking-tight",
							children: "10+"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-xs md:text-sm text-muted-foreground",
							children: "Happy clients"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-3 flex items-center gap-1",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((i) => /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-primary text-primary" }, i))
						})
					]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .8,
						delay: 1
					},
					className: "absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-44 md:w-56 p-4 md:p-5 rounded-2xl bg-background/80 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center",
								children: /* @__PURE__ */ jsx(Heart, { className: "w-3.5 h-3.5 text-primary" })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground",
								children: "Loyalty"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-2xl md:text-3xl font-semibold tracking-tight",
							children: "100%"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-xs md:text-sm text-muted-foreground",
							children: "Projects delivered"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden",
							children: /* @__PURE__ */ jsx("div", { className: "h-full w-full bg-primary rounded-full" })
						})
					]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: 1.2
					},
					className: "absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-full bg-background/90 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)] flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex -space-x-2",
						children: /* @__PURE__ */ jsx("div", {
							className: "w-6 h-6 rounded-full bg-muted border border-background flex items-center justify-center",
							children: /* @__PURE__ */ jsx(Users, { className: "w-3 h-3 text-muted-foreground" })
						})
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xs md:text-sm text-muted-foreground",
						children: "Built for long-term partnerships"
					})]
				})
			]
		})
	});
}
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function SectionHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-3xl",
		children: [
			eyebrow && /* @__PURE__ */ jsx("p", {
				className: "text-sm uppercase tracking-wide text-muted-foreground mb-4",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance",
				children: title
			}),
			description && /* @__PURE__ */ jsx("p", {
				className: "mt-5 text-lg text-muted-foreground max-w-xl",
				children: description
			})
		]
	});
}
function Projects() {
	return /* @__PURE__ */ jsx("section", {
		id: "projects",
		className: "py-28 md:py-40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Selected Work",
				title: "Selected projects, carefully crafted.",
				description: "A curated selection of recent collaborations."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ jsxs("a", {
						href: p.url,
						target: "_blank",
						rel: "noreferrer",
						className: "group block rounded-3xl bg-muted overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-[4/3] overflow-hidden bg-surface",
							children: /* @__PURE__ */ jsx("img", {
								src: p.image,
								alt: p.title,
								loading: "lazy",
								width: 1400,
								height: 1e3,
								className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-7 md:p-9",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: p.client
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-3 text-2xl font-semibold tracking-tight",
									children: p.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-muted-foreground",
									children: p.description
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "mt-6 inline-flex items-center gap-1 text-sm font-medium relative",
									children: ["Visit Website", /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								})
							]
						})]
					})
				}, i))
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ jsx("section", {
		id: "services",
		className: "py-28 md:py-40 bg-muted",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Services",
				title: "What I do best.",
				description: "Focused offerings, executed with craft and care."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
				children: SERVICES.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ jsxs("div", {
						className: "group h-full p-8 rounded-3xl bg-background border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-2xl bg-muted grid place-items-center transition-transform duration-300 group-hover:rotate-[8deg]",
								children: /* @__PURE__ */ jsx(s.icon, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-7 text-xl font-semibold tracking-tight",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-muted-foreground text-[15px]",
								children: s.description
							})
						]
					})
				}, s.title))
			})]
		})
	});
}
function WhyMe() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-28 md:py-40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Why work with me",
					title: "Built for serious work."
				}) }),
				/* @__PURE__ */ jsx("div", {
					className: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14",
					children: REASONS.map((r, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex gap-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "shrink-0 w-12 h-12 rounded-full bg-foreground text-background grid place-items-center",
								children: /* @__PURE__ */ jsx(Check, {
									className: "w-5 h-5",
									strokeWidth: 2.5
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-2xl font-semibold tracking-tight",
									children: r.title
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-muted-foreground text-lg",
									children: r.description
								})]
							})]
						})
					}, r.title))
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ jsx("div", {
						className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 border-t border-border pt-12",
						children: STATS.map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-4xl md:text-5xl font-semibold tracking-tight",
							children: s.value
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.label
						})] }, s.label))
					})
				})
			]
		})
	});
}
function Process() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-28 md:py-40 bg-muted",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Process",
				title: "A simple, transparent process."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-4",
				children: PROCESS.map((step, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-start md:items-center gap-6 md:gap-10 p-7 md:p-9 rounded-3xl bg-background border border-border transition-colors hover:border-foreground/20",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-2xl md:text-3xl font-semibold text-muted-foreground/60 tabular-nums w-12 shrink-0",
							children: step.n
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-10 min-w-0 flex-1",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xl md:text-2xl font-semibold tracking-tight",
								children: step.title
							}), /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-[15px] md:text-base",
								children: step.description
							})]
						})]
					})
				}, step.n))
			})]
		})
	});
}
function Terms() {
	return /* @__PURE__ */ jsx("section", {
		id: "terms",
		className: "py-28 md:py-40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Terms & Conditions",
				title: "Clear terms. No surprises."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: TERMS.map((t, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i % 3 * .06,
					children: /* @__PURE__ */ jsxs("div", {
						className: "h-full p-7 rounded-3xl bg-background border border-border",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-semibold tracking-tight",
							children: t.title
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground text-[15px]",
							children: t.body
						})]
					})
				}, t.title))
			})]
		})
	});
}
var contactSchema = z.object({
	fullName: z.string().trim().min(2, "Please enter your full name").max(100),
	email: z.string().trim().email("Enter a valid email").max(255),
	company: z.string().trim().max(120).optional().or(z.literal("")),
	phone: z.string().trim().max(40).regex(/^[0-9+\-\s()]*$/, "Only digits and + - ( ) are allowed").optional().or(z.literal("")),
	projectType: z.string().min(1, "Select a project type"),
	budget: z.string().min(1, "Select a budget"),
	message: z.string().trim().min(20, "Message must be at least 20 characters").max(2e3),
	agree: z.literal(true, { message: "You must agree to the terms" })
});
function Contact() {
	const [submitted, setSubmitted] = useState(false);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			projectType: "",
			budget: ""
		}
	});
	const onSubmit = async (values) => {
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
			values.message
		].filter(Boolean);
		window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
		setSubmitted(true);
		reset();
	};
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "py-28 md:py-40 bg-muted",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Contact",
				title: "Let's build something great.",
				description: "Tell me about your project — I usually reply within 24 hours."
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "mt-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16",
				children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit(onSubmit),
					className: "p-7 md:p-10 rounded-3xl bg-background border border-border",
					noValidate: true,
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
							children: [
								/* @__PURE__ */ jsx(Field, {
									label: "Full Name",
									error: errors.fullName?.message,
									children: /* @__PURE__ */ jsx("input", {
										...register("fullName"),
										className: inputCls,
										autoComplete: "name"
									})
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Email",
									error: errors.email?.message,
									children: /* @__PURE__ */ jsx("input", {
										type: "email",
										...register("email"),
										className: inputCls,
										autoComplete: "email"
									})
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Company",
									children: /* @__PURE__ */ jsx("input", {
										...register("company"),
										className: inputCls
									})
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Phone",
									error: errors.phone?.message,
									children: /* @__PURE__ */ jsx("input", {
										...register("phone"),
										className: inputCls,
										autoComplete: "tel"
									})
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Project Type",
									error: errors.projectType?.message,
									children: /* @__PURE__ */ jsxs("select", {
										...register("projectType"),
										className: inputCls,
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "",
												children: "Select…"
											}),
											/* @__PURE__ */ jsx("option", { children: "Website Design" }),
											/* @__PURE__ */ jsx("option", { children: "Landing Page" }),
											/* @__PURE__ */ jsx("option", { children: "Web Development" }),
											/* @__PURE__ */ jsx("option", { children: "Optimization" })
										]
									})
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Budget",
									error: errors.budget?.message,
									children: /* @__PURE__ */ jsxs("select", {
										...register("budget"),
										className: inputCls,
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "",
												children: "Select…"
											}),
											/* @__PURE__ */ jsx("option", { children: "Under $2k" }),
											/* @__PURE__ */ jsx("option", { children: "$2k – $5k" }),
											/* @__PURE__ */ jsx("option", { children: "$5k – $10k" }),
											/* @__PURE__ */ jsx("option", { children: "$10k+" })
										]
									})
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-5",
							children: /* @__PURE__ */ jsx(Field, {
								label: "Message",
								error: errors.message?.message,
								children: /* @__PURE__ */ jsx("textarea", {
									rows: 5,
									...register("message"),
									className: inputCls
								})
							})
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "mt-6 flex items-start gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								...register("agree"),
								className: "mt-1 w-4 h-4 rounded border-border accent-[oklch(0.58_0.18_254)]"
							}), /* @__PURE__ */ jsxs("span", { children: [
								"I agree to the",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: "#terms",
									className: "text-foreground underline underline-offset-2",
									children: "Terms"
								}),
								"."
							] })]
						}),
						errors.agree && /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-destructive",
							children: errors.agree.message
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "submit",
							disabled: isSubmitting,
							className: "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-[15px] font-medium hover:opacity-90 transition-opacity disabled:opacity-60",
							children: [isSubmitting ? "Sending…" : "Send Message", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
						}),
						submitted && /* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm text-[var(--color-success)]",
							children: "Thanks — WhatsApp is opening with your message. Press send there."
						})
					]
				}) }), /* @__PURE__ */ jsx(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ jsx(InfoRow, {
								icon: Mail,
								label: "Email",
								value: EMAIL,
								href: `mailto:${EMAIL}`
							}),
							/* @__PURE__ */ jsx(InfoRow, {
								icon: Phone,
								label: "Phone",
								value: PHONE_DISPLAY,
								href: `tel:${PHONE_DIAL}`
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ jsxs("a", {
									href: whatsappLink(WHATSAPP_MESSAGE),
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]",
									style: { backgroundColor: "#25D366" },
									children: [/* @__PURE__ */ jsx(MessageCircle, {
										className: "w-4 h-4",
										fill: "currentColor"
									}), " WhatsApp"]
								}), /* @__PURE__ */ jsxs("a", {
									href: `tel:${PHONE_DIAL}`,
									className: "inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90",
									children: [/* @__PURE__ */ jsx(PhoneCall, { className: "w-4 h-4" }), " Call now"]
								})]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm uppercase tracking-wide text-muted-foreground",
								children: "Social"
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-4 flex gap-3",
								children: [
									/* @__PURE__ */ jsx(SocialBtn, {
										icon: Linkedin,
										href: SOCIALS.linkedin,
										label: "LinkedIn"
									}),
									/* @__PURE__ */ jsx(SocialBtn, {
										icon: Instagram,
										href: SOCIALS.instagram,
										label: "Instagram"
									}),
									/* @__PURE__ */ jsx(SocialBtn, {
										icon: Github,
										href: SOCIALS.github,
										label: "GitHub"
									})
								]
							})] })
						]
					})
				})]
			})]
		})
	});
}
var inputCls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] outline-none transition-all focus:border-accent focus:shadow-[0_0_0_4px_oklch(0.58_0.18_254/0.12)]";
function Field({ label, error, children }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "block text-sm font-medium mb-2",
				children: label
			}),
			children,
			error && /* @__PURE__ */ jsx("span", {
				className: "mt-1 block text-sm text-destructive",
				children: error
			})
		]
	});
}
function InfoRow({ icon: Icon, label, value, href }) {
	return /* @__PURE__ */ jsxs("a", {
		href,
		className: "flex items-start gap-4 group",
		children: [/* @__PURE__ */ jsx("div", {
			className: "w-11 h-11 rounded-full bg-background border border-border grid place-items-center shrink-0",
			children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-sm uppercase tracking-wide text-muted-foreground",
				children: label
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-lg font-medium group-hover:text-accent transition-colors break-all",
				children: value
			})]
		})]
	});
}
function SocialBtn({ icon: Icon, href, label }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": label,
		className: "w-11 h-11 rounded-full bg-background border border-border grid place-items-center hover:bg-foreground hover:text-background transition-colors",
		children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border py-14",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-lg font-semibold tracking-tight",
						children: NAME
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Premium Freelance Services"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm font-medium mb-4",
						children: "Navigation"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2 text-sm text-muted-foreground",
						children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: l.href,
							className: "hover:text-foreground transition-colors",
							children: l.label
						}) }, l.href))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm font-medium mb-4",
						children: "Social"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex gap-3",
						children: [
							/* @__PURE__ */ jsx(SocialBtn, {
								icon: Linkedin,
								href: SOCIALS.linkedin,
								label: "LinkedIn"
							}),
							/* @__PURE__ */ jsx(SocialBtn, {
								icon: Instagram,
								href: SOCIALS.instagram,
								label: "Instagram"
							}),
							/* @__PURE__ */ jsx(SocialBtn, {
								icon: Github,
								href: SOCIALS.github,
								label: "GitHub"
							})
						]
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 pt-6 border-t border-border text-sm text-muted-foreground flex flex-col sm:flex-row gap-3 justify-between",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					NAME,
					". All rights reserved."
				] }), /* @__PURE__ */ jsx("p", { children: "Crafted with care." })]
			})]
		})
	});
}
function ThemeToggle() {
	const { theme, toggle, mounted } = useTheme();
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-muted",
		children: mounted && theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "w-[18px] h-[18px]" }) : /* @__PURE__ */ jsx(Moon, { className: "w-[18px] h-[18px]" })
	});
}
function FloatingActions() {
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-6 right-6 z-50 flex flex-col gap-3",
		children: [/* @__PURE__ */ jsx("a", {
			href: `tel:${PHONE_DIAL}`,
			"aria-label": "Call now",
			className: "w-14 h-14 rounded-full grid place-items-center bg-foreground text-background shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform hover:scale-110",
			children: /* @__PURE__ */ jsx(PhoneCall, { className: "w-6 h-6" })
		}), /* @__PURE__ */ jsx("a", {
			href: whatsappLink(WHATSAPP_MESSAGE),
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "Chat on WhatsApp",
			className: "w-14 h-14 rounded-full grid place-items-center text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform hover:scale-110",
			style: { backgroundColor: "#25D366" },
			children: /* @__PURE__ */ jsx(MessageCircle, {
				className: "w-6 h-6",
				fill: "currentColor"
			})
		})]
	});
}
//#endregion
export { Home as component };
