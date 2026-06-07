import React from 'react';
import { Icon } from '@iconify/react';

export default function CtaSection() {
    return (
        <section id="get-started" className="w-full bg-zinc-950 text-white py-32 px-6 md:px-12 lg:px-16 border-t border-zinc-900 relative overflow-hidden">
            {/* Subtle background illumination layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-zinc-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">

                {/* 1. Header Elements: Extracted completely outside of the box */}
                <div className="w-full flex flex-col items-center text-center mb-12">
                    {/* Clean Minimalist Icon Frame */}
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                        <Icon icon="lucide:utensils" className="w-6 h-6" />
                    </div>

                    <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold block mb-3">
                        GET STARTED
                    </span>

                    <h2 className="text-4xl md:text-6xl font-serif tracking-normal font-medium antialiased text-white">
                        Ready to join <span className="italic text-zinc-300">Mise</span>?
                    </h2>
                </div>

                {/* 2. Expanded Action Container Box (Increased width and padding layout) */}
                <div className="w-full border border-white/10 bg-zinc-900/30 backdrop-blur-md p-8 md:p-12 rounded flex flex-col items-center text-center gap-8 shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-white/20">

                    {/* Description Text */}
                    <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed font-serif max-w-3xl">
                        Explore top-tier menus, reserve your preferred tables, and secure pre-orders so your dishes are ready the second you sit down. Create your account or sign in to begin.
                    </p>

                    {/* Horizontal/Responsive Action Buttons Alignment */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-2">
                        <button className="flex-1 bg-white text-black text-xs uppercase tracking-[0.2em] font-semibold py-4 px-6 hover:bg-zinc-200 transition-colors rounded flex items-center justify-center gap-2">
                            Sign Up
                        </button>
                        <button className="flex-1 bg-transparent border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-semibold py-4 px-6 hover:bg-white/5 transition-colors rounded flex items-center justify-center gap-2">
                            Log In
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}