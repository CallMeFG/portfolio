"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Ecommerce Website Display Design",
    desc: "Design a layout for an e-commerce website as part of my project. This image shows the interface I created using Figma, with a modern and user-friendly look. This design has a top navigation that contains a category menu, product search, notifications, and register and login buttons.",
    img: "/project_figma_ecommer.png",
    icons: ["/figma-icon_hd.png"]
  },
  {
    title: "Backend Website Ecommerce",
    desc: "In this project, I built an API that can be accessed via HTTP methods, such as GET, to retrieve product data from a database. The returned data is in JSON format, containing information such as product name, price, category, stock, and product creation and update times.",
    img: "/project_posstman.png",
    icons: ["/php-logo.png"]
  },
  {
    title: "Implementasi Website Absensi Mahasiswa",
    desc: "Online attendance system for students that aims to simplify the process of verifying attendance in teaching and learning activities. This website is designed so that students can do attendance independently before the lecture begins.",
    img: "/project_figma_absensi.png",
    icons: ["/html-icon_hd-removebg.png", "/css-icon.png", "/javascript-icon.png"]
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} id="projects" style={{ position: "relative", height: "300vh", background: "transparent" }}>
      {/* Sticky Container */}
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", paddingTop: "5vh" }}>
        
        <div className="container mb-5" style={{ zIndex: 10 }}>
            <h2 className="title text-white font-weight-bold text-center" style={{ fontSize: "3rem" }}>
              MY <span className="text-warning">PROJECTS</span>
            </h2>
            <p className="text-center text-muted">Scroll down to explore some of my personal and client projects.</p>
        </div>

        <motion.div style={{ x, display: "flex", gap: "50px", paddingLeft: "10%", paddingRight: "50%", alignItems: "center", height: "60vh" }}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              style={{
                width: "800px",
                height: "500px",
                background: "rgba(30, 30, 40, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "30px",
                display: "flex",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Image Side */}
              <div style={{ flex: 1, position: "relative", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} />
                </div>
              </div>
              {/* Text Side */}
              <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                  {project.icons.map((icon, i) => (
                    <div key={i} style={{ width: "30px", height: "30px", position: "relative" }}>
                      <Image src={icon} alt="tech" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} />
                    </div>
                  ))}
                </div>
                <h3 className="text-white font-weight-bold mb-3">{project.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8", fontSize: "0.95rem" }}>
                  {project.desc}
                </p>
                <div className="mt-4">
                  <button className="btn btn-warning btn-round btn-sm interactive">Case Study</button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
