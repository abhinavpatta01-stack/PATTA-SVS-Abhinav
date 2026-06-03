import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{
      padding: '5rem 5% 3rem',
      borderTop: '1px solid var(--border-subtle)',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-primary)'
    }}>

      {/* Animated gold sweep line */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
        style={{
          position: 'absolute', top: -1, left: 0,
          width: '40%', height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--gold-accent), transparent)',
          boxShadow: '0 0 10px var(--gold-accent)'
        }}
      />

      {/* Ambient particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -60, -20],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              bottom: '20%',
              left: `${10 + i * 12}%`,
              width: '2px', height: '2px',
              borderRadius: '50%',
              background: 'var(--gold-accent)'
            }}
          />
        ))}
      </div>

      <div style={{
        maxWidth: '1400px', width: '100%', margin: '0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '1.5rem', textAlign: 'center', position: 'relative', zIndex: 1
      }}>

        <h2 className="gold-text" style={{
          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          fontWeight: 700, letterSpacing: '6px',
          fontFamily: 'var(--font-heading)', margin: 0
        }}>
          PATTA SVS ABHINAV
        </h2>

        <p style={{
          fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 300,
          letterSpacing: '1px', maxWidth: '500px'
        }}>
          Engineering the Future Through Intelligence & Innovation.
        </p>

        <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>
          © {new Date().getFullYear()} Patta SVS Abhinav. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
