import { motion } from 'framer-motion';

export default function TimelineSection() {
  const timelineData = [
    { year: '2022', text: 'Advanced engineering and technology exploration began.' },
    { year: '2024', text: 'Industrial systems training and automation exposure.' },
    { year: '2025', text: 'Development of intelligent AI-driven digital systems.' },
    { year: '2026', text: 'Founded NOVELLEYX — a futuristic engineering and AI technology venture.' },
    { year: 'FUTURE', text: 'Building scalable future-focused innovation ecosystems.' }
  ];

  return (
    <section id="timeline" className="cinematic-section" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>My Path</span>
          </div>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>Journey Toward <span className="gold-text">Innovation</span></h2>
          <div className="gold-divider-center" />
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: '3rem' }}>

          {/* Animated golden timeline path */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              left: '7px', top: 0,
              width: '2px',
              background: 'linear-gradient(180deg, var(--gold-accent) 0%, rgba(212,175,55,0.05) 100%)',
              boxShadow: '0 0 8px rgba(212,175,55,0.3)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative' }}
              >
                {/* Node */}
                <div style={{
                  position: 'absolute',
                  left: '-3rem', top: '8px',
                  width: '16px', height: '16px',
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--gold-accent)',
                  boxShadow: '0 0 12px rgba(212,175,55,0.4)',
                  zIndex: 1
                }} />

                <div className="gold-text" style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '3px'
                }}>
                  {item.year}
                </div>
                <p style={{
                  fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300
                }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
