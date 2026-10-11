import CrownMark from "./CrownMark";

export default function SideAnnotations() {
  return (
    <>
      {/* Left: Scroll Down */}
      <div className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4">
        <span
          className="font-mono text-[10px] tracking-mega text-text-secondary uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll Down
        </span>
        <div className="w-px h-16 bg-border-muted relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-scroll-line" />
        </div>
      </div>

      {/* Right: Music Vibe Sidebar */}
      <div className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-6">
        <CrownMark className="w-6 h-6" />
        <div
          className="font-display text-3xl tracking-wide text-text-primary leading-[0.9] text-right"
          style={{ writingMode: "vertical-rl" }}
        >
          UK DRILL
          <br />
          AMERICAN RAP
          <br />
          STREETWEAR
          <br />
          <span className="text-accent">PSYCHO MODE</span>
        </div>
        <p
          className="font-mono text-[10px] tracking-mega text-text-secondary uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Different Mind. Same Goal.
        </p>
      </div>
    </>
  );
}