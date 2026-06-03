import { motion } from 'framer-motion';

/**
 * LampEffect — Adapted from shadcn/aceternity Lamp component.
 * Vanilla CSS + Framer Motion (no Tailwind required).
 * Creates a cinematic conic-gradient lamp glow effect.
 */
export default function LampEffect({ children, color = '#D4AF37' }) {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      minHeight: '60vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '100%',
      zIndex: 0
    }}>
      {/* Lamp cone area */}
      <div style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        flex: 1,
        transform: 'scaleY(1.25)',
        alignItems: 'center',
        justifyContent: 'center',
        isolation: 'isolate',
        zIndex: 0
      }}>
        {/* Left cone */}
        <motion.div
          initial={{ opacity: 0.4, width: '12rem' }}
          whileInView={{ opacity: 1, width: '28rem' }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.0, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 'auto',
            right: '50%',
            height: '14rem',
            overflow: 'visible',
            background: `conic-gradient(from 70deg at center top, ${color}, transparent, transparent)`,
            opacity: 0.6
          }}
        >
          {/* Bottom mask */}
          <div style={{
            position: 'absolute', width: '100%', left: 0, height: '10rem', bottom: 0, zIndex: 20,
            background: 'var(--bg-primary)',
            maskImage: 'linear-gradient(to top, white, transparent)',
            WebkitMaskImage: 'linear-gradient(to top, white, transparent)'
          }} />
          {/* Left mask */}
          <div style={{
            position: 'absolute', width: '10rem', height: '100%', left: 0, bottom: 0, zIndex: 20,
            background: 'var(--bg-primary)',
            maskImage: 'linear-gradient(to right, white, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, white, transparent)'
          }} />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.4, width: '12rem' }}
          whileInView={{ opacity: 1, width: '28rem' }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.0, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 'auto',
            left: '50%',
            height: '14rem',
            overflow: 'visible',
            background: `conic-gradient(from 290deg at center top, transparent, transparent, ${color})`,
            opacity: 0.6
          }}
        >
          {/* Right mask */}
          <div style={{
            position: 'absolute', width: '10rem', height: '100%', right: 0, bottom: 0, zIndex: 20,
            background: 'var(--bg-primary)',
            maskImage: 'linear-gradient(to left, white, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, white, transparent)'
          }} />
          {/* Bottom mask */}
          <div style={{
            position: 'absolute', width: '100%', right: 0, height: '10rem', bottom: 0, zIndex: 20,
            background: 'var(--bg-primary)',
            maskImage: 'linear-gradient(to top, white, transparent)',
            WebkitMaskImage: 'linear-gradient(to top, white, transparent)'
          }} />
        </motion.div>

        {/* Background blur layer */}
        <div style={{
          position: 'absolute', top: '50%', height: '12rem', width: '100%',
          transform: 'translateY(3rem) scaleX(1.5)',
          background: 'var(--bg-primary)',
          filter: 'blur(40px)'
        }} />

        {/* Backdrop blur */}
        <div style={{
          position: 'absolute', top: '50%', zIndex: 50, height: '12rem', width: '100%',
          background: 'transparent', opacity: 0.1,
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'
        }} />

        {/* Large glow orb */}
        <div style={{
          position: 'absolute', inset: 'auto', zIndex: 50,
          height: '9rem', width: '24rem',
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          background: color,
          opacity: 0.3,
          filter: 'blur(60px)'
        }} />

        {/* Concentrated glow */}
        <motion.div
          initial={{ width: '6rem' }}
          whileInView={{ width: '14rem' }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 'auto', zIndex: 30,
            height: '9rem', borderRadius: '50%',
            background: color,
            opacity: 0.2,
            filter: 'blur(40px)'
          }}
        />

        {/* Sharp light line */}
        <motion.div
          initial={{ width: '12rem' }}
          whileInView={{ width: '28rem' }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 'auto', zIndex: 50,
            height: '2px',
            transform: 'translateY(-7rem)',
            background: color,
            boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`
          }}
        />

        {/* Top fill */}
        <div style={{
          position: 'absolute', inset: 'auto', zIndex: 40,
          height: '11rem', width: '100%',
          transform: 'translateY(-12.5rem)',
          background: 'var(--bg-primary)'
        }} />
      </div>

      {/* Children content, pulled up over the lamp */}
      <div style={{
        position: 'relative', zIndex: 50,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        transform: 'translateY(-20rem)',
        padding: '0 1.5rem'
      }}>
        {children}
      </div>
    </div>
  );
}
