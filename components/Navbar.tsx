
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Equipment & Brands', path: '/equipment' },
    { name: 'Distributors', path: '/distributors' },
    { name: 'Manufacturers', path: '/manufacturers' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-brand-navy p-1.5 rounded-sm">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-brand-navy leading-none text-lg">LP Industry</span>
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mt-0.5">Reps, LLC</span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive(link.path) ? 'text-brand-accent' : 'text-slate-500 hover:text-brand-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-navy text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-brand-accent transition-all shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-brand-navy"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-6 px-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-bold uppercase tracking-wider ${
                isActive(link.path) ? 'text-brand-accent' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-brand-navy text-white text-center py-4 rounded-sm font-bold text-xs uppercase tracking-widest"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
