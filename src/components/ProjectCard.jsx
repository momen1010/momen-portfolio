import { FiExternalLink, FiGithub } from "react-icons/fi";
import CrownMark from "./CrownMark";

export default function ProjectCard({ project, index }) {
  return (
    <article className="group border border-border-muted bg-bg-secondary hover:border-accent transition-colors duration-300 flex flex-col">
      <div className="relative aspect-video overflow-hidden bg-bg-elevated">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <CrownMark className="w-8 h-8 opacity-40" />
            <span className="font-mono text-[10px] tracking-mega text-text-secondary uppercase">
              Screenshot Pending
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 font-mono text-xs text-text-secondary bg-bg-primary/70 backdrop-blur px-2 py-1">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-2xl tracking-wide text-text-primary">
          {project.name}
        </h3>

        {project.description && (
          <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
            {project.description}
          </p>
        )}

        {project.stack?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="font-mono text-[10px] tracking-widest uppercase text-text-secondary border border-border-muted px-2 py-1"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex items-center gap-5 border-t border-border-muted pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-text-primary hover:text-accent transition-colors"
            >
              Live Demo <FiExternalLink size={14} />
            </a>
          ) : (
            <span className="font-mono text-xs tracking-widest uppercase text-border-muted">
              Live Demo —
            </span>
          )}

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-text-primary hover:text-accent transition-colors"
            >
              View Code <FiGithub size={14} />
            </a>
          ) : (
            <span className="font-mono text-xs tracking-widest uppercase text-border-muted">
              View Code —
            </span>
          )}
        </div>
      </div>
    </article>
  );
}