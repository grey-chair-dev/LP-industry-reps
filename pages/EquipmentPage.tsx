
import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Info, 
  FileText, 
  Calculator, 
  ChevronRight, 
  Zap, 
  Download, 
  Lock, 
  Search, 
  Filter,
  PackageSearch,
  Settings,
  ClipboardList,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categoryOverviews = [
  {
    title: "Bulk Plant & Storage",
    description: "The high-volume core of gas infrastructure managing fuel transfer from transport to primary storage.",
    criticalRole: "Ensures leak-free high-pressure transfer and operational safety during loading/unloading.",
    manufacturers: "Blackmer, Fisher, Corken",
    iconColor: "bg-brand-accent-light text-brand-accent"
  },
  {
    title: "Regulation & Delivery",
    description: "Precision hardware reducing tank levels to usable service pressures for residential and industrial use.",
    criticalRole: "Protects downstream appliances and piping from overpressure conditions.",
    manufacturers: "RegO, BelGAS, Fisher",
    iconColor: "bg-brand-accent-light text-brand-accent"
  },
  {
    title: "Vaporization Systems",
    description: "Equipment converting liquid gas into vapor when environmental heat is insufficient for demand.",
    criticalRole: "Maintains constant fuel supply during peak winter demand or high-load industrial use.",
    manufacturers: "Algas-SDI, Ransome",
    iconColor: "bg-brand-accent-light text-brand-accent"
  },
  {
    title: "Pumping & Compression",
    description: "Mechanical solutions for moving liquid and vapor through piping networks at controlled rates.",
    criticalRole: "Optimizes transfer times and ensures complete evacuation of transport vessels.",
    manufacturers: "Blackmer, Smith Pumps",
    iconColor: "bg-brand-accent-light text-brand-accent"
  }
];

const brandCategories = ["All Categories", "Heating Solutions", "Piping & Infrastructure", "System Protection", "Tools & Hardware"];

interface Manufacturer {
  name: string;
  logoUrl: string;
  category: string;
  specialization: string;
  context: string;
  keyProducts: string[];
  coreServices: string[];
  technicalSpecs: string[];
  warrantyInfo: string;
}

const manufacturers: Manufacturer[] = [
  { 
    name: "Enerco", 
    logoUrl: "https://placehold.co/400x200/1C2A44/FFFFFF?text=Enerco", 
    category: "Heating Solutions", 
    specialization: "Infrared & Convection Heating", 
    context: "Leading developer of portable and job-site heating solutions.", 
    keyProducts: ["Radiant Heaters", "Convection Units"],
    coreServices: ["Thermal Efficiency Audits", "Custom Heating Design", "Field Technical Training"],
    technicalSpecs: ["BTU Output: 10,000 - 400,000", "Fuel Type: LP/NG Dual Capability", "Certification: CSA/UL Listed"],
    warrantyInfo: "1-Year Limited Warranty on core components; Extended factory support for industrial installations."
  },
  { 
    name: "LB White", 
    logoUrl: "https://placehold.co/400x200/1C2A44/FFFFFF?text=LB+White", 
    category: "Heating Solutions", 
    specialization: "Agricultural & Industrial Heating", 
    context: "The gold standard in forced-air heating for construction.", 
    keyProducts: ["Forced Air Heaters", "Guardian Series"],
    coreServices: ["Livestock Facility Sizing", "CO2 Monitoring Integration", "Direct-Fired Efficiency Consults"],
    technicalSpecs: ["Airflow: 500 - 5,000 CFM", "Ignition Type: Spark/Hot Surface", "Material: Corrosive-Resistant Enclosures"],
    warrantyInfo: "Industry-leading 2-year warranty on Guardian series; Comprehensive replacement part availability."
  },
  { 
    name: "Tru-Zero", 
    logoUrl: "https://placehold.co/400x200/1C2A44/FFFFFF?text=Tru-Zero", 
    category: "System Protection", 
    specialization: "Leak Detection & Pressure Testing", 
    context: "Precision-engineered tools for ensuring system integrity.", 
    keyProducts: ["Manometers", "Pressure Testing Kits"],
    coreServices: ["Digital Calibration Services", "Compliance Certification Support", "Field Leak Analysis"],
    technicalSpecs: ["Accuracy: +/- 0.01 inWC", "Operating Range: 0-10 PSI", "Display: High-Contrast LCD with Data Logging"],
    warrantyInfo: "Limited Lifetime Warranty on digital sensor calibration; 3-year hardware defect coverage."
  },
  { 
    name: "DeWalt", 
    logoUrl: "https://placehold.co/400x200/1C2A44/FFFFFF?text=DeWalt", 
    category: "Tools & Hardware", 
    specialization: "Infrastructure Equipment", 
    context: "Representing specialized DeWalt hardware for the gas distribution market.", 
    keyProducts: ["Power Tools", "Trade Kits"],
    coreServices: ["Fleet Tool Management", "On-Site Tool Demonstrations", "Impact Protection Seminars"],
    technicalSpecs: ["Battery System: 20V/60V MAX FlexVolt", "Enclosure: IP67 Dust/Water Resistant", "Connectivity: Tool Connect™ Bluetooth Integration"],
    warrantyInfo: "3-Year Limited Warranty; 1-Year Free Service; 90-Day Money Back Guarantee."
  },
  { 
    name: "Oil Creek Plastics", 
    logoUrl: "https://placehold.co/400x200/1C2A44/FFFFFF?text=Oil+Creek+Plastics", 
    category: "Piping & Infrastructure", 
    specialization: "Polyethylene (PE) Pipe", 
    context: "High-quality poly pipe for underground gas distribution.", 
    keyProducts: ["HDPE Gas Pipe", "Yellow PE Service Pipe"],
    coreServices: ["Fusion Certification Training", "Project Material Estimation", "Underground Infrastructure Audits"],
    technicalSpecs: ["Material: PE 2708 / PE 4710 Medium & High Density", "Standard: ASTM D2513 Compliance", "SDR Ranges: 7, 9, 11, 13.5"],
    warrantyInfo: "50-Year Design Life Warranty; Guaranteed traceability on all manufactured service lots."
  }
];

