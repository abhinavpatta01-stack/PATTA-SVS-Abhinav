import { motion } from 'framer-motion';

/**
 * GradientBackground — Adapted from shadcn gradient-background.
 * Vanilla CSS + Framer Motion (no Tailwind required).
 * Creates smoothly animating gradient backgrounds.
 */
export default function GradientBackground({
  children,
  gradients,
  animationDuration = 10,
  overlay = true,
  overlayOpacity = 0.5,
  style = {}
}) {
  const defaultGradients = [
    'linear-gradient(135deg, #0a0a0a 0%, #1a1000 50%, #050505 100%)',
    'linear-gradient(135deg, #050505 0%, #0d0800 50%, #0a0a0a 100%)',
    'linear-gradient(135deg, #0a0a0a 0%, #110e00 50%, #050505 100%)',
    'linear-gradient(135deg, #050505 0%, #0a0800 50%, #0a0a0a 100%)',
    'linear-gradient(135deg, #0a0a0a 0%, #1a1000 50%, #050505 100%)'
  ];

  const activeGradients = gradients || defaultGradients;

  return (
    <div style={{
      width: '100%',
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      ...style
    }}>
      {/* Animated gradient layer */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: activeGradients[0]
        }}
        animate={{ background: activeGradients }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Dark overlay */}
      {overlay && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: '#000',
          opacity: overlayOpacity,
          pointerEvents: 'none'
        }} />
      )}

      {/* Content */}
      {children && (
        <div style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {children}
        </div>
      )}
    </div>
  );
}
