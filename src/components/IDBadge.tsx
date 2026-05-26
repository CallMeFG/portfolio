"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function IDBadge() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const dragY = useMotionValue(0);
  const dragX = useMotionValue(0);
  const springY = useSpring(dragY, { stiffness: 200, damping: 18 });
  const springX = useSpring(dragX, { stiffness: 200, damping: 18 });

  const rotateX = useTransform(springY, [-120, 0, 180], [12, 0, -15]);
  const rotateY = useTransform(springX, [-80, 0, 80], [15, 0, -15]);
  const rotateZ = useTransform(springX, [-80, 0, 80], [5, 0, -5]);
  const cardScale = useTransform(springY, [-120, 0, 180], [1.03, 1, 1.06]);

  const lanyardEndY = useTransform(springY, (v: number) => 140 + v);
  const lanyardEndX = useTransform(springX, (v: number) => 155 + v * 0.3);
  const lanyardControlY = useTransform(springY, (v: number) => 70 + v * 0.4);
  const lanyardControlX = useTransform(springX, (v: number) => 155 + v * 0.15);

  const shadowBlur = useTransform(springY, [0, 180], [20, 60]);
  const shadowOpacity = useTransform(springY, [0, 180], [0.4, 0.7]);

  return (
    <div
      ref={constraintsRef}
      className="d-flex flex-column align-items-center"
      style={{ perspective: "1200px", minHeight: "500px", position: "relative" }}
    >
      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-muted mb-2 text-center"
        style={{ fontSize: "0.85rem" }}
      >
        ↕ Grab & pull the badge!
      </motion.p>

      {/* Lanyard SVG */}
      <svg
        width="310"
        height="180"
        viewBox="0 0 310 180"
        style={{
          position: "absolute",
          top: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <circle cx="155" cy="8" r="5" fill="#444" stroke="#666" strokeWidth="2" />
        <motion.path
          stroke="url(#ropeGrad)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          style={{
            d: useTransform(
              [lanyardControlX, lanyardControlY, lanyardEndX, lanyardEndY],
              ([cx, cy, ex, ey]) => `M 155 13 Q ${cx} ${cy} ${ex} ${ey}`
            ),
          }}
        />
        <motion.path
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          style={{
            d: useTransform(
              [lanyardControlX, lanyardControlY, lanyardEndX, lanyardEndY],
              ([cx, cy, ex, ey]) =>
                `M 157 15 Q ${(cx as number) + 2} ${(cy as number) + 3} ${(ex as number) + 2} ${(ey as number) + 3}`
            ),
            filter: "blur(3px)",
          }}
        />
        <defs>
          <linearGradient id="ropeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f2c3" />
            <stop offset="50%" stopColor="#ba54f5" />
            <stop offset="100%" stopColor="#e14eca" />
          </linearGradient>
        </defs>
        <motion.g
          style={{
            x: useTransform(lanyardEndX, (v: number) => v - 155),
            y: useTransform(lanyardEndY, (v: number) => v - 140),
          }}
        >
          <rect x="145" y="133" width="20" height="12" rx="3" fill="#999" stroke="#bbb" strokeWidth="1" />
          <rect x="148" y="136" width="14" height="2" rx="1" fill="#666" />
          <rect x="148" y="140" width="14" height="2" rx="1" fill="#666" />
        </motion.g>
      </svg>

      {/* Draggable Card */}
      <motion.div
        drag
        dragConstraints={{ top: -100, bottom: 150, left: -60, right: 60 }}
        dragElastic={0.08}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false);
          dragY.set(0);
          dragX.set(0);
        }}
        style={{
          x: springX,
          y: springY,
          rotateX,
          rotateY,
          rotateZ,
          scale: cardScale,
          cursor: isDragging ? "grabbing" : "grab",
          zIndex: 10,
          marginTop: "130px",
          transformStyle: "preserve-3d",
        }}
        onDrag={(_, info) => {
          dragY.set(info.offset.y);
          dragX.set(info.offset.x);
        }}
        whileHover={isDragging ? {} : { scale: 1.02 }}
      >
        <div
          style={{
            width: "300px",
            borderRadius: "18px",
            background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            border: "1px solid rgba(0, 242, 195, 0.3)",
            overflow: "hidden",
            userSelect: "none",
            transformStyle: "preserve-3d",
            position: "relative",
          }}
        >
          {/* 3D shine overlay */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)",
              borderRadius: "18px",
              zIndex: 20,
              pointerEvents: "none",
              opacity: useTransform(springY, [-120, 0, 180], [0.8, 0.3, 0.6]),
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              zIndex: 19,
              pointerEvents: "none",
              boxShadow: useTransform(
                [shadowBlur, shadowOpacity],
                ([blur, opacity]) =>
                  `0 ${blur}px ${(blur as number) * 2}px rgba(0,0,0,${opacity}), inset 0 1px 0 rgba(255,255,255,0.1)`
              ),
            }}
          />

          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #e14eca, #ba54f5)",
              padding: "14px 20px",
              textAlign: "center",
              transform: "translateZ(2px)",
            }}
          >
            <div style={{ fontSize: "0.55rem", letterSpacing: "3px", color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: "3px" }}>
              DEVELOPER IDENTIFICATION
            </div>
            <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#fff", letterSpacing: "2px", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
              CALLMEFG
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "18px", transform: "translateZ(1px)" }}>
            <div className="d-flex align-items-center" style={{ gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00f2c3, #0098f0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#000",
                  flexShrink: 0,
                  boxShadow: "0 4px 15px rgba(0,242,195,0.3)",
                  transform: "translateZ(4px)",
                }}
              >
                FR
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>Fathur Rizky Assani</div>
                <div style={{ color: "#00f2c3", fontSize: "0.7rem", fontWeight: 600 }}>Fullstack Developer</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {[
                { label: "DIVISION", value: "Fullstack", icon: "fas fa-code" },
                { label: "CLEARANCE", value: "Level 3", icon: "fas fa-key" },
                { label: "SPECIALTY", value: "Laravel", icon: "fas fa-palette" },
                { label: "STATUS", value: "Active", icon: "fas fa-circle", iconColor: "#00f2c3" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transform: "translateZ(3px)",
                  }}
                >
                  <div className="d-flex align-items-center" style={{ gap: "5px", marginBottom: "3px" }}>
                    <i className={stat.icon} style={{ fontSize: "7px", color: stat.iconColor || "rgba(255,255,255,0.3)" }} />
                    <span style={{ fontSize: "0.5rem", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>{stat.label}</span>
                  </div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.8rem" }}>{stat.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "14px", display: "flex", justifyContent: "center", gap: "2px", opacity: 0.2 }}>
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} style={{ width: i % 4 === 0 ? "2.5px" : "1px", height: "22px", background: "#fff", borderRadius: "0.5px" }} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "4px", fontSize: "0.5rem", letterSpacing: "2px", color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>
              ID-2024-CALLMEFG-001
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
