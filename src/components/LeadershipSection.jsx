import { motion } from 'framer-motion';
import LampEffect from './ui/LampEffect';

export default function LeadershipSection() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-primary)',
      width: '100%'
    }}>
      <LampEffect color="#D4AF37">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textAlign: 'center',
            maxWidth: '750px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <span>Philosophy</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: '2.5rem',
            letterSpacing: '-1px',
            fontFamily: 'var(--font-heading)'
          }}>
            Leadership <span className="gold-text">Philosophy</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1.2rem, 2.2vw, 1.75rem)',
            lineHeight: 1.6,
            marginBottom: '2rem',
            fontWeight: 300,
            color: 'var(--text-primary)'
          }}>
            "Technology should not simply function.<br />
            It should <span className="gold-text" style={{ fontWeight: 600 }}>inspire</span>."
          </p>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            fontWeight: 300,
            maxWidth: '600px'
          }}>
            My philosophy is centered around engineering intelligent systems that create impact,
            elevate experiences, and redefine what innovation feels like.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--gold-accent), transparent)',
              marginTop: '3rem'
            }}
          />
        </motion.div>
      </LampEffect>
    </section>
  );
}
