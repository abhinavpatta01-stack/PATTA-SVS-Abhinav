import { motion } from 'framer-motion';

export default function ContactSection() {
  const socials = [
    { name: 'LinkedIn', link: '#' },
    { name: 'GitHub', link: '#' },
    { name: 'Instagram', link: '#' },
    { name: 'Email', link: 'mailto:' }
  ];

  const inputStyle = {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '8px',
    padding: '1.1rem 1.25rem',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'var(--font-body)',
    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
    width: '100%'
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--border-color)';
    e.target.style.background = 'rgba(212,175,55,0.02)';
    e.target.style.boxShadow = '0 0 20px rgba(212,175,55,0.05)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = 'var(--border-subtle)';
    e.target.style.background = 'rgba(255,255,255,0.02)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="cinematic-section" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '6rem', alignItems: 'start' }}>

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label">
              <span>Get In Touch</span>
            </div>
            <h2 className="section-heading">
              Let's Build<br /><span className="gold-text">Something Great</span>
            </h2>
            <div className="gold-divider" />

            <p style={{
              fontSize: '1.15rem', color: 'var(--text-secondary)',
              marginBottom: '3.5rem', lineHeight: 1.7, fontWeight: 300
            }}>
              Looking to build the next generation of intelligent systems?
              <br /><span className="gold-text" style={{ fontWeight: 500 }}>Let's collaborate.</span>
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1.5rem',
                    fontSize: '1.1rem', textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                    fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold-accent)',
                    letterSpacing: '1px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold-accent)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(212,175,55,0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    {social.name.charAt(0)}
                  </div>
                  <span style={{ fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: 'clamp(2.5rem, 4vw, 3.5rem)',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.3)'
            }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} onSubmit={(e) => e.preventDefault()}>
              {[
                { label: 'Full Name', type: 'text' },
                { label: 'Email Address', type: 'email' },
                { label: 'Project Inquiry', type: 'text' }
              ].map((field, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <label style={{
                    fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600,
                    letterSpacing: '2px', textTransform: 'uppercase'
                  }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{
                  fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600,
                  letterSpacing: '2px', textTransform: 'uppercase'
                }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(212,175,55,0.4)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  marginTop: '0.5rem',
                  padding: '1.2rem',
                  background: 'linear-gradient(135deg, var(--gold-glow), var(--gold-accent))',
                  color: 'var(--bg-primary)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(212,175,55,0.25)',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)'
                }}
              >
                Initiate Collaboration
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
