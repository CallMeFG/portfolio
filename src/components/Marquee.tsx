"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  { text: "JAVA", icon: "fab fa-java", color: "#ED8B00" },
  { text: "PYTHON", icon: "fab fa-python", color: "#3776AB" },
  { text: "PHP / LARAVEL", icon: "fab fa-php", color: "#777BB4" },
  { text: "HTML5 & CSS3", icon: "fab fa-html5", color: "#E34F26" },
  { text: "MYSQL", icon: "fas fa-database", color: "#4479A1" },
  { text: "FIGMA", icon: "fab fa-figma", color: "#F24E1E" },
  { text: "GITHUB", icon: "fab fa-github", color: "#ffffff" },
  { text: "WORDPRESS", icon: "fab fa-wordpress", color: "#21759B" },
  { text: "CYBERSECURITY", icon: "fas fa-shield-alt", color: "#00f2c3" },
  { text: "R LANGUAGE", icon: "fas fa-chart-line", color: "#276DC3" },
];

function MarqueeRow({ direction = "left", speed = 30 }: { direction?: "left" | "right"; speed?: number }) {
  const doubled = [...items, ...items];
  const totalWidth = doubled.length * 250;

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap" as const,
        position: "relative",
        padding: "15px 0",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "150px",
          height: "100%",
          background: "linear-gradient(to right, #171717, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "150px",
          height: "100%",
          background: "linear-gradient(to left, #171717, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ x: direction === "left" ? [0, -totalWidth / 2] : [-totalWidth / 2, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ display: "inline-flex", gap: "30px" }}
      >
        {doubled.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              padding: "12px 28px",
              borderRadius: "50px",
              border: `1px solid ${item.color}33`,
              background: `${item.color}0D`,
              backdropFilter: "blur(5px)",
              transition: "all 0.3s ease",
              cursor: "default",
              flexShrink: 0,
              minWidth: "200px",
            }}
            className="marquee-pill"
          >
            <i className={item.icon} style={{ fontSize: "24px", color: item.color }} />
            <span
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section style={{ padding: "60px 0", overflow: "hidden", position: "relative" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <MarqueeRow direction="left" speed={35} />
        <MarqueeRow direction="right" speed={40} />
      </motion.div>
    </section>
  );
}
