
import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronRight, ClipboardCheck, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    state: '',
    interest: '',
    message: ''
  });

  const team = [
    { name: "Tim Howser", phone: "513.382.0562", email: "tim@LPindustryReps.com" },
    { name: "Emilee McClurkin", phone: "513.888.7138", email: "emilee@LPindustryReps.com" },
    { name: "Colin McClurkin", phone: "330.219.4088", email: "colin@LPindustryReps.com" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center space-y-8 py-20">
          <div className="bg-brand-accent-light w-20 h-20 rounded-full flex items-center justify-center mx-auto text-brand-accent">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold text-brand-navy tracking-tight">Lead Verified & Routed.</h1>
            <p className="text-slate-600 leading-relaxed">
              Your inquiry has been successfully captured. A territory manager for {formData.state} will follow up within 4 business hours.
            </p>
          </div>
          <button 
            onClick={() => { setSubmitted(false); setStep(1); }}
            className="bg-brand-navy text-white px-8 py-3 rounded-sm font-black uppercase tracking-widest text-[10px]"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">Professional Project Intake.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">Ensure your request reaches the correct regional expert.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-8">
              <h3 className="text-xs font-black text-brand-accent uppercase tracking-[0.3em]">Step {step} of 3</h3>
              <div className="bg-slate-50 p-6 border-l-4 border-brand-accent space-y-4">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-brand-accent" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Lead Magnet</span>
                </div>
                <p className="text-xs font-medium text-slate-500 italic">
                  Complete this form to receive our "2024 Northeast LP Infrastructure & Compliance Guide" automatically.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="bg-white border border-slate-200 p-8 md:p-12 shadow-2xl rounded-sm">
                {step === 1 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                        <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-brand-accent transition-all font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Email</label>
                        <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-brand-accent transition-all font-bold" />
                      </div>
                    </div>
                    <button type="button" onClick={nextStep} className="w-full bg-brand-navy text-white py-5 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-brand-accent transition-all">
                      Continue to Routing <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Service Territory (State)</label>
                        <select required name="state" value={formData.state} onChange={handleInputChange} className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-brand-accent transition-all font-bold">
                          <option value="">Select State</option>
                          <option value="CT">Connecticut</option>
                          <option value="MA">Massachusetts</option>
                          <option value="ME">Maine</option>
                          <option value="NH">New Hampshire</option>
                          <option value="RI">Rhode Island</option>
                          <option value="VT">Vermont</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 border-2 border-slate-100 py-5 font-black uppercase tracking-widest text-xs text-slate-400 hover:bg-slate-50 transition-all">Back</button>
                      <button type="button" onClick={nextStep} className="flex-[2] bg-brand-navy text-white py-5 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-brand-accent transition-all">Project Details <ChevronRight className="h-4 w-4" /></button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Requirements</label>
                      <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={6} className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-brand-accent transition-all font-bold resize-none"></textarea>
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 border-2 border-slate-100 py-5 font-black uppercase tracking-widest text-xs text-slate-400 hover:bg-slate-50 transition-all">Back</button>
                      <button type="submit" className="flex-[2] bg-brand-accent text-white py-5 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:opacity-90 transition-all shadow-xl">Submit Technical Request <Send className="h-4 w-4" /></button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-slate-200 p-8 rounded-sm group hover:border-brand-navy transition-all">
                <h4 className="text-xl font-black text-brand-navy mb-4 uppercase tracking-tighter">{member.name}</h4>
                <div className="space-y-2 text-sm font-bold text-slate-500">
                  <a href={`tel:${member.phone}`} className="flex items-center gap-2 hover:text-brand-accent"><Phone className="h-3 w-3" /> {member.phone}</a>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 hover:text-brand-accent break-all"><Mail className="h-3 w-3" /> {member.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
