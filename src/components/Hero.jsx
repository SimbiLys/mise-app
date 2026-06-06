import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
    return (
        <section id="home" className="w-full min-h-screen relative flex flex-col justify-between items-center overflow-hidden bg-zinc-950 text-white pt-20 pb-6">

            {/* 1. IMMERSIVE COMPRESSED CANVAS BACKGROUND GRAPHIC FRAME */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/back.png"
                    alt="Luxury Glass Conservatory Dining Hall Layout"
                    className="w-full h-full object-cover filter brightness-[1.00] contrast-[1.00]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            {/* 2. CHRONICLE CENTRAL TYPOGRAPHY STRUCTURE */}
            <div className="max-w-4xl w-full mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-5 my-auto pb-24">
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/90 font-bold bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/5">
                    Reserve & Pre-Order
                </span>

                <h1 className="text-4xl sm:text-6xl md:text-[62px] font-serif tracking-normal text-white leading-[1.12] max-w-3xl font-medium antialiased">
                    Your table is set <br />
                    Your dish is ready.
                </h1>

                <p className="text-white/80 text-xs tracking-wide leading-relaxed font-light max-w-xl text-center mix-blend-plus-lighter antialiased">
                    Discover restaurants you'll love, reserve your table, and pre-order your meal before you even arrive. No more waiting on a packed Friday night, your first course lands the moment you sit down.
                </p>
            </div>

            {/* 3 & 4. COMBINED TRANSPARENT BACKGROUND BLUR MARQUEE CAROUSEL BAR */}
            {/* 👇 "absolute bottom-0 left-0" FORCES IT TO THE BOTTOM PERFECTLY */}
            <div className="w-full absolute bottom-0 left-0 z-20 overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-xl h-24 flex items-center shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">

                {/* Infinite Moving Content Loop Ticker Line */}
                <div className="flex w-[200%] items-center animate-marquee hover:pause-marquee gap-16 whitespace-nowrap">

                    {/* 🔄 CAROUSEL SECTION GROUP 1 */}
                    <div className="flex items-center justify-around w-full gap-16 text-[11px] uppercase tracking-wider text-white font-medium">

                        {/* Where Field */}
                        <div className="flex items-center gap-3 text-left min-w-[200px]">
                            <Icon icon="lucide:map-pin" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold">Where: <span className="font-normal text-white/70">City, cuisine or bistro</span></span>
                            </div>
                        </div>

                        {/* When Field */}
                        <div className="flex items-center gap-3 text-left min-w-[120px]">
                            <Icon icon="lucide:calendar" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold">When: <span className="font-normal text-white/70">Tonight</span></span>
                        </div>

                        {/* Time Field */}
                        <div className="flex items-center gap-3 text-left min-w-[120px]">
                            <Icon icon="lucide:clock" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold">Time: <span className="font-normal text-white/70">7:30 PM</span></span>
                        </div>

                        {/* Guests Field */}
                        <div className="flex items-center gap-3 text-left min-w-[120px]">
                            <Icon icon="lucide:users" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold">Guests: <span className="font-normal text-white/70">2 people</span></span>
                        </div>

                        {/* Silhouette Avatars Row */}
                        <div className="flex items-center gap-3 min-w-[240px]">
                            <div className="flex -space-x-2 items-center">
                                <div className="w-5 h-5 rounded-full border border-zinc-800 bg-zinc-700 flex items-center justify-center text-zinc-300"><Icon icon="lucide:user" className="w-2.5 h-2.5" /></div>
                                <div className="w-5 h-5 rounded-full border border-zinc-800 bg-zinc-600 flex items-center justify-center text-zinc-200"><Icon icon="lucide:user" className="w-2.5 h-2.5" /></div>
                                <div className="w-5 h-5 rounded-full border border-zinc-800 bg-zinc-500 flex items-center justify-center text-zinc-100"><Icon icon="lucide:user" className="w-2.5 h-2.5" /></div>
                            </div>
                            <span className="font-bold text-white">Join 1,200+ happy diners</span>
                        </div>

                        {/* Top Restaurants Metric Indicator */}
                        <div className="flex items-center gap-2.5 text-left min-w-[180px]">
                            <Icon icon="lucide:star" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold text-white">Top restaurants curation</span>
                        </div>

                        {/* Secure Booking Metric Indicator */}
                        <div className="flex items-center gap-2.5 text-left min-w-[180px]">
                            <Icon icon="lucide:shield-check" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold text-white">Secure & reliable booking</span>
                        </div>
                    </div>

                    {/* 🔄 CAROUSEL SECTION GROUP 2 */}
                    <div className="flex items-center justify-around w-full gap-16 text-[11px] uppercase tracking-wider text-white font-medium">
                        <div className="flex items-center gap-3 text-left min-w-[200px]">
                            <Icon icon="lucide:map-pin" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold">Where: <span className="font-normal text-white/70">City, cuisine or bistro</span></span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-left min-w-[120px]">
                            <Icon icon="lucide:calendar" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold">When: <span className="font-normal text-white/70">Tonight</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-left min-w-[120px]">
                            <Icon icon="lucide:clock" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold">Time: <span className="font-normal text-white/70">7:30 PM</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-left min-w-[120px]">
                            <Icon icon="lucide:users" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold">Guests: <span className="font-normal text-white/70">2 people</span></span>
                        </div>
                        <div className="flex items-center gap-3 min-w-[240px]">
                            <div className="flex -space-x-2 items-center">
                                <div className="w-5 h-5 rounded-full border border-zinc-800 bg-zinc-700 flex items-center justify-center text-zinc-300"><Icon icon="lucide:user" className="w-2.5 h-2.5" /></div>
                                <div className="w-5 h-5 rounded-full border border-zinc-800 bg-zinc-600 flex items-center justify-center text-zinc-200"><Icon icon="lucide:user" className="w-2.5 h-2.5" /></div>
                                <div className="w-5 h-5 rounded-full border border-zinc-800 bg-zinc-500 flex items-center justify-center text-zinc-100"><Icon icon="lucide:user" className="w-2.5 h-2.5" /></div>
                            </div>
                            <span className="font-bold text-white">Join 1,200+ happy diners</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-left min-w-[180px]">
                            <Icon icon="lucide:star" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold text-white">Top restaurants curation</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-left min-w-[180px]">
                            <Icon icon="lucide:shield-check" className="text-white/60 w-4 h-4 flex-shrink-0" />
                            <span className="font-bold text-white">Secure & reliable booking</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
