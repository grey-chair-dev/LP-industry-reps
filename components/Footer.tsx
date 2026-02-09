
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="https://lpindustryreps.com/wp-content/uploads/2017/11/lp_industry_reps_logo_web.jpg" 
                alt="LP Industry Reps" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium">
              Manufacturers Sales Reps Servicing the LP/NG Distribution Industry.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-navy mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500 uppercase tracking-wider">
              <li><Link to="/line-card" className="hover:text-brand-accent transition-colors">Line Card</Link></li>
              <li><Link to="/distributors" className="hover:text-brand-accent transition-colors">Distributor Support</Link></li>
              <li><Link to="/manufacturers" className="hover:text-brand-accent transition-colors">Manufacturer Portal</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Firm</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-navy mb-8">Direct Contact</h4>
            <p className="text-sm text-slate-500 mb-6 font-medium">
              View the Contact page for direct mobile lines for Tim, Emilee, and Colin.
            </p>
            <Link to="/contact" className="inline-block bg-brand-navy text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-4 rounded-sm hover:bg-brand-accent transition-all">
              View Team Directory
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
          <div className="flex flex-col gap-1">
            <p>© 2026 LP Industry Reps</p>
          </div>
          <div className="mt-6 md:mt-0 text-slate-400 flex flex-col items-end gap-1 text-right">
            <span>B2B Sales Representative Firm</span>
            <span className="text-brand-accent font-bold">No Direct Sales to Consumers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
