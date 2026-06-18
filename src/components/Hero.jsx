import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
    return (
        <section id="home" className="w-full min-h-screen bg-[#FAFAFA] text-zinc-900 flex flex-col justify-between pt-32 select-none antialiased relative">

            {/* Clean Centralized Workspace Container */}
            <div className="max-w-[1400px] w-full mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center flex-1 pb-16">

                {/* 🏷️ LEFT COLUMN: CLEAN SCALE TYPOGRAPHY (7 Cols) */}
                <div className="lg:col-span-7 space-y-8 text-left">

                    {/* Micro Identity Token */}
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900 text-white shadow-sm">
                        <Icon icon="lucide:sparkles" className="w-3.5 h-3.5 text-zinc-300" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Platform Overview</span>
                    </div>

                    {/* Massive Editorial Header */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif tracking-tight text-zinc-950 leading-[1.05] font-medium">
                        Your table is set. <br />
                        <span className="font-normal text-zinc-400 italic">Your dish is ready.</span>
                    </h1>

                    {/* Highly Controlled, Readable Body Copy */}
                    <p className="text-zinc-500 text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
                        Discover world-class culinary venues, reserve your table configuration, and synchronize your pre-ordered selections before arriving.
                    </p>

                    {/* Clean Action Anchors */}
                    <div className="flex items-center gap-4 pt-4">
                        <button className="bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs uppercase tracking-widest rounded-xl px-8 py-4 transition-all shadow-sm cursor-pointer">
                            Explore Venues
                        </button>
                        <button className="bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-xs uppercase tracking-widest rounded-xl px-8 py-4 transition-all border border-zinc-200/80 shadow-sm cursor-pointer">
                            Documentation
                        </button>
                    </div>
                </div>

                {/* 🖼️ RIGHT COLUMN: CLEAN BORDER LAYOUT CARD (5 Cols) */}
                <div className="lg:col-span-5 w-full flex justify-end">
                    <div className="w-full max-w-[440px] aspect-[4/5] bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between">

                        {/* Mock App Shell Window Frame Header */}
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 block"></span>
                            </div>
                            <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">Mise_Interface_v1.0</span>
                        </div>

                        {/* Minimalist Graphic Element Placeholder */}
                        <div className="flex-1 flex flex-col justify-center items-center py-8 text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-400">
                                <Icon icon="lucide:utensils" className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-bold text-zinc-900">Synchronized Dining Network</h3>
                                <p className="text-xs text-zinc-400 max-w-[240px]">Real-time table mapping and direct kitchen communications pipeline.</p>
                            </div>
                        </div>

                        {/* Bottom Utility Status Bar */}
                        <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-200/40 flex items-center gap-3 text-left">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[11px] font-medium text-zinc-600">All regional kitchen networks active</span>
                        </div>

                    </div>
                </div>

            </div>

            {/* 📊 LOWER UTILITY METRIC BANNER */}
            <div className="w-full bg-white border-t border-zinc-200/80 py-8 shadow-[0_-4px_20px_rgba(0,0,0,0.01)]">
                <div className="max-w-[1400px] mx-auto px-8 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="flex items-start gap-4 text-left">
                        <Icon icon="lucide:map-pin" className="text-zinc-400 w-5 h-5 mt-0.5" />
                        <div>
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">Where</span>
                            <span className="text-sm font-bold text-zinc-900">City, cuisine or bistro</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 text-left">
                        <Icon icon="lucide:calendar" className="text-zinc-400 w-5 h-5 mt-0.5" />
                        <div>
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">When</span>
                            <span className="text-sm font-bold text-zinc-900">Tonight</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 text-left">
                        <Icon icon="lucide:clock" className="text-zinc-400 w-5 h-5 mt-0.5" />
                        <div>
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">Timing Control</span>
                            <span className="text-sm font-bold text-zinc-900">7:30 PM</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 text-left">
                        <Icon icon="lucide:users" className="text-zinc-400 w-5 h-5 mt-0.5" />
                        <div>
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">Party Size</span>
                            <span className="text-sm font-bold text-zinc-900">2 people</span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}