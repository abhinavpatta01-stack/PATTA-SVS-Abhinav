import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skills = [
    {
      category: 'Mechanical Engineering',
      items: ['Industrial Systems', 'Mechanical Design', 'Engineering Analysis', 'Manufacturing Concepts']
    },
    {
      category: 'Artificial Intelligence',
      items: ['AI Integration', 'Intelligent Workflows', 'Machine Learning', 'Automation Systems']
    },
    {
      category: 'Digital Engineering',
      items: ['Python', 'Angular', 'React', 'REST APIs', 'System Architecture']
    },
    {
      category: 'Technology Infrastructure',
      items: ['GitHub', 'Vercel', 'Firebase', 'Figma']
    }
  ];

  return (
    <section id="expertise" className="cinematic-section" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>What I Master</span>
          </div>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>Core Expertise</h2>
          <div className="gold-divider-center" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              style={{
                padding: '2.5rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                cursor: 'default',
                transition: 'border-color 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(212,175,55,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Hover glow */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 60%)',
                opacity: 0, transition: 'opacity 0.5s', zIndex: 0, pointerEvents: 'none'
              }}
              className="card-hover-glow"
              />

              <h3 className="gold-text" style={{
                fontSize: '0.85rem', marginBottom: '2rem', fontWeight: 600,
                letterSpacing: '3px', textTransform: 'uppercase', position: 'relative', zIndex: 1
              }}>
                {skillGroup.category}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 1 }}>
                {skillGroup.items.map((item, i) => (
                  <motion.li
                    key={i}
                    style={{
                      fontSize: '1rem', color: 'var(--text-secondary)',
                      display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 400,
                      transition: 'color 0.3s, transform 0.3s'
                    }}
                    whileHover={{ x: 6, color: 'var(--text-primary)' }}
                  >
                    <span style={{ width: '12px', height: '1px', background: 'var(--gold-accent)', flexShrink: 0 }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
