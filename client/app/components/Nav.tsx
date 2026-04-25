"use client"

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Stats", href: "#stats" },
        { name: "Clients", href: "#clients" },
        { name: "Accredian Edge", href: "#edge" },
        { name: "CAT", href: "#cat" },
        { name: "FAQs", href: "#faqs" },
    ];

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

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
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
            {isOpen && (
                <div className="md:hidden bg-white border-b border-zinc-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-2">
                        <Link href="#login" className="block text-center px-3 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 bg-zinc-50 rounded-md">
                            Log in
                        </Link>
                        <Link href="#demo" className="block text-center px-3 py-2 text-base font-medium bg-zinc-900 text-white rounded-md">
                            Get a demo
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;