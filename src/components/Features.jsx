import React from 'react';

const featureItems = [
    {
        number: "01",
        tag: "Curated picks just for you",
        title: "Three taps, and you're eating",
        description: "Filter by cuisine, vibe, neighborhood or what's open right now. Real reviews form real diners",
        img: "/images/chefs-counter.jpg", // Keeps your current images
    },
    {
        number: "02",
        tag: "All the details you need",
        title: "Browse and Choose",
        description: "Check the menu of a restaurant and make your decision later",
        img: "/images/omakase.jpg",
    },
    {
        number: "03",
        tag: "Fast, secure, effortless",
        title: "Skip the Waiting",
        description: "Pre-order so your food's plated as you sit down and skip the wait",
        img: "/images/wine.jpg",
    },
    {
        number: "04",
        tag: "Get things ready for you",
        title: "Instant Booking",
        description: "see live availability. Choose your table and book instantly",
        img: "/images/atrium.jpg",
    }
];

export function PortfolioSection() {
    return (
        <section className="bg-white text-zinc-900 py-24 px-6 md:px-12 lg:px-16 border-b border-zinc-100">
            <div className="max-w-7xl mx-auto">

                {/* Header Block with correct Copy */}
                <div className="mb-16 max-w-2xl">
                    <div className="flex items-center gap-4 mb-3">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
                            FEATURES
                        </span>
                        {/* Optional 2 min demo badge from draft */}
                        <span className="text-[10px] bg-zinc-100 px-2 py-0.5 rounded text-zinc-600 font-medium ml-auto lg:hidden">
                            ⏱️ 2 min demo
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-zinc-800 tracking-normal mb-4 font-medium antialiased">
                        Three taps, and you're <span className="italic font-light">eating</span>
                    </h2>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light antialiased">
                        From browsing to bites in minutes, your table, your time, your way. Mise is where you can browse restaurants, their menus, book tables and all that within a blink of an eye.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featureItems.map((item, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col">

                            {/* Luxury Border Image Container */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 p-2 border border-zinc-200/60 mb-4 bg-white shadow-sm">
                                <img
                                    src={item.img}
                                    alt={item.tag}
                                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                                />

                                {/* Overlay Feature Text directly on the Image */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-start bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none">
                                    <span className="text-3xl font-serif font-bold text-white tracking-wide block mb-2 opacity-90">
                                        {item.number}
                                    </span>
                                    <p className="text-white text-[11px] leading-relaxed font-light font-sans max-w-[85%] drop-shadow-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Minimal Bottom Pill Badges from your draft */}
                            <div className="mt-1">
                                <span className="inline-block text-[9px] text-zinc-500 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-full font-medium tracking-wide">
                                    {item.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
export default PortfolioSection;