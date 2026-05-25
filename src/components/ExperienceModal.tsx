"use client";
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  paragraphs: string[];
}

export default function ExperienceModal({ isOpen, onClose, title, paragraphs }: ExperienceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-backdrop" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1050, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={onClose}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="modal-dialog"
            style={{ maxWidth: '800px', width: '90%', margin: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark" style={{ border: '1px solid rgba(225, 78, 202, 0.3)', boxShadow: '0 0 20px rgba(0, 242, 254, 0.2)' }}>
              <div className="modal-header justify-content-center">
                <button type="button" className="close interactive" onClick={onClose} style={{ position: 'absolute', right: '20px', top: '20px', color: 'white', background: 'none', border: 'none', fontSize: '24px' }}>
                  ×
                </button>
                <h4 className="title title-up text-white" style={{ marginBottom: 0 }}>{title}</h4>
              </div>
              <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto', padding: '24px' }}>
                {paragraphs.map((p, idx) => (
                  <p key={idx} className="text-light" style={{ marginBottom: '15px', lineHeight: 1.6 }}>{p}</p>
                ))}
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-primary btn-round interactive" onClick={onClose}>Close Experience</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
