"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CourseSegmentation = () => {
  const segments = [
    {
      title: "CxO & Leaders",
      description: "Strategic programs for senior executives to drive transformation.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Senior Managers",
      description: "Advanced skills to lead teams and deliver business impact.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Professionals",
      description: "Upskilling paths to accelerate career growth and transition.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Recent Grads",
      description: "Foundational programs to kickstart a successful tech career.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400&h=300"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Tailored <span className="text-orange-300">Course Segmentation</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            Right skills at the right career stage for maximized ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: 1200 }}>
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateX: 45, rotateY: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
              whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 group transition-shadow duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={segment.image} 
                  alt={segment.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-orange-300 transition-colors">
                  {segment.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {segment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSegmentation;
