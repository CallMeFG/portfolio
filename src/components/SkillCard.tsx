"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceModal from './ExperienceModal';

export default function SkillCard({ title, paragraphs, id, index }: { title: string, paragraphs: string[], id: string, index: number }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="col-md-4 mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: (index % 3) * 0.2 }}
        whileHover={{ y: -10 }}
      >
        <div 
          className="card card-coin card-plain h-100 interactive" 
          style={{ cursor: 'pointer', border: '1px solid rgba(225, 78, 202, 0.3)', transition: 'border 0.3s' }}
          onClick={() => setModalOpen(true)}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = 'rgba(225, 78, 202, 1)')}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(225, 78, 202, 0.3)')}
        >
          <div className="card-header">
            <h4 className="title text-primary">{title}</h4>
          </div>
          <div className="card-body">
            <p className="text-truncate text-muted" style={{ maxHeight: '80px', overflow: 'hidden' }}>
              {paragraphs[0]}
            </p>
            <motion.button 
              className="btn btn-primary btn-simple mt-3 w-100"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(225, 78, 202, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(true);
              }}
            >
              Explore Experience
            </motion.button>
          </div>
        </div>
      </motion.div>
      <ExperienceModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={title} 
        paragraphs={paragraphs} 
      />
    </>
  );
}
