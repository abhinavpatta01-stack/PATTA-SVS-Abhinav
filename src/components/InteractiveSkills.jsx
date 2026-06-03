import { motion } from 'framer-motion';

export default function InteractiveSkills() {
  const blocks = [
    { name: 'Mechanical & Automotive Design', level: 9, color: 'var(--gradient-1)' },
    { name: 'Full-Stack Infrastructure', level: 9, color: 'var(--gradient-2)' },
    { name: 'Strategic Growth & Marketing', level: 8, color: 'var(--gradient-3)' },
    { name: 'Aerospace & 3D Modeling', level: 8, color: 'var(--gradient-4)' },
  ];

  const categories = [
    {
      title: 'Mechanical Engineering & Automotive Design',
      gradient: 1,
      skills: [
        { name: 'Advanced CAD & 3D Rendering', desc: 'Engineering precise 2D/3D component layouts, automotive design modules, and structural blueprints utilizing AutoCAD, CATIA, and Autodesk Fusion 360.' },
        { name: 'Technical Hands-on Training', desc: 'Executing physical component creation through advanced 3D printing, engineering drawing analysis, and industrial machine tool operations.' },
        { name: 'Aerospace & Rocket Modeling', desc: 'Researching and designing technical conceptual frameworks rooted in space-tech principles, aerodynamic simulations, and rocket modeling prototypes.' }
      ]
    },
    {
      title: 'Full-Stack Infrastructure & Digital Systems',
      gradient: 2,
      skills: [
        { name: 'Cloud Architecture & Deployment', desc: 'Architecting clean code repositories via GitHub, launching responsive web environments on Vercel and Netlify, and building scalable backends with Firebase.' },
        { name: 'Database & Interface Management', desc: 'Designing structured data schemas, secure user authentication flows, and dynamic web portals, including full-stack internal employee dashboards.' },
        { name: 'UI/UX & Content Architecture', desc: 'Designing premium user interfaces incorporating sleek glassmorphism aesthetics, logo design layouts, and digital video assets using Figma, Canva, Picsart, and CapCut.' }
      ]
    },
    {
      title: 'Strategic Growth & Ventures',
      gradient: 4,
      skills: [
        { name: 'Brand Strategy & Entrepreneurship', desc: 'Developing the core corporate architecture and founding pillars for the Novelleyx startup ecosystem to drive cross-industry innovation.' },
        { name: 'Digital Growth & Marketing', desc: 'Building and executing high-yield affiliate marketing funnels utilizing the Amazon Associates platform alongside targeting algorithms via LinkedIn Sales Navigator.' },
        { name: 'Audience Scale & Optimization', desc: 'Architecting customized Instagram Growth Strategies, high-retention content blueprints, and continuous SEO infrastructure audits to maximize web visibility.' }
      ]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* 1. The Block Progress Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        {blocks.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, x: 10 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', cursor: 'none' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-light)' }}>
              <span>{skill.name}</span>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(10)].map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i * 0.1) + (j * 0.05) }}
                  style={{
                    flex: 1, height: '14px', borderRadius: '2px',
                    background: j < skill.level ? skill.color : 'rgba(255,255,255,0.05)',
                    boxShadow: j < skill.level ? '0 0 10px rgba(255,255,255,0.1)' : 'none'
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. The Detailed Expertise Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {categories.map((cat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem' }}
          >
            <h3 className={`gradient-text-${cat.gradient}`} style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '2rem' }}>
              {cat.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cat.skills.map((skill, j) => (
                <div key={j}>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>{skill.name}</h4>
                  <p style={{ color: 'var(--text-soft)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
