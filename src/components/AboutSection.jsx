import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import CrownMark from "./CrownMark";

const capabilities = [
  "Full-Stack Development",
  "React / Next.js",
  "Node.js / Express",
  "MongoDB / Firebase",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-bg-primary py-20 lg:py-32 px-6 lg:px-10 border-t border-border-muted"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] bg-bg-secondary border border-border-muted overflow-hidden">
            {!siteConfig.portrait.about || siteConfig.portrait.isPlaceholder ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <CrownMark className="w-10 h-10 opacity-50" />
                <span className="font-mono text-[10px] tracking-mega text-text-secondary uppercase">
                  Portrait Pending
                </span>
              </div>
            ) : (
              <img
                src="/moo-hero.jpeg"
                alt="Mo'men Tarek"
                className="w-full h-full object-cover grayscale contrast-110 brightness-90"
                style={{ objectPosition: "center 35%" }}
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none" />
          </div>
          <p className="mt-4 font-display text-2xl tracking-wide text-accent leading-tight">
            SAME
            <br />
            ENERGY
            <br />
            DIFFERENT
            <br />
            PLATFORM.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs tracking-mega text-accent uppercase">
              About Me
            </span>
            <div className="flex-1 h-px bg-border-muted" />
          </div>

          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-text-primary">
            MORE THAN
            <br />
            JUST A <span className="text-accent">DEVELOPER.</span>
          </h2>

          <div className="mt-8 space-y-4 text-text-secondary leading-relaxed max-w-2xl">
            <p>
              I'm Mo'men Tarek, a Full-Stack Developer based in Egypt. I love
              technology, music, streetwear and the creative side of life.
            </p>
            <p>
              I believe in building products that not only work well, but also
              look good and feel right.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 font-mono text-sm text-text-primary border border-border-muted px-4 py-3 hover:border-accent transition-colors"
              >
                <span className="w-2 h-2 bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          {siteConfig.cv && (
            <a
              href={siteConfig.cv}
              download
              className="mt-8 inline-flex items-center gap-3 border border-accent text-text-primary px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-accent transition-all"
            >
              Download CV
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}