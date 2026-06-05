import React from 'react';
import { Icon } from '@iconify/react';

export default function Navbar() {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-12 bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 z-50 border-b border-white/5">
            {/* Brand Identity Branding Logo */}
            <div className="flex items-center gap-2">
                <span className="text-lg font-serif tracking-[0.25em] uppercase font-bold text-white">Mise</span>
            </div>

            {/* Centered Navigation Pipeline Paths */}
            <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
                <a href="#curation" className="hover:text-white transition-colors">Features</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#concierge" className="hover:text-white transition-colors">Contact</a>
            </div>

            {/* Right Actions & Pill Panel Controllers */}
            <div className="flex items-center gap-6">
                {/* Navigation Action Icons */}
                <div className="flex items-center gap-4 text-white/80">
                    <button className="hover:text-white transition-colors"><Icon icon="lucide:search" className="w-3.5 h-3.5" /></button>
                    <button className="hover:text-white transition-colors"><Icon icon="lucide:heart" className="w-3.5 h-3.5" /></button>
                    <button className="hover:text-white transition-colors"><Icon icon="lucide:user" className="w-3.5 h-3.5" /></button>
                </div>

                {/* Dynamic Client/Partner Toggles */}
                <div className="flex items-center gap-0.5 bg-black/40 backdrop-blur-md p-0.5 rounded-full border border-white/10 text-[9px] uppercase tracking-wider font-semibold">
                    <button className="px-3 py-1.5 text-white/60 hover:text-white transition-colors">For restaurants</button>
                    <button className="bg-white text-black px-3 py-1.5 rounded-full shadow-sm">For diners</button>
                </div>
            </div>
        </nav>
    );
}
