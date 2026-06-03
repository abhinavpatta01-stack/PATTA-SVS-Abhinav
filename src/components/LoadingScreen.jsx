import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        return prev + 1.5;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#030303',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem'
      }}
    >
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        width: '40vw',
        height: '40vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', zIndex: 1 }}
      >
        <h1
          className="gold-text"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '10px',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)'
          }}
        >
          PATTA SVS ABHINAV
        </h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.85rem',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontWeight: 400
        }}>
          Engineering Future Intelligence
        </p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ width: '240px', position: 'relative', zIndex: 1 }}
      >
        <div style={{
          width: '100%',
          height: '1px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '1px',
          overflow: 'hidden'
        }}>
          <motion.div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, var(--gold-accent), var(--gold-glow))',
              boxShadow: '0 0 15px var(--gold-accent)',
              borderRadius: '1px'
            }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: 'linear', duration: 0.08 }}
          />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '0.75rem',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          letterSpacing: '2px',
          fontFamily: 'var(--font-body)'
        }}>
          <span>INITIALIZING</span>
          <span>{Math.min(Math.round(progress), 100)}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
