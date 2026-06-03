import { motion } from 'framer-motion';

export default function ResumeSection() {
  return (
    <section id="resume" className="cinematic-section" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: 'clamp(3rem, 5vw, 5rem)',
            textAlign: 'center',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4)'
          }}
        >
          {/* Gold top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: '40%', height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--gold-accent), transparent)'
          }} />

          {/* Abstract document icon */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '100px', height: '130px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              margin: '0 auto 3rem auto',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(212,175,55,0.06) 100%)',
              position: 'relative',
              boxShadow: '0 15px 40px rgba(0,0,0,0.3), inset 0 0 20px rgba(212,175,55,0.05)'
            }}
          >
            {/* Document lines */}
            <div style={{ position: 'absolute', top: '22px', left: '18px', right: '18px', height: '3px', background: 'rgba(212,175,55,0.3)', borderRadius: '2px' }} />
            <div style={{ position: 'absolute', top: '35px', left: '18px', width: '50%', height: '3px', background: 'rgba(212,175,55,0.2)', borderRadius: '2px' }} />
            <div style={{ position: 'absolute', top: '52px', left: '18px', right: '18px', height: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px' }} />
            <div style={{ position: 'absolute', top: '62px', left: '18px', right: '18px', height: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px' }} />
            <div style={{ position: 'absolute', top: '72px', left: '18px', right: '30px', height: '2px', background: 'rgba(255,255,255,0.04)', borderRadius: '2px' }} />
            {/* Seal */}
            <div style={{
              width: '24px', height: '24px', borderRadius: '50%',
              background: 'var(--gold-accent)', opacity: 0.5,
              boxShadow: '0 0 12px var(--gold-accent)',
              position: 'absolute', bottom: '18px', left: '18px'
            }} />
          </motion.div>

          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>Credentials</span>
          </div>
          <h2 className="section-heading" style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
            Professional Resume
          </h2>

          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7,
            marginBottom: '2.5rem', fontWeight: 300, maxWidth: '450px', margin: '0 auto 2.5rem'
          }}>
            Download my comprehensive resume with full details on education, skills, projects, and professional experience.
          </p>

          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 35px rgba(212,175,55,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '1.2rem 3.5rem',
              background: 'linear-gradient(135deg, var(--gold-glow), var(--gold-accent))',
              color: 'var(--bg-primary)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(212,175,55,0.25)',
              transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)'
            }}
          >
            Download Executive Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
