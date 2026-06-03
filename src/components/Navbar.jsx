import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 150], [0, 0.85]);
  const blurValue = useTransform(scrollY, [0, 150], [0, 20]);

  const navLinks = [
    { label: "Vision", href: "#vision" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Innovations", href: "#projects" },
    { label: "Journey", href: "#timeline" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.25rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 9999,
        backgroundColor: useTransform(bgOpacity, v => `rgba(5, 5, 5, ${v})`),
        backdropFilter: useTransform(blurValue, v => `blur(${v}px)`),
        borderBottom: useTransform(scrollY, [0, 150], ['1px solid transparent', '1px solid rgba(255,255,255,0.04)'])
      }}
    >
      {/* Logo — Personal name */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="gold-text" style={{
          fontSize: '1.1rem',
          fontWeight: 700,
          letterSpacing: '4px',
          fontFamily: 'var(--font-heading)'
        }}>
          PSA
        </span>
        <span style={{
          width: '1px',
          height: '18px',
          background: 'rgba(255,255,255,0.15)',
          display: 'inline-block'
        }}></span>
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight: 500
        }}>
          Portfolio
        </span>
      </a>

      {/* Center Links */}
      <div className="desktop-nav">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(212,175,55,0.3)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: '0.7rem 1.8rem',
          border: '1px solid var(--border-color)',
          background: 'rgba(212, 175, 55, 0.06)',
          color: 'var(--gold-accent)',
          fontSize: '0.8rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          borderRadius: '4px',
          fontWeight: 600,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          textDecoration: 'none'
        }}
      >
        Initiate Contact
      </motion.a>
    </motion.nav>
  );
}
