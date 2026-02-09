
import React from 'react';
import { Wrench, BookOpen, ShieldCheck, Truck, ArrowRight, CheckCircle2, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';

const DistributorsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Direct Intro */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
              Support for the Professional LP & Natural Gas Distributor.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We understand the complexity of managing inventory, technical specifications, and safety standards. Our role is to ensure you have the equipment and the knowledge to serve your customers profitably and safely.
            </p>
          </div>
        </div>
      </section>

      {/* 2. How We Support You */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-brand-accent"><Wrench className="h-8 w-8" /></div>
              <h3 className="text-xl font-extrabold text-brand-navy">On-Site Technical Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                When a field installation gets complex, we’re available for site visits to help specify the correct hardware and troubleshoot system performance.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-brand-accent"><BookOpen className="h-8 w-8" /></div>
              <h3 className="text-xl font-extrabold text-brand-navy">Staff & Field Training</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We facilitate CETP-aligned training and manufacturer-specific certification programs to keep your technicians current on the latest infrastructure technology.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-brand-accent"><LifeBuoy className="h-8 w-8" /></div>
              <h3 className="text-xl font-extrabold text-brand-navy">Inventory Specification</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We help your purchasing team identify high-velocity parts and essential stock items based on regional demand and seasonal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Categories Overview */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-extrabold mb-6">Core Infrastructure Categories</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We represent manufacturers across the full spectrum of gas handling and storage.
              </p>
              <button className="bg-brand-accent text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all">
                Download Full Line Card
              </button>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Bulk Plant Components",
                "Residential & Commercial Regulation",
                "Industrial Metering Systems",
                "Pumping & Compression",
                "Vaporization Equipment",
                "Valves, Fittings & Piping",
                "Telemetry & Tank Monitoring",
                "Safety & Leak Detection"
              ].map(cat => (
                <div key={cat} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-sm">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                  <span className="text-sm font-bold uppercase tracking-wider">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Manufacturer Relationships Explained */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Why Work Through a Rep?</h2>
            <h3 className="text-3xl font-extrabold text-brand-navy mb-8">Your Direct Line to the Factory.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We aren't just another layer in the middle. We are the manufacturer’s local presence in your territory. When you work with us, you get the direct pricing and warranty support of the factory, but with the localized speed and personal relationship of a regional partner.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              If a shipment is delayed or a part fails, you don't call an 800 number. You call your dedicated LP Industry Rep who knows your business and your territory.
            </p>
          </div>
        </div>
      </section>

      {/* 5. What Happens Next */}
      <section className="py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-slate-50 p-12 md:p-16 border border-slate-200">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-12 text-center">Our Request Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="space-y-4">
                <div className="text-2xl font-black text-brand-accent">01</div>
                <h4 className="font-extrabold uppercase tracking-widest text-sm text-brand-navy">Inquiry</h4>
                <p className="text-sm text-slate-600">Submit a request for product information, availability, or a technical quote.</p>
              </div>
              <div className="space-y-4">
                <div className="text-2xl font-black text-brand-accent">02</div>
                <h4 className="font-extrabold uppercase tracking-widest text-sm text-brand-navy">Rep Assigned</h4>
                <p className="text-sm text-slate-600">A territory manager reviews your needs and provides documentation or pricing within 24 hours.</p>
              </div>
              <div className="space-y-4">
                <div className="text-2xl font-black text-brand-accent">03</div>
                <h4 className="font-extrabold uppercase tracking-widest text-sm text-brand-navy">Ongoing Support</h4>
                <p className="text-sm text-slate-600">We assist with the order placement through your preferred distributor channels and follow up on installation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 text-center">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-8">Need Availability or Technical Specs?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl"
          >
            Ask About Availability
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DistributorsPage;
