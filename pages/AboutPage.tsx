
import React, { useState } from 'react';
import { History, ShieldCheck, MapPin, Target, Briefcase, FileCheck, CheckCircle2, ChevronRight, Info, Building2, LayoutGrid, Award, Star, Trophy, Medallion } from 'lucide-react';
import { Link } from 'react-router-dom';

const stateData: Record<string, { name: string; manager: string; specialties: string[]; plants: string }> = {
  ME: { name: "Maine", manager: "Territory Lead - North", specialties: ["Bulk Terminals", "Vaporization"], plants: "12+ Large Storage Sites" },
  NH: { name: "New Hampshire", manager: "HQ Operations", specialties: ["Metering", "Staff Training"], plants: "HQ Logistics Hub" },
  VT: { name: "Vermont", manager: "Territory Lead - North", specialties: ["Cold Weather Reg.", "Telemetry"], plants: "9+ Industrial Sites" },
  MA: { name: "Massachusetts", manager: "Territory Lead - South", specialties: ["Commercial Piping", "Utility Reg."], plants: "25+ Major Distribution Hubs" },
  RI: { name: "Rhode Island", manager: "Territory Lead - South", specialties: ["Marine LPG", "Safety Systems"], plants: "6+ Specialized Sites" },
  CT: { name: "Connecticut", manager: "Territory Lead - South", specialties: ["Residential Sizing", "Industrial Pumping"], plants: "18+ Major Operations" },
};

const awards = [
  {
    year: "2024",
    title: "Manufacturer's Choice Award",
    organization: "Industrial Gas Equipment Association",
    description: "Recognized for exceptional sales growth and brand advocacy across the Northeast territory."
  },
  {
    year: "2023",
    title: "Excellence in Technical Training",
    organization: "Propane Education & Research Council",
    description: "Honored for our commitment to safety through field-led technician certification programs."
  },
  {
    year: "2022",
    title: "Regional Growth Partner of the Year",
    organization: "National Propane Gas Association",
    description: "Awarded for streamlining supply chain efficiencies between manufacturers and regional distributors."
  }
];

