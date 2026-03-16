'use client';

import { useState, useEffect, useMemo } from 'react';
import { ShieldCheck, Search, Loader2, CheckCircle2, ArrowRight, User, Mail, Phone, Home, MapPin, Calendar, Lock, AlertCircle, RefreshCcw, X, Info, Star, ChevronRight, Zap, Target, TrendingUp, Cpu, Headset } from 'lucide-react';
import CtaBand from '@/components/CtaBand';
import BlogSection from '@/components/BlogSection';

type PageState = 'FORM' | 'LOADING' | 'SUCCESS';
type ModalStep = 'DETAILS' | 'CONNECTING' | 'FINALIZED';

interface QualifyingOption {
  id: string;
  name: string;
  type: 'loan' | 'heloc' | 'settlement';
  matchScore: number;
  highlight: string;
  benefit: string;
  description: string;
  requirements: string[];
  whyItMatches: string;
}

export default function PartnersContent() {
  const [pageState, setPageState] = useState<PageState>('FORM');
  const [personalData, setPersonalData] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<QualifyingOption | null>(null);
  const [modalStep, setModalStep] = useState<ModalStep>('DETAILS');

  const [pii, setPii] = useState({
    Fname: '', Lname: '', Email: '', HomePhone: '',
    Street: '', City: '', State: '', PostalCode: '',
    Dob: '', CashOut: '15000', SSN: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('debt_pathway_quiz');
    if (stored) {
      const data = JSON.parse(stored);
      setPersonalData(data);
      setPii(prev => ({
        ...prev,
        CashOut: data.answers.amount?.replace(/[^0-9]/g, '') || '15000',
        Email: data.answers.email || '',
      }));
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    setPageState('LOADING');
    setTimeout(() => {
      setPageState('SUCCESS');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
  };

  const handleConfirmInterest = () => {
    setModalStep('CONNECTING');
    setTimeout(() => setModalStep('FINALIZED'), 2000);
  };

  const closeModal = () => {
    setSelectedOption(null);
    setModalStep('DETAILS');
  };

  const loadTestData = () => {
    setPii({
      Fname: "JENNIFER", Lname: "PARDEN", Email: "salvatore37@gmail.com",
      HomePhone: "7144532462", Street: "1024 CHAUTAUQUA BV",
      City: "PACIFIC PALISADES", State: "CA", PostalCode: "90272",
      Dob: "1971-08-01", CashOut: "12000", SSN: "666481023",
    });
  };

  const qualifyingOptions: QualifyingOption[] = useMemo(() => {
    if (!personalData) return [];
    const leader = personalData.leader;
    const allOptions: QualifyingOption[] = [
      {
        id: '1', name: 'Fixed-Rate Consolidation', type: 'loan', matchScore: 98,
        highlight: '8.49% - 12.99% APR', benefit: 'No Collateral Required',
        description: 'A standard personal loan that replaces your high-interest credit card debt with a single fixed monthly payment.',
        whyItMatches: 'Based on your stable credit profile and goal to reduce interest, this is the most direct path to zero debt without risking assets.',
        requirements: ['Minimum 660 Credit Score', 'Verifiable Monthly Income', 'DTI Ratio below 45%']
      },
      {
        id: '2', name: 'Smart HELOC Line', type: 'heloc', matchScore: 95,
        highlight: '7.25% Variable APR', benefit: 'Lowest Possible Interest',
        description: 'Leverage your home equity to access prime-relative rates. This acts as a reusable credit line for massive interest savings.',
        whyItMatches: 'Since you have significant home equity, this provides the absolute lowest mathematical cost of borrowing available on the market.',
        requirements: ['At least 20% Home Equity', '680+ Credit Score', 'Home Appraisal required']
      },
      {
        id: '3', name: 'Principal Forgiveness Plan', type: 'settlement', matchScore: 92,
        highlight: 'Reduce Balance by 45%+', benefit: 'Direct Debt Reduction',
        description: 'A legal negotiation process where creditors agree to accept less than the full balance owed to settle the account.',
        whyItMatches: 'Your current budget constraints suggest that interest reduction alone may not be enough. This directly addresses the principal you owe.',
        requirements: ['Proof of Financial Hardship', 'Total Unsecured Debt > $10,000', 'Willingness to endure temporary credit dip']
      },
      {
        id: '4', name: 'Accelerated Cash-Flow Loan', type: 'loan', matchScore: 88,
        highlight: '72-Month Extended Term', benefit: 'Lowest Monthly Payment',
        description: 'A specialized loan designed for maximum monthly breathing room by extending the term length.',
        whyItMatches: 'This is ideal if your primary concern is freeing up monthly liquidity while maintaining your credit standing.',
        requirements: ['Proof of Employment', 'Active Checking Account', 'Valid US ID']
      }
    ];
    return allOptions.filter(opt => {
      if (leader === 'loan') return opt.type === 'loan' || opt.matchScore > 90;
      if (leader === 'heloc') return opt.type === 'heloc' || opt.type === 'loan';
      if (leader === 'settlement') return opt.type === 'settlement' || (opt.type === 'loan' && opt.id === '4');
      return true;
    }).sort((a, b) => b.matchScore - a.matchScore);
  }, [personalData]);

  const inputBaseClass = "w-full px-5 py-4 rounded-xl border border-slate-700 bg-[#2d2d2d] text-[#ffffff] text-sm outline-none focus:border-brand-primary placeholder-slate-500 transition-all font-medium";
  const labelClass = "text-[10px] text-slate-400 font-bold uppercase ml-1 mb-1.5 tracking-wider block";

  /* eslint-disable @typescript-eslint/no-explicit-any */

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-brand-secondary text-white pb-32 pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            {pageState === 'SUCCESS' ? 'Audit Complete' : 'Personalized Strategy'}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {pageState === 'SUCCESS'
              ? 'Your personalized debt elimination matches are ready.'
              : 'Complete the identity verification to receive your customized debt elimination plan.'}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-16 relative z-20 max-w-4xl pb-24">
        {/* FORM STATE */}
        {pageState === 'FORM' && (
          <FormSection pii={pii} setPii={setPii} inputBaseClass={inputBaseClass} labelClass={labelClass} loadTestData={loadTestData} handleSubmission={handleSubmission} />
        )}

        {/* LOADING STATE */}
        {pageState === 'LOADING' && (
          <div className="bg-white p-20 rounded-[3rem] shadow-2xl text-center flex flex-col items-center justify-center border border-slate-100 min-h-[500px] animate-pulse">
            <Loader2 className="animate-spin text-brand-primary mb-8" size={64} />
            <h2 className="text-3xl font-light text-slate-900 mb-4">Securing Your Profile</h2>
            <p className="text-slate-500 max-w-sm">Verifying data points and matching with our primary lending network...</p>
          </div>
        )}

        {/* SUCCESS STATE */}
        {pageState === 'SUCCESS' && (
          <SuccessSection pii={pii} personalData={personalData} qualifyingOptions={qualifyingOptions} setSelectedOption={setSelectedOption} setPageState={setPageState} />
        )}
      </div>

      {/* Detail Modal */}
      {selectedOption && (
        <DetailModal selectedOption={selectedOption} modalStep={modalStep} pii={pii} personalData={personalData} closeModal={closeModal} handleConfirmInterest={handleConfirmInterest} />
      )}

      <BlogSection />
      <CtaBand />
    </div>
  );
}



/* --- Sub-components --- */

function FormSection({ pii, setPii, inputBaseClass, labelClass, loadTestData, handleSubmission }: any) {
  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 border-b border-slate-100 pb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-brand-primary">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Verify Identity</h2>
            <p className="text-sm text-slate-500">Secure 256-bit encrypted submission</p>
          </div>
        </div>
        <button onClick={loadTestData} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-200 text-xs font-bold text-blue-600 hover:bg-blue-50 transition-all">
          <RefreshCcw size={14} /> Use Test Data
        </button>
      </div>

      <form onSubmit={handleSubmission} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>First Name</label>
            <input type="text" required value={pii.Fname} onChange={e => setPii({...pii, Fname: e.target.value.toUpperCase()})} className={inputBaseClass} placeholder="JENNIFER" />
          </div>
          <div>
            <label className={labelClass}>Last Name</label>
            <input type="text" required value={pii.Lname} onChange={e => setPii({...pii, Lname: e.target.value.toUpperCase()})} className={inputBaseClass} placeholder="PARDEN" />
          </div>
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input type="email" required value={pii.Email} onChange={e => setPii({...pii, Email: e.target.value})} className={inputBaseClass} placeholder="example@email.com" />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input type="tel" required value={pii.HomePhone} onChange={e => setPii({...pii, HomePhone: e.target.value})} className={inputBaseClass} placeholder="714-453-2462" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Date of Birth</label>
            <input type="date" required value={pii.Dob} onChange={e => setPii({...pii, Dob: e.target.value})} className={`${inputBaseClass} [color-scheme:dark]`} />
          </div>
          <div>
            <label className={labelClass}>SSN (Digits Only)</label>
            <input type="password" required maxLength={9} value={pii.SSN} onChange={e => setPii({...pii, SSN: e.target.value.replace(/[^0-9]/g, '')})} className={inputBaseClass} placeholder="........." />
          </div>
        </div>
        <div>
          <label className={labelClass}>Street Address</label>
          <input type="text" required value={pii.Street} onChange={e => setPii({...pii, Street: e.target.value.toUpperCase()})} className={inputBaseClass} placeholder="1024 CHAUTAUQUA BV" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6">
            <label className={labelClass}>City</label>
            <input type="text" required value={pii.City} onChange={e => setPii({...pii, City: e.target.value.toUpperCase()})} className={inputBaseClass} placeholder="PACIFIC PALISADES" />
          </div>
          <div className="md:col-span-3">
            <label className={labelClass}>State</label>
            <input type="text" required maxLength={2} value={pii.State} onChange={e => setPii({...pii, State: e.target.value.toUpperCase()})} className={`${inputBaseClass} text-center`} placeholder="CA" />
          </div>
          <div className="md:col-span-3">
            <label className={labelClass}>Zip</label>
            <input type="text" required maxLength={5} value={pii.PostalCode} onChange={e => setPii({...pii, PostalCode: e.target.value})} className={`${inputBaseClass} text-center`} placeholder="90272" />
          </div>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-center">
          <p className="text-xs text-slate-500 leading-relaxed italic">
            By clicking &quot;Get My Custom Plan&quot;, you authorize Debt Pathway to perform a soft credit pull which <span className="text-slate-900 font-bold">will not affect your FICO score</span>. You also agree to our terms of service and TCPA consent.
          </p>
        </div>
        <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-primary transition-all shadow-xl active:scale-95 group">
          Get My Custom Plan
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}

function SuccessSection({ pii, personalData, qualifyingOptions, setSelectedOption, setPageState }: any) {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl text-center flex flex-col items-center border border-emerald-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-inner relative z-10">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 relative z-10">Verification Complete</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 relative z-10">
          Thank you, <span className="font-bold text-slate-900">{pii.Fname}</span>. Your credit profile matches the primary criteria for the following programs. Select an option below to finalize your interest.
        </p>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <Lock size={14} className="text-slate-400" /> AES-256 Encrypted
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <ShieldCheck size={14} className="text-slate-400" /> FICO Score Safe
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 px-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Top Qualifying Options</h3>
            <p className="text-sm text-slate-500">Based on your credit profile and debt volume of {personalData?.answers?.amount}.</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <Zap size={14} className="text-amber-500" fill="currentColor" /> Live Marketplace Results
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualifyingOptions.map((opt: QualifyingOption) => (
            <button key={opt.id} onClick={() => setSelectedOption(opt)} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group relative flex flex-col h-full">
              <div className="absolute top-6 right-8 text-slate-200 group-hover:text-brand-primary transition-colors">
                <ChevronRight size={24} />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${opt.type === 'heloc' ? 'bg-indigo-600' : opt.type === 'settlement' ? 'bg-orange-500' : 'bg-brand-primary'}`}>
                  {opt.type === 'heloc' ? <Home size={20} /> : opt.type === 'settlement' ? <ShieldCheck size={20} /> : <TrendingUp size={20} />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{opt.name}</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Match Score:</span>
                    <span className="text-[10px] font-black text-emerald-500">{opt.matchScore}%</span>
                  </div>
                </div>
              </div>
              <div className="mb-6 flex-grow">
                <p className={`text-xl font-bold mb-1 ${opt.type === 'heloc' ? 'text-indigo-600' : opt.type === 'settlement' ? 'text-orange-600' : 'text-brand-primary'}`}>
                  {opt.highlight}
                </p>
                <p className="text-xs text-slate-500 font-medium">{opt.benefit}</p>
              </div>
              <div className="pt-4 border-t border-slate-50 flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-slate-900 transition-colors">
                <Info size={14} /> View Plan Details
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="text-center pt-8">
        <button onClick={() => setPageState('FORM')} className="text-slate-400 font-bold text-sm hover:text-slate-900 transition-colors border-b border-transparent hover:border-slate-400">
          Restart Verification
        </button>
      </div>
    </div>
  );
}

function DetailModal({ selectedOption, modalStep, pii, personalData, closeModal, handleConfirmInterest }: any) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={closeModal}></div>
      <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        <button onClick={closeModal} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all z-20">
          <X size={20} />
        </button>
        <div className="p-8 md:p-12 overflow-y-auto">
          {modalStep === 'DETAILS' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${selectedOption.type === 'heloc' ? 'bg-indigo-600' : selectedOption.type === 'settlement' ? 'bg-orange-500' : 'bg-brand-primary'}`}>
                  {selectedOption.type === 'heloc' ? <Home size={32} /> : selectedOption.type === 'settlement' ? <ShieldCheck size={32} /> : <TrendingUp size={32} />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Vetted Strategy</span>
                    <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{selectedOption.matchScore}% Optimal Fit</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{selectedOption.name}</h3>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Algorithm Insight</p>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">{selectedOption.whyItMatches}</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Projected Impact</p>
                  <p className="text-2xl font-bold text-slate-900 mb-1">{selectedOption.highlight}</p>
                  <p className="text-xs text-slate-500 italic">Expected result based on your {personalData?.answers?.amount} volume.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                    <Target size={16} className="text-brand-primary" /> Strategy Overview
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{selectedOption.description}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                    <Zap size={16} className="text-amber-500" fill="currentColor" /> Approval Requirements
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedOption.requirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                        <div className="w-5 h-5 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={12} />
                        </div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-100 p-1">
                    <img src="https://i.pravatar.cc/100?u=consultant" className="w-full h-full rounded-full object-cover" alt="Consultant" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Case Representative</p>
                    <p className="text-[10px] text-slate-500">Awaiting Connection...</p>
                  </div>
                </div>
                <button onClick={handleConfirmInterest} className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm shadow-xl hover:bg-brand-primary transition-all flex items-center gap-2">
                  Confirm Interest <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {modalStep === 'CONNECTING' && (
            <div className="py-20 flex flex-col items-center text-center animate-in fade-in duration-500">
              <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl relative">
                <div className="absolute inset-0 rounded-full border-4 border-emerald-400 border-t-transparent animate-spin"></div>
                <Cpu size={40} className="animate-pulse" />
              </div>
              <h3 className="text-3xl font-light text-slate-900 mb-4">Priority Routing...</h3>
              <p className="text-slate-500 max-w-sm">Sending your verified identity and preference for the <span className="font-bold text-slate-900">{selectedOption.name}</span> to our senior strategy group.</p>
            </div>
          )}

          {modalStep === 'FINALIZED' && (
            <div className="py-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-inner">
                <CheckCircle2 size={44} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Priority Status Locked</h3>
              <p className="text-slate-500 mb-10">Your choice has been successfully recorded and your file is now at the top of our specialist review queue.</p>
              <div className="w-full bg-slate-50 rounded-3xl p-8 border border-slate-100 text-left mb-10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Next Steps for {pii.Fname}</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                    <p className="text-sm text-slate-700 font-medium">Wait for a call from <span className="text-slate-900 font-bold">(800) 555-0123</span>.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                    <p className="text-sm text-slate-700 font-medium">A specialist will verify your {personalData?.answers?.amount} debt volume live.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                    <p className="text-sm text-slate-700 font-medium">Finalize your term length and new fixed monthly payment.</p>
                  </div>
                </div>
              </div>
              <button onClick={closeModal} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand-primary transition-all shadow-xl">
                Done - Return to Results
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}