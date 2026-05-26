"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  paragraphs: string[];
  iconClass?: string;
  iconColor?: string;
}

export default function ExperienceModal({ isOpen, onClose, title, paragraphs, iconClass, iconColor }: ExperienceModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="modal-backdrop" 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            backgroundColor: 'rgba(0,0,0,0.85)', 
            backdropFilter: 'blur(5px)',
            zIndex: 1050, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: '20px'
          }} 
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="modal-dialog m-0"
            style={{ maxWidth: '900px', width: '100%', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="modal-content" 
              style={{ 
                background: 'linear-gradient(145deg, #1e1e28, #15151e)',
                border: '1px solid rgba(255,255,255,0.1)', 
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '90vh'
              }}
            >
              <div className="modal-header d-flex align-items-center" style={{ padding: '30px 40px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  {iconClass && (
                    <i className={iconClass} style={{ fontSize: '48px', color: iconColor || '#fff' }}></i>
                  )}
                  <h2 className="title m-0 text-white" style={{ fontWeight: 800 }}>{title} Experience</h2>
                </div>
                <button type="button" className="close interactive ml-auto" onClick={onClose} style={{ color: 'white', background: 'none', border: 'none', fontSize: '32px', opacity: 0.7 }}>
                  ×
                </button>
              </div>
              
              <div className="modal-body" style={{ overflowY: 'auto', padding: '40px', flex: 1 }}>
                {paragraphs.map((p, idx) => (
                  <motion.p 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (idx * 0.1) }}
                    className="text-light" 
                    style={{ 
                      marginBottom: '24px', 
                      lineHeight: 1.8, 
                      fontSize: '1.1rem',
                      color: 'rgba(255,255,255,0.85)'
                    }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
              
              <div className="modal-footer" style={{ padding: '20px 40px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <button type="button" className="btn btn-primary btn-round interactive w-100" onClick={onClose} style={{ fontSize: '1.1rem', padding: '12px' }}>
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
