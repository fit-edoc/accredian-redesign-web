"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp } from 'lucide-react';

const DeliverResults = () => {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            How We <span className="text-orange-500">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            From skill building to measurable business outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: 1200 }}>
          {[
            {
              title: "Skill Translation",
              desc: "Bridge the gap between theoretical knowledge and practical application.",
              icon: Target
            },
            {
              title: "Execution Ready Teams",
              desc: "Empower your workforce to independently drive and execute projects.",
              icon: Zap
            },
            {
              title: "Positive Business Outcome",
              desc: "Ensure measurable impact on KPIs, revenue growth, and operational efficiency.",
              icon: TrendingUp
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateX: 30, rotateY: 15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
              whileHover={{ rotateX: 10, rotateY: -10, y: -10, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-[0_20px_40px_rgb(249,115,22,0.15)] hover:border-orange-200 transition-colors group"
            >
              <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverResults;
