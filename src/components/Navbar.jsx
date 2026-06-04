import React from 'react';

export default function Navbar() {
    return (
        <nav className="w-full h-24 border-b border-white/10 flex items-center justify-between px-12 bg-black text-white sticky top-0 z-50 shadow-sm">
            <div className="flex items-center gap-3">
                <span className="text-xl font-serif tracking-[0.3em] uppercase text-white font-bold">Mise</span>
            </div>

            <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em] text-white/60 font-semibold">
                <a href="#home" className="text-white border-b-2 border-white pb-1">The Experience</a>
                <a href="#curation" className="hover:text-white transition-colors">The Curation</a>
                <a href="#reserve" className="hover:text-white transition-colors">Reservations</a>
                <a href="#concierge" className="hover:text-white transition-colors">Concierge Desk</a>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-[10px] uppercase tracking-widest text-white/70 hover:text-white font-semibold">Sign In</button>
                <button className="bg-white text-black text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-zinc-200 transition-all duration-500 font-medium">
                    Reserve Table
                </button>
            </div>
        </nav>
    );
}
