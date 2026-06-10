import React from 'react';
import { Icon } from '@iconify/react';
import Sidebar from './Sidebar'; // Shared sidebar

export default function Menu({ setView }) {
    const categories = [
        { name: 'Main courses', desc: 'Primary dish selections', rating: '4.8', image: '/meal (3).jpg' },
        { name: 'Sides', desc: 'Accompanying sides', rating: '4.9', image: '/meal (2).jpg' },
        { name: 'Soups and stews', desc: 'Liquid based meals', rating: '4.6', image: '/meal (1).jpg' },
        { name: 'Deserts', desc: 'Sweet treats & pastries', rating: '4.7', image: '/meal (5).jpg' },
        { name: 'Drinks', desc: 'Premium beverages', rating: '4.5', image: '/meal (4).jpg' },
    ];

    const weekendTrends = [
        { name: "Gourmet burger", cat: "Main course", image: "/trend (4).jpg" },
        { name: "Hawaiian Pizza", cat: "Main course", image: "/trend (3).jpg" },
        { name: "Caesar salad", cat: "Sides", image: "/trend (2).jpg" },
        { name: "Tiramisu", cat: "Desert", image: "/meal (5).jpg" },
        { name: "Pink lady", cat: "Drinks", image: "/trend (1).jpg" },
    ];

    const sliderItems = [
        { name: "Sushi platter", price: "45,000 RWF", rating: 5, reviews: "198 reviews", image: "/slider (5).jpg" },
        { name: "Coconut icecream", price: "7,000 RWF", rating: 4.5, reviews: "215 reviews", image: "/slider (3).jpg" },
        { name: "Mocha Coffee", price: "10,000 RWF", rating: 4, reviews: "101 reviews", image: "/slider (4).jpg" },
        { name: "Spicy ramen", price: "15,000 RWF", rating: 5, reviews: "320 reviews", image: "/slider (1).jpg" },
    ];

    // Stark monochromatic star utility tracker
    const renderCleanStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<Icon key={i} icon="bi:star-fill" className="w-3.5 h-3.5 text-black" />);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<Icon key={i} icon="bi:star-half" className="w-3.5 h-3.5 text-black" />);
            } else {
                stars.push(<Icon key={i} icon="bi:star" className="w-3.5 h-3.5 text-gray-200" />);
            }
        }
        return stars;
    };

    return (
        <div className="w-full min-h-screen bg-[#FDFDFD] text-gray-900 flex font-sans antialiased text-left select-none">

            {/* 🧭 SHARED SIDEBAR NAVIGATION */}
            <Sidebar currentView="menu" setView={setView} />

            {/* 🍽️ MAIN EXPLORER CANVAS */}
            <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto max-w-[1500px] mx-auto w-full space-y-14">

                {/* 🔝 UPPER HEADER BLOCK */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-6 w-full border-b border-gray-200/80 pb-8">
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-5xl font-serif font-medium text-black tracking-tight">
                            Menu Categories
                        </h1>
                        <p className="text-gray-500 text-lg font-normal tracking-wide">
                            Explore our meticulously balanced culinary archives.
                        </p>
                    </div>
                    {/* Modern Clean Control Elements */}
                    <div className="w-full max-w-xs bg-white border-2 border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                        <Icon icon="lucide:search" className="text-gray-400 w-5 h-5 flex-shrink-0" />
                        <input type="text" placeholder="Search menu dishes..." className="w-full text-base bg-transparent text-black placeholder-gray-400 focus:outline-none font-medium" />
                    </div>
                </div>

                {/* 🗂️ HORIZONTAL CATEGORY SWIPER ROWS */}
                <div className="space-y-6">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Classified Collections</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="bg-white border-2 border-gray-200/90 rounded-2xl overflow-hidden p-4 flex flex-col space-y-4 hover:border-black transition-all group cursor-pointer shadow-sm">
                                <div className="w-full h-32 bg-gray-50 rounded-xl overflow-hidden relative">
                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                    <span className="absolute bottom-3 right-3 text-xs font-bold font-mono bg-black text-white px-2 py-0.5 rounded-md shadow">
                                        ★ {cat.rating}
                                    </span>
                                </div>
                                <div className="space-y-1 pl-0.5">
                                    <h4 className="text-lg font-bold text-black leading-tight group-hover:underline truncate">{cat.name}</h4>
                                    <p className="text-xs text-gray-400 truncate font-medium">{cat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🛠️ TWO-COLUMN ASYMMETRIC HARMONIOUS SYSTEM */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch w-full">

                    {/* LEFT COLUMN: HERO DISH & SLIDER FEED (8 COLS) */}
                    <div className="col-span-1 lg:col-span-8 flex flex-col gap-10 justify-between">

                        {/* Stark Black High-Contrast Recommendation Canvas */}
                        <div className="w-full bg-black text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl border border-black">
                            <div className="space-y-6 max-w-md z-10">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block">Chef's recommendation today</span>
                                    <h2 className="text-3xl md:text-4xl font-serif font-normal tracking-wide text-white">A delightful fusion of premium flavors</h2>
                                </div>
                                <div className="space-y-1.5 border-l-2 border-gray-800 pl-4">
                                    <span className="text-xs font-extrabold tracking-wider text-gray-400 uppercase block">Main Ingredients</span>
                                    <p className="text-sm text-gray-300 font-medium tracking-wide">Flour, Ground pork, Garlic and Ginger, Napa cabbage, Black vinegar</p>
                                </div>
                                <button className="bg-white hover:bg-gray-100 text-black font-bold text-sm tracking-wide rounded-xl px-6 py-3.5 transition-all shadow-md w-full sm:w-auto">
                                    Order Selection Now
                                </button>
                            </div>

                            {/* Circular Image Container Frame */}
                            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl flex-shrink-0 relative z-10">
                                <img src="/meal (6).jpg" alt="Chef recommendation" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Interactive Horizontal Item Slideway List */}
                        <div className="space-y-5 w-full">
                            <div className="flex justify-between items-baseline w-full">
                                <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Featured Curations</h3>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full border border-gray-200 bg-white text-black flex items-center justify-center hover:border-black cursor-pointer shadow-sm"><Icon icon="lucide:chevron-left" className="w-4 h-4" /></button>
                                    <button className="w-8 h-8 rounded-full border border-gray-200 bg-white text-black flex items-center justify-center hover:border-black cursor-pointer shadow-sm"><Icon icon="lucide:chevron-right" className="w-4 h-4" /></button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
                                {sliderItems.map((item, index) => (
                                    <div key={index} className="bg-white border-2 border-gray-200/90 rounded-2xl p-4 flex flex-col space-y-4 hover:border-black transition-colors shadow-sm">
                                        <div className="w-full h-36 rounded-xl overflow-hidden bg-gray-50">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col gap-1 w-full pl-0.5">
                                            <span className="text-base font-bold text-black truncate">{item.name}</span>
                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                <div className="flex items-center">{renderCleanStars(item.rating)}</div>
                                                <span className="text-[10px] text-gray-400 font-bold font-mono">{item.reviews.split(' ')[0]}</span>
                                            </div>
                                            <span className="text-sm font-extrabold font-mono text-black mt-2 pt-1 border-t border-gray-100">{item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: WEEKEND TRENDS COMPACT FEED (4 COLS) */}
                    <div className="col-span-1 lg:col-span-4 bg-white border-2 border-gray-200/90 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                        <div className="mb-6">
                            <h4 className="text-xl font-serif font-medium text-black tracking-tight">This Weekend's Trend</h4>
                            <p className="text-sm text-gray-400 font-normal mt-0.5">Highly requested items by current diners</p>
                        </div>

                        <div className="flex flex-col gap-5 w-full flex-1 justify-center">
                            {weekendTrends.map((trend, idx) => (
                                <div key={idx} className="flex items-center justify-between w-full border-b border-gray-50 pb-4 last:border-0 last:pb-0 group cursor-pointer py-0.5">
                                    <div className="flex items-center gap-4 min-w-0">
                                        <img src={trend.image} alt={trend.name} className="w-14 h-14 rounded-xl object-cover border border-gray-200/80 shadow-sm" />
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-base font-bold text-black group-hover:underline truncate leading-snug">{trend.name}</span>
                                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5 truncate">{trend.cat}</span>
                                        </div>
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors flex-shrink-0">
                                        <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}