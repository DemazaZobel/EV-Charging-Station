
import React from "react";
import { useState } from "react";

export default function Testimonials(){
    const [activeTab, setActiveTab] = useState('stations');
    const [menuOpen, setMenuOpen] = useState(false);

      
    return(
        <>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-3">What Our Customers Say</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">Hear from EV owners who use our charging network</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "EVCharge has made my transition to electric vehicles seamless. The stations are always available and the pricing is transparent.",
                name: "Alemayehu K.",
                role: "Tesla Owner",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "I was skeptical at first, but the fast charging options have saved me so much time on my daily commute across Addis.",
                name: "Selam W.",
                role: "Nissan Leaf Owner",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "As a business owner with an EV fleet, EVCharge's custom plans have significantly reduced our operational costs.",
                name: "Michael T.",
                role: "Fleet Manager",
                avatar: "https://randomuser.me/api/portraits/men/75.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h5 className="font-medium">{testimonial.name}</h5>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </>
    );
}

       