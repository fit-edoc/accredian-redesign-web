"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Briefcase, GraduationCap, Globe } from 'lucide-react';

const SkillEnhancement = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-900 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Strategic Skill Enhancement
            </h2>
            <p className="text-orange-100 text-lg leading-relaxed mb-8 max-w-lg">
              Equip your teams with the modern skills they need to stay competitive and drive innovation in a rapidly changing digital landscape.
            </p>
            <div className="hidden lg:block w-full max-w-md h-64 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Professionals" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: "Live Sessions", desc: "Interactive classes led by global experts.", icon: Video },
              { title: "Career Services", desc: "Resume building and interview prep.", icon: Briefcase },
              { title: "Industry Mentors", desc: "1-on-1 guidance from top professionals.", icon: GraduationCap },
              { title: "Global Alumni", desc: "Access to a worldwide network of peers.", icon: Globe }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-orange-100 text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default SkillEnhancement;
