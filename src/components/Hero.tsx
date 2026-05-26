"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const terminalLines = [
    "> SYSTEM BOOT...",
    "> LOADING DEVELOPER PROFILE...",
    "> NAME: FATHUR RIZKY ASSANI",
    "> ROLE: FULLSTACK DEVELOPER",
    "> SKILLS: PHP, PYTHON, JAVA, MYSQL, etc...",
    "> STATUS: READY TO BUILD AWESOME THINGS",
    "> _"
  ];

  useEffect(() => {
    if (textIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, textIndex === 0 ? 800 : 400);
      return () => clearTimeout(timer);
    }
  }, [textIndex, terminalLines.length]);

  const titleLetters = "FATHUR RIZKY".split("");

  return (
    <div className="page-header header-filter relative" ref={sectionRef} id="home" style={{ minHeight: "100vh", height: "auto", maxHeight: "none", overflow: "visible", paddingBottom: "100px" }}>
      <motion.div style={{ y: bgY, position: "absolute", inset: 0, zIndex: 0 }}>
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: `${6 + i * 3}px`,
            height: `${6 + i * 3}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${i % 2 === 0 ? "rgba(225,78,202,0.6)" : "rgba(0,242,195,0.6)"}, transparent)`,
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            zIndex: 1,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.3, 0.8, 0.5, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div className="container" style={{ zIndex: 10, opacity }}>
        <div className="row align-items-center justify-content-center" style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '100px' }}>
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {/* Letter-by-letter animated title */}
              <h1
                className="h1-seo text-white"
                style={{
                  fontSize: '4rem',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {titleLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05, type: "spring", stiffness: 200 }}
                    style={{
                      background: "linear-gradient(45deg, #e14eca, #ba54f5, #00f2fe)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                      marginRight: letter === " " ? "15px" : "0",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-white font-weight-light"
                style={{ fontSize: '1.5rem', marginTop: '20px' }}
              >
                <motion.span
                  animate={{ color: ["#ffffff", "#e14eca", "#00f2fe", "#ffffff"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Software Engineering
                </motion.span>
                {" | "}
                <motion.span
                  animate={{ color: ["#ffffff", "#00f2c3", "#ba54f5", "#ffffff"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  Fullstack Developer
                </motion.span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-light mt-4"
                style={{ fontSize: '1.1rem', maxWidth: '450px', lineHeight: 1.6 }}
              >
              Building reliable web applications with Laravel, modern technologies, and an engineering-driven mindset.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="btn-wrapper mt-5"
              >
                <motion.a
                  href="#about"
                  className="btn btn-primary btn-round btn-lg interactive"
                  style={{ boxShadow: '0 0 20px rgba(225, 78, 202, 0.4)', padding: '15px 30px', fontSize: '1.1rem' }}
                  whileHover={{
                    boxShadow: "0 0 40px rgba(225, 78, 202, 0.8)",
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-rocket" style={{ marginRight: '10px' }}></i> Explore My Universe
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="interactive"
              style={{
                backgroundColor: 'rgba(17, 17, 17, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 242, 254, 0.5)',
                borderRadius: '12px',
                padding: '25px',
                fontFamily: 'monospace',
                color: '#00f2fe',
                boxShadow: '0 10px 40px rgba(0, 242, 254, 0.2)',
                minHeight: '350px'
              }}
              whileHover={{
                boxShadow: "0 15px 50px rgba(0, 242, 254, 0.35)",
                borderColor: "rgba(0, 242, 254, 0.8)",
              }}
            >
              <div style={{ display: 'flex', gap: '8px', marginBottom: '25px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                {["#ff3636", "#ffb236", "#00f2c3"].map((c, i) => (
                  <motion.div
                    key={i}
                    style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: c }}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                ))}
                <motion.span
                  style={{ marginLeft: '15px', color: '#888', fontSize: '0.9rem', letterSpacing: '1px' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  guest@fathur-os:~
                </motion.span>
              </div>
              <div style={{ lineHeight: '2.2', fontSize: '1.1rem' }}>
                {terminalLines.slice(0, textIndex).map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    style={{ color: line.includes('READY') ? '#00f2c3' : '#00f2fe' }}
                  >
                    {line === "> _" ? (
                      <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                        {">"} _
                      </motion.span>
                    ) : (
                      line
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
