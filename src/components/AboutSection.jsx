import { motion } from 'framer-motion';

export default function AboutSection() {
  const cards = [
    { title: 'Engineering Precision', desc: 'Industrial systems and mechanical design expertise' },
    { title: 'AI Innovation', desc: 'Intelligent workflows and automation systems' },
    { title: 'Future Systems Architecture', desc: 'Scalable digital platforms and ecosystem design' }
  ];

  return (
    <section id="about" className="cinematic-section" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '5rem' }}
        >
          <div className="section-label">About</div>
          <h2 className="section-heading">The Mind Behind<br /><span className="gold-text">The Vision</span></h2>
          <div className="gold-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '5rem', alignItems: 'center' }}>

          {/* LEFT — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '3/4',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(212,175,55,0.05)'
            }}
          >
            {/* Gold lighting overlay */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: 'linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.8) 100%)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute', top: '-20%', right: '-20%', width: '80%', height: '80%',
              background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)', zIndex: 1, pointerEvents: 'none'
            }} />

            <img
              src="/founder_portrait.png"
              alt="Patta SVS Abhinav"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </motion.div>

          {/* RIGHT — Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
                fontWeight: 300
              }}
            >
              <p>
                I am a <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Mechanical Engineer</span> and
                visionary founder focused on creating intelligent systems that merge engineering precision, AI innovation,
                automation, and premium digital experiences.
              </p>
              <p>
                Through <span className="gold-text" style={{ fontWeight: 600 }}>NOVELLEYX</span>, I aim to build
                future-focused technologies that transform how intelligent systems interact with industries, businesses,
                and digital ecosystems.
              </p>
              <p>
                My work combines technical depth, futuristic thinking, and modern engineering philosophy
                into scalable innovation.
              </p>
            </motion.div>

            {/* Glass cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    x: -8,
                    backgroundColor: 'var(--card-bg-hover)',
                    borderColor: 'var(--border-color)'
                  }}
                  style={{
                    padding: '1.5rem 2rem',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    cursor: 'default',
                    transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)'
                  }}
                >
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                    background: 'var(--gold-accent)',
                    boxShadow: '0 0 12px var(--gold-accent)'
                  }} />
                  <div>
                    <span style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                      {card.title}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                      {card.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
