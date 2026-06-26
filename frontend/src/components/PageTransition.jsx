// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";

// const PageTransition = ({ children }) => {
//   const location = useLocation();

//   const pageVariants = {
//     initial: {
//       opacity: 0,
//       y: 20,
//       scale: 0.98,
//     },
//     in: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//     },
//     out: {
//       opacity: 0,
//       y: -20,
//       scale: 1.02,
//     },
//   };

//   const pageTransition = {
//     type: "tween",
//     ease: "anticipate",
//     duration: 0.6,
//   };

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={location.pathname}
//         initial="initial"
//         animate="in"
//         exit="out"
//         variants={pageVariants}
//         transition={pageTransition}
//         className="w-full min-h-screen"
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default PageTransition;


import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// ─── TIMING (ms) ──────────────────────────────────────────────────────────────
//
//   0ms    panels start closing  (scaleY 0→1, wipe DOWN)
//   620ms  panels fully closed   → show label + scrollTo(0)
//   820ms  hide label            → panels start opening (scaleY 1→0, wipe UP)
//   1600ms panels fully open     → idle
//
const T_LABEL_SHOW  = 620;
const T_PANELS_OPEN = 820;
const T_IDLE        = 1600;

const ROUTE_LABELS = {
  "/":             "Home",
  "/menu":         "Our Menu",
  "/custom-cakes": "Custom Cakes",
  "/our-story":    "Our Story",
  "/locations":    "Locations",
};

// Fixed positions — never random, never re-computed on re-render
const PARTICLES = [
  { id: 0, x: 18, y: 30, s: 3, d: 0.10 },
  { id: 1, x: 33, y: 62, s: 2, d: 0.19 },
  { id: 2, x: 48, y: 35, s: 4, d: 0.27 },
  { id: 3, x: 62, y: 55, s: 2, d: 0.14 },
  { id: 4, x: 75, y: 30, s: 3, d: 0.22 },
  { id: 5, x: 22, y: 72, s: 2, d: 0.31 },
  { id: 6, x: 56, y: 70, s: 3, d: 0.17 },
  { id: 7, x: 82, y: 48, s: 2, d: 0.25 },
  { id: 8, x: 40, y: 22, s: 4, d: 0.08 },
  { id: 9, x: 70, y: 67, s: 2, d: 0.34 },
];

const PANEL_BG = (i) =>
  i % 2 === 0
    ? "linear-gradient(180deg, #3E2723 0%, #5D4037 55%, #C49A6C 100%)"
    : "linear-gradient(180deg, #C49A6C 0%, #5D4037 50%, #3E2723 100%)";

// ── Curtain ───────────────────────────────────────────────────────────────────
// Always in the DOM — never mounts/unmounts.
// "closed" → scaleY 1 (covers screen)
// "open"   → scaleY 0 (invisible, panels above viewport)
const Curtain = ({ phase }) => (
  <div
    className="fixed inset-0 flex pointer-events-none"
    style={{ zIndex: 9998 }}
  >
    {[0, 1, 2, 3, 4].map(i => (
      <motion.div
        key={i}
        className="flex-1 origin-top"
        style={{ background: PANEL_BG(i) }}
        animate={{ scaleY: phase === "closed" ? 1 : 0 }}
        transition={{
          duration: 0.52,
          delay:    i * 0.052,
          ease:     [0.76, 0, 0.24, 1],
        }}
      />
    ))}
  </div>
);

// ── Route Label ───────────────────────────────────────────────────────────────
const RouteLabel = ({ label, visible }) => (
  <AnimatePresence mode="wait">
    {visible && (
      <motion.div
        key={label}
        className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none"
        style={{ zIndex: 9999 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <motion.div
          style={{ height: "1px", width: "68px", background: "#C49A6C" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.38, delay: 0.04, ease: "easeOut" }}
        />

        <motion.p
          className="uppercase tracking-[0.4em] text-xs mt-5 mb-3"
          style={{ color: "#C49A6C" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.10 }}
        >
          Kruncheez
        </motion.p>

        <motion.h2
          className="font-serif font-bold"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", color: "#FFFFFF" }}
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.46, delay: 0.16, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {label}
        </motion.h2>

        <motion.div
          style={{ height: "1px", width: "68px", background: "#C49A6C" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.38, delay: 0.30, ease: "easeOut" }}
        />

        {PARTICLES.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: `${p.s}px`, height: `${p.s}px`,
              background: "rgba(196,154,108,0.75)",
            }}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: [0, 0.85, 0], scale: [0, 1, 0], y: -88 }}
            transition={{ duration: 1.4, delay: p.d, ease: "easeOut" }}
          />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

// ── State machine ─────────────────────────────────────────────────────────────
//
//  "idle"          curtain OPEN,   label hidden   ← normal browsing state
//  "closing"       curtain → CLOSED               ← panels wipe down
//  "labelVisible"  curtain CLOSED, label shown    ← user sees page name
//  "opening"       curtain → OPEN,  label hidden  ← panels wipe up, reveal page
//
const PageTransition = ({ children }) => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const timers   = useRef([]);

  const [stage,     setStage]     = useState("idle");
  const [labelPath, setLabelPath] = useState(location.pathname);

  const label        = ROUTE_LABELS[labelPath] ?? "Kruncheez";
  const curtainPhase = (stage === "idle" || stage === "opening") ? "open" : "closed";
  const labelVisible = stage === "labelVisible";

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  const later = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  };

  useEffect(() => {
    // Skip on initial mount — no transition needed when first loading
    if (location.pathname === prevPath.current) return;
    prevPath.current = location.pathname;

    clearTimers();

    // Stage 1: panels close
    setStage("closing");

    // Stage 2: panels fully closed → show label, scroll to top
    // React Router has already swapped children by now (it's synchronous)
    // The new page is rendered but hidden behind the closed curtain
    later(() => {
      setLabelPath(location.pathname);
      setStage("labelVisible");
      window.scrollTo({ top: 0, behavior: "instant" });
    }, T_LABEL_SHOW);

    // Stage 3: hide label, open panels to reveal new page
    later(() => {
      setStage("opening");
    }, T_PANELS_OPEN);

    // Stage 4: fully open, back to normal
    later(() => {
      setStage("idle");
    }, T_IDLE);

    return clearTimers;
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Curtain — always mounted, never remounts */}
      <Curtain phase={curtainPhase} />

      {/* Route label — AnimatePresence handles its fade in/out */}
      <RouteLabel label={label} visible={labelVisible} />

      {/*
        ─── NO key prop ───
        If this div had key={location.pathname}, React would unmount+remount it
        on every navigation, causing opacity:0 flash AFTER the curtain opens.

        ─── NO displayChildren state ───
        Previous version stored children in state and called setDisplayChildren
        inside a setTimeout. The setTimeout captured a stale `children` ref
        (the old page) because it closed over the value at effect-run time,
        not at callback-run time. This caused some routes to briefly flash
        the previous page content, and on /custom-cakes and /locations the
        loading overlay would re-trigger.

        React Router swaps `children` synchronously when location changes.
        By the time our T_LABEL_SHOW timer fires (620ms later), the correct
        new page is already in children. The curtain covers the swap entirely.
      */}
      <div className="w-full min-h-screen">
        {children}
      </div>
    </>
  );
};

export default PageTransition;