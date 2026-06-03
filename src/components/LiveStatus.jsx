import { useState, useEffect } from 'react';

export default function LiveStatus() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const hyderabadTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setTime(hyderabadTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
      padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50px',
      fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)',
      marginBottom: '2rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
        <span>HYD {time}</span>
      </div>
      <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.1)' }} />
      <span style={{ color: 'var(--text-light)' }}>Currently building <span style={{ color: 'var(--accent)' }}>AI Tools</span></span>
    </div>
  );
}
