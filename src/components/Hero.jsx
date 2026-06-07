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
            <div className="max-w-5xl w-full mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6 my-auto pb-24">
                {/* Increased badge font from text-[9px] to text-xs */}
                <span className="text-xs uppercase tracking-[0.4em] text-white/90 font-bold bg-black/30 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
                    Reserve & Pre-Order
                </span>

                {/* Increased heading scales across mobile, tablet, and desktop */}
                <h1 className="text-5xl sm:text-7xl md:text-[76px] font-serif tracking-normal text-white leading-[1.1] max-w-4xl font-medium antialiased">
                    Your table is set <br />
                    Your dish is ready.
                </h1>

                {/* Increased descriptive text from text-base (16px) to text-xl (20px) */}
                <p className="text-white/85 text-lg sm:text-xl tracking-wide leading-relaxed font-light max-w-4xl text-center mix-blend-plus-lighter antialiased">
                    Discover restaurants you'll love, reserve your table, and pre-order your meal before you even arrive. No more waiting on a packed Friday night, your first course lands the moment you sit down.
                </p>
            </div>

            {/* 3 & 4. COMBINED TRANSPARENT BACKGROUND BLUR MARQUEE CAROUSEL BAR */}
            <div className="w-full absolute bottom-0 left-0 z-20 overflow-hidden border-t border-white/10 bg-black/50 backdrop-blur-xl h-28 flex items-center shadow-[0_-10px_30px_rgba(0,0,0,0.4)]">

                {/* Infinite Moving Content Loop Ticker Line */}
                {/* Increased baseline text size from text-[11px] to text-sm (14px) */}
                <div className="flex w-[200%] items-center animate-marquee hover:pause-marquee gap-16 whitespace-nowrap text-sm uppercase tracking-wider text-white font-medium">

                    {/* 🔄 CAROUSEL SECTION GROUP 1 */}
                    <div className="flex items-center justify-around w-full gap-16">

                        {/* Where Field */}
                        <div className="flex items-center gap-3 text-left min-w-[240px]">
                            <Icon icon="lucide:map-pin" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold">Where: <span className="font-normal text-white/70">City, cuisine or bistro</span></span>
                            </div>
                        </div>

                        {/* When Field */}
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:calendar" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold">When: <span className="font-normal text-white/70">Tonight</span></span>
                        </div>

                        {/* Time Field */}
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:clock" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold">Time: <span className="font-normal text-white/70">7:30 PM</span></span>
                        </div>

                        {/* Guests Field */}
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:users" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold">Guests: <span className="font-normal text-white/70">2 people</span></span>
                        </div>

                        {/* Silhouette Avatars Row */}
                        <div className="flex items-center gap-3 min-w-[280px]">
                            <div className="flex -space-x-1.5 items-center">
                                <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-700 flex items-center justify-center text-zinc-300"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                                <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-600 flex items-center justify-center text-zinc-200"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                                <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-500 flex items-center justify-center text-zinc-100"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                            </div>
                            <span className="font-bold text-white">Join 1,200+ happy diners</span>
                        </div>

                        {/* Top Restaurants Metric Indicator */}
                        <div className="flex items-center gap-2.5 text-left min-w-[220px]">
                            <Icon icon="lucide:star" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Top restaurants curation</span>
                        </div>

                        {/* Secure Booking Metric Indicator */}
                        <div className="flex items-center gap-2.5 text-left min-w-[220px]">
                            <Icon icon="lucide:shield-check" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Secure & reliable booking</span>
                        </div>
                    </div>

                    {/* 🔄 CAROUSEL SECTION GROUP 2 */}
                    <div className="flex items-center justify-around w-full gap-16">
                        <div className="flex items-center gap-3 text-left min-w-[240px]">
                            <Icon icon="lucide:map-pin" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-white font-bold">Where: <span className="font-normal text-white/70">City, cuisine or bistro</span></span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:calendar" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold">When: <span className="font-normal text-white/70">Tonight</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:clock" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold">Time: <span className="font-normal text-white/70">7:30 PM</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-left min-w-[150px]">
                            <Icon icon="lucide:users" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold">Guests: <span className="font-normal text-white/70">2 people</span></span>
                        </div>
                        <div className="flex items-center gap-3 min-w-[280px]">
                            <div className="flex -space-x-1.5 items-center">
                                <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-700 flex items-center justify-center text-zinc-300"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                                <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-600 flex items-center justify-center text-zinc-200"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                                <div className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-500 flex items-center justify-center text-zinc-100"><Icon icon="lucide:user" className="w-3 h-3" /></div>
                            </div>
                            <span className="font-bold text-white">Join 1,200+ happy diners</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-left min-w-[220px]">
                            <Icon icon="lucide:star" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Top restaurants curation</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-left min-w-[220px]">
                            <Icon icon="lucide:shield-check" className="text-white/60 w-5 h-5 flex-shrink-0" />
                            <span className="font-bold text-white">Secure & reliable booking</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}