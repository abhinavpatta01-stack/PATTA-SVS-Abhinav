import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = ["Hi, I'm", "నమస్కారం, నేను", "नमस्ते, मैं"];

export default function EasterEggGreeting() {
  const [index, setIndex] = useState(0);

  return (
    <div 
      onClick={() => setIndex((index + 1) % greetings.length)}
      style={{ cursor: 'none', display: 'inline-block', marginBottom: '1rem' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, display: 'inline-block' }}
        >
          {greetings[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
