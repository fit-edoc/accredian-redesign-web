"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Faqs = () => {
  const faqs = [
    {
      question: "What is the duration of the program?",
      answer: "The program duration varies based on the specific track you choose, typically ranging from 3 to 6 months. We offer flexible schedules to accommodate working professionals."
    },
    {
      question: "Are the sessions live or recorded?",
      answer: "Our programs feature a blended learning approach. You will have access to high-quality recorded modules for self-paced learning, complemented by live interactive sessions with industry experts."
    },
    {
      question: "Will I get career support?",
      answer: "Absolutely. We provide comprehensive career support including resume building, interview preparation, and exclusive access to our hiring partners network."
    },
    {
      question: "What is the eligibility criteria?",
      answer: "Eligibility varies by program. Generally, a bachelor's degree and some professional experience are recommended, but we evaluate candidates holistically."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-zinc-200 rounded-2xl overflow-hidden bg-zinc-50"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-zinc-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-zinc-900 text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 text-zinc-600 border-t border-zinc-100 bg-zinc-50/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
