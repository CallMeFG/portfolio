"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEggTerminal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="interactive"
        style={{ position: 'absolute', bottom: '10px', right: '10px', width: '30px', height: '30px', cursor: 'pointer', opacity: 0 }} 
        onClick={() => setIsOpen(true)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            style={{
              position: 'fixed',
              bottom: '50px',
              right: '50px',
              width: '400px',
              height: '300px',
              backgroundColor: '#111',
              border: '1px solid #00f2fe',
              borderRadius: '8px',
              padding: '15px',
              fontFamily: 'monospace',
              color: '#00f2fe',
              zIndex: 10000,
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.3)',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
              <span>syslog@fathur-os:~</span>
              <button className="interactive" onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#ff3636', cursor: 'pointer', fontSize: '16px' }}>×</button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>{">"} INITIALIZING SURPRISE.SH...</p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                {">"} CONNECTION ESTABLISHED.
              </motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} style={{ color: '#00f2c3' }}>
                {">"} Hello World! Welcome to the hidden part of my portfolio. I love building things that surprise and delight users. Thanks for finding this! - Fathur Rizky Assani
              </motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5, repeat: Infinity, repeatType: "reverse", duration: 0.8 }}>
                _
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
