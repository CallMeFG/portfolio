"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Timeline() {
  const experiences = [
    {
      title: "MEMBER OF TRAINING AND DEVELOPMENT DIVISION CSIRT PCR 2024/2025",
      desc: "I joined CSIRT PCR in 2024 and became a member of the Training and Development Division. In this division, I am tasked with creating training and development materials for CSIRT PCR members to better understand cybersecurity.",
      img: "/ukm_CSIRT.jpg",
      link: "https://pcr.ac.id/ukm/3293/csirt",
      icon: "fas fa-shield-alt",
      color: "#00f2c3",
    },
    {
      title: "BOOTCAMP FIGMA BATCH 2",
      desc: "I attended Figma Bootcamp Batch 2 organized by Dicoding Academy, an intensive program to learn the basics of UI/UX design using Figma. This bootcamp provides a comprehensive understanding of design principles, Figma workflows, and best practices in creating functional and aesthetic interfaces.",
      img: "/bootcamp_figma.jpg",
      link: null,
      icon: "fab fa-figma",
      color: "#F24E1E",
    },
    {
      title: "BOOTCAMP DATA ANALIS BATCH 1",
      desc: "I attended the Batch 1 Data Analyst Bootcamp organized by Dicoding Academy, an intensive program to learn the basics of data analysis using R, R Studio, and MS Excel. This bootcamp is designed to equip participants with technical skills in processing, analyzing, and visualizing data effectively using specialized tools.",
      img: "/bootcamp_data_analis.jpg",
      link: null,
      icon: "fas fa-chart-bar",
      color: "#276DC3",
    },
  ];

  return (
    <section id="experience" className="section" style={{ padding: "100px 0", position: "relative" }}>
      {/* Vertical timeline line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: "50%",
          top: "180px",
          bottom: "60px",
          width: "2px",
          background: "linear-gradient(to bottom, rgba(225,78,202,0.5), rgba(0,242,195,0.5), transparent)",
          transformOrigin: "top",
          zIndex: 0,
          display: "none",
        }}
        className="d-none d-lg-block"
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="text-center mb-5">
          <motion.h2
            className="title text-white font-weight-bold"
            style={{ fontSize: "3rem" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            MY <span className="text-info">EXPERIENCE</span>
          </motion.h2>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            The following is my life experience so far
          </motion.p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotateY: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              >
                <motion.div
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "20px",
                    padding: "30px",
                    marginBottom: "40px",
                    display: "flex",
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    alignItems: "center",
                    gap: "30px",
                    flexWrap: "wrap",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  whileHover={{
                    borderColor: `${exp.color}44`,
                    boxShadow: `0 10px 40px ${exp.color}15`,
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Accent glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-50%",
                      right: index % 2 === 0 ? "-20%" : "auto",
                      left: index % 2 !== 0 ? "-20%" : "auto",
                      width: "300px",
                      height: "300px",
                      background: `radial-gradient(circle, ${exp.color}10, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  {/* We moved the icon to the text container below to prevent overlapping with the image */}

                  <motion.div
                    style={{ flex: "1 1 300px", borderRadius: "15px", overflow: "hidden", position: "relative", height: "250px" }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Image src={exp.img} alt={exp.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                  </motion.div>
                  <div style={{ flex: "2 1 400px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                      <motion.div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: `${exp.color}20`,
                          border: `1px solid ${exp.color}40`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <i className={exp.icon} style={{ color: exp.color, fontSize: "16px" }} />
                      </motion.div>
                      <h4 className="text-white font-weight-bold mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>{exp.title}</h4>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>{exp.desc}</p>
                    {exp.link && (
                      <motion.a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-info btn-sm btn-round mt-3 interactive"
                        whileHover={{ scale: 1.05, boxShadow: "0 5px 20px rgba(29,233,182,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Here are the details
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
