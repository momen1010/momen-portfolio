import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import CrownMark from "./CrownMark";
import MusicIdentityWidget from "./MusicIdentityWidget";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen grain bg-bg-primary pt-24 pb-16 px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative z-10 order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs tracking-mega text-accent uppercase">
              {siteConfig.title}
            </span>
            <CrownMark className="w-4 h-4" />
          </div>

          <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-[0.85] text-text-primary">
            MO'MEN
            <br />
            <span className="text-text-secondary">TAREK</span>
          </h1>

          <p className="mt-6 font-display text-2xl md:text-3xl tracking-wide text-accent">
            BUILDING IDEAS
            <br />
            INTO REALITY.
          </p>

          <p className="mt-6 text-text-secondary max-w-md leading-relaxed">
            I'm Mo'men Tarek, a developer from Egypt focused on building modern,
            responsive web experiences. I turn ideas into functional digital
            products with attention to design, performance, and usability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 border border-accent text-text-primary px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-accent transition-all duration-300"
            >
              Explore My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <FiGithub size={20} />
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
                <FiLinkedin size={20} />
              </a>
            )}
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <FiMail size={20} />
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative order-1 lg:order-2"
        >
          <div className="relative aspect-[3/4] bg-bg-secondary border border-border-muted overflow-hidden">
            {siteConfig.portrait.isPlaceholder ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <CrownMark className="w-10 h-10 opacity-50" />
                <span className="font-mono text-[10px] tracking-mega text-text-secondary uppercase">
                  Portrait Pending
                </span>
                <span className="font-mono text-[10px] text-border-muted">
                  /src/assets/portrait-hero.jpg
                </span>
              </div>
            ) : (            
              <img
              src="/portrait-about.jpeg"
                alt="Mo'men Tarek portrait"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-2 hidden lg:flex flex-col gap-8 font-mono text-xs tracking-widest uppercase order-3"
        >
          <div>
            <p className="text-text-secondary mb-2">Based in</p>
            <p className="text-text-primary">{siteConfig.location}</p>
          </div>
          <div className="h-px bg-border-muted" />
          <div>
            <p className="text-text-secondary mb-2">Focus</p>
            <p className="text-text-primary leading-relaxed">
              Design
              <br />
              Code
              <br />
              <span className="text-accent">Build</span>
            </p>
          </div>
          <div className="h-px bg-border-muted" />
          <div>
  <p className="text-text-secondary mb-2">Based in</p>
  <p className="text-text-primary">{siteConfig.location}</p>
</div>
<div className="h-px bg-border-muted" />

<div>
  <p className="text-text-secondary mb-2">Focus</p>
  <p className="text-text-primary leading-relaxed">
    Design
    <br />
    Code
    <br />
    <span className="text-accent">Build</span>
  </p>
</div>
<div className="h-px bg-border-muted" />

<div>
  <p className="text-text-secondary mb-2">Interests</p>
  <p className="text-text-primary leading-relaxed">
    Music
    <br />
    Streetwear
    <br />
    Technology
  </p>
</div>
<div className="h-px bg-border-muted" />

        <MusicIdentityWidget />
        </motion.div>
      </div>
    </section>
  );
}