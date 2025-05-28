import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SiVite, SiMongodb, SiExpress, SiNodedotjs, SiTypescript, SiTailwindcss, SiGit, SiDocker, SiPostgresql, SiRedux, SiNextdotjs } from "react-icons/si";
import { FaHtml5, FaCss3, FaJs, FaPython, FaDatabase, FaAws } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";

const technologies = [
  // Frontend
  { icon: FaHtml5, name: "HTML", color: "#E44D26" },
  { icon: FaCss3, name: "CSS", color: "#264DE4" },
  { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { icon: RiReactjsLine, name: "React", color: "#61DAFB" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  

  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },

  { icon: FaPython, name: "Python", color: "#3776AB" },
  


  

  { icon: SiGit, name: "Git", color: "#F05032" },

];

const TechnologyCarousel = () => {
  return (
    <div style={{ 
      position: 'relative', 
      height: '120px', 
      width: '100%',
      overflow: 'hidden',
      marginTop: '2rem'
    }}>
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        style={{
          display: 'flex',
          gap: '2rem',
          position: 'absolute',
          left: 0,
        }}
      >
        {/* First set of icons */}
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={`first-${tech.name}`}
              whileHover={{ 
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                minWidth: '100px',
              }}
            >
              <Icon size={48} color={tech.color} />
              <motion.span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.9rem',
                  color: tech.color,
                  textShadow: `0 0 10px ${tech.color}40`
                }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          );
        })}
        {/* Duplicate set for seamless loop */}
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={`second-${tech.name}`}
              whileHover={{ 
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                minWidth: '100px',
              }}
            >
              <Icon size={48} color={tech.color} />
              <motion.span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.9rem',
                  color: tech.color,
                  textShadow: `0 0 10px ${tech.color}40`
                }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const ExperiencePage = () => {
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
          My Experience
        </h1>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}>
          {/* Full Stack Development */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <h2 style={{ 
              fontFamily: '"Space Mono", monospace',
              fontSize: '1.8rem',
              marginBottom: '1rem',
           
            }}>
              Full Stack Development
            </h2>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
              End-to-end web application development with a focus on user experience and performance.
            </p>
            <TechnologyCarousel />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage; 