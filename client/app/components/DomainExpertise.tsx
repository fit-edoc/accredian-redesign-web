"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Database, BarChart3, Megaphone, Cpu, ShieldCheck, ArrowUpRight } from 'lucide-react';

const DomainExpertise = () => {
  const domains = [
    { 
      title: "Product Management", 
      icon: LayoutDashboard,
      desc: "Master the complete product lifecycle from ideation to successful market launch with our comprehensive curriculum.",
      className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-orange-50 to-white",
      iconColor: "text-white",
      iconBg: "bg-orange-500",
      hoverBorder: "hover:border-orange-300"
    },
    { 
      title: "Data Science", 
      icon: Database,
      desc: "Transform raw data into actionable business insights.",
      className: "md:col-span-2 md:row-span-1 bg-gradient-to-br from-purple-50 to-white",
      iconColor: "text-white",
      iconBg: "bg-purple-500",
      hoverBorder: "hover:border-purple-300"
    },
    { 
      title: "Business Analytics",  
      icon: BarChart3,
      desc: "Drive decisions with predictive models.",
      className: "md:col-span-1 md:row-span-1 bg-white",
      iconColor: "text-white",
      iconBg: "bg-blue-500",
      hoverBorder: "hover:border-blue-300"
    },
    { 
      title: "Digital Marketing", 
      icon: Megaphone,
      desc: "Scale brands with targeted growth.",
      className: "md:col-span-1 md:row-span-1 bg-white",
      iconColor: "text-white",
      iconBg: "bg-pink-500",
      hoverBorder: "hover:border-pink-300"
    },
    { 
      title: "AI & Machine Learning", 
      icon: Cpu,
      desc: "Build intelligent systems of the future using cutting-edge neural networks.",
      className: "md:col-span-2 md:row-span-1 bg-zinc-900 text-white",
      iconColor: "text-white",
      iconBg: "bg-zinc-700",
      hoverBorder: "hover:border-zinc-700",
      darkText: true
    },
    { 
      title: "Cyber Security", 
      icon: ShieldCheck,
      desc: "Protect critical digital infrastructure against emerging threats.",
      className: "md:col-span-2 md:row-span-1 bg-white",
      iconColor: "text-white",
      iconBg: "bg-green-900",
      hoverBorder: "hover:border-green-900"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Our <span className="text-orange-400">Domain Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            Specialized programs across high-growth domains designed to accelerate your career trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 md:gap-6 max-w-5xl mx-auto">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col p-6 md:p-8 rounded-3xl border border-zinc-200 transition-all duration-300 hover:shadow-xl overflow-hidden ${domain.className} ${domain.hoverBorder}`}
            >
              {/* Background accent for some cards */}
              {!domain.darkText && (
                <div className={`absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-20 ${domain.iconBg}`} />
              )}

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 ${domain.iconBg}`}>
                  <domain.icon className={`w-7 h-7 ${domain.iconColor}`} />
                </div>
                <div className={`opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${domain.darkText ? 'text-white' : 'text-zinc-400'}`}>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-2 ${domain.darkText ? 'text-white' : 'text-zinc-900'}`}>
                  {domain.title}
                </h3>
                <p className={`text-sm ${domain.darkText ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed max-w-[90%]`}>
                  {domain.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
