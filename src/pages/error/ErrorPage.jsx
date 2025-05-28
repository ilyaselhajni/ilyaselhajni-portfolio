import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: '"Space Mono", monospace',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Page not found</p>
        <Link to="/" style={{ 
          color: 'white', 
          textDecoration: 'none',
          border: '1px solid white',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
        }}>
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
