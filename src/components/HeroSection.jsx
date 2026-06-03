import { motion, useScroll, useTransform } from 'framer-motion';
import Scene3D from './Scene3D';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1.0 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* 3D Background — right side offset */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div style={{ width: '100%', height: '100%', transform: 'translateX(15%)' }}>
          <Scene3D />
        </div>
      </div>

      {/* Cinematic gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(90deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.6) 50%, transparent 100%)'
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to top, var(--bg-primary), transparent)'
      }} />

      {/* Content */}
      <motion.div
        style={{ opacity, y, scale }}
      >
        <div style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 5%',
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh'
        }}>
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '680px' }}
          >
            {/* Name */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                marginBottom: '0.5rem',
                letterSpacing: '-2px',
                fontWeight: 700,
                lineHeight: 1.0
              }}
            >
              PATTA SVS<br />ABHINAV
            </motion.h1>

            {/* Subtitle with gold accent */}
            <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
              <p className="gold-text" style={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                fontWeight: 600,
                letterSpacing: '1px',
                marginBottom: '1rem'
              }}>
                Founder & CEO — NOVELLEYX
              </p>
              <div style={{
                display: 'flex',
                gap: '1.25rem',
                flexWrap: 'wrap',
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                <span>Mechanical Engineer</span>
                <span style={{ color: 'var(--gold-accent)' }}>·</span>
                <span>AI Systems Architect</span>
                <span style={{ color: 'var(--gold-accent)' }}>·</span>
                <span>Innovation Strategist</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '3rem',
                fontWeight: 300,
                maxWidth: '560px'
              }}
            >
              Building intelligent engineering systems, AI-powered technologies,
              and futuristic digital ecosystems designed for the next generation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
              {/* Primary */}
              <motion.a
                href="#vision"
                whileHover={{ scale: 1.03, boxShadow: '0 15px 40px rgba(212,175,55,0.4)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '1.1rem 2.5rem',
                  color: 'var(--bg-primary)',
                  background: 'linear-gradient(135deg, var(--gold-glow), var(--gold-accent))',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  border: 'none',
                  borderRadius: '4px',
                  boxShadow: '0 10px 30px rgba(212,175,55,0.25)',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Explore Vision
              </motion.a>
              {/* Secondary */}
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.03, borderColor: 'var(--gold-accent)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '1.1rem 2.5rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--card-bg)',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)'
                }}
              >
                Download Resume
              </motion.a>
              {/* Tertiary */}
              <motion.a
                href="#projects"
                whileHover={{ color: 'var(--text-primary)' }}
                style={{
                  padding: '1.1rem 2rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  border: '1px solid transparent',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                View Innovations →
              </motion.a>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: 'clamp(2rem, 4vw, 4rem)',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '2.5rem'
              }}
            >
              {[
                { value: '01+', label: 'Years Engineering\nIntelligent Systems' },
                { value: '10+', label: 'Advanced Technical\nProjects' },
                { value: '∞', label: 'Vision Beyond\nConventional Technology' }
              ].map((metric, i) => (
                <div key={i}>
                  <div className="gold-text" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 700, lineHeight: 1 }}>
                    {metric.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginTop: '0.75rem',
                    lineHeight: 1.4,
                    whiteSpace: 'pre-line'
                  }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