const AboutPage: React.FC = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const states = [
    { id: 'ME', name: 'Maine', d: 'M155,10 L185,35 L195,100 L165,115 L145,105 L150,55 Z' },
    { id: 'NH', name: 'New Hampshire', d: 'M145,105 L165,115 L155,165 L135,165 L135,110 Z' },
    { id: 'VT', name: 'Vermont', d: 'M135,110 L135,165 L115,165 L105,115 Z' },
    { id: 'MA', name: 'Massachusetts', d: 'M105,165 L155,165 L155,185 L180,185 L180,200 L170,200 L160,190 L105,190 Z' },
    { id: 'RI', name: 'Rhode Island', d: 'M155,190 L170,190 L170,205 L155,205 Z' },
    { id: 'CT', name: 'Connecticut', d: 'M105,190 L155,190 L155,210 L105,210 Z' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Brand Mission Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tighter leading-[1]">
                Market Stewards <br />
                <span className="text-brand-accent">Regional Liaison.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                LP Industry Reps, LLC is a manufacturers’ representative firm specializing in the propane and industrial gas sectors across the North American infrastructure. We act as the vital connection point between global equipment production and regional distribution networks.
              </p>
              <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-brand-navy flex items-center gap-2">
                  <Award className="h-4 w-4 text-brand-accent" /> Role in the Industry
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We ensure manufacturers gain access to local markets while distributors receive direct product knowledge and support. Beyond sales, the firm provides product demonstrations, field consultations, and technical training to ensure correct installation of propane-related systems.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-brand-navy p-10 text-white rounded-sm shadow-2xl">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-8">Key Firm Facts</h2>
              <div className="space-y-6">
                {[
                  { label: "Industry Focus", value: "Propane & Industrial Gas Infrastructure" },
                  { label: "Core Services", value: "Sales Rep, Training, Technical Support" },
                  { label: "Client Base", value: "Manufacturers, Distributors, Service Cos" },
                  { label: "Core Market", value: "North American LP Gas Supply Chain" },
                  { label: "Compliance", value: "Evolving Propane Safety Code (NFPA)" }
                ].map((fact) => (
                  <div key={fact.label} className="border-b border-white/10 pb-4 last:border-0">
                    <span className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1">{fact.label}</span>
                    <span className="block text-sm font-bold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Territory Mapping */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 relative bg-slate-50 rounded-sm p-12 border border-slate-100 shadow-inner group">
              <div className="absolute top-6 left-6 z-10">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-sm border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <Info className="h-3 w-3 text-brand-accent" /> Territory Map View
                </div>
              </div>
              
              <svg 
                viewBox="80 0 140 230" 
                className="w-full h-auto drop-shadow-2xl filter transition-all duration-700"
                style={{ maxHeight: '600px' }}
              >
                {states.map((state) => (
                  <path
                    key={state.id}
                    d={state.d}
                    onMouseEnter={() => setHoveredState(state.id)}
                    onMouseLeave={() => setHoveredState(null)}
                    className={`cursor-pointer transition-all duration-300 stroke-[1] ${
                      hoveredState === state.id 
                        ? 'fill-brand-accent stroke-white scale-[1.03] z-20' 
                        : 'fill-brand-navy stroke-white/20'
                    }`}
                    style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}
                  />
                ))}
              </svg>
            </div>

            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent">Regional Stewardship</h2>
                <h3 className="text-4xl font-extrabold text-brand-navy tracking-tighter">Exclusive Market Presence.</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  With a focus on long-term industry relationships, LP Industry Reps supports innovation adoption and compliance with evolving propane safety codes. We maintain a physical, audit-ready presence across the Northeast.
                </p>
              </div>

              <div className={`transition-all duration-500 h-64 ${hoveredState ? 'opacity-100' : 'opacity-100'}`}>
                {hoveredState ? (
                  <div className="bg-slate-50 border-l-4 border-brand-accent p-8 rounded-sm space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">{stateData[hoveredState].name}</h4>
                      <span className="bg-brand-navy text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest">{hoveredState}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-1">
                         <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">State Specialization</span>
                         <p className="text-xs font-bold text-slate-700">{stateData[hoveredState].specialties[0]}</p>
                       </div>
                       <div className="space-y-1">
                         <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Active Sites</span>
                         <p className="text-xs font-bold text-slate-700">{stateData[hoveredState].plants}</p>
                       </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-50 p-10 border border-dashed border-slate-200 rounded-sm text-center flex flex-col items-center justify-center h-full">
                    <MapPin className="h-8 w-8 text-slate-300 mb-4" />
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Interactive Territory Data — Select a State</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industry Impact Grid */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-4">Core Competencies</h2>
            <h3 className="text-4xl font-extrabold tracking-tighter">Technical Mastery & Integrity.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Target />, title: "Market Visibility", desc: "Enhancing manufacturer presence and product distribution efficiency within the propane supply chain." },
              { icon: <Building2 />, title: "Infrastructure Support", desc: "Facilitating partnerships for components essential for safe fuel storage, transfer, and regulation." },
              { icon: <Award />, title: "Safety Standards", desc: "Strengthening industry safety through technical training and promotion of industry best practices." }
            ].map((item, idx) => (
              <div key={idx} className="space-y-6 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-brand-accent/20 transition-all group">
                <div className="text-brand-accent group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-lg font-black uppercase tracking-tighter">{item.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Awards & Recognition Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-4">Recognition</h2>
              <h3 className="text-4xl font-extrabold text-brand-navy tracking-tighter">Awards & Industry Honors</h3>
              <p className="mt-4 text-slate-600 font-medium">Our dedication to technical excellence and territory stewardship has been recognized by leading manufacturers and industry associations nationwide.</p>
            </div>
            <Award className="h-16 w-16 text-slate-200 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm relative overflow-hidden group hover:border-brand-accent transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Award className="h-24 w-24" />
                </div>
                <span className="inline-block bg-brand-accent text-white text-[10px] font-black px-3 py-1 rounded-sm mb-6 uppercase tracking-widest">{award.year}</span>
                <h4 className="text-xl font-black text-brand-navy uppercase tracking-tighter mb-2">{award.title}</h4>
                <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-6 italic">{award.organization}</p>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Strategic Growth CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-8 tracking-tighter">Reliable Product Performance Starts with Local Presence.</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
             Our influence contributes to improved communication between equipment producers and field technicians across the North American gas market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-brand-navy text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-brand-accent transition-all">
              Direct Contact
            </Link>
            <Link to="/line-card" className="bg-slate-100 text-brand-navy px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-200 transition-all">
              Browse Line Card
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
