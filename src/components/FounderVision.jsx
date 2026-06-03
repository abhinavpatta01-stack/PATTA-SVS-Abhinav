import { motion } from 'framer-motion';
import GradientBackground from './ui/GradientBackground';

export default function FounderVision() {
  const visionGradients = [
    'linear-gradient(135deg, #050505 0%, #0d0800 50%, #050505 100%)',
    'linear-gradient(135deg, #080804 0%, #111000 50%, #080804 100%)',
    'linear-gradient(135deg, #050505 0%, #0a0700 50%, #050505 100%)',
    'linear-gradient(135deg, #080804 0%, #0d0800 50%, #080804 100%)',
    'linear-gradient(135deg, #050505 0%, #0d0800 50%, #050505 100%)'
  ];

  return (
    <section id="vision" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <GradientBackground
        gradients={visionGradients}
        animationDuration={12}
        overlay={false}
        style={{ minHeight: 'auto' }}
      >
        <div style={{
          padding: 'clamp(6rem, 12vw, 14rem) clamp(1.5rem, 5vw, 5%)',
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Blueprint grid overlay */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.25,
            backgroundImage: 'linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            pointerEvents: 'none', zIndex: 0
          }} />

          {/* Spotlight */}
          <div style={{
            position: 'absolute',
            top: '-20%', left: '50%', transform: 'translateX(-50%)',
            width: '60vw', height: '120%',
            background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.05) 0%, transparent 55%)',
            pointerEvents: 'none', zIndex: 0
          }} />

          <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="section-label" style={{ justifyContent: 'center' }}>
                <span style={{ width: '40px', height: '1px', background: 'var(--gold-accent)', display: 'inline-block' }} />
                <span>Why I Build</span>
                <span style={{ width: '40px', height: '1px', background: 'var(--gold-accent)', display: 'inline-block' }} />
              </div>

              <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                The Vision Behind<br /><span className="gold-text">Everything I Create</span>
              </h2>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                fontWeight: 300,
                color: 'var(--text-secondary)'
              }}>
                I founded NOVELLEYX to engineer the future through intelligent systems, advanced automation,
                AI-powered innovation, and premium technological experiences.
              </p>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)',
                lineHeight: 1.7,
                fontWeight: 400,
                color: 'var(--text-primary)'
              }}>
                The vision is to create a <span className="gold-text" style={{ fontWeight: 600 }}>next-generation ecosystem</span> where
                engineering, artificial intelligence, and digital transformation converge into
                scalable innovation.
              </p>

              {/* Decorative animated elements */}
              <motion.div
                style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', position: 'relative', height: '120px' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1.2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  style={{
                    width: '120px', height: '120px',
                    border: '1px solid var(--border-subtle)',
                    position: 'absolute', borderRadius: '2px'
                  }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                  style={{
                    width: '80px', height: '80px',
                    border: '1px solid var(--border-color)',
                    position: 'absolute', top: '20px', borderRadius: '50%'
                  }}
                />
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: 'var(--gold-accent)',
                  boxShadow: '0 0 15px var(--gold-accent)',
                  position: 'absolute', top: '57px'
                }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </GradientBackground>
    </section>
  );
}
