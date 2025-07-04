import React from "react";
import { useState } from "react";

export default function Cards(){

      
    return(
        <>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-4">How It Works</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">Charge your electric vehicle in just three simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: '📍', 
                title: 'Step 1: Locate', 
                desc: 'Find the nearest charging station with our real-time map',
                bg: 'from-green-200  to-teal-200'
              },
              { 
                icon: '🔌', 
                title: 'Step 2: Plug In', 
                desc: 'Connect your EV using our universal charging ports',
                bg: 'from-green-200  to-teal-200'
              },
              { 
                icon: '💸', 
                title: 'Step 3: Charge & Pay', 
                desc: 'Monitor your session and pay seamlessly via app',
                bg: 'from-green-200 to-teal-200'
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="group perspective-1000"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.card-inner').style.transform = 'rotateY(15deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
                }}
              >
                <div className="card-inner relative h-full transition-transform duration-500 ease-in-out transform-style-preserve-3d">
                  <div className={`bg-gradient-to-br ${step.bg} p-8 rounded-2xl shadow-md h-full transition-all duration-500 group-hover:shadow-lg`}>
                    <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6 text-4xl bg-white rounded-2xl shadow-sm">
                      {step.icon}
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </>
    );
}