"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, UserCheck, Briefcase } from 'lucide-react';

const AccredianEdge = () => {
  const edges = [
    {
      title: "Top-Tier Institutes",
      description: "Learn from faculty at the world's leading universities.",
      icon: GraduationCap,
      delay: 0.1
    },
    {
      title: "Industry Experts",
      description: "Gain insights from professionals leading top organizations.",
      icon: Users,
      delay: 0.2
    },
    {
      title: "Personalized Mentorship",
      description: "1-on-1 guidance tailored to your specific career goals.",
      icon: UserCheck,
      delay: 0.3
    },
    {
      title: "Career Support",
      description: "Dedicated assistance to land your dream role.",
      icon: Briefcase,
      delay: 0.4
    }
  ];

  return (
    <section id="edge" className="py-24 bg-zinc-50 border-t border-zinc-100 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            The <span className="text-orange-300">Accredian Edge</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Why choose us for your learning journey
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10" style={{ perspective: 1200 }}>
            {edges.map((edge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateX: 45, rotateY: 15, scale: 0.8 }}
                whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: edge.delay, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center text-center relative group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Connector dots */}
                <div className="hidden md:flex absolute top-[48px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-orange-500 rounded-full z-0"></div>
                
                <div className="w-24 h-24 rounded-full bg-white border-4 border-purple-50 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300 relative z-10">
                  <edge.icon className="w-10 h-10 text-purple-700" />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{edge.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">{edge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccredianEdge;
