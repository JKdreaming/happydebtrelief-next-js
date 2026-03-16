import { Calendar, Shield, CreditCard, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <CreditCard className="w-6 h-6 text-slate-700" />,
    title: "Fixed Rates",
    desc: "Lock in a low rate that never changes, unlike credit cards."
  },
  {
    icon: <Shield className="w-6 h-6 text-slate-700" />,
    title: "No Hidden Fees",
    desc: "No prepayment penalties. Pay off your loan early anytime."
  },
  {
    icon: <Calendar className="w-6 h-6 text-slate-700" />,
    title: "Single Monthly Bill",
    desc: "Stop juggling 5 different due dates. One easy payment."
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-slate-700" />,
    title: "Human Support",
    desc: "US-based experts ready to help you plan your budget."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
             <h2 className="text-3xl font-light text-slate-900 mb-4">The Happy Debt Relief Advantage</h2>
             <p className="text-slate-500 max-w-2xl mx-auto">We are not just a lender; we are your partner in financial freedom.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300 shadow-sm text-blue-600">
                {feature.icon}
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-500 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

