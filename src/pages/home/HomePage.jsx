import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants for premium look
const textBlockVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] } },
  hover: {
    scale: 1.04,
    y: -6,
    letterSpacing: '0.12em',
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 18,
      mass: 0.7,
    },
  },
};

const arrowVariants = {
  initial: { opacity: 0, y: 0 },
  animate: { 
    opacity: 1,
    y: [0, 10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }
};

const glowVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: [0.3, 0.6, 0.3],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut"
    }
  }
};

const Logo = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        zIndex: 20,
        pointerEvents: 'auto',
      }}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          scale: isHovered ? 1.05 : 1,
          textShadow: isHovered 
            ? '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)'
            : '0 0 10px rgba(255,255,255,0.6)',
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          textShadow: { duration: 0.3 }
        }}
        style={{
          fontFamily: '"Space Mono", monospace',
          color: '#ffffff',
          fontSize: '1.2rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
        }}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontWeight: 100 }}
        >
          Portfolio of
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontWeight: 600 }}
        >
          Ilyas Elhajni
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Logo />
      <div style={{position:'absolute',top:0,left:0,width:'100vw',height:'100vh',zIndex:9,pointerEvents:'none',background:'radial-gradient(ellipse at center,rgba(0,0,0,0) 60%,rgba(0,0,0,0.7) 100%)'}} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '8vw',
            width: '100vw',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 5vw',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '30vw', minWidth: '250px' }}>
            <Link to="/experience" style={{ textDecoration: 'none' }}>
              <motion.div
                variants={textBlockVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  color: '#ffffff',
                  fontSize: '2.8vw',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  lineHeight: 1.1,
                  width: '100%',
                  textAlign: 'left',
                  whiteSpace: 'pre-line',
                  pointerEvents: 'auto',
                  textShadow: '0 0 10px rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                }}
              >
                {`Experience`}
              </motion.div>
            </Link>
            <motion.div
              variants={arrowVariants}
              initial="initial"
              animate="animate"
              style={{
                marginTop: '1rem',
                pointerEvents: 'none',
                position: 'relative',
              }}
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                animate="animate"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  filter: 'blur(8px)',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                  zIndex: -1,
                }}
              />
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
                  }}
                />
              </svg>
            </motion.div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', maxWidth: '30vw', minWidth: '250px' }}>
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <motion.div
                variants={textBlockVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  color: '#ffffff',
                  fontSize: '2.8vw',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  lineHeight: 1.1,
                  width: '70%',
                  textAlign: 'right',
                  whiteSpace: 'pre-line',
                  pointerEvents: 'auto',
                  textShadow: '0 0 10px rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                }}
              >
                {`projects`}
              </motion.div>
            </Link>
            <motion.div
              variants={arrowVariants}
              initial="initial"
              animate="animate"
              style={{
                marginTop: '1rem',
                pointerEvents: 'none',
                alignSelf: 'flex-end',
                position: 'relative',
              }}
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                animate="animate"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  filter: 'blur(8px)',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                  zIndex: -1,
                }}
              />
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
                  }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;