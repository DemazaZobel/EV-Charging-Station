import React, { useState } from 'react';
import { motion } from 'framer-motion';
import gear from "../assets/chargingGear.png"
export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const values = [
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Smart charging solutions for Ethiopia's infrastructure"
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l8-8m0 0l-8-8m8 8H4" />
        </svg>
      ),
      title: "Sustainability",
      description: "Reducing emissions through clean transportation"
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community",
      description: "Solutions serving all Ethiopians equitably"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Powering Ethiopia's <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">Electric Future</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            EVCharge is revolutionizing transportation with reliable, accessible charging solutions across Ethiopia.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h3>
            <p className="text-gray-600 mb-8 text-lg">
              To accelerate Ethiopia's transition to sustainable transportation by building the nation's most reliable EV charging network.
            </p>
            <div className="space-y-5">
              {[
                "Deploy 500+ charging stations nationwide by 2025",
                "Reduce carbon emissions by 100,000 tons annually",
                "Make EV charging accessible within 5km of every urban resident"
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 bg-gradient-to-br from-green-500 to-teal-500 p-2 rounded-lg group-hover:scale-110 transition-transform shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-600 text-lg group-hover:text-gray-900 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative rounded-2xl overflow-hidden h-[500px] shadow-lg border border-gray-200"
          >
            <img
              className="w-full h-full object-cover"
              src={gear}
              alt="EV charging station"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-xl font-semibold">Addis Ababa Supercharger</h4>
              <p className="text-gray-200">Our flagship station with 10 charging bays</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative overflow-hidden rounded-xl bg-white p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 ${hoveredCard === index ? 'opacity-100' : ''} transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto shadow-md">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h4>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "50+", label: "Charging Stations" },
              { number: "10K+", label: "EVs Charged" },
              { number: "500+", label: "Tons CO₂ Saved" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      
    </div>
  );
};