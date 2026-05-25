"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <div className="container">
        <div className="content-center brand">
          <motion.h1 
            className="h1-seo text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ 
              background: "linear-gradient(45deg, #e14eca, #ba54f5, #e14eca)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(225, 78, 202, 0.5)"
            }}
          >
            PORTFOLIO
          </motion.h1>
          <motion.h3 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            IT Professional | Software Engineer | Game Developer
          </motion.h3>
        </div>
      </div>
    </div>
  );
}
