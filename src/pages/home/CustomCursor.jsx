import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef();

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
} 