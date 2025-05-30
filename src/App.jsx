import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ExperiencePage from './pages/experience/ExperiencePage';
import ContactPage from './pages/home/ContactPage';
import ErrorPage from './pages/error/ErrorPage';
import BackgroundLayout from './layouts/BackgroundLayout';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <BackgroundLayout>
        <AnimatedRoutes />
      </BackgroundLayout>
    </Router>
  );
}

export default App;
