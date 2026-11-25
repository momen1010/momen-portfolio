import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,


  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiVercel,
  SiGit,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

const LINKS = {
  github: "https://github.com/momen1010",
  linkedin: "https://www.linkedin.com/in/m%C3%B2men-tarek-983242392/",
  email: "memo70931@gmail.com",
  whatsapp:
    "https://wa.me/201556507666?text=" +
    encodeURIComponent("Hi Mòmen, I saw your portfolio and I have a project in mind."),
  velora: "https://velora-store-navy.vercel.app",
  altareq: "https://altareq.vercel.app",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Stack", "#stack"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border-muted bg-bg-primary/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-bold tracking-tight">
            Mòmen<span className="text-accent">.</span>
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-text-secondary sm:inline">
            Founder of Velora
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {items.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
            >
              {label}
            </a>
          ))}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_0_28px_rgba(244,63,94,0.45)]"
          >
            Let's talk
          </a>
        </div>
        <button
          className="text-text-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="border-b border-border-muted bg-bg-primary/95 backdrop-blur-xl md:hidden">
          <div className="section-shell flex flex-col gap-4 py-6">
            {items.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base text-text-secondary transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2 w-fit"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grid-bg relative flex min-h-screen items-center overflow-hidden">
      <div className="rose-glow pointer-events-none absolute inset-0" />
      <div className="section-shell relative z-10 pb-24 pt-32">
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow">
          Founder · Builder · Egypt
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-6 font-display text-[13vw] font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          Mòmen Tarek
          <span className="text-accent">.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-2xl text-xl font-medium text-text-primary sm:text-2xl"
        >
          I design, build and ship real products — solo.
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          Third-year IT student at Minia University running two live products: an
          Arabic-first cosmetics store taking real orders, and an Arabic learning
          platform with an AI mentor. I also build stores, platforms and
          dashboards for clients.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="btn-primary">
            See the products
            <ArrowDown size={16} />
          </a>
          <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
            Start a project
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mb-24 mt-16 grid max-w-2xl grid-cols-3 sm:mb-0 gap-px overflow-hidden rounded-2xl border border-border-muted bg-border-muted"
        >
          {[
            ["2", "live products"],
            ["249+", "contributions this year"],
            ["100%", "designed & built solo"],
          ].map(([num, label]) => (
            <div key={label} className="bg-bg-secondary px-4 py-5 text-center sm:px-6">
              <p className="font-display text-2xl font-bold text-accent sm:text-3xl">{num}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-text-secondary sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={18} className="animate-bounce text-text-secondary" />
      </motion.div>
    </section>
  );
}

function Marquee() {
  const words = [
    "React", "Firebase", "Tailwind CSS", "JavaScript", "Vite", "Vercel",
    "E-Commerce", "AI Products", "Node.js", "MongoDB",
  ];
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-border-muted bg-bg-secondary py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-text-secondary">
              {w}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

function BrowserFrame({ src, alt, url }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-muted bg-bg-elevated shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 border-b border-border-muted bg-bg-secondary px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 truncate rounded-md bg-bg-primary px-3 py-1 font-mono text-[11px] text-text-secondary">
          {url}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

const PROJECTS = [
  {
    index: "01",
    name: "Velora",
    tag: "E-Commerce · Live",
    url: LINKS.velora,
    repo: "https://github.com/momen1010/velora-store",
    image: "/projects/velora.jpg",
    headline: "A live Arabic-first cosmetics store taking real orders today.",
    description:
      "My flagship product, built end to end alone: a storefront made for phones first, a three-step checkout with live validation, promo codes that start and stop on schedule, Telegram order alerts, and an admin dashboard for products, orders and campaigns.",
    highlights: [
      "Three-step RTL checkout, cash on delivery and wallet transfer",
      "Scheduled promo engine with live countdown",
      "Admin dashboard for products, orders and campaigns",
      "Firebase backend with server-side security rules",
    ],
    stack: ["React", "Firebase", "Tailwind CSS", "Vite", "Vercel"],
  },
  {
    index: "02",
    name: "Altareq",
    tag: "EdTech · AI · Live",
    url: LINKS.altareq,
    repo: "https://github.com/momen1010/altareq-platform",
    image: "/projects/altareq.jpg",
    headline: "An Arabic learning platform with an AI mentor named Nour.",
    description:
      "Students ask grammar questions and get instant, accurate answers from an AI assistant built for Arabic. Organized courses from letters to rhetoric, quizzes, daily challenges and certificates — bilingual, free to start.",
    highlights: [
      "Nour: AI mentor answering Arabic grammar questions instantly",
      "Structured courses, quizzes, streaks and certificates",
      "Server-side AI proxy with daily free-tier caps",
      "Bilingual Arabic-first experience",
    ],
    stack: ["React", "Firebase", "Gemini AI", "Vercel"],
  },
];

function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="eyebrow">Flagship work</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Products, not demos<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 max-w-xl text-text-secondary">
            Real systems with real users. Every part designed, built, deployed and
            operated by me.
          </p>
        </motion.div>
        <div className="mt-16 flex flex-col gap-24 sm:gap-32">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block transition-transform duration-500 hover:-translate-y-1.5"
              >
                <BrowserFrame src={p.image} alt={`${p.name} live site`} url={p.url.replace("https://", "")} />
              </a>
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-accent">{p.index}</span>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-3 text-lg font-medium text-text-primary">{p.headline}</p>
                <p className="mt-3 leading-relaxed text-text-secondary">{p.description}</p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip text-xs">{s}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={p.url} target="_blank" rel="noreferrer" className="btn-primary !px-6 !py-3 text-sm">
                    Visit live site
                    <ArrowUpRight size={15} />
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="btn-ghost !px-6 !py-3 text-sm">
                    <FaGithub size={15} />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 text-center text-text-secondary"
        >
          More experiments and learning projects on{" "}
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-4 transition-colors hover:underline"
          >
            GitHub
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-border-muted bg-bg-secondary py-24 sm:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-2"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-accent/15 blur-2xl" />
            <img
              src="/moo-hero.jpeg"
              alt="Mòmen Tarek"
              loading="lazy"
              className="relative w-full rounded-2xl border border-border-muted object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          className="lg:col-span-3"
        >
          <p className="eyebrow">About</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Most students build todo apps. I built a business<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-text-secondary">
            I'm a third-year IT student at Minia University, Egypt. Instead of
            waiting for graduation, I started shipping: Velora, a cosmetics
            store that takes real orders with cash on delivery, and Altareq, a
            learning platform where an AI mentor answers Arabic grammar
            questions around the clock.
          </p>
          <p className="mt-4 leading-relaxed text-text-secondary">
            I own every layer of what I ship: the design, the React front end,
            the Firebase backend and security rules, the deployment, and the
            product decisions. When a client hires me, they get that same
            end-to-end ownership.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["Based in", "Egypt"],
              ["Studying", "IT @ Minia University"],
              ["Open for", "Freelance projects"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-border-muted bg-bg-primary p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
                  {k}
                </p>
                <p className="mt-2 text-sm font-semibold text-text-primary">{v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const STACK = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Vite", Icon: SiVite, color: "#A855F7" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Git", Icon: SiGit, color: "#F05033" },
];

function Stack() {
  return (
    <section id="stack" className="py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <p className="eyebrow">Stack</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I ship with<span className="text-accent">.</span>
          </h2>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5"
        >
          {STACK.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="card-hover flex flex-col items-center gap-3 rounded-xl border border-border-muted bg-bg-elevated px-4 py-6"
            >
              <Icon size={30} style={{ color }} />
              <span className="text-xs font-medium text-text-secondary">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="grid-bg relative overflow-hidden border-t border-border-muted py-24 sm:py-36">
      <div className="rose-glow pointer-events-none absolute inset-0 rotate-180" />
      <div className="section-shell relative z-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="eyebrow">Freelance</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Have a store, platform or dashboard in mind?
            <span className="text-accent"> Let's build it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-text-secondary">
            I take on a small number of freelance projects and treat each one
            like my own product: design, code, deployment and everything in
            between.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle size={16} />
              WhatsApp me
            </a>
            <a href={`mailto:${LINKS.email}`} className="btn-ghost">
              <Mail size={16} />
              {LINKS.email}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-5">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
            >
              <FaLinkedin size={22} />
            </a>
            <span className="flex items-center gap-1.5 text-sm text-text-secondary">
              <MapPin size={15} />
              Egypt
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-muted py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-sm text-text-secondary sm:flex-row">
        <p>
          Mòmen Tarek<span className="text-accent">.</span> © 2026
        </p>
        <p className="font-mono text-xs">
          Designed & built solo — React · Tailwind · Vercel
        </p>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <motion.a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "backOut" }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_30px_rgba(244,63,94,0.45)] transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
