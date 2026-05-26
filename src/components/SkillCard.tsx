"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceModal from './ExperienceModal';

const iconMap: Record<string, string> = {
  "figma": "fab fa-figma",
  "github": "fab fa-github",
  "html": "fab fa-html5",
  "java": "fab fa-java",
  "mysql": "fas fa-database",
  "php": "fab fa-php",
  "python": "fab fa-python",
  "r": "fas fa-chart-line",
  "wp": "fab fa-wordpress"
};

const colorMap: Record<string, string> = {
  "figma": "#F24E1E",
  "github": "#ffffff",
  "html": "#E34F26",
  "java": "#ED8B00",
  "mysql": "#4479A1",
  "php": "#777BB4",
  "python": "#3776AB",
  "r": "#276DC3",
  "wp": "#21759B"
};

export default function SkillCard({ title, paragraphs, id, index }: { title: string, paragraphs: string[], id: string, index: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const iconClass = iconMap[id] || "fas fa-code";
  const iconColor = colorMap[id] || "#e14eca";

  return (
    <>
      <motion.div 
        className="col-lg-3 col-md-6 mb-5"
        initial={{ opacity: 0, y: 60, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: (index % 4) * 0.12, type: "spring", stiffness: 100 }}
      >
        <motion.div 
          className="card h-100 interactive" 
          style={{ 
            cursor: 'pointer', 
            background: 'rgba(30, 30, 40, 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(225, 78, 202, 0.2)', 
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            position: 'relative',
          }}
          onClick={() => setModalOpen(true)}
          whileHover={{ 
            y: -12, 
            borderColor: `${iconColor}88`,
            boxShadow: `0 15px 40px ${iconColor}25`,
          }}
        >
          {/* Top glow line */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: "20%",
              right: "20%",
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${iconColor}, transparent)`,
              opacity: 0,
            }}
            whileHover={{ opacity: 1 }}
          />

          <div className="card-body p-4 text-center">
            {/* Animated icon */}
            <motion.div
              style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 20px', 
                borderRadius: '50%', 
                background: `radial-gradient(circle, ${iconColor}12 0%, rgba(0,0,0,0) 70%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${iconColor}30`
              }}
              whileHover={{ 
                rotate: [0, -10, 10, -5, 0],
                scale: 1.15,
                borderColor: `${iconColor}80`,
                boxShadow: `0 0 25px ${iconColor}30`,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.i
                className={iconClass}
                style={{ fontSize: '40px', color: iconColor }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
            <h3 className="title text-white mb-3" style={{ fontWeight: 700, fontSize: "1.1rem" }}>{title}</h3>
            
            <div style={{ position: 'relative', height: '80px', overflow: 'hidden', textAlign: 'left' }}>
              <p className="text-light" style={{ fontSize: '0.9rem', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: paragraphs[0] }} />
              {/* Fade out gradient for text */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(30,30,40,0.9))' }}></div>
            </div>
            
            <motion.button 
              className="btn btn-primary btn-round mt-4"
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(225,78,202,0.4)" }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(true);
              }}
              style={{ width: '100%', fontWeight: 600, letterSpacing: '1px' }}
            >
              Read Case Study
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <ExperienceModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={title} 
        paragraphs={paragraphs}
        iconClass={iconClass}
        iconColor={iconColor}
      />
    </>
  );
}
