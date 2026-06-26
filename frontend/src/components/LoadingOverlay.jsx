

import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO USE — App.jsx
//
//   const [isLoading, setIsLoading] = useState(true);
//   const [appReady,  setAppReady]  = useState(false);
//
//   // when your data / fonts are ready:
//   useEffect(() => {
//     // simulate load or wait for fonts/images
//     setTimeout(() => setIsLoading(false), 2200);
//   }, []);
//
//   return (
//     <>
//       <LoadingOverlay
//         isLoading={isLoading}
//         onExitComplete={() => setAppReady(true)}   // ← fires AFTER slide is done
//       />
//       {appReady && (
//         <Router>
//           <PageTransition>
//             <Routes>...</Routes>
//           </PageTransition>
//         </Router>
//       )}
//     </>
//   );
// ─────────────────────────────────────────────────────────────────────────────

// ── Steam Wisps ───────────────────────────────────────────────────────────────
const WISPS = [
  { left: "22%", delay: 0.0 },
  { left: "50%", delay: 0.65 },
  { left: "78%", delay: 1.3 },
];

const Wisp = ({ left, delay }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left,
      bottom: "100%",
      width: "5px",
      height: "24px",
      background:
        "linear-gradient(to top, rgba(196,154,108,0.38), transparent)",
      borderRadius: "50%",
      filter: "blur(2px)",
    }}
    animate={{
      y: [0, -50, -82],
      x: [0, 5, -4],
      opacity: [0, 0.5, 0],
      scaleX: [1, 1.5, 0.4],
    }}
    transition={{
      duration: 3.5,
      delay,
      repeat: Infinity,
      repeatDelay: 0.9,
      ease: "easeOut",
    }}
  />
);

// ── Letter Reveal ─────────────────────────────────────────────────────────────
const Letter = ({ char, index }) => (
  <motion.span
    className="inline-block"
    initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{
      duration: 0.9,
      delay: 0.01 + index * 0.07,
      ease: [0.215, 0.61, 0.355, 1],
    }}
  >
    {char}
  </motion.span>
);

// ── Orbiting dots — fully pre-computed, zero randomness ──────────────────────
const ORBIT_DOTS = [0, 72, 144, 216, 288].map((deg, i) => {
  const r = 90;
  // 5 equidistant waypoints around the full circle starting at this dot's angle
  const pts = [0, 1, 2, 3, 4].map((step) => {
    const rad = ((deg + step * 90) * Math.PI) / 180;
    return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
  });
  const half = i % 2 === 0 ? 3.5 : 2;
  return {
    id: i,
    xPath: pts.map((p) => p.x - half),
    yPath: pts.map((p) => p.y - half),
    big: i % 2 === 0,
    speed: 9 + i * 0.7,
    delay: i * 0.2,
  };
});

const OrbitDot = ({ xPath, yPath, big, speed, delay }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: big ? "7px" : "4px",
      height: big ? "7px" : "4px",
      background: big ? "#C49A6C" : "rgba(196,154,108,0.45)",
      top: "50%",
      left: "50%",
    }}
    animate={{ x: xPath, y: yPath }}
    transition={{ duration: speed, delay, repeat: Infinity, ease: "linear" }}
  />
);

// ── Cake SVG ──────────────────────────────────────────────────────────────────
const CakeSVG = () => (
  <motion.svg
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{
      duration: 0.65,
      delay: 0.38,
      ease: [0.175, 0.885, 0.32, 1.275],
    }}
  >
    <rect x="6" y="32" width="40" height="12" rx="3" fill="#C49A6C" />
    <rect x="8" y="22" width="36" height="11" rx="2" fill="#5D4037" />
    <rect x="10" y="14" width="32" height="9" rx="2" fill="#3E2723" />
    <path
      d="M10 14 Q14 9 18 13 Q22 8 26 12 Q30 7 34 11 Q38 8 42 14"
      stroke="rgba(255,255,255,0.85)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <rect x="23" y="5" width="6" height="10" rx="3" fill="#EF9A9A" />
    <path
      d="M23 8 Q26 7 29 8"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <motion.ellipse
      cx="26"
      cy="4"
      rx="3.5"
      ry="4.5"
      fill="#FFB74D"
      animate={{
        scaleY: [1, 1.35, 0.8, 1.2, 1],
        scaleX: [1, 0.8, 1.25, 0.85, 1],
      }}
      transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.ellipse
      cx="26"
      cy="4"
      rx="5.5"
      ry="7"
      fill="rgba(255,183,77,0.18)"
      animate={{ opacity: [0.18, 0.55, 0.18] }}
      transition={{ duration: 0.85, repeat: Infinity }}
    />
    <ellipse cx="26" cy="46" rx="22" ry="4.5" fill="rgba(196,154,108,0.15)" />
  </motion.svg>
);

