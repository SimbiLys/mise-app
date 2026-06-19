import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
    return (
        <section id="home" className="w-full min-h-screen relative flex flex-col justify-between items-center overflow-hidden bg-zinc-950 text-white pt-20 pb-6">

            {/* 1. ORIGINAL UNFILTERED BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/back.png"
                    alt="Luxury Glass Conservatory Dining Hall Layout"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            </div>

            {/* 2. ORIGINAL IMMERSIVE WHITE EDITORIAL TYPOGRAPHY */}
            <div className="max-w-5xl w-full mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-8 my-auto pb-24">
                <span className="text-xs uppercase tracking-[0.4em] text-white font-bold bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20">
                    Reserve & Pre-Order
                </span>

                <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif tracking-tight text-white leading-[1.08] max-w-5xl font-medium antialiased drop-shadow-sm">
                    Your table is set <br />
                    <span className="font-normal italic text-zinc-300">Your dish is ready.</span>
                </h1>

                <p className="text-zinc-200 text-lg sm:text-xl md:text-2xl tracking-normal leading-relaxed font-light max-w-4xl text-center antialiased max-w-3xl">
                    Discover restaurants you'll love, reserve your table, and pre-order your meal before you even arrive. No more waiting on a packed Friday night, your first course lands the moment you sit down.
                </p>
            </div>

            {/* 3. ORIGINAL BLACK TRANSPARENT CAROUSEL TICKER BAR */}
            <div className="w-full absolute bottom-0 left-0 z-20 overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-md h-24 flex items-center">

                {/* Infinite Moving Content Loop Ticker Line */}
                <div className="flex w-[200%] items-center animate-marquee hover:pause-marquee gap-16 whitespace-nowrap text-xs uppercase tracking-widest text-zinc-300 font-bold">

                    {/* 🔄 CAROUSEL RUN 1 */}
                    <div className="flex items-center justify-around w-full gap-16">

                        {/* When Field */}
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:calendar" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">When: <span className="font-normal text-zinc-400">Tonight</span></span>
                        </div>

                        {/* Time Field */}
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:clock" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Time: <span className="font-normal text-zinc-400">7:30 PM</span></span>
                        </div>

                        {/* Guests Field */}
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:users" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Guests: <span className="font-normal text-zinc-400">2 people</span></span>
                        </div>

                        {/* Silhouette Avatars Row */}
                        <div className="flex items-center gap-3 min-w-[280px]">
                            <div className="flex -space-x-1.5 items-center">
                                <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-700 flex items-center justify-center text-zinc-300"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                                <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-600 flex items-center justify-center text-zinc-300"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                                <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-500 flex items-center justify-center text-zinc-300"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                            </div>
                            <span className="font-bold text-white">Join 1,200+ happy diners</span>
                        </div>

                        {/* Top Restaurants Metric Indicator */}
                        <div className="flex items-center gap-2.5 text-left min-w-[220px]">
                            <Icon icon="lucide:star" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Top restaurants curation</span>
                        </div>

                        {/* Secure Booking Metric Indicator */}
                        <div className="flex items-center gap-2.5 text-left min-w-[220px]">
                            <Icon icon="lucide:shadow-check" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Secure & reliable booking</span>
                        </div>

                        {/* Where Field */}
                        <div className="flex items-center gap-3 text-left min-w-[240px]">
                            <Icon icon="lucide:map-pin" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold">Where: <span className="font-normal text-zinc-400">City, cuisine or bistro</span></span>
                            </div>
                        </div>
                    </div>

                    {/* 🔄 CAROUSEL RUN 2 */}
                    <div className="flex items-center justify-around w-full gap-16">
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:calendar" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">When: <span className="font-normal text-zinc-400">Tonight</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:clock" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Time: <span className="font-normal text-zinc-400">7:30 PM</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:users" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Guests: <span className="font-normal text-zinc-400">2 people</span></span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}