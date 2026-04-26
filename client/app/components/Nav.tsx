"use client"

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("home");

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Stats", href: "#stats" },
        { name: "Clients", href: "#clients" },
        { name: "Accredian Edge", href: "#edge" },
        { name: "CAT", href: "#cat" },
        { name: "FAQs", href: "#faqs" },
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        navItems.forEach((item) => {
            const id = item.href.substring(1);
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 md:rounded-full md:top-4 md:left-10 md:right-10 md:border-black/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-300 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <span className="font-bold text-xl text-zinc-900">Accredian</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-2 relative">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 ${
                                        isActive 
                                            ? "text-black" 
                                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav-indicator"
                                            className="absolute inset-0 bg-orange-200 rounded-full"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="#login" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                            Log in
                        </Link>
                        <Link href="#demo" className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">
                            Get a demo
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white border-b border-zinc-100 px-4 pt-2 pb-4 space-y-1 shadow-lg overflow-hidden"
                    >
                        {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                                    isActive
                                        ? "bg-orange-100 text-orange-700"
                                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <div className="pt-4 flex flex-col gap-2">
                        <Link href="#login" className="block text-center px-3 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 bg-zinc-50 rounded-md">
                            Log in
                        </Link>
                        <Link href="#demo" className="block text-center px-3 py-2 text-base font-medium bg-zinc-900 text-white rounded-md">
                            Get a demo
                        </Link>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Nav;