"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, RefreshCw, Wrench } from 'lucide-react';

const CatFramework = () => {
  return (
    <section id="cat" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            The <span className="text-orange-300">CAT Framework</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Our Proven Approach to Skill Development
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connecting lines */}
          <div className="hidden md:block absolute top-[25%] left-0 w-full h-0.5 bg-gradient-to-r from-white via-black to-white -translate-y-1/2 z-0 opacity-50"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {[
              {
                title: "Concepts",
                desc: "Build a strong foundation with core theoretical principles and frameworks.",
                icon: BookOpen
              },
              {
                title: "Applications",
                desc: "Apply concepts to real-world business scenarios and case studies.",
                icon: RefreshCw
              },
              {
                title: "Tools",
                desc: "Master industry-standard tools and technologies for immediate impact.",
                icon: Wrench
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-full bg-white border-4 border-zinc-100 flex items-center justify-center shadow-xl mb-6 relative group-hover:border-purple-500 transition-colors duration-300">
                  <div className="absolute inset-2 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300"></div>
                  <step.icon className="w-10 h-10 text-purple-500 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-purple-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed px-4">  
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatFramework;
