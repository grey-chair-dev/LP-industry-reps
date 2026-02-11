
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-brand-accent" />
              <span className="font-extrabold text-2xl tracking-tight">LP Industry Reps</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing professional manufacturers' representation and technical expertise for the North American propane and gas infrastructure sector.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-brand-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link to="/equipment" className="hover:text-white transition-colors">Equipment & Brands</Link></li>
              <li><Link to="/distributors" className="hover:text-white transition-colors">For Distributors</Link></li>
              <li><Link to="/manufacturers" className="hover:text-white transition-colors">For Manufacturers</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Our Firm</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-brand-accent">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> info@LPindustryReps.com</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> 513.382.0562</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Cincinnati, OH</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-brand-accent">Industry Compliance</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our firm is dedicated to safety education and compliance with NFPA 54 and NFPA 58 propane codes across all regional installations.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2024 LP INDUSTRY REPS, LLC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="/about" className="hover:text-white">About Us</Link>
            <Link to="/contact" className="hover:text-white">Inquire</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
