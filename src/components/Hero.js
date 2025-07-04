import React, { useState, useEffect } from "react";
import car from "../assets/car.png";
import arrow from "../assets/rightArrow.png";
export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-600 to-green-500">
      {/* Cosmic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Nebula Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/30 via-gray-900 to-gray-950 animate-pulse-slow" />
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Holographic Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(74,222,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

      {/* Center Content - Moved Higher */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ease-out mt-[-300px] ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        {/* Animated Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
            CHARGE
          </span>
          <br />
          <span className="text-white font-light">WITH</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
            POWER
          </span>
        </h1>

        {/* Glowing Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Ethiopia's most <span className="text-green-400">advanced</span> EV charging network
        </p>

        {/*  CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#stations"
            className="relative px-10 py-3 rounded-full overflow-hidden group transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 group-hover:from-green-600 group-hover:to-teal-600 transition-all duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 text-white text-lg font-medium flex items-center justify-center">
              Find Stations
              <img
                src={arrow}
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                
              />
                
            </span>
            <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-transparent transition-all duration-500" />
          </a>

          <a
            href="#pricing"
            className="relative px-10 py-3 rounded-full overflow-hidden group transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/70 transition-all duration-500" />
            <div className="absolute inset-0 border border-white/10 group-hover:border-green-400/30 transition-all duration-500" />
            <span className="relative z-10 text-white text-lg font-medium">
              Premium Plans
            </span>
          </a>
        </div>
      </div>

      {/* Floating Car with Holographic Effect */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center z-10 ">
        <div className="relative w-full max-w-3xl h-64 md:h-[28rem]">
          {/* Holographic Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-full border border-yellow-500"
                style={{
                  width: `${100 + ring * 40}%`,
                  height: `${100 + ring * 40}%`,
                  animation: `pulse-ring ${3 + ring * 2}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                  animationDelay: `${ring * 0.5}s`,
                }}
              />
            ))}
          </div>
          
          {/* Main Car Image */}
          <img
            src={car}
            alt="Luxury Electric Vehicle"
            className={`relative z-10 w-full h-full object-contain transition-all duration-1000 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              filter: "drop-shadow(0 0 20px rgba(74, 222, 128, 0.3))",
              animation: "float 6s ease-in-out infinite"
            }}
          />
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce-slow flex flex-col items-center">
          <span className="text-xs text-green-400 mb-1">EXPLORE</span>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Custom Animations */}
      
    </section>
  );
}