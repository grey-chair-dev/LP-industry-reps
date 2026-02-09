
import React from 'react';
import { Target, Map, ShieldCheck, BarChart3, ArrowRight, Users2, Building2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManufacturersPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Credibility Intro */}
      <section className="py-20 md:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-6">
              Strategic Regional Representation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-8 leading-tight">
              We aren’t an outsourced sales team. We are your regional <span className="text-slate-500">market stewards.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              LP Industry Reps provides professional, relationship-driven sales representation for gas infrastructure manufacturers. We represent your brand with the same technical depth and integrity as your own factory team.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Territory & Industry Focus */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-8">Northeast Territory Reach</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We maintain a disciplined focus on the Northeast United States. This geographical concentration allows for frequent, high-impact visits to regional distributors and end-user infrastructure sites.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { state: 'Connecticut', code: 'CT' },
                  { state: 'Massachusetts', code: 'MA' },
                  { state: 'Maine', code: 'ME' },
                  { state: 'New Hampshire', code: 'NH' },
                  { state: 'Rhode Island', code: 'RI' },
                  { state: 'Vermont', code: 'VT' },
                ].map((item) => (
                  <div key={item.code} className="flex items-center gap-4 p-4 border border-slate-100 rounded-sm hover:border-brand-accent transition-colors">
                    <div className="text-brand-accent font-black text-xs">{item.code}</div>
                    <span className="text-sm font-bold text-slate-700">{item.state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-navy p-12 text-white rounded-sm">
              <Map className="h-12 w-12 text-brand-accent mb-8" />
              <h3 className="text-2xl font-bold mb-6">Why Local Matters</h3>
              <p className="text-white/60 leading-relaxed mb-8">
                The gas industry in the Northeast is built on legacy relationships and seasonal urgency. Being local means we are there when a specification needs to change on-site or when a distributor needs an emergency training session.
              </p>
              <ul className="space-y-4">
                {['24-Hour Regional Response', 'Active Field Presence', 'Deep Regulatory Knowledge'].map(point => (
                  <li key={point} className="flex items-center gap-3 text-sm font-bold tracking-wide">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Market Access & Distributor Relationships */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">The Distributor Network</h2>
          <h3 className="text-3xl font-extrabold text-brand-navy mb-8">Immediate Access to Decision Makers</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16">
            We hold long-standing relationships with the purchasing agents and operations managers at the Northeast's leading LP and natural gas distributors. Our line card is curated to ensure no internal competition, giving your brand focused attention.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-slate-200 shadow-sm">
              <Users2 className="h-8 w-8 text-brand-accent mx-auto mb-6" />
              <h4 className="font-bold text-brand-navy mb-4 uppercase tracking-widest text-sm">Channel Loyalty</h4>
              <p className="text-sm text-slate-500 leading-relaxed">We protect your distribution channels while aggressively pursuing market share.</p>
            </div>
            <div className="bg-white p-10 border border-slate-200 shadow-sm">
              <Building2 className="h-8 w-8 text-brand-accent mx-auto mb-6" />
              <h4 className="font-bold text-brand-navy mb-4 uppercase tracking-widest text-sm">Spec Advocacy</h4>
              <p className="text-sm text-slate-500 leading-relaxed">We work with engineers to get your products listed as the standard specification.</p>
            </div>
            <div className="bg-white p-10 border border-slate-200 shadow-sm">
              <Globe className="h-8 w-8 text-brand-accent mx-auto mb-6" />
              <h4 className="font-bold text-brand-navy mb-4 uppercase tracking-widest text-sm">Market Intelligence</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Receive real-time feedback on competitor activity and regional pricing trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Support Growth */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-extrabold text-brand-navy mb-8">The Representation Engine</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Growth requires more than just making calls. It requires technical mastery of the product and a commitment to the "last mile" of sales support.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-brand-navy text-white w-12 h-12 shrink-0 flex items-center justify-center rounded-sm">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">Technical Specification</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">We assist in the design phase of bulk plants and infrastructure to ensure your components are used.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-brand-navy text-white w-12 h-12 shrink-0 flex items-center justify-center rounded-sm">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">Active Prospecting</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">We identify and qualify new opportunities through a disciplined CRM-driven approach.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-brand-navy text-white w-12 h-12 shrink-0 flex items-center justify-center rounded-sm">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">Sales Reporting</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Transparent reporting on pipeline health and territory growth metrics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-50 border border-slate-200 p-12">
              <h3 className="text-xl font-extrabold text-brand-navy mb-6 uppercase tracking-widest text-sm">Mutual Fit Criteria</h3>
              <p className="text-slate-600 mb-8 text-sm italic">
                We are selective about the brands we represent to ensure high-quality service for our existing partners.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Technical Synergy", desc: "Products must align with our core expertise in high-pressure gas infrastructure." },
                  { title: "Commitment to Support", desc: "Factory must provide responsive technical and warranty support to the distributor." },
                  { title: "Market Integrity", desc: "Clear policy on channel management and professional ethics." }
                ].map(item => (
                  <li key={item.title}>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Primary CTA */}
      <section className="py-24 text-center border-t border-slate-100">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-8 leading-tight">Ready to expand your Northeast presence?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Let’s discuss your 12-month goals and see if our representation model aligns with your growth strategy.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-brand-accent text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-brand-accent/20"
          >
            Discuss Representation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ManufacturersPage;
