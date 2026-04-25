"use client";

import React from 'react';
import { motion } from 'framer-motion';

const logosRow1 = [
  { name: "HCL", src: "/images/logos/hcl.png" },
  { name: "IBM", src: "/images/logos/ibm.png" },
  { name: "CRIF", src: "/images/logos/crif.png" },
];

const logosRow2 = [
  { name: "ADP", src: "/images/logos/adp.png" },
  { name: "Bayer", src: "/images/logos/bayer.png" },
  { name: "Reliance", src: "/images/rel.png" }
];

const MarqueeRow = ({ items, direction }: { items: typeof logosRow1, direction: 'left' | 'right' }) => {
  // We duplicate items many times so one "set" is definitely wider than any screen.
  // Then we render TWO of these massive sets side-by-side.
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{
          x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: direction === 'left' ? 40 : 45, // Slightly different speeds for variation
        }}
      >
        {/* Set 1 */}
        <div className="flex gap-8 md:gap-12 pr-8 md:pr-12">
          {duplicatedItems.map((logo, idx) => (
            <div key={`set1-${idx}`} className="flex flex-col items-center justify-center w-48 shrink-0">
              <div className="h-20 w-48 flex items-center justify-center bg-white px-6 py-4 rounded-xl border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden font-bold text-lg text-zinc-400 text-center">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Set 2 (Exact duplicate for seamless loop) */}
        <div className="flex gap-8 md:gap-12 pr-8 md:pr-12">
          {duplicatedItems.map((logo, idx) => (
            <div key={`set2-${idx}`} className="flex flex-col items-center justify-center w-48 shrink-0">
              <div className="h-20 w-48 flex items-center justify-center bg-white px-6 py-4 rounded-xl border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden font-bold text-lg text-zinc-400 text-center">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Logos = () => {
  return (
    <section id="clients" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
            Our Proven <span className="text-orange-300">Partnerships</span>
          </h2>
          <p className="mt-3 text-zinc-600">
            Trusted by Top Institutes & Fortune 500 Companies
          </p>
        </div>
      </div>
      
      {/* Marquee Container with edge fading masks */}
      <div className="relative max-w-full overflow-hidden flex flex-col gap-8">
        {/* CSS Mask for disappearing effect at edges */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, white 0%, transparent 15%, transparent 85%, white 100%)'
          }}
        ></div>
        
        {/* Row 1: Moving Right */}
        <MarqueeRow items={logosRow1} direction="right" />
        
        {/* Row 2: Moving Left */}
        <MarqueeRow items={logosRow2} direction="left" />
      </div>
    </section>
  );
};

export default Logos;
