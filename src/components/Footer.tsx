"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://github.com/CallMeFG/", icon: "fab fa-github", label: "GitHub", color: "#fff" },
  { href: "https://www.instagram.com/rzky.sn_?igsh=MTR6YmF0anFnNjdpZg==", icon: "fab fa-instagram", label: "Instagram", color: "#E4405F" },
  { href: "https://www.linkedin.com/in/fathur-rizky-assani-7348b0307", icon: "fab fa-linkedin", label: "LinkedIn", color: "#0077B5" },
];

export default function Footer() {
  return (
    <footer className="footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Kolom Kiri */}
          <div className="col-lg-6 col-md-12 text-center text-lg-left mb-5 mb-lg-0">
            <motion.h4
              className="title text-white font-weight-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              FATHUR RIZKY ASSANI
            </motion.h4>
            <motion.p
              className="text-muted"
              style={{ fontSize: "0.85rem", maxWidth: "450px" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              A Fullstack Web Developer with hands-on experience in Laravel development, database design, and modern web technologies. Currently exploring React, AI engineering, and automation workflows.
            </motion.p>
          </div>

          {/* Kolom Kanan */}
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center align-items-lg-end">
            <motion.h5
              className="title text-white font-weight-bold mb-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              CONNECT WITH ME
            </motion.h5>
            <div className="btn-wrapper profile d-flex justify-content-center" style={{ gap: "12px" }}>
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon btn-neutral btn-round btn-simple interactive"
                  title={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{
                    scale: 1.25,
                    borderColor: link.color,
                    boxShadow: `0 0 20px ${link.color}40`,
                    rotate: 15,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", letterSpacing: "1px" }}>
            © {new Date().getFullYear()} CallMeFG. Crafted with <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }}>full effort</motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}