import React from 'react';
import { Icon } from '@iconify/react';

export default function Navbar() {
    return (
        // Increased height slightly from h-16 to h-20 to cleanly accommodate larger text elements
        <nav className="w-full h-20 flex items-center justify-between px-12 bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 z-50 border-b border-white/5">
            {/* Brand Identity Branding Logo */}
            <div className="flex items-center gap-2">
                {/* Increased brand logo font size from text-lg to text-xl */}
                <span className="text-xl font-serif tracking-[0.25em] uppercase font-bold text-white">Mise</span>
            </div>

            {/* Centered Navigation Pipeline Paths */}
            {/* Increased text sizing from tiny text-[10px] to a clean text-xs (12px), changed from lowercase to uppercase to give it a premium feel */}
            <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
                <a href="#curation" className="hover:text-white transition-colors">Features</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#concierge" className="hover:text-white transition-colors">Contact</a>
            </div>

            {/* Right Actions & Pill Panel Controllers */}
            <div className="flex items-center gap-6">
                {/* Navigation Action Icons */}
                {/* Increased icon sizing from w-3.5 h-3.5 to w-4.5 h-4.5 */}
                <div className="flex items-center gap-4 text-white/80">
                    <button className="hover:text-white transition-colors"><Icon icon="lucide:search" className="w-4.5 h-4.5" /></button>
                    <button className="hover:text-white transition-colors"><Icon icon="lucide:heart" className="w-4.5 h-4.5" /></button>
                    <button className="hover:text-white transition-colors"><Icon icon="lucide:user" className="w-4.5 h-4.5" /></button>
                </div>

                {/* Dynamic Client/Partner Toggles */}
                {/* Increased toggle button text size from text-[9px] to text-[11px] */}
                <div className="flex items-center gap-0.5 bg-black/40 backdrop-blur-md p-0.5 rounded-full border border-white/10 text-[11px] uppercase tracking-wider font-semibold">
                    <button className="px-3.5 py-2 text-white/60 hover:text-white transition-colors">For restaurants</button>
                    <button className="bg-white text-black px-3.5 py-2 rounded-full shadow-sm">For diners</button>
                </div>
            </div>
        </nav>
    );
}