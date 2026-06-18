import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Navbar({ setView }) {
    const [activeSection, setActiveSection] = useState('home');
    const [viewMode, setViewMode] = useState('diners');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* The bar shifts to a premium crisp white glass shield */}
            <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 bg-white/90 backdrop-blur-md text-zinc-800 fixed top-0 left-0 z-50 border-b border-zinc-200/50 shadow-sm">

                {/* 1. Brand Identity Logo */}
                <a
                    href="#home"
                    onClick={() => { setActiveSection('home'); setView('landing'); }}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <span className="text-xl font-serif tracking-[0.25em] uppercase font-bold text-zinc-950">Mise</span>
                </a>

                {/* 2. Navigation Links */}
                <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-bold">
                    <a
                        href="#home"
                        onClick={() => { setActiveSection('home'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'home' ? 'text-zinc-950' : 'text-zinc-400 hover:text-zinc-900'}`}
                    >
                        Home
                        {activeSection === 'home' && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-zinc-950" />}
                    </a>

                    <a
                        href="#how-it-works"
                        onClick={() => { setActiveSection('how-it-works'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'how-it-works' ? 'text-zinc-950' : 'text-zinc-400 hover:text-zinc-900'}`}
                    >
                        How it works
                        {activeSection === 'how-it-works' && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-zinc-950" />}
                    </a>

                    <a
                        href="#curation"
                        onClick={() => { setActiveSection('curation'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'curation' ? 'text-zinc-950' : 'text-zinc-400 hover:text-zinc-900'}`}
                    >
                        Features
                        {activeSection === 'curation' && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-zinc-950" />}
                    </a>

                    <a
                        href="#contact"
                        onClick={() => { setActiveSection('concierge'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'concierge' ? 'text-zinc-950' : 'text-zinc-400 hover:text-zinc-900'}`}
                    >
                        Contact
                        {activeSection === 'concierge' && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-zinc-950" />}
                    </a>
                </div>

                {/* 3. Action Utility Panel */}
                <div className="flex items-center gap-5 md:gap-6">
                    <div className="hidden sm:flex items-center gap-4 text-zinc-400">
                        <button className="hover:text-zinc-900 transition-colors cursor-pointer"><Icon icon="lucide:search" className="w-4.5 h-4.5" /></button>
                        <button className="hover:text-zinc-900 transition-colors cursor-pointer"><Icon icon="lucide:heart" className="w-4.5 h-4.5" /></button>
                        <button onClick={() => setView('signin')} className="hover:text-zinc-900 transition-colors cursor-pointer">
                            <Icon icon="lucide:user" className="w-4.5 h-4.5" />
                        </button>
                    </div>

                    {/* Dark/Light Segment Toggle Control */}
                    <div className="flex items-center gap-0.5 bg-zinc-100 rounded-full p-0.5 border border-zinc-200/80 text-[11px] uppercase tracking-wider font-bold relative overflow-hidden">
                        <button
                            onClick={() => { setViewMode('restaurants'); setView('signup'); }}
                            className={`px-3 py-2 rounded-full transition-all duration-300 relative z-10 cursor-pointer ${viewMode === 'restaurants' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
                        >
                            For restaurants
                        </button>

                        <button
                            onClick={() => { setViewMode('diners'); setView('signin'); }}
                            className={`px-3 py-2 rounded-full transition-all duration-300 relative z-10 cursor-pointer ${viewMode === 'diners' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
                        >
                            For diners
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex md:hidden text-zinc-700 hover:text-zinc-950 transition-colors p-1 z-50"
                    >
                        <Icon icon={isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'} className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div className={`fixed inset-x-0 top-0 bg-white/95 backdrop-blur-lg border-b border-zinc-200/80 z-40 md:hidden transition-all duration-300 ease-in-out transform origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-100 pointer-events-none'}`}>
                <div className="flex flex-col p-6 gap-5 text-sm uppercase tracking-widest font-bold pt-24 text-left">
                    <a href="#home" onClick={() => { setActiveSection('home'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'home' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-400'}`}>Home</a>
                    <a href="#how-it-works" onClick={() => { setActiveSection('how-it-works'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'how-it-works' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-400'}`}>How it works</a>
                    <a href="#curation" onClick={() => { setActiveSection('curation'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'curation' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-400'}`}>Features</a>
                    <a href="#contact" onClick={() => { setActiveSection('concierge'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'concierge' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-400'}`}>Contact</a>
                </div>
            </div>
        </>
    );
}