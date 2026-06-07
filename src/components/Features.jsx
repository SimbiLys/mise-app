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

                {/* Header Block */}
                <div className="mb-16 max-w-3xl">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-bold">
                            HOW IT WORKS
                        </span>
                        <span className="text-xs bg-zinc-100 px-2.5 py-1 rounded text-zinc-600 font-medium ml-auto lg:hidden">
                            ⏱️ 2 min demo
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-zinc-800 tracking-normal mb-5 font-medium antialiased">
                        Three taps, and you're <span className="italic font-light">eating</span>
                    </h2>
                    <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-serif antialiased">
                        From browsing to bites in minutes, your table, your time, your way. Mise is where you can browse restaurants, their menus, book tables and all that within a blink of an eye.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {featureItems.map((item, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col justify-between">

                            {/* Text Details Moved ABOVE the Card for Perfect Visibility */}
                            <div className="mb-4 flex flex-col gap-2 px-1">
                                <span className="text-4xl font-serif font-bold text-zinc-800 tracking-wide block">
                                    {item.number}
                                </span>
                                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal font-sans">
                                    {item.description}
                                </p>
                            </div>

                            {/* Shorter Image Card Container (aspect-[16/10]) */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 p-2 border border-zinc-200/60 mb-3 bg-white shadow-sm rounded-sm">
                                <img
                                    src={item.img}
                                    alt={item.tag}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                                />
                            </div>

                            {/* Bottom Pill Badges */}
                            <div className="mt-1">
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