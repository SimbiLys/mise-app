import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
    const [role, setRole] = useState('guest');

    return (
        <section id="home" className="w-full min-h-[92vh] relative flex flex-col justify-between overflow-hidden bg-black text-white border-b border-white/10">

            {/* IMMERSIVE FULL-BLEED BACKGROUND ASSET */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-dining.jpg"
                    alt="Luxury Immersive Fine Dining Atmosphere"
                    className="w-full h-full object-cover opacity-60 transform scale-100 filter brightness-[0.45] contrast-[1.05]"
                />
                {/* Premium Ambient Vignette Overlay to preserve white text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />
            </div>

            {/* ARCHITECTURAL SLIT GRID LINES (Exactly matching your luxury layout blueprint) */}
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 pointer-events-none z-10 opacity-25">
                <div className="lg:col-span-7 border-r border-white/30 h-full" />
                <div className="lg:col-span-5 h-full" />
            </div>

            {/* MAIN HERO TEXT CONTENT CONTAINER LAYER */}
            <div className="max-w-7xl w-full mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 py-16 my-auto">

                {/* Left Column Content Layout */}
                <div className="lg:col-span-7 space-y-8 max-w-2xl">

                    {/* Minimal Elegant Pill Toggle Switch */}
                    <div className="inline-flex border border-white/20 p-0.5 bg-black/40 backdrop-blur-md shadow-lg">
                        <button
                            onClick={() => setRole('guest')}
                            className={`px-6 py-2 text-[9px] uppercase tracking-[0.25em] transition-all duration-500 font-semibold ${role === 'guest' ? 'bg-white text-black' : 'text-white/50 hover:text-white'
                                }`}
                        >
                            Private Diner
                        </button>
                        <button
                            onClick={() => setRole('maitre')}
                            className={`px-6 py-2 text-[9px] uppercase tracking-[0.25em] transition-all duration-500 font-semibold ${role === 'maitre' ? 'bg-white text-black' : 'text-white/50 hover:text-white'
                                }`}
                        >
                            Maitre D' Desk
                        </button>
                    </div>

                    {/* Premium Crisp White Typography Headings */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-serif tracking-wide text-white leading-[1.08]">
                            Unlock Your <br />
                            <span className="italic font-light text-white/90">Best Dining Seats</span>
                        </h1>
                    </div>

                    {/* Elegant Small Text Details Overlay */}
                    <p className="text-white/60 text-xs tracking-widest leading-relaxed font-light max-w-md antialiased">
                        Welcome to Mise—a luxury restaurant concierge infrastructure offering an unparalleled layout of gastronomy, elegance, and tailored personalized table curation. Skip standard wait delays entirely.
                    </p>

                    {/* Action Blocks Row */}
                    <div className="flex flex-wrap items-center gap-6 pt-4">
                        <button className="bg-white text-black px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-zinc-200 transition-all duration-500 shadow-xl">
                            Book Now —
                        </button>

                        {/* Cinematic Floating Media Card (Mirrors the reference screenshot perfectly) */}
                        <div className="flex items-center gap-4 bg-black/40 border border-white/10 p-2 pr-6 shadow-2xl backdrop-blur-md cursor-pointer hover:border-white/30 transition-all group">
                            <div className="w-14 h-10 bg-zinc-800 relative overflow-hidden border border-white/5">
                                <img src="/chef-plating.jpg" alt="Plating masterclass preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <Icon icon="lucide:play" className="text-white w-3 h-3 fill-white" />
                                </div>
                            </div>
                            <div>
                                <span className="block text-[9px] uppercase tracking-[0.2em] text-white font-bold">Watch A Video</span>
                                <span className="block text-[8px] tracking-wider text-white/40 uppercase mt-0.5">About Us</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column Layout: Keeps the structural spacing of the screenshot open */}
                <div className="lg:col-span-5 relative hidden lg:flex flex-col justify-end items-end min-h-[400px] pointer-events-none">
                    {/* Subtle Corner Context Spec Label */}
                    <div className="border border-white/10 bg-black/30 backdrop-blur-sm p-4 text-right max-w-[180px]">
                        <span className="block text-[8px] uppercase tracking-[0.2em] text-white/40">Current Portals</span>
                        <span className="text-sm font-serif text-white block mt-0.5">12 Private Vaults Active</span>
                    </div>
                </div>
            </div>

            {/* HORIZONTAL CONCIERGE LOOKUP BAR (Anchored perfectly at the base of your hero viewport) */}
            <div className="w-full bg-black/60 backdrop-blur-xl border-t border-white/10 py-6 relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
                <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-left items-center">
                    <div className="border-r border-white/10 pr-2">
                        <span className="block text-[8px] uppercase tracking-[0.2em] text-white/40 mb-1 font-medium">Cuisine Style</span>
                        <span className="text-xs font-serif font-bold text-white flex items-center gap-1.5 tracking-wide">Modern French <Icon icon="lucide:chevron-down" className="text-white/40 w-3 h-3" /></span>
                    </div>
                    <div className="border-r border-white/10 pr-2">
                        <span className="block text-[8px] uppercase tracking-[0.2em] text-white/40 mb-1 font-medium">Calendar Horizon</span>
                        <span className="text-xs font-serif font-bold text-white tracking-wide">Tonight, June 4</span>
                    </div>
                    <div className="border-r border-white/10 pr-2">
                        <span className="block text-[8px] uppercase tracking-[0.2em] text-white/40 mb-1 font-medium">Time Window</span>
                        <span className="text-xs font-serif font-bold text-white tracking-wide">20:30 Counter</span>
                    </div>
                    <div>
                        <span className="block text-[8px] uppercase tracking-[0.2em] text-white/40 mb-1 font-medium">Volume</span>
                        <span className="text-xs font-serif font-bold text-white tracking-wide">02 Connoisseurs</span>
                    </div>
                    <button className="col-span-2 md:col-span-1 bg-white text-black h-12 text-[9px] uppercase tracking-[0.25em] font-bold hover:bg-zinc-200 transition-colors duration-500 shadow-md">
                        Search Ateliers
                    </button>
                </div>
            </div>
        </section>
    );
}
