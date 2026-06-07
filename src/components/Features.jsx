import React from 'react';

const featureItems = [
    {
        number: "01",
        tag: "Curated picks just for you",
        title: "Three taps, and you're eating",
        description: "Filter by cuisine, vibe, neighborhood or what's open right now. Real reviews from real diners",
        img: "./step1.jpg",
    },
    {
        number: "02",
        tag: "All the details you need",
        title: "Browse and Choose",
        description: "Check the menu of a restaurant and make your decision later",
        img: "./step2.jpg",
    },
    {
        number: "03",
        tag: "Fast, secure, effortless",
        title: "Skip the Waiting",
        description: "Pre-order so your food's plated as you sit down and skip the wait",
        img: "./step3.jpg",
    },
    {
        number: "04",
        tag: "Get things ready for you",
        title: "Instant Booking",
        description: "see live availability. Choose your table and book instantly",
        img: "./step4.jpg",
    }
];

export function PortfolioSection() {
    return (
        <section className="bg-white text-zinc-900 py-24 px-6 md:px-12 lg:px-16 border-b border-zinc-100">
            <div className="max-w-7xl mx-auto">

                {/* Header Block with Increased Copy Sizes */}
                <div className="mb-16 max-w-3xl">
                    <div className="flex items-center gap-4 mb-4">
                        {/* Increased text-[10px] -> text-xs */}
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-bold">
                            HOW IT WORKS
                        </span>
                        {/* Increased text-[10px] -> text-xs */}
                        <span className="text-xs bg-zinc-100 px-2.5 py-1 rounded text-zinc-600 font-medium ml-auto lg:hidden">
                            ⏱️ 2 min demo
                        </span>
                    </div>
                    {/* Increased text-3xl md:text-4xl -> text-4xl md:text-5xl */}
                    <h2 className="text-4xl md:text-5xl font-serif text-zinc-800 tracking-normal mb-5 font-medium antialiased">
                        Three taps, and you're <span className="italic font-light">eating</span>
                    </h2>
                    {/* Increased text-xs -> text-base and updated text color to zinc-500 for better legibility */}
                    <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-light antialiased">
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

                                {/* Overlay Feature Text with darker gradient for readability */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-start bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none">
                                    {/* Increased text-3xl -> text-4xl */}
                                    <span className="text-4xl font-serif font-bold text-white tracking-wide block mb-3 opacity-90">
                                        {item.number}
                                    </span>
                                    {/* Increased text-[11px] -> text-sm / text-base */}
                                    <p className="text-white text-sm sm:text-base leading-relaxed font-normal font-sans max-w-[90%] drop-shadow-md">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Pill Badges */}
                            <div className="mt-1">
                                {/* Increased text-[9px] -> text-xs */}
                                <span className="inline-block text-xs text-zinc-600 bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-full font-medium tracking-wide">
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