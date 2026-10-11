import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import CrownMark from "./CrownMark";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & Others",
};

export default function SkillsSection() {
  const categories = Object.entries(siteConfig.skills);

  return (
    <section
      id="skills"
      className="relative bg-bg-primary py-20 lg:py-32 px-6 lg:px-10 border-t border-border-muted"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-mega text-accent uppercase">
              My Skills
            </span>
            <div className="w-16 h-px bg-border-muted" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-text-primary">
            TECHNOLOGIES
            <br />
            I <span className="text-accent">WORK WITH.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {categories.map(([key, items], catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="border-l border-border-muted pl-5"
            >
              <p className="font-mono text-[10px] tracking-mega text-accent uppercase mb-5">
                {categoryLabels[key] || key}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-base text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <CrownMark className="w-6 h-6" />
          <p className="font-display text-xl tracking-wide text-text-secondary">
            GOOD CODE. <span className="text-accent">BETTER IDEAS.</span>
          </p>
        </div>
      </div>
    </section>
  );
}