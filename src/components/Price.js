
import React from "react";
import { useState } from "react";

export default function Price(){
    const [activeTab, setActiveTab] = useState('stations');
    const [menuOpen, setMenuOpen] = useState(false);

      
    return(
        <>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-3">Transparent Pricing</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">Choose the plan that fits your charging needs</p>
            
            {/* Pricing toggle */}
            <div className="inline-flex bg-gray-100 rounded-full p-1 mt-6">
              <button className={`px-6 py-2 rounded-full transition ${activeTab === 'personal' ? 'bg-white shadow-sm text-green-500' : 'text-gray-600'}`}>
                Personal
              </button>
              <button className={`px-6 py-2 rounded-full transition ${activeTab === 'business' ? 'bg-white shadow-sm text-green-500' : 'text-gray-600'}`}>
                Business
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Standard", 
                price: "5", 
                desc: "Regular charging for everyday use",
                features: ["Up to 22kW", "Pay per session", "24/7 Support", "Basic analytics"],
                popular: false
              },
              { 
                name: "Fast Charge", 
                price: "10", 
                desc: "Charge 3x faster when you're in a hurry",
                features: ["Up to 150kW", "Priority access", "Session tracking", "Advanced analytics"],
                popular: true
              },
              { 
                name: "Unlimited", 
                price: "25", 
                desc: "Unlimited charging for heavy users",
                features: ["All charger types", "Unlimited sessions", "Premium support", "Full analytics"],
                popular: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl p-8 transition-all duration-300 hover:shadow-xl border ${plan.popular ? 'border-green-300 bg-green-50/30' : 'border-gray-200'} ${plan.popular ? 'scale-105' : 'hover:scale-[1.02]'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-end mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-green-600' : 'text-gray-800'}`}>{plan.price}</span>
                  <span className="text-gray-500 ml-1 mb-1">ETB / kWh</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className={`flex-shrink-0 w-5 h-5 mr-2 mt-0.5 ${plan.popular ? 'text-green-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-medium transition-all ${plan.popular 
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:shadow-lg hover:from-green-600 hover:to-teal-600' 
                  : 'border border-green-500 text-green-500 hover:bg-green-50'}`}>
                  {plan.popular ? 'Get Started' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
       
        
        </>
    );
}

       