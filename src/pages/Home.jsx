import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import YouTubeBackground from '../components/YouTubeBackground';
import LiveStatus from '../components/LiveStatus';
import EasterEggGreeting from '../components/EasterEggGreeting';
import MediaHub from '../components/MediaHub';

// ─── ENTER SCREEN ───────────────────────────────────────────────────────────
function EnterScreen({ onEnter }) {
  return (
    <motion.div
      className="enter-screen"
      onClick={onEnter}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ textAlign: 'center' }}
      >
        <h1
          className="gradient-text-1"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '2px', marginBottom: '1rem' }}
        >
          PATTA SVS ABHINAV
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase' }}>
          Click anywhere to enter the experience
        </p>
      </motion.div>

      {/* Pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        style={{
          width: '80px', height: '80px', borderRadius: '50%',
          border: '2px solid rgba(167,139,250,0.4)',
          position: 'absolute', bottom: '15%'
        }}
      />
    </motion.div>
  );
}

// ─── FLOATING NAV ───────────────────────────────────────────────────────────
function FloatingNav() {
  const links = ['Home', 'Vision', 'About', 'Skills', 'Projects', 'Journey', 'Contact'];
  return (
    <motion.nav
      className="nav-floating"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {links.map((l) => (
        <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
      ))}
    </motion.nav>
  );
}

// ─── VOLUME CONTROL ─────────────────────────────────────────────────────────
function VolumeControl() {
  const [muted, setMuted] = useState(false);

  const toggle = () => {
    setMuted(!muted);
    const player = document.getElementById('yt-player');
    if (player && player.contentWindow) {
      // Use postMessage to control via YouTube API
      try {
        const iframe = player;
        if (window.YT && window.YT.get) {
          const ytPlayer = window.YT.get('yt-player');
          if (ytPlayer) {
            muted ? ytPlayer.unMute() : ytPlayer.mute();
          }
        }
      } catch (e) {}
    }
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      style={{
        position: 'fixed', top: '1.5rem', right: '1.5rem', zIndex: 9999,
        width: '40px', height: '40px', borderRadius: '50%',
        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1rem', color: 'var(--text-soft)',
        transition: 'all 0.3s'
      }}
      whileHover={{ scale: 1.1, borderColor: 'rgba(167,139,250,0.4)' }}
    >
      {muted ? '🔇' : '🔊'}
    </motion.button>
  );
}

// ─── ANIMATION VARIANTS ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// ─── SLIDE 1: HERO ────────────────────────────────────────────────────────────
function HeroSlide() {
  return (
    <section id="home" className="slide" style={{ justifyContent: 'center' }}>
      <motion.div
        className="slide-content"
        initial="hidden" animate="visible" variants={stagger}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        <div style={{ marginTop: '1rem' }}>
          <EasterEggGreeting />
        </div>
        
        <motion.h1
          variants={fadeUp}
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
            fontWeight: 900, 
            letterSpacing: '1px', 
            lineHeight: 1.1,
            textShadow: '0 10px 30px rgba(0,0,0,0.5)',
            marginBottom: '1.5rem'
          }}
        >
          <span style={{ color: '#fff', opacity: 0.95 }}>PATTA SVS</span><br />
          <span className="gradient-text-1" style={{ textShadow: '0 0 40px rgba(167,139,250,0.3)' }}>ABHINAV</span>
        </motion.h1>
        
        <motion.p variants={fadeUp} style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          Mechanical Engineer · AI Systems Architect · Founder & CEO of NOVELLEYX
        </motion.p>

        <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#vision" style={{
            padding: '0.9rem 2.5rem', background: 'var(--gradient-1)', color: '#000',
            fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase',
            borderRadius: '50px', textDecoration: 'none'
          }}>
            Explore Vision
          </a>
          <a href="#contact" style={{
            padding: '0.9rem 2.5rem', background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)', color: 'var(--text-light)',
            fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase',
            borderRadius: '50px', textDecoration: 'none'
          }}>
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 5rem)', marginTop: '3rem' }}>
          {[{ v: '01+', l: 'Years Building' }, { v: '10+', l: 'Projects' }, { v: '∞', l: 'Vision' }].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div className={`gradient-text-${(i % 4) + 1}`} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800 }}>{s.v}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.3rem' }}>{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}
        >
          ↓ Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── SLIDE 2: VISION ────────────────────────────────────────────────────────
function VisionSlide() {
  const pillars = [
    { id: '01', title: 'Physical Engineering', desc: 'Precision mechanics, smart hardware design, and intelligent automation.', gradient: 1 },
    { id: '02', title: 'Digital Architecture', desc: 'Scalable cloud infrastructure, elite full-stack systems, and seamless user experiences.', gradient: 2 },
    { id: '03', title: 'AI Intelligence', desc: 'Fusing neural capability into physical workflows to drive autonomous growth.', gradient: 3 }
  ];

  return (
    <section id="vision" className="slide">
      <motion.div
        className="slide-content glass"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}
      >
        <motion.div variants={fadeUp}>
          <span className="slide-label">The Vision</span>
        </motion.div>
        
        <motion.h2 variants={fadeUp} style={{ 
            fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
            fontWeight: 900, 
            letterSpacing: '1px', 
            lineHeight: 1.2,
            marginBottom: '2rem'
          }}>
          Building the bridge between <span className="gradient-text-1">physical engineering</span> and <span className="gradient-text-2">digital architecture</span>.
        </motion.h2>
        
        <motion.p variants={fadeUp} style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)', color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300, maxWidth: '900px', margin: '0 auto 1.5rem' }}>
          I founded <strong>NOVELLEYX</strong> to shatter boundaries—merging mechanical precision with intelligent automation and advanced AI. We aren't just optimizing systems; we are building a next-generation ecosystem where heavy-hitting engineering and premium digital transformation converge into unstoppable, scalable innovation.
        </motion.p>
        
        <motion.p variants={fadeUp} style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '1px' }}>
          We don't just anticipate the future. We engineer it.
        </motion.p>

        {/* THE PILLARS OF INNOVATION */}
        <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', animation: 'fadeInUp 0.8s ease-out' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '2rem' }}>
            The Pillars of Innovation
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
            {pillars.map((p, i) => (
              <div 
                key={i} 
                className="glass-card-hover"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div className={`gradient-text-${p.gradient}`} style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem', opacity: 0.8 }}>{p.id}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '0.8rem', letterSpacing: '1px' }}>{p.title}</h4>
                <p style={{ color: 'var(--text-soft)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div style={{ marginTop: '3rem', animation: 'fadeInUp 1s ease-out' }}>
          <a href="#projects" style={{
            display: 'inline-block', padding: '1.2rem 3rem', background: 'var(--gradient-1)', color: '#000',
            fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '8px',
            textDecoration: 'none', boxShadow: '0 0 30px rgba(167,139,250,0.3)', transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Explore the Ecosystem
          </a>
        </div>

      </motion.div>
    </section>
  );
}

// ─── SLIDE 3: ABOUT ─────────────────────────────────────────────────────────
function AboutSlide() {
  const roles = [
    { title: 'Founder & Principal Architect, NOVELLEYX', desc: 'Directing a scalable digital and technical ecosystem, providing premium growth services, and architecting startup branding strategies.', gradient: 1 },
    { title: 'Academic & Technical Leader', desc: 'Serving as Class Representative and acting as a primary Team Leader for Smart India Hackathon (SIH) technical project groups.', gradient: 2 },
    { title: 'Multi-Disciplinary Engineer', desc: 'Bridging mechanical design (AutoCAD, Fusion 360, CATIA) with full-stack web infrastructure (Vercel, GitHub, Firebase).', gradient: 3 },
    { title: 'Operational Stats', desc: 'Orchestrated 15+ multidisciplinary projects and mastered 20+ technologies, transitioning early entrepreneurial lessons into a robust, market-resilient digital agency.', gradient: 4 }
  ];

  return (
    <section id="about" className="slide">
      <motion.div
        className="slide-content"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: '4rem', alignItems: 'center' }}>
          {/* Left */}
          <motion.div variants={fadeUp} className="glass" style={{ aspectRatio: '3/4', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={`${import.meta.env.BASE_URL}ai_portrait.png`} alt="Patta SVS Abhinav" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
          </motion.div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div variants={fadeUp}>
              <span className="slide-label">Roles & Metrics</span>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Current Roles &<br /><span className="gradient-text-2">Performance Metrics</span>
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              {roles.map((r, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="skill-card"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}
                >
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: `var(--gradient-${r.gradient})`, flexShrink: 0, marginTop: '6px' }} />
                  <div>
                    <div className={`gradient-text-${r.gradient}`} style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '1px' }}>{r.title}</div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-soft)', marginTop: '0.4rem', lineHeight: 1.6, fontWeight: 300 }}>{r.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── SLIDE 4: SKILLS ────────────────────────────────────────────────────────
import InteractiveSkills from '../components/InteractiveSkills';

function SkillsSlide() {
  return (
    <section id="skills" className="slide">
      <motion.div
        className="slide-content glass-strong"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        style={{ padding: '4rem 2rem' }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="slide-label">Expertise</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Core <span className="gradient-text-2">Capabilities</span>
          </h2>
        </motion.div>

        <InteractiveSkills />
      </motion.div>
    </section>
  );
}

// ─── SLIDE 5: PROJECTS ──────────────────────────────────────────────────────
function ProjectsSlide() {
  const projects = [
    { num: '01', title: 'NOVELLEYX AI ECOSYSTEM', desc: 'Building a proprietary scalable tech ecosystem that bridges advanced software development, automation systems, and full-stack digital products.', details: ['Engineered using a modern full-stack web architecture with a continuous integration/continuous deployment (CI/CD) framework hosted securely on Vercel.', 'Integrated dynamic serverless database structures and robust secure user authentication layers using Firebase BaaS.'], tags: ['AI Architecture', 'Automation', 'Full-Stack'], status: 'Active', gradient: 1 },
    { num: '02', title: 'INDUSTRIAL AUTOMATION & HARDWARE BLUEPRINTS', desc: 'Designed a specialized IoT-enabled stabilization system ("Seismic Shield") engineered to secure and protect delicate medical equipment during seismic disruptions.', details: ['Modeled a high-buoyancy, structural carbon-fiber rescue stretcher mat engineered for emergency operations in high-velocity flood disaster zones.', 'Drafted comprehensive 2D mechanical layouts and interactive 3D renders using Fusion 360 and CATIA to simulate mechanical load stresses.'], tags: ['IoT', 'Fusion 360', 'Hardware'], status: 'Completed', gradient: 2 },
    { num: '03', title: 'AI OPTIMIZATION ENGINE & DATA DASHBOARDS', desc: 'Designed and built a high-performance internal employee dashboard tracking operational workflows and growth analytics.', details: ['Audited and optimized web assets for maximum speed, embedding responsive UI elements (glassmorphism) and executing precise digital growth strategies.', 'Combined front-end telemetry with search engine optimization (SEO) audits to track traffic, visibility, and user retention.'], tags: ['Analytics', 'SEO', 'Optimization'], status: 'Completed', gradient: 4 }
  ];

  return (
    <section id="projects" className="slide">
      <motion.div
        className="slide-content"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="slide-label">Innovations</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Featured <span className="gradient-text-3">Innovations</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((p, i) => (
            <motion.div key={i} variants={fadeUp} className="glass" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'start', padding: '2.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.06)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{p.num}</span>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <h3 className={`gradient-text-${p.gradient}`} style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '1px' }}>{p.title}</h3>
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: p.status === 'Active' ? 'var(--accent-sky)' : 'var(--text-muted)', border: '1px solid currentColor', padding: '0.2rem 0.6rem', borderRadius: '50px' }}>{p.status}</span>
                </div>
                <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 500, marginBottom: '1rem' }}>{p.desc}</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {p.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                </ul>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {p.tags.map((t, j) => (
                    <span key={j} style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.4rem 1rem', borderRadius: '5px', background: 'rgba(255,255,255,0.04)', color: 'var(--text-soft)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── SLIDE 6: JOURNEY ───────────────────────────────────────────────────────
function JourneySlide() {
  const timeline = [
    { year: '10th–11th', title: 'Early Foundations | The Spirit of Experimentation', text: 'Initiated an aggressive exploration into market dynamics by testing, deploying, and analyzing multiple early-stage business models. This period was defined by hands-on experimentation, identifying market gaps, and building a foundational understanding of what makes a service valuable.', g: 1 },
    { year: '12th Grade', title: 'The Catalyst | Rapid Scaling & The Reality of Markets', text: 'Achieved a breakout entrepreneurial success that rapidly gained traction, only to experience an equally rapid decline. Rather than a setback, this volatile cycle served as the ultimate catalyst. It provided harsh, invaluable business and life lessons regarding market resilience, sustainable scaling, and the necessity of building long-term architectural foundations over short-term gains.', g: 2 },
    { year: 'B.Tech Yr 1', title: 'Engineering Precision & Zennova Esports', text: 'Entered formal Mechanical Engineering studies, mastering core structural physics, and high-fidelity CAD drafting. Concurrently, launched and managed "Zennova Esports," stepping into competitive digital community building, team management, and the early stages of digital brand scaling.', g: 3 },
    { year: 'B.Tech Yr 2', title: 'Strategic Leadership & The Rise of NOVELLEYX', text: 'Stepped into advanced leadership roles as Class Representative and Technical Team Lead. Armed with past market lessons, founded NOVELLEYX as a primary startup venture. Successfully withstanding current market pressures, the brand is actively delivering high-impact services, helping clients scale, and proving that resilient, well-engineered business models can dominate.', g: 1 },
    { year: 'FUTURE', title: 'A Multi-Sector Conglomerate', text: 'Executing a master plan to evolve NOVELLEYX from a focused digital/engineering agency into a massive, multi-branch conglomerate operating across all major sectors. The overarching ambition is to build infrastructures that empower people and businesses in need to scale dynamically. The driving philosophy is absolute and uncompromising: "We Build, We Grow, We Earn."', g: 4 }
  ];

  return (
    <section id="journey" className="slide">
      <motion.div
        className="slide-content glass-strong"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        style={{ maxWidth: '950px', margin: '0 auto', padding: '4rem 2rem' }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="slide-label">The Blueprint</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Journey Toward <span className="gradient-text-2">Innovation</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline Background Line */}
          <div style={{ position: 'absolute', left: '9px', top: '10px', bottom: '-20px', width: '2px', background: 'linear-gradient(180deg, var(--accent), var(--accent-warm), transparent)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {timeline.map((item, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
                
                {/* The Dot */}
                <div style={{
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: 'var(--gradient-' + item.g + ')',
                  boxShadow: '0 0 20px rgba(167,139,250,0.4)',
                  flexShrink: 0,
                  marginTop: '4px',
                  border: '3px solid #0f172a' // Creates a cutout effect
                }} />

                {/* The Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div className={`gradient-text-${item.g}`} style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
                    {item.year}
                  </div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-light)', lineHeight: 1.4, marginBottom: '0.2rem' }}>{item.title}</div>
                  <p style={{ color: 'var(--text-soft)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300 }}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── END OF SECTIONS ────────────────────────────────────────────────────────

// ─── MAIN APP ───────────────────────────────────────────────────────────────
function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!entered && <EnterScreen key="enter" onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {/* YouTube video background with audio — only after user click */}
      <YouTubeBackground isReady={entered} />

      {/* Gradient tint overlay on top of video */}
      {entered && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%)'
        }} />
      )}

      {entered && (
        <>
          <FloatingNav />
          <VolumeControl />

          <main style={{ position: 'relative', zIndex: 1 }}>
            <HeroSlide />
            <VisionSlide />
            <AboutSlide />
            <SkillsSlide />
            <ProjectsSlide />
            <JourneySlide />
            <MediaHub />
          </main>
        </>
      )}
    </>
  );
}

export default Home;
