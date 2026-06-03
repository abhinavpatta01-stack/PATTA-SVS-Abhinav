import { motion } from 'framer-motion';

export default function EngineeringDashboard() {
  return (
    <motion.div
      className="dashboard-panel"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem', // Placed on bottom left to avoid volume control on top-right
        zIndex: 9990,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '1.25rem',
        minWidth: '220px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        color: 'var(--text-light)',
        fontFamily: 'var(--font-mono)'
      }}
    >
      <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '1rem', fontWeight: 600 }}>Live Status</div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Projects</span>
          <span style={{ fontWeight: 700 }}>15+</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Technologies</span>
          <span style={{ fontWeight: 700 }}>20+</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Experience</span>
          <span style={{ fontWeight: 700 }}>Industrial</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Availability</span>
          <span style={{ fontWeight: 700, color: '#10b981' }}>Open</span>
        </div>
      </div>
    </motion.div>
  );
}
