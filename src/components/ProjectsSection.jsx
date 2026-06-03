import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      num: '01',
      title: 'NOVELLEYX AI ECOSYSTEM',
      description: 'An advanced intelligent ecosystem focused on AI-driven automation, scalable engineering systems, futuristic workflows, and next-generation digital technologies.',
      features: ['AI Architecture', 'Automation Systems', 'Intelligent Workflows', 'Scalable Infrastructure'],
      status: 'Active'
    },
    {
      num: '02',
      title: 'INDUSTRIAL AUTOMATION PLATFORM',
      description: 'Designed premium industrial technology experiences integrating automation concepts, engineering systems, and scalable intelligent interfaces.',
      features: ['Industrial UI Systems', 'Engineering Architecture', 'Automation Workflows', 'Technical Solutions'],
      status: 'Completed'
    },
    {
      num: '03',
      title: 'AI OPTIMIZATION ENGINE',
      description: 'Built intelligent AI-powered optimization systems for automation workflows, advanced analytics, SEO intelligence, and digital growth strategies.',
      features: ['AI Optimization', 'SEO Intelligence', 'Automation Logic', 'Analytics Systems'],
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="cinematic-section" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>What I've Built</span>
          </div>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>Featured <span className="gold-text">Innovations</span></h2>
          <div className="gold-divider-center" />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                position: 'relative',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '3rem',
                alignItems: 'start',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(212,175,55,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Gold sweep overlay */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--gold-accent), transparent)',
                opacity: 0.3
              }} />

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <span style={{
                    fontSize: '3rem', fontWeight: 700, color: 'rgba(212,175,55,0.15)',
                    fontFamily: 'var(--font-heading)', lineHeight: 1
                  }}>
                    {project.num}
                  </span>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                      fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem'
                    }}>
                      {project.title}
                    </h3>
                    <span style={{
                      fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase',
                      color: project.status === 'Active' ? 'var(--gold-accent)' : 'var(--text-muted)',
                      fontWeight: 600
                    }}>
                      ● {project.status}
                    </span>
                  </div>
                </div>
                <p style={{
                  fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300
                }}>
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div style={{
                borderLeft: '1px solid var(--border-subtle)', paddingLeft: '2.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.9rem', minWidth: '220px'
              }}>
                {project.features.map((feature, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500
                  }}>
                    <span style={{
                      width: '5px', height: '5px', borderRadius: '50%',
                      background: 'var(--gold-accent)', flexShrink: 0
                    }} />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
