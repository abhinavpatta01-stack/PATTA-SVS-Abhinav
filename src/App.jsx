import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Home from './pages/Home';
import './index.css';

// ─── CUSTOM CURSOR ──────────────────────────────────────────────────────────
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const innerCursorX = useMotionValue(-100);
  const innerCursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const innerSpringConfig = { damping: 30, stiffness: 400 };
  const innerCursorXSpring = useSpring(innerCursorX, innerSpringConfig);
  const innerCursorYSpring = useSpring(innerCursorY, innerSpringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      innerCursorX.set(e.clientX - 4);
      innerCursorY.set(e.clientY - 4);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, innerCursorX, innerCursorY]);

  return (
    <>
      <motion.div
        style={{
          position: 'fixed', left: 0, top: 0,
          width: '32px', height: '32px', borderRadius: '50%',
          border: '2px solid #00f3ff',
          boxShadow: '0 0 12px rgba(0,243,255,0.6), inset 0 0 12px rgba(0,243,255,0.6)',
          pointerEvents: 'none', zIndex: 999999,
          x: cursorXSpring, y: cursorYSpring
        }}
      />
      <motion.div
        style={{
          position: 'fixed', left: 0, top: 0,
          width: '8px', height: '8px', borderRadius: '50%',
          background: '#00f3ff',
          boxShadow: '0 0 10px #00f3ff',
          pointerEvents: 'none', zIndex: 999999,
          x: innerCursorXSpring, y: innerCursorYSpring
        }}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
