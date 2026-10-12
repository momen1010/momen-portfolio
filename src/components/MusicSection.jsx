import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiPause } from "react-icons/fi";
import { siteConfig } from "../data/siteConfig";
import CrownMark from "./CrownMark";

export default function MusicSection() {
  const { song } = siteConfig;
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setProgress(audio.currentTime || 0);
    const onEnd = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !song.audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${sec}`;
  };

  const pct = duration ? (progress / duration) * 100 : 0;

  return (
    <section
      id="song"
      className="relative py-20 lg:py-32 overflow-hidden bg-bg-primary border-t border-border-muted"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <CrownMark className="w-4 h-4" />
            <span className="font-mono text-xs tracking-mega text-accent uppercase">
              Sound
            </span>
            <div className="w-16 h-px bg-border-muted" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-text-primary"
          >
            {song.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-text-secondary text-sm md:text-base"
          >
            {song.subheading}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-bg-secondary border border-border-muted p-5 lg:p-6"
          >
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="shrink-0 w-20 h-20 lg:w-28 lg:h-28 overflow-hidden bg-bg-elevated border border-border-muted">
                {song.cover ? (
                  <img
                    src={song.cover}
                    alt="cover"
                    className="w-full h-full object-cover grayscale"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <CrownMark className="w-8 h-8 opacity-40" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl lg:text-2xl text-text-primary truncate">
                  {song.title}
                </h3>
                <p className="text-text-secondary text-sm mt-1 truncate">
                  {song.artist}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={toggle}
                    disabled={!song.audio}
                    aria-label={playing ? "Pause" : "Play"}
                    className={`w-11 h-11 flex items-center justify-center transition-all duration-300 ${
                      song.audio
                        ? "bg-accent hover:bg-accent/90 text-text-primary"
                        : "bg-border-muted text-text-secondary cursor-not-allowed"
                    }`}
                  >
                    {playing ? (
                      <FiPause size={18} />
                    ) : (
                      <FiPlay size={18} className="ml-0.5" />
                    )}
                  </button>

                  <span className="text-xs font-mono text-text-secondary tabular-nums">
                    {fmt(progress)}
                  </span>
                  <span className="text-xs font-mono text-border-muted tabular-nums ml-auto">
                    {fmt(duration)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 h-1 bg-border-muted overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-150"
                style={{ width: `${pct}%` }}
              />
            </div>

            {!song.audio && (
              <p className="mt-4 text-xs text-text-secondary text-center italic">
                ♫ Add your audio file to{" "}
                <code className="text-accent">siteConfig.song.audio</code>
              </p>
            )}

            <audio
              ref={audioRef}
              src={song.audio || undefined}
              preload="metadata"
              loop
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 4 }}
            whileInView={{ opacity: 1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative bg-text-primary p-3 pb-12 shadow-2xl w-[260px] md:w-[300px]">
              <div className="aspect-square overflow-hidden bg-bg-elevated">
                {song.image ? (
                  <img
                    src={song.image}
                    alt="Song memory"
                    className="w-full h-full object-cover grayscale"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-mono text-[10px] tracking-mega text-border-muted uppercase">
                      Add Photo
                    </span>
                  </div>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-10 max-w-[180px] p-4 bg-accent shadow-2xl"
            >
              <p className="font-display text-text-primary text-base md:text-lg leading-tight">
                {song.note}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <p className="mt-14 text-center text-border-muted text-xs tracking-[0.3em]">
          ♫ ♫ ♫
        </p>
      </div>
    </section>
  );
}