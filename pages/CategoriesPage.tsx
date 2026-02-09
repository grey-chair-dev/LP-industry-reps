
import React from 'react';
import { ArrowUpRight, CheckCircle2, Info, FileText, Calculator, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Bulk Plant & Storage",
    description: "The high-volume core of gas infrastructure. These components manage the transfer of fuel from transport vehicles to primary storage tanks.",
    criticalRole: "Ensures leak-free high-pressure transfer and operational safety during loading/unloading.",
    useCases: ["Propane rail terminals", "Commercial bulk storage upgrades", "New plant construction"],
    manufacturers: "Blackmer, Fisher, Corken (Representative List)",
    iconColor: "bg-brand-accent-light text-brand-accent"
  },
  {
    title: "Regulation & Delivery",
    description: "Precision hardware designed to reduce high-pressure tank levels to usable service pressures for residential and industrial applications.",
    criticalRole: "Protects downstream appliances and piping from overpressure conditions.",
    useCases: ["Residential tank installations", "Commercial kitchen infrastructure", "Industrial heating systems"],
    manufacturers: "RegO, BelGAS, Fisher (Representative List)",
    iconColor: "bg-brand-accent-light text-brand-accent"
  },
  {
    title: "Vaporization Systems",
    description: "Specialized equipment used to convert liquid gas into vapor when natural environmental heat is insufficient to meet demand.",
    criticalRole: "Maintains constant fuel supply during peak winter demand or high-load industrial use.",
    useCases: ["Agricultural grain drying", "Standby power generation", "Extreme cold-weather heating"],
    manufacturers: "Algas-SDI, Ransome (Representative List)",
    iconColor: "bg-brand-accent-light text-brand-accent"
  },
  {
    title: "Pumping & Compression",
    description: "Mechanical solutions for moving liquid and vapor through piping networks at controlled rates.",
    criticalRole: "Optimizes transfer times and ensures complete evacuation of transport vessels.",
    useCases: ["Truck-to-tank transfer", "Cylinder filling stations", "Aerosol propellant delivery"],
    manufacturers: "Blackmer, Smith Pumps (Representative List)",
    iconColor: "bg-brand-accent-light text-brand-accent"
  },
  {
    title: "Industrial Metering",
    description: "Accurate measurement systems for custody transfer and internal fuel management.",
    criticalRole: "Provides legal-for-trade billing accuracy and inventory loss prevention.",
    useCases: ["Bulk plant inventory audits", "Wholesale fuel terminals", "Internal facility monitoring"],
    manufacturers: "Liquid Controls, Neptune (Representative List)",
    iconColor: "bg-brand-accent-light text-brand-accent"
  },
  {
    title: "Telemetry & Safety",
    description: "The digital and mechanical layer that monitors tank levels and detects hazardous leaks.",
    criticalRole: "Reduces delivery costs through smart routing and prevents catastrophic failures.",
    useCases: ["Remote fuel management", "Leak detection arrays", "Automated shut-off systems"],
    manufacturers: "Otodata, GasLog, Rochester Sensors (Representative List)",
    iconColor: "bg-brand-accent-light text-brand-accent"
  }
];

const CategoriesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">Equipment Categories</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We represent the industry's most reliable manufacturers across the full spectrum of gas handling and storage. We don't just supply parts; we help with sizing, specification, and safety compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tool Lead Magnet */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent skew-x-12 translate-x-24"></div>
        </div>
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="bg-white/5 border border-white/10 p-12 md:p-16 rounded-sm flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/3 space-y-8">
              <div className="inline-flex items-center gap-3 text-brand-accent font-black text-xs uppercase tracking-widest">
                <Calculator className="h-4 w-4" /> Professional Sizing Assistant
              </div>
              <h2 className="text-4xl font-extrabold tracking-tighter">Need a BTU or Flow Calculation?</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Provide your application details—BTU load, distance, and pipe type—and our engineers will recommend the exact regulator and pipe schedule for your project.
              </p>
              <div className="flex gap-4">
                <Link to="/contact?type=sizing-request" className="bg-brand-accent text-white px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-brand-navy transition-all shadow-2xl">
                  Start Sizing Request <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white/10 p-8 border border-white/20 rounded-sm">
                <h4 className="text-xs font-black uppercase tracking-widest mb-4">Included in Review:</h4>
                <ul className="space-y-4">
                  {['Regulator Sizing', 'Pipe Selection', 'NFPA Compliance Check', 'Part # Inventory Match'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                      <Zap className="h-3 w-3 text-brand-accent" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col border border-slate-100 p-8 md:p-10 hover:shadow-xl hover:border-brand-accent/20 transition-all group h-full">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-extrabold text-brand-navy">{cat.title}</h3>
                  <div className={`p-2 rounded-sm ${cat.iconColor}`}>
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {cat.description}
                </p>

                <div className="mb-8 p-4 bg-slate-50 border-l-4 border-brand-accent">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                    <Info className="h-3 w-3" /> Critical Role
                  </h4>
                  <p className="text-sm font-bold text-slate-700 leading-snug">
                    {cat.criticalRole}
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Typical Use Cases</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {cat.useCases.map((uc, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500 italic">
                        <div className="w-1 h-1 bg-slate-300 rounded-full" /> {uc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Represents: <span className="text-brand-navy font-black">{cat.manufacturers.split('(')[0]}</span>
                  </div>
                  <Link to="/contact" className="text-brand-accent font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Ask About Sizing <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Support Notice */}
      <section className="py-20 text-center border-t border-slate-100">
        <div className="max-w-[1140px] mx-auto px-6">
          <FileText className="h-10 w-10 text-slate-200 mx-auto mb-6" />
          <h2 className="text-2xl font-extrabold text-brand-navy mb-4">Request Technical Documentation</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            Need PDF drawings, maintenance manuals, or warranty paperwork for a specific brand we represent?
          </p>
          <Link to="/contact" className="text-brand-navy font-black text-xs uppercase tracking-widest border-b-2 border-brand-navy pb-1 hover:text-brand-accent hover:border-brand-accent transition-all">
            Contact Document Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
