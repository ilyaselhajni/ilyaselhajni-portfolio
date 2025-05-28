import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100vw', 
      position: 'relative',
      color: 'white',
      padding: '2rem'
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: '2rem',
            left: '2rem',
            fontFamily: '"Space Mono", monospace',
            color: '#ffffff',
            fontSize: '1.2rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          ← Back
        </motion.div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '6rem',
        }}
      >
        <h1 style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '3rem',
          marginBottom: '2rem',
          textShadow: '0 0 10px rgba(255,255,255,0.6)',
        }}>
          My Projects
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <h3 style={{ fontFamily: '"Space Mono", monospace', marginBottom: '0.5rem' }}>Restaurantly</h3>
            <p style={{ opacity: 0.8 }}>A restaurant website for a local restaurant, fully responsive and built with React and Tailwind CSS.</p>
            <motion.a
              href="https://github.com/yourusername/restaurantly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.9rem',
                opacity: 0.8,
                marginTop: 'auto',
              }}
            >
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View Repository
            </motion.a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <h3 style={{ fontFamily: '"Space Mono", monospace', marginBottom: '0.5rem' }}>EasyFolio</h3>
            <p style={{ opacity: 0.8 }}>a portfolio website for a freelancer, built with React and Tailwind CSS.</p>
            <motion.a
              href="https://github.com/yourusername/easyfolio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.9rem',
                opacity: 0.8,
                marginTop: 'auto',
              }}
            >
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View Repository
            </motion.a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <h3 style={{ fontFamily: '"Space Mono", monospace', marginBottom: '0.5rem' }}>Hangman game</h3>
            <p style={{ opacity: 0.8 }}> a hangman game built with React and Tailwind CSS.</p>
            <motion.a
              href="https://github.com/yourusername/hangman-game"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.9rem',
                opacity: 0.8,
                marginTop: 'auto',
              }}
            >
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View Repository
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage; 