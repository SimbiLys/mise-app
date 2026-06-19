import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Navbar({ setView }) {
    const [activeSection, setActiveSection] = useState('home');
    const [viewMode, setViewMode] = useState('diners');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Dark Mode Luxury Navigation Bar */}
            <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 bg-zinc-950/40 backdrop-blur-md text-white fixed top-0 left-0 z-50 border-b border-white/10 shadow-sm">

                {/* 1. Brand Identity Logo */}
                <a
                    href="#home"
                    onClick={() => { setActiveSection('home'); setView('landing'); }}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <span className="text-xl font-serif tracking-[0.25em] uppercase font-bold text-white">Mise</span>
                </a>

                {/* 2. Navigation Links */}
                <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-bold">
                    <a
                        href="#home"
                        onClick={() => { setActiveSection('home'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'home' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Home
                        {activeSection === 'home' && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white" />}
                    </a>

                    <a
                        href="#how-it-works"
                        onClick={() => { setActiveSection('how-it-works'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'how-it-works' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                        How it works
                        {activeSection === 'how-it-works' && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white" />}
                    </a>

                    <a
                        href="#curation"
                        onClick={() => { setActiveSection('curation'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'curation' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Features
                        {activeSection === 'curation' && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white" />}
                    </a>

                    <a
                        href="#contact"
                        onClick={() => { setActiveSection('concierge'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'concierge' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Contact
                        {activeSection === 'concierge' && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white" />}
                    </a>
                </div>

                {/* 3. Action Utility Panel */}
                <div className="flex items-center gap-5 md:gap-6">
                    <div className="hidden sm:flex items-center gap-4 text-zinc-400">
                        <button className="hover:text-white transition-colors cursor-pointer"><Icon icon="lucide:search" className="w-4.5 h-4.5" /></button>
                        <button className="hover:text-white transition-colors cursor-pointer"><Icon icon="lucide:heart" className="w-4.5 h-4.5" /></button>
                        <button onClick={() => setView('signin')} className="hover:text-white transition-colors cursor-pointer">
                            <Icon icon="lucide:user" className="w-4.5 h-4.5" />
                        </button>
                    </div>

                    {/* Dark/Segment Toggle Control */}
                    <div className="flex items-center gap-0.5 bg-zinc-900 rounded-full p-0.5 border border-white/10 text-[11px] uppercase tracking-wider font-bold relative overflow-hidden">
                        <button
                            onClick={() => { setViewMode('restaurants'); setView('signup'); }}
                            className={`px-3 py-2 rounded-full transition-all duration-300 relative z-10 cursor-pointer ${viewMode === 'restaurants' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-400 hover:text-white'}`}
                        >
                            For restaurants
                        </button>

                        <button
                            onClick={() => { setViewMode('diners'); setView('signin'); }}
                            className={`px-3 py-2 rounded-full transition-all duration-300 relative z-10 cursor-pointer ${viewMode === 'diners' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-400 hover:text-white'}`}
                        >
                            For diners
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex md:hidden text-zinc-300 hover:text-white transition-colors p-1 z-50"
                    >
                        <Icon icon={isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'} className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div className={`fixed inset-x-0 top-0 bg-zinc-950/95 backdrop-blur-lg border-b border-white/10 z-40 md:hidden transition-all duration-300 ease-in-out transform origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-100 pointer-events-none'}`}>
                <div className="flex flex-col p-6 gap-5 text-sm uppercase tracking-widest font-bold pt-24 text-left">
                    <a href="#home" onClick={() => { setActiveSection('home'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'home' ? 'border-white text-white' : 'border-transparent text-zinc-400'}`}>Home</a>
                    <a href="#how-it-works" onClick={() => { setActiveSection('how-it-works'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'how-it-works' ? 'border-white text-white' : 'border-transparent text-zinc-400'}`}>How it works</a>
                    <a href="#curation" onClick={() => { setActiveSection('curation'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'curation' ? 'border-white text-white' : 'border-transparent text-zinc-400'}`}>Features</a>
                    <a href="#contact" onClick={() => { setActiveSection('concierge'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'concierge' ? 'border-white text-white' : 'border-transparent text-zinc-400'}`}>Contact</a>
                </div>
            </div>
        </>
    );
}