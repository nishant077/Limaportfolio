import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/LIMALOGO.png";

/* ── SVG circular progress ring ── */
const ProgressRing = ({ progress }) => {
  const r = 108;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <svg
      width={240}
      height={240}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(-90deg)",
        pointerEvents: "none",
      }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx={120} cy={120} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={1.5} />
      <motion.circle
        cx={120}
        cy={120}
        r={r}
        fill="none"
        stroke="#FABD32"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray={circ}
        filter="url(#glow)"
        animate={{ strokeDashoffset: offset }}
        transition={{ ease: "linear", duration: 0.04 }}
      />
    </svg>
  );
};

/* ── Rotating orbital ring with a golden dot ── */
const OrbitalRing = ({ size, speed, direction, dotOpacity }) => (
  <motion.div
    style={{
      position: "absolute",
      width: size,
      height: size,
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.08)",
    }}
    animate={{ rotate: direction === "cw" ? 360 : -360 }}
    transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
  >
    <div
      style={{
        position: "absolute",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#FABD32",
        top: -3,
        left: "50%",
        transform: "translateX(-50%)",
        opacity: dotOpacity,
        boxShadow: "0 0 8px 2px rgba(250,189,50,0.6)",
      }}
    />
  </motion.div>
);

/* ── Radial particle ── */
const Particle = ({ angle, dist, size, delay }) => {
  const x = Math.cos(angle) * dist;
  const y = Math.sin(angle) * dist;
  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#FABD32",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
      }}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: [0, x * 0.4, x],
        y: [0, y * 0.4, y],
        opacity: [0, 0.55, 0],
        scale: [0, 1, 0],
      }}
      transition={{ duration: 2.5, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
};

/* ── Main component ── */
const Preloader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const particles = useRef(
    Array.from({ length: 16 }, (_, i) => {
      const angle = (i / 16) * Math.PI * 2;
      return {
        angle,
        dist: 110 + (i % 3) * 30,
        size: 2 + (i % 3),
        delay: (i * 0.15) % 1.8,
      };
    })
  ).current;

  useEffect(() => {
    const duration = 2600;
    const step = 100 / (duration / 16);
    const id = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(id);
          setTimeout(() => setIsVisible(false), 600);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, 16);
    return () => clearInterval(id);
  }, []);

  const letters = ["L", "I", "M", "A"];

  /* Shared ease for both curtain panels */
  const curtainEase = [0.76, 0, 0.24, 1];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <>
          {/* ═══════════════════════════════════════
              BACKGROUND: two solid panels that together fill
              the screen. On exit they split apart: top → up,
              bottom → down, revealing the page underneath.
              z-index: 9998  (behind the content layer)
          ═══════════════════════════════════════ */}

          {/* Top half panel */}
          <motion.div
            key="curtain-top"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "50vh",
              zIndex: 9998,
              background: "#0D1F4F",
            }}
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.95, ease: curtainEase, delay: 0.15 },
            }}
          />

          {/* Bottom half panel */}
          <motion.div
            key="curtain-bottom"
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50vh",
              zIndex: 9998,
              background: "#0D1F4F",
            }}
            initial={{ y: 0 }}
            exit={{
              y: "100%",
              transition: { duration: 0.95, ease: curtainEase, delay: 0.15 },
            }}
          />

          {/* Seam flash — thin gold line that appears at the split point */}
          <motion.div
            key="seam"
            style={{
              position: "fixed",
              top: "50%",
              left: 0,
              right: 0,
              height: 1,
              zIndex: 10000,
              background: "#FABD32",
              transformOrigin: "center",
              translateY: "-50%",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            exit={{
              scaleX: [0, 1, 1, 0],
              opacity: [0, 0.5, 0.5, 0],
              transition: { duration: 0.6, times: [0, 0.25, 0.75, 1] },
            }}
          />

          {/* ═══════════════════════════════════════
              CONTENT LAYER — floats above the panels.
              Background is transparent so the panels below
              act as the solid background during loading.
              z-index: 9999
          ═══════════════════════════════════════ */}
          <motion.div
            key="content"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              overflow: "hidden",
              pointerEvents: "none",
            }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {/* Radial glow — sits on top of the panel bg */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(22,45,107,0.95) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Ambient blobs */}
            <motion.div
              style={{
                position: "absolute",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(250,189,50,0.06) 0%, transparent 70%)",
                top: "-10%",
                right: "-10%",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              style={{
                position: "absolute",
                width: 350,
                height: 350,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(22,45,107,0.4) 0%, transparent 70%)",
                bottom: "-8%",
                left: "-8%",
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Orbital rings */}
            <OrbitalRing size={280} speed={10} direction="cw" dotOpacity={0.9} />
            <OrbitalRing size={230} speed={7} direction="ccw" dotOpacity={0.6} />
            <OrbitalRing size={340} speed={16} direction="cw" dotOpacity={0.35} />

            {/* Particles */}
            {particles.map((p, i) => (
              <Particle key={i} {...p} />
            ))}

            {/* Central content */}
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>

              {/* Progress ring + logo */}
              <div style={{ position: "relative", width: 240, height: 240, marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ProgressRing progress={counter} />

                <motion.div
                  style={{
                    position: "absolute",
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    border: "1px solid rgba(250,189,50,0.2)",
                  }}
                  animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.img
                  src={logo}
                  alt="LIMA Logo"
                  style={{ width: 120, height: 120, objectFit: "contain", position: "relative", zIndex: 1 }}
                  initial={{ scale: 0.55, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                />
              </div>

              {/* LIMA letters */}
              <div style={{ display: "flex", gap: 10, marginBottom: 20, overflow: "hidden" }}>
                {letters.map((letter, i) => (
                  <motion.span
                    key={letter}
                    style={{
                      color: "#fff",
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
                      letterSpacing: "0.28em",
                      display: "inline-block",
                      lineHeight: 1,
                    }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 0.3 + i * 0.12, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Expanding divider */}
              {/* <motion.div
                style={{ height: 1, background: "rgba(255,255,255,0.18)", marginBottom: 18 }}
                initial={{ width: 0 }}
                animate={{ width: 180 }}
                transition={{ delay: 0.85, duration: 0.7, ease: "easeOut" }}
              /> */}

              {/* Counter */}
              <motion.div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <span
                  style={{
                    color: "#FABD32",
                    fontFamily: "monospace",
                    fontSize: "1.35rem",
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 12px rgba(250,189,50,0.45)",
                  }}
                >
                  {Math.round(counter).toString().padStart(3, "0")}
                  <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem" }}>%</span>
                </span>
                <motion.span
                  style={{
                    color: "rgba(255,255,255,0.25)",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.38em",
                    fontWeight: 300,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  Initializing
                </motion.span>
              </motion.div>

              {/* Progress bar */}
              <div
                style={{
                  marginTop: 14,
                  width: 200,
                  height: 1,
                  background: "rgba(255,255,255,0.08)",
                  overflow: "hidden",
                  borderRadius: 1,
                }}
              >
                <motion.div
                  style={{ height: "100%", background: "linear-gradient(90deg, #FABD32, #FDE68A)", borderRadius: 1 }}
                  initial={{ width: 0 }}
                  animate={{ width: `${counter}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
