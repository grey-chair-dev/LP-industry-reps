
import React, { useState } from 'react';
import { Download, ExternalLink, Filter, Search, ChevronRight, CheckCircle2, Factory, FileText, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  "All Categories",
  "Heating Solutions",
  "Piping & Infrastructure",
  "System Protection",
  "Tools & Hardware",
  "Seals & Accessories"
];

const manufacturers = [
  {
    name: "Enerco",
    category: "Heating Solutions",
    specialization: "Infrared & Convection Heating",
    context: "Leading developer of portable and job-site heating solutions for the gas industry.",
    keyProducts: ["Radiant Heaters", "Convection Units"]
  },
  {
    name: "LB White",
    category: "Heating Solutions",
    specialization: "Agricultural & Industrial Heating",
    context: "The gold standard in forced-air heating for construction, industrial, and agricultural LP/NG applications.",
    keyProducts: ["Forced Air Heaters", "Guardian Series"]
  },
  {
    name: "Tru-Zero",
    category: "System Protection",
    specialization: "Leak Detection & Pressure Testing",
    context: "Precision-engineered tools for ensuring system integrity and zero-leak compliance.",
    keyProducts: ["Manometers", "Pressure Testing Kits"]
  },
  {
    name: "DeWalt",
    category: "Tools & Hardware",
    specialization: "Infrastructure Equipment",
    context: "Representing specialized DeWalt hardware specifically for the gas distribution and contractor market.",
    keyProducts: ["Industrial Power Tools", "Specialized Trade Kits"]
  },
  {
    name: "Stuart Steel Protection",
    category: "System Protection",
    specialization: "Anodes & Corrosion Control",
    context: "Comprehensive cathodic protection for underground storage and piping infrastructure.",
    keyProducts: ["Sacrificial Anodes", "Magnesium Anodes"]
  },
  {
    name: "Oil Creek Plastics",
    category: "Piping & Infrastructure",
    specialization: "Polyethylene (PE) Pipe",
    context: "High-quality poly pipe for underground gas distribution and service line installation.",
    keyProducts: ["HDPE Gas Pipe", "Yellow PE Service Pipe"]
  },
  {
    name: "ProDomeSeal",
    category: "Seals & Accessories",
    specialization: "Tank Protection",
    context: "Specialized sealing solutions for domestic tank domes and critical infrastructure interfaces.",
    keyProducts: ["Dome Seals", "Gasket Systems"]
  },
  {
    name: "HeatStar",
    category: "Heating Solutions",
    specialization: "Commercial Heating Systems",
    context: "Industrial-grade heating equipment designed for large-scale facility and distribution center use.",
    keyProducts: ["Overhead Heaters", "Tube Heaters"]
  },
  {
    name: "Mr. Heater",
    category: "Heating Solutions",
    specialization: "Portable Gas Heating",
    context: "America's most popular brand for portable heating and cylinder-mounted gas appliances.",
    keyProducts: ["Buddy Heaters", "Tank Top Heaters"]
  },
  {
    name: "Cleveland Iron Works",
    category: "Heating Solutions",
    specialization: "Traditional & Pellet Heating",
    context: "Robust heating solutions for residential and workshop infrastructure.",
    keyProducts: ["Pellet Stoves", "Iron Hardware"]
  }
];

const LineCardPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredManufacturers = manufacturers.filter(m => {
    const matchesCategory = activeCategory === "All Categories" || m.category === activeCategory;
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Technical Header */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter">
              Authorized <span className="text-brand-accent">Line Card.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-2xl font-medium">
              We provide the Northeast region with factory-direct access to the industry's leading gas heating and infrastructure brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact?action=full-line-card" 
                className="bg-brand-accent text-white px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-brand-navy transition-all shadow-2xl"
              >
                Download Full PDF Line Card <Download className="h-4 w-4" />
              </Link>
              <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-sm flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                <span className="text-xs font-black uppercase tracking-widest text-white/80">LP/NG Industry Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Directory */}
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <aside className="lg:w-1/4 space-y-12">
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                  <Search className="h-3 w-3" /> Filter Brands
                </h3>
                <input 
                  type="text" 
                  placeholder="Brand name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-brand-accent transition-colors text-sm font-bold"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                  <Filter className="h-3 w-3" /> Categories
                </h3>
                <nav className="flex flex-col gap-1">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-5 py-3 text-xs font-black uppercase tracking-widest transition-all border-l-4 ${
                        activeCategory === cat 
                          ? 'border-brand-accent bg-brand-navy text-white' 
                          : 'border-transparent text-slate-500 hover:text-brand-navy hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="bg-brand-accent/5 p-8 border border-brand-accent/20 rounded-sm">
                <FileText className="h-8 w-8 text-brand-accent mb-4" />
                <h4 className="text-sm font-black text-brand-navy uppercase mb-2">Technical Library</h4>
                <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">Access gated spec sheets and CAD files for all represented brands.</p>
                <Link to="/contact" className="text-[10px] font-black uppercase tracking-widest text-brand-accent flex items-center gap-2">
                  Request Access <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </aside>

            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 gap-12">
                {filteredManufacturers.map((brand, idx) => (
                  <div key={idx} className="group flex flex-col md:flex-row gap-10 items-start hover:translate-x-2 transition-transform duration-300 border-b border-slate-100 pb-12 last:border-0">
                    <div className="md:w-1/3">
                      <div className="bg-slate-50 border border-slate-100 p-8 rounded-sm flex flex-col items-center justify-center gap-2 aspect-video group-hover:bg-white transition-colors">
                        <Factory className="h-8 w-8 text-brand-navy opacity-20" />
                        <span className="font-black text-lg text-brand-navy uppercase tracking-tighter text-center">{brand.name}</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex justify-between items-start mb-4">
                        <div className="inline-block bg-brand-accent-light text-brand-accent px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                          {brand.category}
                        </div>
                        <Link 
                          to={`/contact?brand=${brand.name}`} 
                          className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-accent transition-colors"
                        >
                          <Lock className="h-3 w-3" /> Get Spec Sheet
                        </Link>
                      </div>
                      <h3 className="text-2xl font-black text-brand-navy mb-2 uppercase tracking-tighter">{brand.specialization}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                        {brand.context}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {brand.keyProducts.map(p => (
                          <span key={p} className="text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-1 uppercase tracking-widest">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LineCardPage;
