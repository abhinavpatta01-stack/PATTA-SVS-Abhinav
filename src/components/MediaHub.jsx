import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function MediaHub() {
  const [activeTab, setActiveTab] = useState('hustle');
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate serverless Firebase transmission delay
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 5000); // Reset after 5s
    }, 1500);
  };

  const videos = [
    { title: 'The Morning Kickoff Framework', badges: ['Mindset Execution', 'Daily Targets', 'Accountability Logs'], metric: '⚡ [Live Session: Setting the Daily Routine to Dominate]' },
    { title: 'The Nightly Recap & Pivot Log', badges: ['Market Resilience', 'Startup Analytics', 'Lessons Learned'], metric: '⚡ [Live Transmission: Analyzing Real Wins, Losses & Business Re-Engineering]' },
    { title: 'Engineering Student to Tech Entrepreneur', badges: ['Fusion 360', 'Full-Stack Dev', 'Novelleyx Operations'], metric: '⚡ [Case Study: Balancing Mechanical Layouts with Late-Night Builds]' }
  ];

  return (
    <>
      <section id="media-hub" className="slide" style={{ paddingBottom: '0', height: 'auto', minHeight: '100vh', display: 'block' }}>
        <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
        variants={stagger}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem 2rem', display: 'flex', flexDirection: 'column', gap: '5rem' }}
      >
        
        {/* 1. HEADER */}
        <motion.div variants={fadeUp} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="slide-label">Media, Matrix & Engagement Hub</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Connect & <span className="gradient-text-3">Collaborate</span>
          </h2>
          <blockquote style={{ fontSize: '1.1rem', color: 'var(--text-soft)', fontStyle: 'italic', borderLeft: '4px solid var(--gradient-3)', paddingLeft: '1.5rem', textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '0 12px 12px 0' }}>
            "Bridging physical engineering precision with next-generation digital architecture to build highly scalable automated networks. Let's engineer something disruptive."
          </blockquote>
        </motion.div>

        {/* 2. BROADCAST TOGGLE SYSTEM */}
        <motion.div variants={fadeUp} className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
            <button 
              onClick={() => setActiveTab('hustle')}
              style={{ background: activeTab === 'hustle' ? 'rgba(167,139,250,0.15)' : 'transparent', border: `1px solid ${activeTab === 'hustle' ? 'var(--accent)' : 'transparent'}`, padding: '1rem 2rem', borderRadius: '8px', color: activeTab === 'hustle' ? '#fff' : 'var(--text-muted)', fontWeight: 700, transition: 'all 0.3s' }}
            >
              📺 The Engineer's Hustle
            </button>
            <button 
              onClick={() => setActiveTab('routine')}
              style={{ background: activeTab === 'routine' ? 'rgba(167,139,250,0.15)' : 'transparent', border: `1px solid ${activeTab === 'routine' ? 'var(--accent)' : 'transparent'}`, padding: '1rem 2rem', borderRadius: '8px', color: activeTab === 'routine' ? '#fff' : 'var(--text-muted)', fontWeight: 700, transition: 'all 0.3s' }}
            >
              ⚙️ Daily Broadcast Engine
            </button>
          </div>
          
          <div style={{ minHeight: '200px' }}>
            <AnimatePresence mode="wait">
              {activeTab === 'hustle' ? (
                <motion.div key="hustle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div><strong style={{ color: '#fff' }}>The Raw Reality:</strong> Documenting the real-time, unfiltered journey of a Mechanical Engineering student transitioning into a tech entrepreneur. This is a transparent look at balancing intense academic engineering blocks with late-night business infrastructure development.</div>
                  <div><strong style={{ color: '#fff' }}>The Startup Architecture:</strong> Pulling back the curtain on the technical execution, design failures, scaling methodologies, and daily operational grind of building the NOVELLEYX ecosystem from the ground up.</div>
                  <div><strong style={{ color: '#fff' }}>The Shared Grind:</strong> Specifically engineered for students, builders, and high-performance individuals chasing a bigger life. This is an open-source ledger focused on mutual accountability, continuous market navigation, and learning critical business lessons.</div>
                </motion.div>
              ) : (
                <motion.div key="routine" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div><strong style={{ color: '#fff' }}>☀️ The Morning Kickoff:</strong> A tactical, high-energy morning update breaking down immediate technical objectives, daily scaling goals, mindset optimization, and the routines required to dominate the day.</div>
                  <div><strong style={{ color: '#fff' }}>🌙 The Nightly Recap:</strong> An unfiltered evening transmission analyzing the day's engineering wins, operational losses, raw startup analytics, and critical reflections on the continuous business grind.</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 3. SUBSCRIBE BUTTON */}
        <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center' }}>
          <a 
            href="https://www.youtube.com/@EngineerToEntrepreneur-Abhinav" 
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-block', padding: '1.2rem 3rem', background: 'rgba(220,38,38,0.1)',
              border: '1px solid rgba(220,38,38,0.4)', borderRadius: '8px', color: '#fff',
              fontWeight: 800, letterSpacing: '2px', textDecoration: 'none',
              boxShadow: '0 0 40px rgba(220,38,38,0.2), inset 0 0 20px rgba(220,38,38,0.1)',
              textTransform: 'uppercase', transition: 'all 0.3s',
              animation: 'pulse-neon 2s infinite'
            }}
          >
            ▶ Subscribe to the Hustle on YouTube
          </a>
        </motion.div>

        {/* 4. SECURE MESSAGING PORTAL */}
        <motion.div variants={fadeUp} className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', textAlign: 'center' }}>Direct Inquiry & Secure Messaging Portal</h3>
          
          {formStatus === 'sent' ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ padding: '3rem', textAlign: 'center', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px' }}>
              <h3 style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>⚡ TRANSMISSION SUCCESSFUL</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Your secure message has been logged in the system. I will review the operational objectives shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name:</label>
                  <input type="text" placeholder="[ Enter Legal or Corporate Name ]" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', outline: 'none', fontSize: '0.9rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address:</label>
                  <input type="email" placeholder="[ Enter Active Response Email ]" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', outline: 'none', fontSize: '0.9rem' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Subject Line:</label>
                <select required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', outline: 'none', appearance: 'none', fontSize: '0.9rem' }}>
                  <option value="" disabled selected style={{ color: '#000' }}>[ Select: Venture Collaboration / Engineering Build ]</option>
                  <option value="venture" style={{ color: '#000' }}>Venture Collaboration</option>
                  <option value="engineering" style={{ color: '#000' }}>Engineering Build</option>
                  <option value="other" style={{ color: '#000' }}>Other Inquiry</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Message Blueprint:</label>
                <textarea placeholder="[ Type your operational objectives or project parameters here ]" required rows={4} style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', outline: 'none', resize: 'vertical', fontSize: '0.9rem' }} />
              </div>
              <button type="submit" disabled={formStatus === 'sending'} style={{ alignSelf: 'flex-start', padding: '0.8rem 2rem', background: 'transparent', border: '1px solid var(--accent)', borderRadius: '6px', color: 'var(--accent)', fontWeight: 600, letterSpacing: '1px', fontSize: '0.85rem', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', opacity: formStatus === 'sending' ? 0.7 : 1 }}>
                {formStatus === 'sending' ? 'TRANSMITTING...' : '⚡ SEND SECURE TRANSMISSION'}
              </button>
            </form>
          )}
        </motion.div>
        </motion.div>
      </section>

      {/* 5. FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'transparent', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px', color: '#fff' }}>PATTA SVS ABHINAV</h2>
          <p style={{ color: 'var(--text-soft)', maxWidth: '600px', lineHeight: 1.6, fontSize: '0.9rem' }}>
            Engineering the Future Through Intelligence & Innovation. Architecting multi-sector digital transformation models via the Novelleyx startup ecosystem.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
            <a href="https://youtube.com/@EngineerToEntrepreneur-Abhinav" target="_blank" rel="noreferrer" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>YouTube Hub</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>GitHub Matrix</a>
            <a href="https://vercel.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>Vercel Network</a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', width: '100%', maxWidth: '300px' }}>
            © 2026 Patta SVS Abhinav. All rights reserved.<br/>
            <span style={{ color: 'var(--accent)', fontWeight: 700, display: 'block', marginTop: '0.4rem' }}>We Build, We Grow, We Earn.</span>
          </p>
        </div>
      </footer>
      
      {/* Pulse Animation Definition */}
      <style>{`
        @keyframes pulse-neon {
          0% { box-shadow: 0 0 20px rgba(220,38,38,0.2), inset 0 0 10px rgba(220,38,38,0.1); }
          50% { box-shadow: 0 0 60px rgba(220,38,38,0.5), inset 0 0 30px rgba(220,38,38,0.3); }
          100% { box-shadow: 0 0 20px rgba(220,38,38,0.2), inset 0 0 10px rgba(220,38,38,0.1); }
        }
      `}</style>
    </>
  );
}