// ── Main Component ────────────────────────────────────────────────────────────
const LoadingOverlay = ({ isLoading, onExitComplete }) => (
  <AnimatePresence onExitComplete={onExitComplete}>
    {isLoading && (
      <motion.div
        key="loading-screen"
        className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
        style={{ zIndex: 9999, background: "#FFFFFF" }}
        initial={{ y: "0%", opacity: 1 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{
          // Slides UP and out — stays fully opaque the whole way.
          // The page beneath is invisible until this is 100% gone.
          // onExitComplete fires only after this finishes.
          y: "-100%",
          opacity: 1,
          transition: { duration: 0.62, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        {/* Ambient blobs */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: "480px",
            height: "480px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background:
              "radial-gradient(circle, rgba(196,154,108,0.07) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: "360px",
            height: "360px",
            top: "-50px",
            left: "-50px",
            background:
              "radial-gradient(circle, rgba(196,154,108,0.05) 0%, transparent 70%)",
            borderRadius: "60% 40% 65% 35% / 55% 50% 50% 45%",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: "300px",
            height: "300px",
            bottom: "-50px",
            right: "-50px",
            background:
              "radial-gradient(circle, rgba(93,64,55,0.04) 0%, transparent 70%)",
            borderRadius: "40% 60% 35% 65% / 55% 45% 60% 40%",
          }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbit container */}
        <div className="relative" style={{ width: "200px", height: "200px" }}>
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ border: "1px dashed rgba(196,154,108,0.28)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: "22px",
              border: "1px solid rgba(196,154,108,0.13)",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {ORBIT_DOTS.map((d) => (
            <OrbitDot key={d.id} {...d} />
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            {/* Shadow */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                width: "80px",
                height: "13px",
                bottom: "14px",
                left: "50%",
                transform: "translateX(-50%)",
                background:
                  "radial-gradient(ellipse, rgba(62,39,35,0.16) 0%, transparent 70%)",
              }}
              animate={{ scaleX: [1, 1.14, 1], opacity: [0.4, 0.75, 0.4] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Float */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex items-center justify-center"
            >
              {/* Plate disc */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
                className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, #FFFFFF, #F8F8F8)",
                  boxShadow: [
                    "0 22px 55px rgba(196,154,108,0.20)",
                    "0 8px 22px rgba(62,39,35,0.08)",
                    "inset 0 1px 0 rgba(255,255,255,1)",
                  ].join(","),
                }}
              >
                <CakeSVG />
              </motion.div>

              {/* Steam */}
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "calc(100% - 2px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                }}
              >
                {WISPS.map((w) => (
                  <Wisp key={w.left} {...w} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand name */}
        <div className="mt-10 text-center">
          <h1
            className="font-serif font-bold"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              letterSpacing: "0.04em",
              color: "#3E2723",
            }}
          >
            {"Kruncheez".split("").map((ch, i) => (
              <Letter key={i} char={ch} index={i} />
            ))}
          </h1>

          <motion.div
            style={{
              height: "1px",
              width: "80%",
              margin: "8px auto 0",
              background:
                "linear-gradient(90deg, transparent, #C49A6C, transparent)",
              transformOrigin: "center",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.28, ease: "easeOut" }}
          />

          <motion.p
            style={{ color: "rgba(44,44,44,0.48)" }}
            className="text-xs uppercase tracking-[0.28em] mt-3"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.52, duration: 0.5 }}
          >
            Cafe & Patisserie
          </motion.p>
        </div>

        {/* Progress dots */}
        <motion.div
          className="flex gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.18 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="rounded-full"
              style={{ height: "6px", background: "#C49A6C" }}
              animate={{
                width: ["6px", "22px", "6px"],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.3,
                delay: i * 0.22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        <motion.p
          className="absolute bottom-10 text-xs uppercase tracking-widest"
          style={{ color: "rgba(44,44,44,0.32)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.3, 0.55, 0.35] }}
          transition={{
            delay: 1.65,
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          Crafting delicious moments
        </motion.p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default LoadingOverlay;
