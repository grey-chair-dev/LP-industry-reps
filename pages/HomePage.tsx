
import React from 'react';
import { ArrowRight, Zap, Factory, AlertCircle, ShieldCheck, BookOpen, Download, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLACEHOLDER_IMG = "https://montessoriinthewoods.org/wp-content/uploads/2018/02/image-placeholder-500x500.jpg";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Industrial Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={PLACEHOLDER_IMG} 
            alt="Industrial Installation" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-accent px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-lg">
              <Zap className="h-3 w-3" /> LP/NG Distribution Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] mb-8 tracking-tighter">
              North American <br />
              <span className="text-brand-accent">LP Gas</span> Liaison.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 font-medium max-w-2xl">
              Specialized manufacturers’ representative firm providing technical expertise, product education, and regional sales support for the industrial gas sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/line-card"
                className="bg-brand-accent text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white hover:text-brand-navy transition-all shadow-2xl"
              >
                View Authorized Brands
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              >
                Request Tech Spec
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lead Magnet: Gated Value Asset */}
      <section className="py-16 bg-brand-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 skew-x-12 translate-x-12"></div>
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex gap-6 items-start">
              <div className="bg-white/10 p-4 rounded-sm border border-white/20">
                <ClipboardCheck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2">2024 Northeast LP Infrastructure Guide</h3>
                <p className="text-white/80 font-medium text-sm max-w-xl">
                  Get our exclusive compliance checklist and system sizing guide for commercial LP installations. Essential for distributors and consulting engineers.
                </p>
              </div>
            </div>
            <Link 
              to="/contact?asset=compliance-guide" 
              className="bg-white text-brand-navy px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-brand-navy hover:text-white transition-all shadow-2xl"
            >
              Get The Free Guide <Download className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. The Liaisons Role */}
      <section className="py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent">Industry Function</h2>
              <h3 className="text-4xl font-extrabold text-brand-navy leading-tight tracking-tight">
                Connecting Equipment <br />to the Field.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                LP Industry Reps, LLC acts as the vital liaison between equipment manufacturers and distributors. We ensure that components essential for safe fuel storage, transfer, and regulation are available and correctly specified.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-sm h-fit"><ShieldCheck className="h-5 w-5 text-brand-accent" /></div>
                  <div>
                    <h4 className="font-bold text-brand-navy uppercase text-xs tracking-widest mb-1">Supply Chain Streamlining</h4>
                    <p className="text-sm text-slate-500">Optimizing the flow of parts from factory to regional distribution hubs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-sm h-fit"><BookOpen className="h-5 w-5 text-brand-accent" /></div>
                  <div>
                    <h4 className="font-bold text-brand-navy uppercase text-xs tracking-widest mb-1">Technical Education</h4>
                    <p className="text-sm text-slate-500">Field consultations and training to ensure compliance with evolving safety codes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src={PLACEHOLDER_IMG} 
                alt="Infrastructure" 
                className="w-full h-64 object-cover rounded-sm border border-slate-200 shadow-lg"
              />
              <img 
                src={PLACEHOLDER_IMG} 
                alt="Equipment" 
                className="w-full h-64 object-cover rounded-sm border border-slate-200 shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Equipment Showcase Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Manufacturer Partnerships</h2>
            <h3 className="text-4xl font-extrabold text-brand-navy tracking-tight">Core Infrastructure Expertise</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-2 rounded-sm border border-slate-200 shadow-sm group">
              <div className="overflow-hidden h-48 mb-6">
                <img src={PLACEHOLDER_IMG} alt="Storage" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-black text-brand-navy uppercase tracking-tighter mb-2">Storage Systems</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Representing brands essential for domestic and commercial high-pressure fuel storage.</p>
              </div>
            </div>
            
            <div className="bg-white p-2 rounded-sm border border-slate-200 shadow-sm group">
              <div className="overflow-hidden h-48 mb-6">
                <img src={PLACEHOLDER_IMG} alt="Logistics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-black text-brand-navy uppercase tracking-tighter mb-2">Transfer & Regulation</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Precision hardware for safe liquid and vapor handling across the distribution chain.</p>
              </div>
            </div>

            <div className="bg-white p-2 rounded-sm border border-slate-200 shadow-sm group">
              <div className="overflow-hidden h-48 mb-6">
                <div className="bg-brand-navy w-full h-full flex items-center justify-center p-12">
                   <Factory className="w-16 h-16 text-brand-accent opacity-40" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-black text-brand-navy uppercase tracking-tighter mb-2">Industrial Metering</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Accuracy standards for custody transfer and inventory loss prevention systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Qualifier Callout */}
      <section className="py-20 bg-brand-navy overflow-hidden relative">
         <div className="absolute right-0 top-0 w-1/4 h-full bg-brand-accent/10 -skew-x-12 translate-x-12"></div>
        <div className="max-w-[1140px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex gap-6 items-start">
            <div className="bg-brand-accent text-white p-4 rounded-sm shrink-0 shadow-xl shadow-brand-accent/30">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white text-xl font-extrabold mb-2 uppercase tracking-tighter">B2B Representative Firm</h4>
              <p className="text-white/50 text-sm max-w-xl font-medium leading-relaxed">
                LP Industry Reps serves manufacturers and distributors. We facilitate innovation adoption and compliance with propane safety codes. We do not sell directly to field consumers.
              </p>
            </div>
          </div>
          <Link to="/contact" className="bg-white text-brand-navy px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-all whitespace-nowrap">
            Representative Directory
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
