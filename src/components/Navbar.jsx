import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { siteConfig } from "../data/siteConfig";
import CrownMark from "./CrownMark";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-md border-b border-border-muted"
          : "bg-gradient-to-b from-bg-primary/80 to-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 group"
          aria-label="Mo'men Tarek - Home"
        >
          <span className="font-display text-2xl tracking-wider text-text-primary group-hover:text-accent transition-colors">
            {siteConfig.wordmark}
          </span>
          <CrownMark className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group uppercase tracking-wider"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {siteConfig.social.github && (
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          )}
          {siteConfig.social.linkedin && (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          )}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-bg-primary border-t border-border-muted">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-display tracking-wider text-text-primary hover:text-accent transition-colors uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}