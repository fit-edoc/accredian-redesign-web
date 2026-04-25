"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-orange-500 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Abstract pattern inside the card */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/40 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Want to learn More About Our Training Solutions?
            </h2>
            <p className="mt-6 text-xl text-orange-100 max-w-2xl mx-auto">
              Get in touch with our enterprise team to design a program tailored for your workforce.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full text-orange-500 bg-white hover:bg-zinc-50 transition-all hover:scale-105 shadow-xl flex gap-2 group"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
