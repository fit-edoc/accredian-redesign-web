"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      company: "IIT Roorkee",
      quote: "Accredian has been an instrumental partner in bringing high-quality executive education to professionals. Their operational excellence and focus on student outcomes is truly commendable.",
      author: "Program Director"
    },
    {
      company: "Wharton Online",
      quote: "Our collaboration with Accredian has enabled us to reach a wider audience of aspiring leaders. The platform provides a seamless learning experience that aligns with our standards of excellence.",
      author: "Partnerships Team"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Testimonials from <span className="text-orange-500">Our Partners</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Hear what our academic and industry partners have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-orange-50" />
              <h3 className="text-xl font-bold text-zinc-900 mb-6">{testimonial.company}</h3>
              <p className="text-zinc-600 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="font-semibold text-zinc-800 border-t border-zinc-100 pt-4">
                - {testimonial.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
