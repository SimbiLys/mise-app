import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
    return (
        <section id="home" className="w-full min-h-screen relative flex flex-col justify-between items-center overflow-hidden bg-zinc-950 text-white pt-20">

            {/* 1. IMMERSIVE COMPRESSED CANVAS BACKGROUND GRAPHIC FRAME */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/back.jpg"
                    alt="Luxury Glass Conservatory Dining Hall Layout"
                    className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            {/* 2. CHRONICLE CENTRAL TYPOGRAPHY STRUCTURE */}
            <div className="max-w-4xl w-full mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-5 mt-auto mb-4">

                <span className="text-[9px] uppercase tracking-[0.4em] text-white/90 font-bold bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/5">
                    Reserve & Pre-Order
                </span>

                <h1 className="text-4xl sm:text-6xl md:text-[62px] font-serif tracking-normal text-white leading-[1.12] max-w-3xl font-medium antialiased">
                    Your table is set. <br />
                    Your dish is ready.
                </h1>

                <p className="text-white/80 text-xs tracking-wide leading-relaxed font-light max-w-xl text-center mix-blend-plus-lighter antialiased">
                    Discover restaurants you'll love, reserve your table, and pre-order your meal before you even arrive. No more waiting on a packed Friday night — your first course lands the moment you sit down.
                </p>

                {/* 3. HIGH-INTERACTIVE FLOATING WHITE CONSOLE PANEL */}
                <div className="w-full max-w-4xl bg-white text-zinc-900 rounded-3xl p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-12 items-center gap-2 mt-6 border border-zinc-200/80 transition-all duration-300 hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.6)]">

                    {/* Where Input Section with active focus states */}
                    <div className="md:col-span-4 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-zinc-100 text-left group">
                        <Icon icon="lucide:map-pin" className="text-zinc-400 group-hover:text-zinc-600 transition-colors w-4 h-4 flex-shrink-0" />
                        <div className="flex flex-col w-full">
                            <span className="text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Where</span>
                            <input
                                type="text"
                                placeholder="City, cuisine or restaurant"
                                className="text-xs font-semibold text-zinc-800 placeholder-zinc-400 focus:outline-none bg-transparent w-full mt-0.5"
                            />
                        </div>
                    </div>

                    {/* When Option Field */}
                    <div className="md:col-span-2 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-zinc-100 text-left hover:bg-zinc-50/50 cursor-pointer transition-colors rounded-xl">
                        <Icon icon="lucide:calendar" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-zinc-400 font-bold">When</span>
                            <span className="text-xs font-bold text-zinc-800 mt-0.5">Tonight</span>
                        </div>
                    </div>

                    {/* Time Option Field */}
                    <div className="md:col-span-2 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-zinc-100 text-left hover:bg-zinc-50/50 cursor-pointer transition-colors rounded-xl">
                        <Icon icon="lucide:clock" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Time</span>
                            <span className="text-xs font-bold text-zinc-800 mt-0.5">7:30 PM</span>
                        </div>
                    </div>

                    {/* Guests Option Field */}
                    <div className="md:col-span-2 flex items-center gap-3 px-4 py-2 text-left hover:bg-zinc-50/50 cursor-pointer transition-colors rounded-xl">
                        <Icon icon="lucide:users" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Guests</span>
                            <span className="text-xs font-bold text-zinc-800 mt-0.5">2 people</span>
                        </div>
                    </div>

                    {/* Action Call Button */}
                    <button className="md:col-span-2 bg-[#1C1B1A] hover:bg-zinc-800 text-white rounded-2xl h-12 font-semibold text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-[0.98]">
                        <Icon icon="lucide:search" className="w-3.5 h-3.5" /> Find a table
                    </button>
                </div>

            </div>

            {/* 4. LOWER BOUND CONTEXT TRUST CRITERIA FOOTER BAR */}
            <div className="w-full max-w-7xl mx-auto px-12 mt-auto mb-6 relative z-20">
                <div className="w-full bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-4 text-white/90">

                    {/* BULLETPROOF VECTOR SILHOUETTE AVATARS LAYER */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2.5 items-center">
                            <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-700 flex items-center justify-center text-zinc-300"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                            <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-600 flex items-center justify-center text-zinc-200"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                            <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-500 flex items-center justify-center text-zinc-100"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                            <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-400 flex items-center justify-center text-zinc-50"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                            <div className="w-6 h-6 rounded-full border border-zinc-800 bg-white text-black font-sans text-[8px] font-extrabold flex items-center justify-center select-none shadow-sm">
                                +1.2k
                            </div>
                        </div>
                        <div className="text-left font-sans">
                            <span className="block text-[10px] font-medium leading-tight text-white/90">Join 1,200+ happy diners</span>
                            <span className="block text-[8px] text-white/50 tracking-wide">booking smarter every day</span>
                        </div>
                    </div>

                    <div className="hidden lg:block h-5 w-[1px] bg-white/10" />

                    {/* Criteria Elements */}
                    <div className="flex items-center gap-2 text-left">
                        <Icon icon="lucide:star" className="text-white/60 w-3.5 h-3.5 flex-shrink-0" />
                        <div className="font-sans">
                            <span className="block text-[10px] font-medium text-white/90">Top restaurants</span>
                            <span className="block text-[8px] text-white/50">hand-picked for you</span>
                        </div>
                    </div>

                    <div className="hidden lg:block h-5 w-[1px] bg-white/10" />

                    <div className="flex items-center gap-2 text-left">
                        <Icon icon="lucide:shield-check" className="text-white/60 w-3.5 h-3.5 flex-shrink-0" />
                        <div className="font-sans">
                            <span className="block text-[10px] font-medium text-white/90">Secure booking</span>
                            <span className="block text-[8px] text-white/50">safe & reliable</span>
                        </div>
                    </div>

                    <div className="hidden lg:block h-5 w-[1px] bg-white/10" />

                    <div className="flex items-center gap-2 text-left">
                        <Icon icon="lucide:clock" className="text-white/60 w-3.5 h-3.5 flex-shrink-0" />
                        <div className="font-sans">
                            <span className="block text-[10px] font-medium text-white/90">Real-time availability</span>
                            <span className="block text-[8px] text-white/50">live updates</span>
                        </div>
                    </div>

                    <div className="hidden lg:block h-5 w-[1px] bg-white/10" />

                    <div className="flex items-center gap-2 text-left">
                        <Icon icon="lucide:headphones" className="text-white/60 w-3.5 h-3.5 flex-shrink-0" />
                        <div className="font-sans">
                            <span className="block text-[10px] font-medium text-white/90">24/7 support</span>
                            <span className="block text-[8px] text-white/50">we're here</span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
