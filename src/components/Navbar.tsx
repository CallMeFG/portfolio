"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-dark bg-dark' : 'navbar-transparent'}`}
      style={{
        transition: 'all 0.3s ease-in-out',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
      }}
    >
      <div className="container">
        <div className="navbar-translate">
          <Link href="/" className="navbar-brand text-white font-weight-bold" style={{ fontSize: "1.2rem" }}>
            <span style={{ color: "#e14eca" }}>CallMe</span>FG
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div className="d-none d-lg-flex justify-content-end w-100">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <a href="#home" className="nav-link text-white font-weight-bold interactive">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#about" className="nav-link text-white font-weight-bold interactive">
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#experience" className="nav-link text-white font-weight-bold interactive">
                Experience
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#projects" className="nav-link text-white font-weight-bold interactive">
                Projects
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#contact" className="nav-link text-white font-weight-bold interactive">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
