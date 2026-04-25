"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white border-t border-zinc-200 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-bold text-lg text-zinc-900">Accredian</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs mb-6">
              Next-Gen Expertise For Your Enterprise. Re-skill high-impact leaders and accelerate growth.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                <FaTwitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                <FaYoutube className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                <FaFacebook className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Programs</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Product Management</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Data Science</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Business Analytics</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">AI & ML</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Student Success</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Masterclasses</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Scholarships</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Partnerships</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-100  flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Accredian. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
