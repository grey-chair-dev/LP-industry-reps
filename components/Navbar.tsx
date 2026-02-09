
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, AlertTriangle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'For Distributors', path: '/distributors' },
    { name: 'For Manufacturers', path: '/manufacturers' },
    { name: 'Product Categories', path: '/categories' },
    { name: 'Line Card', path: '/line-card' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* Qualification Bar */}
      <div className="bg-brand-navy text-white py-2 px-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center">
        <span className="flex items-center justify-center gap-2">
          <AlertTriangle className="h-3 w-3 text-brand-accent" />
          Professional B2B Only — No Direct Sales to Homeowners
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="https://lpindustryreps.com/wp-content/uploads/2017/11/lp_industry_reps_logo_web.jpg" 
              alt="LP Industry Reps" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  location.pathname === link.path ? 'text-brand-accent' : 'text-slate-600 hover:text-brand-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-accent text-white px-5 py-2.5 rounded-sm text-xs font-extrabold hover:opacity-90 transition-all uppercase tracking-widest shadow-sm"
            >
              Request Info
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-6 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-brand-navy hover:text-brand-accent"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-brand-navy text-white text-center px-6 py-4 rounded-sm text-sm font-bold uppercase tracking-widest"
          >
            Request Information
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
