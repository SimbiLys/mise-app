import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
    return (
        <section id="home" className="w-full min-h-screen relative flex flex-col justify-center items-center overflow-hidden bg-zinc-950 text-white pt-24">

            {/* 1. IMMERSIVE COMPRESSED CANVAS BACKGROUND GRAPHIC FRAME */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/back.png"
                    alt="Luxury Glass Conservatory Dining Hall Layout"
                    className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>



            {/* 2. CHRONICLE CENTRAL TYPOGRAPHY STRUCTURE */}
            <div className="max-w-4xl w-full mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6 mt-auto mb-6">

                {/* Minimal Uppercase Tag Label */}
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/90 font-bold bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/5">
                    Reserve & Pre-Order
                </span>

                {/* Master Serif Display Typography Header Block */}
                <h1 className="text-4xl sm:text-6xl md:text-[68px] font-serif tracking-normal text-white leading-[1.12] max-w-3xl font-medium antialiased">
                    Your table is set <br />
                    Your dish is ready.
                </h1>

                {/* Supporting Editorial Body Description Descriptor */}
                <p className="text-white/80 text-xs sm:text-sm tracking-wide leading-relaxed font-light max-w-xl text-center mix-blend-plus-lighter antialiased">
                    Discover restaurants you'll love, reserve your table, and pre-order your meal before you even arrive. No more waiting on a packed Friday night, your first course lands the moment you sit down.
                </p>

                {/* 3. FLOATING COMPONENT ACTION INPUT CONSOLE CONTAINER PANEL */}
                <div className="w-full max-w-4xl bg-white text-zinc-900 rounded-3xl p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-12 items-center gap-4 mt-8 border border-zinc-200">

                    {/* Section A: Destination/Where Choice Field */}
                    <div className="md:col-span-4 flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-zinc-100 pb-3 md:pb-0 text-left">
                        <Icon icon="lucide:map-pin" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                        <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Where</span>
                            <input
                                type="text"
                                placeholder="City, cuisine or restaurant"
                                className="text-xs font-medium text-zinc-800 placeholder-zinc-400 focus:outline-none bg-transparent w-full mt-0.5"
                            />
                        </div>
                    </div>

                    {/* Section B: Calendar/When Choice Field */}
                    <div className="md:col-span-2 flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-zinc-100 pb-3 md:pb-0 text-left">
                        <Icon icon="lucide:calendar" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                        <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">When</span>
                            <span className="text-xs font-semibold text-zinc-800 mt-0.5 cursor-pointer">Tonight</span>
                        </div>
                    </div>

                    {/* Section C: Target Seating Time Selection Area */}
                    <div className="md:col-span-2 flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-zinc-100 pb-3 md:pb-0 text-left">
                        <Icon icon="lucide:clock" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                        <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Time</span>
                            <span className="text-xs font-semibold text-zinc-800 mt-0.5 cursor-pointer">7:30 PM</span>
                        </div>
                    </div>

                    {/* Section D: Party Volume Capacity Field */}
                    <div className="md:col-span-2 flex items-center gap-3 px-4 pb-2 md:pb-0 text-left">
                        <Icon icon="lucide:users" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                        <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Guests</span>
                            <span className="text-xs font-semibold text-zinc-800 mt-0.5 cursor-pointer">2 people</span>
                        </div>
                    </div>

                    {/* Form Processing Submit Button */}
                    <button className="md:col-span-2 bg-[#1C1B1A] hover:bg-zinc-800 text-white rounded-2xl h-14 font-medium text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md">
                        <Icon icon="lucide:search" className="w-3.5 h-3.5" /> Find a table
                    </button>
                </div>

            </div>

            {/* 4. LOWER BOUND CONTEXT TRUST COUNTER & PERFORMANCE CRITERIA BAR */}
            <div className="w-full max-w-7xl mx-auto px-12 mt-auto mb-8 relative z-20">
                <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-6 text-white/90">

                    {/* A. User Avatars and Happy Diners Tracker */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2.5 items-center">
                            <img className="w-7 h-7 rounded-full border-2 border-zinc-950 object-cover shadow-md" src="https://unsplash.com" alt="Marie" />
                            <img className="w-7 h-7 rounded-full border-2 border-zinc-950 object-cover shadow-md" src="https://unsplash.com" alt="David" />
                            <img className="w-7 h-7 rounded-full border-2 border-zinc-950 object-cover shadow-md" src="https://unsplash.com" alt="Elena" />
                            <img className="w-7 h-7 rounded-full border-2 border-zinc-950 object-cover shadow-md" src="https://unsplash.com" alt="Chloe" />
                            <div className="w-7 h-7 rounded-full border-2 border-zinc-950 bg-white text-black font-sans text-[8px] font-extrabold flex items-center justify-center shadow-md select-none">
                                +1.2k
                            </div>
                        </div>
                        <div className="text-left font-sans">
                            <span className="block text-[10px] font-medium leading-tight text-white/90">
                                Join 1,200+ happy diners
                            </span>
                            <span className="block text-[9px] text-white/50">
                                booking smarter every day
                            </span>
                        </div>
                    </div>

                    {/* Vertical Divider (Hidden on small screens) */}
                    <div className="hidden lg:block h-6 w-[1px] bg-white/10" />

                    {/* B. Top Restaurants Criterion */}
                    <div className="flex items-center gap-2 text-left">
                        <Icon icon="lucide:star" className="text-white/70 w-4 h-4 flex-shrink-0" />
                        <div className="font-sans">
                            <span className="block text-[10px] font-medium text-white/90">Top restaurants</span>
                            <span className="block text-[9px] text-white/50">hand-picked for you</span>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden lg:block h-6 w-[1px] bg-white/10" />

                    {/* C. Secure Booking Criterion */}
                    <div className="flex items-center gap-2 text-left">
                        <Icon icon="lucide:shield-check" className="text-white/70 w-4 h-4 flex-shrink-0" />
                        <div className="font-sans">
                            <span className="block text-[10px] font-medium text-white/90">Secure booking</span>
                            <span className="block text-[9px] text-white/50">safe & reliable</span>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden lg:block h-6 w-[1px] bg-white/10" />

                    {/* D. Real-Time Availability Criterion */}
                    <div className="flex items-center gap-2 text-left">
                        <Icon icon="lucide:clock" className="text-white/70 w-4 h-4 flex-shrink-0" />
                        <div className="font-sans">
                            <span className="block text-[10px] font-medium text-white/90">Real-time availability</span>
                            <span className="block text-[9px] text-white/50">live updates</span>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden lg:block h-6 w-[1px] bg-white/10" />

                    {/* E. 24/7 Support Criterion */}
                    <div className="flex items-center gap-2 text-left">
                        <Icon icon="lucide:headphones" className="text-white/70 w-4 h-4 flex-shrink-0" />
                        <div className="font-sans">
                            <span className="block text-[10px] font-medium text-white/90">24/7 support</span>
                            <span className="block text-[9px] text-white/50">we're here</span>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    );
}
