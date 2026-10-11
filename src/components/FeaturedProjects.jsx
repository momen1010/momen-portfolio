import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { siteConfig } from "../data/siteConfig";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative bg-bg-primary py-20 lg:py-32 px-6 lg:px-10 border-t border-border-muted"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs tracking-mega text-accent uppercase">
                Featured Projects
              </span>
              <div className="w-16 h-px bg-border-muted" />
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-text-primary">
              REAL PROJECTS.
              <br />
              REAL <span className="text-accent">SOLUTIONS.</span>
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-text-secondary hover:text-accent transition-colors"
          >
            View All Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