const EquipmentPage: React.FC = () => {
  const [activeBrandCategory, setActiveBrandCategory] = useState("All Categories");
  const [brandSearchQuery, setBrandSearchQuery] = useState("");
  const [productSearchQuery, setProductSearchQuery] = useState("");

  const filteredManufacturers = manufacturers.filter(m => {
    const matchesCategory = activeBrandCategory === "All Categories" || m.category === activeBrandCategory;
    const matchesBrand = m.name.toLowerCase().includes(brandSearchQuery.toLowerCase());
    const matchesProduct = productSearchQuery === "" || m.keyProducts.some(p => p.toLowerCase().includes(productSearchQuery.toLowerCase()));
    
    return matchesCategory && matchesBrand && matchesProduct;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">Equipment & Authorized Brands</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We provide factory-direct access to the most reliable names in gas handling. From bulk plant components to residential regulation, our portfolio covers the entire distribution lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Overviews (Brief) */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryOverviews.map((cat, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-sm hover:shadow-lg transition-all group">
                <div className={`${cat.iconColor} w-10 h-10 rounded-sm flex items-center justify-center mb-6`}>
                   <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold text-brand-navy mb-4">{cat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{cat.description}</p>
                <div className="pt-4 border-t border-slate-50">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Key Brands:</span>
                  <p className="text-[10px] font-bold text-brand-navy mt-1">{cat.manufacturers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sizing Tool Callout */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/4 h-full bg-brand-accent/5 -skew-x-12 translate-x-12"></div>
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 p-12 border border-white/10">
            <div className="md:w-2/3 space-y-6">
              <div className="inline-flex items-center gap-3 text-brand-accent font-black text-xs uppercase tracking-widest">
                <Calculator className="h-4 w-4" /> Technical Support
              </div>
              <h2 className="text-3xl font-extrabold">Need a System Sizing Recommendation?</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Provide your BTU load and pipe distance, and our engineers will specify the exact hardware for your installation.
              </p>
              <Link to="/contact?type=sizing-request" className="inline-flex items-center gap-3 bg-brand-accent text-white px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all">
                Start Sizing Request <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/3 bg-white/10 p-8 border border-white/20">
               <ul className="space-y-4">
                  {['Regulator Sizing', 'Pipe Selection', 'Part # Verification'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                      <Zap className="h-3 w-3 text-brand-accent" /> {item}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full Line Card / Brand List */}
      <section className="py-24" id="line-card">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <aside className="lg:w-1/4 space-y-12">
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2"><Search className="h-3 w-3" /> Search Brands</h3>
                <input 
                  type="text" 
                  placeholder="Brand name..." 
                  value={brandSearchQuery} 
                  onChange={(e) => setBrandSearchQuery(e.target.value)} 
                  className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-brand-accent transition-colors text-sm font-bold" 
                />
              </div>

              {/* Search by Product */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2"><PackageSearch className="h-3 w-3" /> Search Products</h3>
                <input 
                  type="text" 
                  placeholder="e.g. Heaters, Pipe..." 
                  value={productSearchQuery} 
                  onChange={(e) => setProductSearchQuery(e.target.value)} 
                  className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-brand-accent transition-colors text-sm font-bold" 
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2"><Filter className="h-3 w-3" /> Filter by Type</h3>
                <nav className="flex flex-col gap-1">
                  {brandCategories.map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => setActiveBrandCategory(cat)} 
                      className={`text-left px-5 py-3 text-xs font-black uppercase tracking-widest border-l-4 transition-all ${activeBrandCategory === cat ? 'border-brand-accent bg-brand-navy text-white' : 'border-transparent text-slate-500 hover:text-brand-navy'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-navy mb-4">Printable Resources</h4>
                <Link to="/contact?action=full-line-card" className="flex items-center gap-3 text-xs font-bold text-brand-accent hover:text-brand-navy">
                  <Download className="h-4 w-4" /> Download PDF Line Card
                </Link>
              </div>
            </aside>

            <div className="lg:w-3/4 space-y-16">
              <div className="mb-8 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">Authorized Partner Portfolio</h2>
              </div>
              {filteredManufacturers.map((brand, idx) => (
                <div key={idx} className="group border-b border-slate-100 pb-16 last:border-0">
                  <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
                    <div className="md:w-1/3">
                      <div className="bg-slate-50 border border-slate-200 rounded-sm aspect-video flex items-center justify-center overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                        <img 
                          src={brand.logoUrl} 
                          alt={`${brand.name} logo`} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex justify-between items-start mb-4">
                        <div className="bg-brand-accent-light text-brand-accent px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">{brand.category}</div>
                        <Link to={`/contact?brand=${brand.name}`} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-accent"><Lock className="h-3 w-3" /> Request Factory Docs</Link>
                      </div>
                      <h3 className="text-2xl font-black text-brand-navy mb-2 uppercase tracking-tighter">{brand.specialization}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">{brand.context}</p>
                      <div className="flex flex-wrap gap-2">
                        {brand.keyProducts.map(p => <span key={p} className="text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-1 uppercase tracking-widest">{p}</span>)}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Technical Details Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-50 p-8 rounded-sm border border-slate-100">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-brand-navy">
                        <Settings className="h-4 w-4 text-brand-accent" />
                        <h4 className="text-[11px] font-black uppercase tracking-widest">Core Capabilities</h4>
                      </div>
                      <ul className="space-y-2">
                        {brand.coreServices.map((service, sIdx) => (
                          <li key={sIdx} className="text-[12px] text-slate-600 flex items-start gap-2">
                            <span className="text-brand-accent font-bold mt-0.5">•</span> {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-brand-navy">
                        <ClipboardList className="h-4 w-4 text-brand-accent" />
                        <h4 className="text-[11px] font-black uppercase tracking-widest">Tech Specifications</h4>
                      </div>
                      <ul className="space-y-2">
                        {brand.technicalSpecs.map((spec, tIdx) => (
                          <li key={tIdx} className="text-[12px] text-slate-600 flex items-start gap-2">
                            <span className="text-brand-accent font-bold mt-0.5">›</span> {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-brand-navy">
                        <ShieldCheck className="h-4 w-4 text-brand-accent" />
                        <h4 className="text-[11px] font-black uppercase tracking-widest">Warranty & Support</h4>
                      </div>
                      <p className="text-[12px] text-slate-600 leading-relaxed">
                        {brand.warrantyInfo}
                      </p>
                      <div className="pt-2">
                        <button className="text-[10px] font-bold text-brand-accent hover:underline uppercase tracking-wider flex items-center gap-1">
                          View Compliance Logs <ArrowUpRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {filteredManufacturers.length === 0 && (
                <div className="py-20 text-center text-slate-400 font-bold uppercase tracking-widest">
                  No brands matching your search criteria.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentPage;
