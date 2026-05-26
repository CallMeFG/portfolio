"use client";

import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section id="projects" style={{ padding: "100px 0", position: "relative", background: "transparent" }}>
      <div className="container">
        <div className="mb-5" style={{ zIndex: 10 }}>
            <h2 className="title text-white font-weight-bold text-center" style={{ fontSize: "3rem" }}>
              MY <span className="text-warning">PROJECTS</span>
            </h2>
            <p className="text-center text-muted mb-5">Scroll down to explore some of my personal and client projects.</p>
        </div>

        <div 
          className="flex overflow-x-auto pb-10 px-[5vw] lg:px-0 project-carousel" 
          style={{ 
            gap: "30px",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {/* Elegant Custom Scrollbar */}
          <style dangerouslySetInnerHTML={{__html: `
            .project-carousel::-webkit-scrollbar {
              height: 8px;
            }
            .project-carousel::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.05);
              border-radius: 10px;
              margin: 0 5vw;
            }
            .project-carousel::-webkit-scrollbar-thumb {
              background: linear-gradient(90deg, #e14eca, #00f2fe);
              border-radius: 10px;
            }
            .project-carousel::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(90deg, #ba54f5, #00f2c3);
            }
          `}} />

          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col lg:flex-row relative shrink-0 overflow-hidden rounded-[30px] border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-[#1e1e2899] backdrop-blur-[20px] w-[85vw] lg:w-[900px]"
              style={{ scrollSnapAlign: "center" }}
            >
              {/* Image Side */}
              <div className="relative flex items-center justify-center p-5 bg-white/5 w-full lg:w-1/2 h-[250px] lg:h-auto min-h-[300px]">
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} />
                </div>
              </div>
              {/* Text Side */}
              <div className="flex flex-col justify-center p-8 lg:p-12 w-full lg:w-1/2">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
