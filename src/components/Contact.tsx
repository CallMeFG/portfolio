"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isHoveredBtn, setIsHoveredBtn] = useState(false);

  return (
    <section id="contact-form" style={{ padding: "80px 0", position: "relative", overflow: "hidden" }}>
      {/* Background Orbs to match the site theme */}
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "10%", left: "-5%", width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(225, 78, 202, 0.15) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)", zIndex: -1,
        }}
      />
      <motion.div
        animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "-10%", right: "-10%", width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(0, 242, 195, 0.1) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)", zIndex: -1,
        }}
      />

      <div className="container">
        <div
          className="row align-items-center p-6 md:p-[60px_40px]"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(15px)",
            borderRadius: "30px",
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
          }}
        >
          {/* Left Column: Copy & Socials */}
          <div className="col-lg-5 mb-5 mb-lg-0 pr-lg-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                color: "#fff",
                lineHeight: "1.2",
                marginBottom: "20px",
              }}
            >
              Let&apos;s Talk About <br />
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #e14eca, #00f2c3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600,
                }}
              >
                Your Next Project
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.05rem",
                lineHeight: "1.6",
                marginBottom: "50px",
              }}
            >
              Whether you&apos;re exploring new ideas, need technical support, or want to discuss collaboration, I&apos;m ready to help bring your vision to life.
            </motion.p>

            {/* Social Pills */}
            <div className="d-flex flex-column" style={{ gap: "15px" }}>
              {[
                { icon: "fab fa-instagram", text: "@rzky.sn_", href: "https://www.instagram.com/rzky.sn_?igsh=MTR6YmF0anFnNjdpZg==" },
                { icon: "fab fa-linkedin", text: "Fathur Rizky Assani", href: "https://www.linkedin.com/in/fathur-rizky-assani-7348b0307" },
                { icon: "fab fa-github", text: "@CallMeFG", href: "https://github.com/CallMeFG/" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, type: "spring" }}
                  whileHover={{
                    x: 10,
                    backgroundColor: "rgba(225, 78, 202, 0.15)",
                    borderColor: "rgba(225, 78, 202, 0.5)",
                    boxShadow: "0 0 15px rgba(225, 78, 202, 0.3)",
                  }}
                  className="interactive d-flex align-items-center"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    padding: "12px 24px",
                    borderRadius: "50px",
                    color: "#fff",
                    textDecoration: "none",
                    width: "fit-content",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <i className={social.icon} style={{ fontSize: "1.2rem", marginRight: "15px" }}></i>
                  <span style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: "0.5px" }}>{social.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="col-lg-7">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted! (Frontend simulation)");
              }}
            >
              <div className="form-group mb-4">
                <label style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginBottom: "10px", fontWeight: 500 }}>Full Name</label>
                <div className="row">
                  <div className="col-6 pr-2">
                    <input type="text" className="form-control" placeholder="First Name" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div className="col-6 pl-2">
                    <input type="text" className="form-control" placeholder="Last Name" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                </div>
              </div>

              <div className="form-group mb-4">
                <label style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginBottom: "10px", fontWeight: 500 }}>Email Address</label>
                <input type="email" className="form-control" placeholder="Email Address" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
              </div>

              <div className="form-group mb-4">
                <label style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginBottom: "10px", fontWeight: 500 }}>Phone Number</label>
                <div className="d-flex" style={{ gap: "10px" }}>
                  <div style={{ position: "relative" }}>
                    <select className="form-control" style={{ ...inputStyle, width: "100px", appearance: "none", padding: "0 18px", height: "52px", lineHeight: "52px" }} onFocus={handleFocus} onBlur={handleBlur}>
                      <option style={{ color: "#000", background: "#fff" }} value="+62">+62</option>
                      <option style={{ color: "#000", background: "#fff" }} value="+1">+1</option>
                    </select>
                    <i className="fas fa-chevron-down" style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.5)", pointerEvents: "none", fontSize: "0.8rem" }}></i>
                  </div>
                  <input type="tel" className="form-control" placeholder="Phone" style={{ ...inputStyle, flex: 1, height: "52px" }} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              </div>

              <div className="form-group mb-4">
                <label style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginBottom: "10px", fontWeight: 500 }}>Topic</label>
                <div style={{ position: "relative" }}>
                  <select className="form-control" style={{ ...inputStyle, appearance: "none", padding: "0 18px", height: "52px", lineHeight: "52px" }} onFocus={handleFocus} onBlur={handleBlur}>
                    <option style={{ color: "#000", background: "#fff" }} value="General Inquiry">General Inquiry</option>
                    <option style={{ color: "#000", background: "#fff" }} value="Project Collaboration">Project Collaboration</option>
                    <option style={{ color: "#000", background: "#fff" }} value="Job Opportunity">Job Opportunity</option>
                  </select>
                  <i className="fas fa-chevron-down" style={{ position: "absolute", right: "18px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.5)", pointerEvents: "none", fontSize: "0.8rem" }}></i>
                </div>
              </div>

              <div className="form-group mb-4">
                <label style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginBottom: "10px", fontWeight: 500 }}>Message</label>
                <textarea className="form-control" placeholder="Your Message" rows={4} required style={{ ...inputStyle, resize: "none" }} onFocus={handleFocus} onBlur={handleBlur}></textarea>
              </div>

              <div className="form-group mb-4 d-flex align-items-center">
                <input type="checkbox" id="agree" required style={{ width: "18px", height: "18px", accentColor: "#e14eca", marginRight: "10px", cursor: "pointer" }} />
                <label htmlFor="agree" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", margin: 0, cursor: "pointer" }}>
                  I agree to be contacted regarding this inquiry.
                </label>
              </div>

              <div className="d-flex justify-content-end mt-4">
                <motion.button
                  type="submit"
                  className="interactive"
                  onHoverStart={() => setIsHoveredBtn(true)}
                  onHoverEnd={() => setIsHoveredBtn(false)}
                  style={{
                    background: "linear-gradient(135deg, #e14eca, #ba54f5)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50px",
                    padding: "12px 28px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(225,78,202,0.4)",
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(225,78,202,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                  <motion.div
                    animate={{ rotate: isHoveredBtn ? 45 : 0 }}
                    style={{
                      backgroundColor: "#fff",
                      color: "#e14eca",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                    }}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </motion.div>
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Global style object for the form inputs
const inputStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  color: "#fff",
  padding: "14px 18px",
  fontSize: "0.95rem",
  lineHeight: "1.5",
  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)",
  transition: "all 0.3s ease",
  outline: "none",
};

// Handlers for focus/blur effects on inputs
const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = "#e14eca";
  e.target.style.backgroundColor = "rgba(255,255,255,0.08)";
  e.target.style.boxShadow = "0 0 15px rgba(225,78,202,0.3)";
};

const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = "rgba(255,255,255,0.1)";
  e.target.style.backgroundColor = "rgba(255,255,255,0.05)";
  e.target.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.2)";
};
