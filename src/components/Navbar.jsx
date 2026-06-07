import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Navbar() {
    // State to track which page/section is active
    const [activeSection, setActiveSection] = useState('home');

    // State to track the User View Mode ('diners' vs 'restaurants')
    const [viewMode, setViewMode] = useState('diners');

    // State to control mobile navigation drawer open/close
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Smooth scroll and state updater function
    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false); // Close mobile drawer on selection

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 z-50 border-b border-white/5">

                {/* Brand Identity Branding Logo */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
                    <span className="text-xl font-serif tracking-[0.25em] uppercase font-bold text-white">Mise</span>
                </div>

                {/* Centered Navigation Pipeline Paths (Desktop View) */}
                <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium">
                    <button
                        onClick={() => handleNavClick('home')}
                        className={`transition-colors py-2 relative ${activeSection === 'home' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                    >
                        Home
                        {activeSection === 'home' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white animate-fade-in" />}
                    </button>
                    <button
                        onClick={() => handleNavClick('how-it-works')}
                        className={`transition-colors py-2 relative ${activeSection === 'how-it-works' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                    >
                        How it works
                    </button>
                    <button
                        onClick={() => handleNavClick('curation')}
                        className={`transition-colors py-2 relative ${activeSection === 'curation' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                    >
                        Features
                    </button>
                    <button
                        onClick={() => handleNavClick('concierge')}
                        className={`transition-colors py-2 relative ${activeSection === 'concierge' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                    >
                        Contact
                    </button>
                </div>

                {/* Right Actions & Pill Panel Controllers */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Navigation Action Icons - Hidden on small mobile screens to prevent crowding */}
                    <div className="hidden sm:flex items-center gap-4 text-white/80">
                        <button className="hover:text-white transition-colors"><Icon icon="lucide:search" className="w-4.5 h-4.5" /></button>
                        <button className="hover:text-white transition-colors"><Icon icon="lucide:heart" className="w-4.5 h-4.5" /></button>
                        <button className="hover:text-white transition-colors"><Icon icon="lucide:user" className="w-4.5 h-4.5" /></button>
                    </div>

                    {/* Dynamic Client/Partner Toggles with Sliding/Switching Logic */}
                    <div className="flex items-center p-0.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[11px] uppercase tracking-wider font-semibold relative overflow-hidden">
                        <button
                            onClick={() => setViewMode('restaurants')}
                            className={`px-3.5 py-2 rounded-full transition-all duration-300 relative z-10 ${viewMode === 'restaurants' ? 'bg-white text-black shadow-sm' : 'text-white/60 hover:text-white'
                                }`}
                        >
                            For restaurants
                        </button>
                        <button
                            onClick={() => setViewMode('diners')}
                            className={`px-3.5 py-2 rounded-full transition-all duration-300 relative z-10 ${viewMode === 'diners' ? 'bg-white text-black shadow-sm' : 'text-white/60 hover:text-white'
                                }`}
                        >
                            For diners
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu Toggle Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex md:hidden text-white/80 hover:text-white transition-colors p-1"
                        aria-label="Toggle Navigation Menu"
                    >
                        <Icon icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Drawer Overlay Panels */}
            <div className={`fixed inset-x-0 top-20 bg-zinc-950/95 backdrop-blur-lg border-b border-white/10 z-40 md:hidden transition-all duration-300 ease-in-out transform origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                }`}>
                <div className="flex flex-col p-6 gap-5 text-sm uppercase tracking-widest font-medium">
                    <button
                        onClick={() => handleNavClick('home')}
                        className={`text-left py-2 ${activeSection === 'home' ? 'text-white font-bold pl-2 border-l-2 border-white' : 'text-white/60'}`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleNavClick('how-it-works')}
                        className={`text-left py-2 ${activeSection === 'how-it-works' ? 'text-white font-bold pl-2 border-l-2 border-white' : 'text-white/60'}`}
                    >
                        How it works
                    </button>
                    <button
                        onClick={() => handleNavClick('curation')}
                        className={`text-left py-2 ${activeSection === 'curation' ? 'text-white font-bold pl-2 border-l-2 border-white' : 'text-white/60'}`}
                    >
                        Features
                    </button>
                    <button
                        onClick={() => handleNavClick('concierge')}
                        className={`text-left py-2 ${activeSection === 'concierge' ? 'text-white font-bold pl-2 border-l-2 border-white' : 'text-white/60'}`}
                    >
                        Contact
                    </button>

                    <hr className="border-white/10 my-1" />

                    {/* Quick Access Mobile Action Panel Links */}
                    <div className="flex items-center gap-6 text-white/60 py-2 justify-center">
                        <button className="hover:text-white"><Icon icon="lucide:search" className="w-5 h-5" /></button>
                        <button className="hover:text-white"><Icon icon="lucide:heart" className="w-5 h-5" /></button>
                        <button className="hover:text-white"><Icon icon="lucide:user" className="w-5 h-5" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}