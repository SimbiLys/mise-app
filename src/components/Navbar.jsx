import React, { useState } from 'react';
import { Icon } from '@iconify/react';

// ⚠️ We pass { setView } inside the parameters to seamlessly connect our screens
export default function Navbar({ setView }) {
    // State to track which page/section is active
    const [activeSection, setActiveSection] = useState('home');

    // State to track the User View Mode ('diners' vs 'restaurants')
    const [viewMode, setViewMode] = useState('diners');

    // State to control mobile navigation drawer open/close
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 z-50 border-b border-white/5">

                {/* 1. Brand Identity Branding Logo */}
                <a
                    href="#home"
                    onClick={() => { setActiveSection('home'); setView('landing'); }}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <span className="text-xl font-serif tracking-[0.25em] uppercase font-bold text-white">Mise</span>
                </a>

                {/* 2. Centered Navigation Links (Desktop View) */}
                <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium">
                    {/* Home Link */}
                    <a
                        href="#home"
                        onClick={() => { setActiveSection('home'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'home' ? 'text-white font-semibold' : 'text-white/60 hover:text-white'}`}
                    >
                        Home
                        {activeSection === 'home' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white" />}
                    </a>

                    {/* How It Works Link */}
                    <a
                        href="#how-it-works"
                        onClick={() => { setActiveSection('how-it-works'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'how-it-works' ? 'text-white font-semibold' : 'text-white/60 hover:text-white'}`}
                    >
                        How it works
                        {activeSection === 'how-it-works' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white" />}
                    </a>

                    {/* Features Link */}
                    <a
                        href="#curation"
                        onClick={() => { setActiveSection('curation'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'curation' ? 'text-white font-semibold' : 'text-white/60 hover:text-white'}`}
                    >
                        Features
                        {activeSection === 'curation' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white" />}
                    </a>

                    {/* Contact Link */}
                    <a
                        href="#contact"
                        onClick={() => { setActiveSection('concierge'); setView('landing'); }}
                        className={`transition-colors py-2 relative ${activeSection === 'concierge' ? 'text-white font-semibold' : 'text-white/60 hover:text-white'}`}
                    >
                        Contact
                        {activeSection === 'concierge' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white" />}
                    </a>
                </div>

                {/* 3. Right Actions & Pill Panel Controllers */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Navigation Action Icons */}
                    <div className="hidden sm:flex items-center gap-4 text-white/60">
                        <button className="hover:text-white transition-colors"><Icon icon="lucide:search" className="w-4.5 h-4.5" /></button>
                        <button className="hover:text-white transition-colors"><Icon icon="lucide:heart" className="w-4.5 h-4.5" /></button>

                        {/* PROFILE USER BUTTON CLICK ROUTE ADDED HERE */}
                        <button onClick={() => setView('signin')} className="hover:text-white transition-colors cursor-pointer">
                            <Icon icon="lucide:user" className="w-4.5 h-4.5" />
                        </button>
                    </div>

                    {/* Dynamic Client/Partner Toggles */}
                    <div className="flex items-center gap-0.5 bg-black/40 backdrop-blur-md rounded-full p-0.5 border border-white/10 text-[11px] uppercase tracking-wider font-semibold relative overflow-hidden">
                        {/* For Restaurants Button */}
                        <button
                            onClick={() => { setViewMode('restaurants'); setView('signup'); }}
                            className={`px-3 py-2 rounded-full transition-all duration-300 relative z-10 ${viewMode === 'restaurants' ? 'bg-white text-black shadow-sm' : 'text-white/60 hover:text-white'}`}
                        >
                            For restaurants
                        </button>

                        {/* For Diners Button */}
                        <button
                            onClick={() => { setViewMode('diners'); setView('signin'); }}
                            className={`px-3 py-2 rounded-full transition-all duration-300 relative z-10 ${viewMode === 'diners' ? 'bg-white text-black shadow-sm' : 'text-white/60 hover:text-white'}`}
                        >
                            For diners
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu Toggle Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex md:hidden text-white/80 hover:text-white transition-colors p-1 z-50"
                        aria-label="Toggle Navigation Menu"
                    >
                        <Icon icon={isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'} className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* 4. Mobile Navigation Drawer Panel */}
            <div className={`fixed inset-x-0 top-0 bg-zinc-950/95 backdrop-blur-lg border-b border-white/10 z-40 md:hidden transition-all duration-300 ease-in-out transform origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-100 pointer-events-none'}`}>
                <div className="flex flex-col p-6 gap-5 text-sm uppercase tracking-widest font-medium pt-24 text-left">
                    <a href="#home" onClick={() => { setActiveSection('home'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'home' ? 'border-white text-white' : 'border-transparent text-white/60'}`}>Home</a>
                    <a href="#how-it-works" onClick={() => { setActiveSection('how-it-works'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'how-it-works' ? 'border-white text-white' : 'border-transparent text-white/60'}`}>How it works</a>
                    <a href="#curation" onClick={() => { setActiveSection('curation'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'curation' ? 'border-white text-white' : 'border-transparent text-white/60'}`}>Features</a>
                    <a href="#contact" onClick={() => { setActiveSection('concierge'); setView('landing'); setIsMobileMenuOpen(false); }} className={`text-left py-2 border-l-2 pl-2 ${activeSection === 'concierge' ? 'border-white text-white' : 'border-transparent text-white/60'}`}>Contact</a>

                    {/* Mobile Shortcut Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                        <button onClick={() => { setView('signin'); setIsMobileMenuOpen(false); }} className="bg-white/5 border border-white/10 text-white py-3 text-center text-xs tracking-wider uppercase font-semibold rounded-xl">Sign In</button>
                        <button onClick={() => { setView('signup'); setIsMobileMenuOpen(false); }} className="bg-white text-black py-3 text-center text-xs tracking-wider uppercase font-semibold rounded-xl">Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}
