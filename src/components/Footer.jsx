import { FiGithub, FiLinkedin } from "react-icons/fi";
import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-border-muted py-8 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-2xl tracking-wider text-text-primary">
          {siteConfig.wordmark}
        </span>

        <p className="font-mono text-xs text-text-secondary tracking-widest uppercase text-center">
          © {year} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
            Design. Code. <span className="text-accent">Build.</span>
          </span>
          {siteConfig.social.github && (
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <FiGithub size={16} />
            </a>
          )}
          {siteConfig.social.linkedin && (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <FiLinkedin size={16} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}