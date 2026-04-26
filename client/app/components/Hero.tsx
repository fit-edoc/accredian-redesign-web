"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import axios from 'axios';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    companySize: ''
  });
  const [status, setStatus] = useState('');

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/lead`, formData);
      setStatus('Success! We will contact you soon.');
      setFormData({ name: '', workEmail: '', companySize: '' });
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('Error submitting form. Please try again.');
    }
  };
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-black font-medium text-sm mb-6 border border-orange-100">
              <span className="flex h-2 w-2 rounded-full bg-black"></span>
              Elevate your workforce
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-400">Potential</span> <br /> Lead with <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-600">Impact</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-lg">
              Personalize your programs. Re-skill high-impact leaders. Accelerate organizational growth with tailored learning paths.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2 text-zinc-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-orange-300" />
                <span>Live Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-orange-300" />
                <span>Flexible Schedule</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-orange-300" />
                <span>1-on-1 Mentorship</span>
              </div>
            </div>
            
            {/* Added avatars representing mentors or students for social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-zinc-200 shadow-sm z-[${10-i}]`}>
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-zinc-600">
                <span className="font-bold text-zinc-900">10,000+</span> professionals trained
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 15, rotateY: -25, z: -100 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
          >
            {/* Lead Gen Form */}
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-zinc-100 overflow-hidden z-10">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 to-orange-400"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Request Consultation</h3>
                <p className="text-zinc-500 text-sm mb-6">Fill out the form below and our enterprise team will reach out to you within 24 hours.</p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-zinc-50 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Work Email</label>
                    <input type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-zinc-50 focus:bg-white" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Company Size</label>
                    <select name="companySize" value={formData.companySize} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-zinc-50 focus:bg-white text-zinc-600">
                      <option value="" disabled>Select size</option>
                      <option value="1-50 employees">1-50 employees</option>
                      <option value="51-200 employees">51-200 employees</option>
                      <option value="201-1000 employees">201-1000 employees</option>
                      <option value="1000+ employees">1000+ employees</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3.5 px-4 rounded-xl transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 group">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  {status && (
                    <p className={`text-sm text-center mt-2 ${status.includes('Error') ? 'text-red-500' : status.includes('Submitting') ? 'text-zinc-500' : 'text-green-500'}`}>
                      {status}
                    </p>
                  )}
                </form>
                <p className="text-xs text-zinc-400 text-center mt-4">By submitting, you agree to our Terms and Privacy Policy.</p>
              </div>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 -left-10 w-[300px] h-[300px] bg-purple-100/50 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
