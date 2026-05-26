"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import IDBadge from "./IDBadge";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const letterAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200 } },
};

function AnimatedTitle({ text, highlight, highlightColor }: { text: string; highlight: string; highlightColor: string }) {
  const words = text.split(" ");
  return (
    <motion.h2
      className="title text-white font-weight-bold"
      style={{ fontSize: "3rem", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={letterAnim}
          style={{
            color: word === highlight ? highlightColor : "#fff",
            display: "inline-block",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring" as const, stiffness: 200 }}
      style={{ textAlign: "center", padding: "15px 10px" }}
    >
      <div
        style={{
          fontSize: "2.5rem",
          fontWeight: 900,
          background: "linear-gradient(135deg, #e14eca, #00f2c3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}+
      </div>
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", letterSpacing: "2px", fontWeight: 600 }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section" style={{ padding: "100px 0", position: "relative" }}>
      {/* Background Decor */}
      <motion.div
        animate={{ x: [0, 30, -20, 10, 0], y: [0, -20, 15, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "20%", left: "-10%", width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(225, 78, 202, 0.15) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)", zIndex: -1,
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 30, -10, 0], y: [0, 15, -25, 10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "10%", right: "-5%", width: "350px", height: "350px",
          background: "radial-gradient(circle, rgba(0, 242, 195, 0.1) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)", zIndex: -1,
        }}
      />

      <div className="container">
        {/* Section Title */}
        <AnimatedTitle text="ABOUT ME" highlight="ME" highlightColor="#e14eca" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted text-center mb-5"
          style={{ fontSize: "1.1rem" }}
        >
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </motion.p>

        {/* Stats bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div
              className="d-flex justify-content-around"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "10px 0",
              }}
            >
              <AnimatedCounter target={9} label="TECH STACKS" />
              <AnimatedCounter target={3} label="CERTIFICATIONS" />
              <AnimatedCounter target={5} label="PROJECTS" />
            </div>
          </div>
        </div>

        {/* Two-column layout: About Text (left) + ID Badge (right) */}
        <div className="row justify-content-center align-items-center">
          {/* Left: About text */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" as const }}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "24px",
                padding: "35px",
              }}
              whileHover={{
                borderColor: "rgba(225, 78, 202, 0.2)",
                boxShadow: "0 10px 40px rgba(225, 78, 202, 0.05)",
              }}
            >
              <motion.h3
                className="text-white font-weight-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                About Me
              </motion.h3>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: "1.8" }}>
                {[
                  <>I&apos;m a <strong className="text-white">Fullstack Web Developer</strong> focused on building reliable and scalable web applications using Laravel, PHP, and database-driven systems.</>,
                  <>I enjoy <strong className="text-white">turning ideas</strong> into functional digital products, from reservation systems and cashier applications to smart parking and entertainment platforms.</>,
                  <>Beyond web development, I actively explore <strong className="text-white">AI technologies</strong>, automation tools, and modern developer ecosystems to continuously improve my technical skills.</>,
                  <>I&apos;m <strong className="text-white">passionate</strong> about continuous learning, problem-solving, and building systems that provide real value to users.</>,
                  <>I&apos;m open to collaboration, freelance opportunities, and real-world projects where I can contribute, learn, and grow as a <strong className="text-white">developer</strong>.</>,
                ].map((content, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.15, duration: 0.5 }}
                  >
                    {content}
                  </motion.p>
                ))}
              </div>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <motion.a
                  href="#contact-form"
                  className="btn btn-primary btn-round interactive"
                  whileHover={{ scale: 1.06, boxShadow: "0 0 25px rgba(225,78,202,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: ID Badge */}
          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" as const }}
            >
              <IDBadge />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
