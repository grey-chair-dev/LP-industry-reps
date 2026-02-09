
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DistributorsPage from './pages/DistributorsPage';
import ManufacturersPage from './pages/ManufacturersPage';
import CategoriesPage from './pages/CategoriesPage';
import LineCardPage from './pages/LineCardPage';
import AboutPage from './pages/AboutPage';

// Helper component to reset scroll position on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/distributors" element={<DistributorsPage />} />
            <Route path="/manufacturers" element={<ManufacturersPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/line-card" element={<LineCardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
