import { FiPlay } from "react-icons/fi";

export default function MusicIdentityWidget() {
  return (
    <div className="flex items-center gap-3 border border-border-muted bg-bg-secondary/70 backdrop-blur px-3 py-2 max-w-[280px]">
      {/* Thumb */}
      <div className="w-10 h-10 bg-bg-elevated flex items-center justify-center border border-border-muted shrink-0">
        <FiPlay size={14} className="text-accent" />
      </div>

      {/* Info */}
      <div className="flex flex-col min-w-0">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
          UK Drill Type Beat
        </span>
        <span className="font-mono text-[10px] text-text-secondary truncate">
          by Mo'men
        </span>
      </div>

      {/* Decorative waveform */}
      <div className="flex items-end gap-[2px] h-6 ml-auto" aria-hidden="true">
        {[4, 8, 6, 10, 5, 12, 7, 9, 3, 11, 6, 8].map((h, i) => (
          <span
            key={i}
            className="w-[2px] bg-border-muted"
            style={{ height: `${h * 2}px` }}
          />
        ))}
      </div>
    </div>
  );
}