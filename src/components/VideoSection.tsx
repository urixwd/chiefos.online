import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Star } from "lucide-react";

const MAIN_VIDEO_ID = "9QpBdaGWWLU";
const COLS = 4;
const ROWS = 8;
const tiles = Array.from({ length: COLS * ROWS }, (_, i) => ({
  col: i % COLS,
  row: Math.floor(i / COLS),
}));

const videos = [
  { id: "9QpBdaGWWLU", title: "The value customers get with ChiefOS" },
  { id: "LsHHe4BbVNA", title: "Chrysoula Dardavesi - Vernicos Yachts" },
  { id: "S4oBW5HKf54", title: "Ofer Weissmann - Broker" },
  { id: "5URIqGbVYN8", title: "Katerina Goutou - FYLY" },
  { id: "tm33XJuxhVk", title: "Aoife McElhinney - Lloyd's Broker" },
  { id: "9SBqY-aZSwI", title: "Sami Maoua - Yacht-pool" },
  { id: "IpAbp_8tb_Q", title: "Evan Whelan - Lloyd's Broker" },
  { id: "W0p3ElokOXE", title: "Daniele Arcai - Boomerang Yachts" },
  { id: "_q-55UJq7Rk", title: "Aris Tsirikos - Vernicos Yachts" },
  { id: "tXLHxrQIYWI", title: "What would you do with extra free time?" },
];

const bullets = [
  {
    icon: TrendingUp,
    title: "Maximize revenue",
    description: "Unlock tailored upsell recommendations based on guest profiles.",
  },
  {
    icon: Clock,
    title: "Save time",
    description: "Automate repetitive tasks and focus on what truly matters.",
  },
  {
    icon: Star,
    title: "Better experience",
    description: "Exceed guest expectations and turn bookings into your reputation.",
  },
];

type Phase = "idle" | "covering" | "revealing";

export const VideoSection = ({ sectionId }: { sectionId: string }) => {
  const [activeVideoId, setActiveVideoId] = useState(MAIN_VIDEO_ID);
  const [pendingVideoId, setPendingVideoId] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [autoplay, setAutoplay] = useState(false);

  const handleThumbnailClick = (videoId: string) => {
    if (phase !== "idle") return;
    setPendingVideoId(videoId);
    setAutoplay(true);
    setPhase("covering");
  };

  // When all tiles are fully in ("covering" done), swap video and start reveal
  const handleCoverComplete = () => {
    if (phase !== "covering") return;
    setActiveVideoId(pendingVideoId!);
    // Small tick so iframe remounts before tiles pull back
    setTimeout(() => setPhase("revealing"), 80);
  };

  const handleRevealComplete = () => {
    if (phase !== "revealing") return;
    setPhase("idle");
    setPendingVideoId(null);
  };

  const thumbnails = videos.filter((v) => v.id !== activeVideoId);

  return (
    <section id={sectionId} className="bg-chiefnavy py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Bullet Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <span className="inline-block font-gilroy text-chiefyellow text-sm font-semibold tracking-widest uppercase">
              See it in action
            </span>

            <div className="space-y-8">
              {bullets.map((bullet, i) => (
                <motion.div
                  key={bullet.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-chiefyellow/10 border border-chiefyellow/20 flex items-center justify-center">
                    <bullet.icon className="w-6 h-6 text-chiefyellow" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-gilroy text-2xl font-semibold text-white">
                      {bullet.title}
                    </h3>
                    <p className="font-gilroy text-white/60 text-base leading-relaxed">
                      {bullet.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Video Player + Thumbnails */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            {/* Main Video */}
            <div className="w-full max-w-[300px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-chiefyellow/30 relative">
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  key={activeVideoId}
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideoId}?rel=0&modestbranding=1${autoplay ? "&autoplay=1" : ""}`}
                  title="ChiefOS video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Tiles overlay */}
                {phase !== "idle" && (
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                      gridTemplateRows: `repeat(${ROWS}, 1fr)`,
                    }}
                  >
                    {tiles.map(({ col, row }, i) => {
                      // diagonal stagger: tiles closer to top-left appear first
                      const staggerDelay = (col + row) * 0.035;
                      const isCovering = phase === "covering";
                      return (
                        <motion.div
                          key={i}
                          className="bg-chiefnavy"
                          initial={{ scaleY: isCovering ? 0 : 1 }}
                          animate={{ scaleY: isCovering ? 1 : 0 }}
                          transition={{
                            duration: 0.18,
                            delay: staggerDelay,
                            ease: "easeInOut",
                          }}
                          style={{ transformOrigin: isCovering ? "top" : "bottom" }}
                          onAnimationComplete={
                            // Only fire callback from the last tile (bottom-right)
                            i === tiles.length - 1
                              ? isCovering
                                ? handleCoverComplete
                                : handleRevealComplete
                              : undefined
                          }
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-5 gap-2 w-full max-w-[300px]">
              {thumbnails.map((video) => (
                <button
                  key={video.id}
                  onClick={() => handleThumbnailClick(video.id)}
                  title={video.title}
                  disabled={phase !== "idle"}
                  className="relative rounded-lg overflow-hidden aspect-[9/16] group ring-1 ring-white/10 hover:ring-chiefyellow/60 transition-all duration-200 disabled:cursor-wait"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-200" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-6 h-6 rounded-full bg-chiefyellow flex items-center justify-center">
                      <svg className="w-3 h-3 text-chiefnavy ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
