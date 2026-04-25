"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2000
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // If the value is large (like 10000), format it as 10K if needed
        // but here we are given raw numbers like 10, 100
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return (
    <span className="inline-flex items-center">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
};

const Stats = () => {
  const stats = [
    {
      numericValue: 10,
      suffix: "K+",
      label: "Students enrolled globally across programs",
    },
    {
      numericValue: 100,
      suffix: "+",
      label: "Programs & practical sessions delivered",
    },
    {
      numericValue: 100,
      suffix: "+",
      label: "Expert faculty from top global schools",
    }
  ];

  return (
    <section id="stats" className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Our <span className="text-orange-300">Track Record</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Unmatched by Industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow group relative overflow-hidden"
            >
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-4xl md:text-5xl font-bold  mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-950">
                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
              </div>
              <p className="text-zinc-600 font-medium leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
