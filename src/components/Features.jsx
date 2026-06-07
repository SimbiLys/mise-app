import React from 'react';

export default function Features() {
    return (
        <section id="curation" className="bg-white py-24 text-zinc-900 border-b border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                {/* Header Context Title Block */}
                <div className="max-w-3xl mb-20">
                    <span className="text-sm uppercase tracking-[0.3em] text-zinc-400 font-bold block mb-4">
                        FEATURES
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-zinc-800 tracking-normal mb-6 font-medium antialiased">
                        Three taps, and you're <span className="italic">eating</span>
                    </h2>
                    <p className="text-zinc-500 text-lg sm:text-xl leading-relaxed font-serif antialiased">
                        From browsing to bites in minutes, your table, your time, your way. Mise is where you can browse restaurants, their menus, book tables and all that within a blink of an eye.
                    </p>
                </div>

                {/* Features Layout Display Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 01 */}
                    <div className="group border border-zinc-200/80 p-4 bg-white flex flex-col gap-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)] rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-zinc-300">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm">
                            <img
                                src="/step1.jpg"
                                alt="Filter Option"
                                className="w-full h-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                            />
                            {/* Number identifier layer */}
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-mono font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                01
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 flex-grow justify-between min-h-[130px] px-1">
                            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-serif">
                                Filter by cuisine, vibe, neighborhood or what's open right now. Real reviews from real diners.
                            </p>
                            <div className="text-center pt-2">
                                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold bg-zinc-50 border border-zinc-100 px-3 py-2 rounded-full block">
                                    Curated picks just for you
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 02 */}
                    <div className="group border border-zinc-200/80 p-4 bg-white flex flex-col gap-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)] rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-zinc-300">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm">
                            <img
                                src="/step2.jpg"
                                alt="Menu Preview"
                                className="w-full h-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-mono font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                02
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 flex-grow justify-between min-h-[130px] px-1">
                            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-serif">
                                Check the menu of a restaurant and make your decision later without any rush.
                            </p>
                            <div className="text-center pt-2">
                                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold bg-zinc-50 border border-zinc-100 px-3 py-2 rounded-full block">
                                    All the details you need
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 03 */}
                    <div className="group border border-zinc-200/80 p-4 bg-white flex flex-col gap-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)] rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-zinc-300">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm">
                            <img
                                src="/step3.jpg"
                                alt="Pre-order process"
                                className="w-full h-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-mono font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                03
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 flex-grow justify-between min-h-[130px] px-1">
                            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-serif">
                                Pre-order so your food's plated as you sit down and skip the traditional long wait times.
                            </p>
                            <div className="text-center pt-2">
                                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold bg-zinc-50 border border-zinc-100 px-3 py-2 rounded-full block">
                                    Fast, secure, effortless
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 04 */}
                    <div className="group border border-zinc-200/80 p-4 bg-white flex flex-col gap-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)] rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-zinc-300">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm">
                            <img
                                src="/step4.jpg"
                                alt="Live Reservation Card"
                                className="w-full h-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-mono font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                04
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 flex-grow justify-between min-h-[130px] px-1">
                            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-serif">
                                See live seat availability, choose your favorite table, and confirm your booking instantly.
                            </p>
                            <div className="text-center pt-2">
                                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold bg-zinc-50 border border-zinc-100 px-3 py-2 rounded-full block">
                                    Get things ready for you
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}