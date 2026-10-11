import {
    FiArrowRight,
    FiMail,
    FiMapPin,
    FiGithub,
    FiLinkedin,
  } from "react-icons/fi";
  import { motion } from "framer-motion";
  import { siteConfig } from "../data/siteConfig";
  import CrownMark from "./CrownMark";
  
  export default function ContactSection() {
    return (
      <section
        id="contact"
        className="relative bg-bg-primary py-20 lg:py-32 px-6 lg:px-10 border-t border-border-muted"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-mega text-accent uppercase">
                Let's Work Together
              </span>
              <div className="w-16 h-px bg-border-muted" />
            </div>
  
            <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-text-primary">
              HAVE A PROJECT
              <br />
              IN <span className="text-accent">MIND?</span>
            </h2>
  
            <p className="mt-8 text-text-secondary max-w-xl leading-relaxed">
              I'm always open to new opportunities, whether you have a project in
              mind, need a full-stack developer, or just want to say hi.
            </p>
  
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="group mt-8 inline-flex items-center gap-3 border border-accent text-text-primary px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-accent transition-all duration-300"
              >
                Get In Touch
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
  
            <ul className="mt-10 space-y-4 font-mono text-sm text-text-secondary">
              {siteConfig.email && (
                <li className="flex items-center gap-3">
                  <FiMail size={16} className="text-accent" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-text-primary transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-3">
                <FiMapPin size={16} className="text-accent" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
  
            <div className="mt-6 flex items-center gap-5">
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
            </div>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
          <div className="relative aspect-[3/4] bg-bg-secondary border border-border-muted overflow-hidden">
  <img
    src="/m00.jpeg"
    alt="Mo'men Tarek"
    className="w-full h-full object-cover grayscale contrast-110 brightness-90"
    style={{ objectPosition: "center 35%" }}
    loading="lazy"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none" />
</div>
  
            <p className="mt-4 font-display text-2xl tracking-wide text-accent leading-tight">
              REAL
              <br />
              RECOGNIZE
              <br />
              REAL.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }