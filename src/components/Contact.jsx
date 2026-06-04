import React from 'react';
import { Icon } from '@iconify/react';

export default function Contact() {
    return (
        <section id="concierge" className="w-full bg-[#F9F8F6] text-[#1C1B1A] py-28 px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Column 1: Info */}
            <div className="lg:col-span-4 space-y-6">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#2C4A3E] block font-bold">The Concierge Desk</span>
                <h2 className="text-4xl font-serif text-[#1C1B1A]">Connect With Us</h2>
                <p className="text-xs text-black/40 font-light leading-relaxed tracking-wide">
                    Our specialized table alignment desks remain available to coordinate private dining sectors, luxury banquets, or corporate culinary accounts.
                </p>
            </div>

            {/* Column 2: Minimalist Input Fields Form */}
            <div className="lg:col-span-5 bg-white border border-black/5 p-8 space-y-6 shadow-md">
                <div className="border-b border-black/10 pb-2 focus-within:border-[#2C4A3E] transition-colors">
                    <label className="block text-[8px] uppercase tracking-[0.2em] text-black/40 mb-1 font-bold">Full Identity</label>
                    <input type="text" placeholder="Your name and honorific" className="w-full text-xs bg-transparent text-[#1C1B1A] placeholder-black/20 focus:outline-none" />
                </div>
                <div className="border-b border-black/10 pb-2 focus-within:border-[#2C4A3E] transition-colors">
                    <label className="block text-[8px] uppercase tracking-[0.2em] text-black/40 mb-1 font-bold">Digital Contact Coordinates</label>

                </div>
                <div className="border-b border-black/10 pb-4 focus-within:border-[#2C4A3E] transition-colors">
                    <label className="block text-[8px] uppercase tracking-[0.2em] text-black/40 mb-1 font-bold">Chamber & Curation Notes</label>
                    <textarea rows="3" placeholder="Detail dietary conditions, vault specs, or timing parameters..." className="w-full text-xs bg-transparent text-[#1C1B1A] placeholder-black/20 focus:outline-none resize-none" />
                </div>
                <button className="w-full bg-[#1C1B1A] text-white text-[9px] font-bold py-4 uppercase tracking-[0.25em] hover:bg-[#2C4A3E] transition-colors duration-500">
                    Submit Concierge Query
                </button>
            </div>

            {/* Column 3: Custom Architectural Contact Desk Detail Layout */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-8">
                <div className="space-y-4 text-xs font-light text-black/60">
                    <div className="flex items-center gap-3 p-3 border border-black/5 bg-white shadow-sm">
                        <Icon icon="lucide:mail" className="text-[#2C4A3E] w-4 h-4" />
                        <div>
                            <span className="block text-[8px] uppercase tracking-widest text-black/30 font-bold">Direct Desk</span>
                            <span className="text-[11px] text-zinc-800 font-medium">concierge@mise.app</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-black/5 bg-white shadow-sm">
                        <Icon icon="lucide:phone" className="text-[#2C4A3E] w-4 h-4" />
                        <div>
                            <span className="block text-[8px] uppercase tracking-widest text-black/30 font-bold">Secure Line</span>
                            <span className="text-[11px] text-zinc-800 font-medium">+250 788 000 000</span>
                        </div>
                    </div>
                </div>

                {/* Minimal Blueprint Vector Mini Map Overlay */}
                <div className="bg-white border border-black/5 h-44 p-4 flex flex-col justify-between relative overflow-hidden shadow-sm">
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                    <div className="space-y-1 relative z-10">
                        <div className="text-[9px] uppercase tracking-widest text-[#2C4A3E] font-bold">Mise Atelier HQ</div>
                        <div className="text-[11px] font-serif text-zinc-800 font-bold">Nyabihu District, Rwanda</div>
                    </div>
                    <button className="border border-black/10 text-black text-[9px] uppercase tracking-widest px-4 py-2 bg-transparent hover:bg-[#2C4A3E] hover:text-white transition-all self-start relative z-10 font-semibold">
                        Locate HQ
                    </button>
                </div>
            </div>
        </section>
    );
}
