import React from 'react';

const collections = [
    { id: '01', title: 'The Chef\'s Counter', space: 'Seated Experience', img: 'https://unsplash.com' },
    { id: '02', title: 'Omakase Vaults', space: 'Private Enclaves', img: 'https://unsplash.com' },
    { id: '03', title: 'Sommelier Caches', space: 'Vintage Library', img: 'https://unsplash.com' },
    { id: '04', title: 'Al Fresco Atriums', space: 'Skyline Overlooks', img: 'https://unsplash.com' },
];

export default function Features() {
    return (
        <section id="curation" className="w-full bg-[#F9F8F6] text-[#1C1B1A] py-28 px-12 border-b border-black/5">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Editorial Secondary Section Subheader */}
                <div className="max-w-2xl space-y-4">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#2C4A3E] block font-bold">The Portfolios</span>
                    <h2 className="text-4xl font-serif text-[#1C1B1A] leading-tight">Enjoy a Luxury Culinary Experience</h2>
                    <p className="text-xs text-black/40 font-light tracking-wide leading-relaxed">
                        Every room layout alignment, active menu sequence item, and custom ingredient configuration is managed directly to secure absolute comfort upon seat check-in execution.
                    </p>
                </div>

                {/* Premium Portfolio Showcases Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {collections.map((item) => (
                        <div key={item.id} className="group flex flex-col gap-4 cursor-pointer">
                            {/* Image Frame Wrapper Container */}
                            <div className="w-full aspect-[3/4] bg-zinc-100 border border-black/5 overflow-hidden relative shadow-sm">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-101 transition-all duration-700 grayscale group-hover:grayscale-0"
                                />
                                <span className="absolute top-4 right-4 text-xs font-mono text-black/20 group-hover:text-[#2C4A3E] font-bold transition-colors">{item.id}</span>
                            </div>

                            {/* Meta Typography Label Metrics */}
                            <div>
                                <span className="block text-[8px] uppercase tracking-widest text-black/40 font-medium">{item.space}</span>
                                <h3 className="text-md font-serif text-[#1C1B1A] mt-1 group-hover:text-[#2C4A3E] transition-colors">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
