import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_8kflwor';
    const templateID = 'template_karr1jg';
    const publicKey = 'arSTs6ZW9lXvE954a';

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      message: form.comment,
      reply_to: form.email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', comment: '' });
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
      });
  };

  return (
    <div style={{ minHeight: '100vh', width: '100vw', position: 'relative', color: 'white', padding: '2rem' }}>
      {/* Radial gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center,rgba(0,0,0,0) 60%,rgba(0,0,0,0.7) 100%)'
      }} />
      <Link to="/" style={{ textDecoration: 'none', zIndex: 2, position: 'relative' }}>
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
            textShadow: '0 0 10px rgba(255,255,255,0.3)'
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
          maxWidth: '420px',
          margin: '0 auto',
          marginTop: '7rem',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.25)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '2.5rem 2rem',
          border: '1px solid rgba(255,255,255,0.1)',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <h1 style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '2.2rem',
          marginBottom: '2rem',
          textAlign: 'center',
          textShadow: '0 0 10px rgba(255,255,255,0.6)',
        }}>Contact</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="comment"
            placeholder="Comment"
            value={form.comment}
            onChange={handleChange}
            required
            rows={4}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <button type="submit" style={buttonStyle}>Send</button>
          {submitted && <div style={{ color: '#22d3ee', textAlign: 'center', marginTop: '0.5rem' }}>Thank you for contacting us!</div>}
        </form>
      </motion.div>
    </div>
  );
};

const inputStyle = {
  padding: '0.8rem',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
  fontFamily: '"Space Mono", monospace',
  background: 'rgba(255,255,255,0.08)',
  color: 'white',
  outline: 'none',
};

const buttonStyle = {
  background: 'rgba(255,255,255,0.10)',
  color: '#fff',
  fontWeight: 700,
  fontFamily: '"Space Mono", monospace',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '8px',
  padding: '0.9rem',
  fontSize: '1.1rem',
  cursor: 'pointer',
  marginTop: '0.5rem',
  boxShadow: '0 2px 8px rgba(59,130,246,0.10)',
  transition: 'background 0.2s, box-shadow 0.2s',
};

export default ContactPage;
  