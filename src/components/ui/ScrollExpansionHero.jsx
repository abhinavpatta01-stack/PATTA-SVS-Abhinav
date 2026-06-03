import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollExpansionHero — Adapted from shadcn scroll-expansion-hero.
 * Vanilla CSS + Framer Motion (no Tailwind, no Next.js Image required).
 * Creates a scroll-driven media expansion effect.
 */
export default function ScrollExpansionHero({
  children,
  bgImageSrc,
  title = '',
  subtitle = '',
  scrollLabel = 'Scroll to explore'
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (expanded && e.deltaY < 0 && window.scrollY <= 5) {
        setExpanded(false);
        e.preventDefault();
      } else if (!expanded) {
        e.preventDefault();
        const delta = e.deltaY * 0.001;
        const next = Math.min(Math.max(scrollProgress + delta, 0), 1);
        setScrollProgress(next);

        if (next >= 1) {
          setExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;
      const deltaY = touchStartY - e.touches[0].clientY;

      if (expanded && deltaY < -20 && window.scrollY <= 5) {
        setExpanded(false);
        e.preventDefault();
      } else if (!expanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const next = Math.min(Math.max(scrollProgress + deltaY * factor, 0), 1);
        setScrollProgress(next);

        if (next >= 1) {
          setExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleScroll = () => {
      if (!expanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [scrollProgress, expanded]);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 150 : 120);

  const firstWord = title.split(' ')[0] || '';
  const restOfTitle = title.split(' ').slice(1).join(' ');

  return (
    <div style={{ overflowX: 'hidden' }}>
      <section style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100dvh'
      }}>
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100dvh' }}>

          {/* Background image */}
          <motion.div
            style={{
              position: 'absolute', inset: 0, zIndex: 0, height: '100%'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            {bgImageSrc && (
              <img
                src={bgImageSrc}
                alt="Background"
                style={{
                  width: '100vw', height: '100vh',
                  objectFit: 'cover', objectPosition: 'center'
                }}
              />
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
          </motion.div>

          <div style={{
            maxWidth: '1400px', width: '100%', margin: '0 auto',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'flex-start', position: 'relative', zIndex: 10
          }}>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', width: '100%', height: '100dvh', position: 'relative'
            }}>
              {/* Expanding media container */}
              <div style={{
                position: 'absolute', zIndex: 0,
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: `${mediaWidth}px`,
                height: `${mediaHeight}px`,
                maxWidth: '95vw', maxHeight: '85vh',
                borderRadius: '16px', overflow: 'hidden',
                boxShadow: '0 0 60px rgba(212,175,55,0.15), 0 0 120px rgba(0,0,0,0.5)',
                border: '1px solid rgba(212,175,55,0.1)'
              }}>
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, #0a0a0a, #111, #0a0a0a)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {/* Gold abstract shape inside */}
                  <div style={{
                    width: '60%', height: '60%',
                    background: `radial-gradient(circle, rgba(212,175,55,${0.05 + scrollProgress * 0.1}) 0%, transparent 70%)`,
                    borderRadius: '50%'
                  }} />
                </div>
              </div>

              {/* Split title text */}
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', textAlign: 'center', gap: '0.5rem',
                width: '100%', position: 'relative', zIndex: 10,
                mixBlendMode: 'difference'
              }}>
                <motion.h2
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    transform: `translateX(-${textTranslateX}vw)`,
                    letterSpacing: '-2px'
                  }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    transform: `translateX(${textTranslateX}vw)`,
                    letterSpacing: '-2px'
                  }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>

              {/* Scroll indicator & subtitle */}
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', marginTop: '1.5rem', position: 'relative', zIndex: 10
              }}>
                {subtitle && (
                  <p style={{
                    color: 'var(--gold-accent)', fontSize: '1rem',
                    transform: `translateX(-${textTranslateX * 0.5}vw)`,
                    opacity: 1 - scrollProgress,
                    transition: 'opacity 0.3s'
                  }}>
                    {subtitle}
                  </p>
                )}
                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500,
                  transform: `translateX(${textTranslateX * 0.5}vw)`,
                  opacity: 1 - scrollProgress,
                  transition: 'opacity 0.3s',
                  letterSpacing: '2px', textTransform: 'uppercase'
                }}>
                  {scrollLabel}
                </p>
              </div>
            </div>

            {/* Revealed content below */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%', padding: '2rem 1.5rem 4rem' }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
