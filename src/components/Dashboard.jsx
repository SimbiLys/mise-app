import React from 'react';
import { Icon } from '@iconify/react';


export default function Dashboard({ setView }) {
    const summaryCards = [
        { id: '01', title: 'Restaurants', metricValue: '24', pillText: 'CURATED PICKS FOR YOU', image: '/step1.jpg' },
        { id: '02', title: 'Reservations', metricValue: '8', pillText: '8 ACTIVE TABLES TONIGHT', image: 'step2.jpg' },
        { id: '03', title: 'Active Orders', metricValue: '3', pillText: '3 DISHES PRE-ORDERED', image: 'step3.jpg' },
        { id: '04', title: 'Total Balance', metricValue: '342,500 RWF', pillText: '342,500 RWF SPENT', image: 'step4.jpg' },
    ];

    const topRestaurants = [
        { name: "The Garden Bistro", cuisine: "Contemporary Fusion", reservations: "12 Booked", image: "/res1 (1).jpg" },
        { name: "Ember Steakhouse", cuisine: "Artisanal Grill", reservations: "7 Booked", image: "/res1 (2).jpg" },
        { name: "Ocean's Table", cuisine: "Premium Seafood", reservations: "9 Booked", image: "/res1 (3).jpg" },
        { name: "La Maison", cuisine: "Classic French Tastes", reservations: "6 Bookings", image: "/res1 (4).jpg" },
    ];

    const activities = [
        { title: "Reservation confirmed", desc: "The Garden Bistro", time: "2m ago", icon: "lucide:calendar-check", active: true },
        { title: "Order completed", desc: "Ocean's Table", time: "1h ago", icon: "lucide:shopping-bag", active: false },
        { title: "Reservation upcoming", desc: "Ember Steakhouse", time: "3h ago", icon: "lucide:calendar", active: false },
        { title: "Order placed", desc: "La Maison", time: "5h ago", icon: "lucide:shopping-cart", active: false },
    ];

    return (
        <div className="w-full min-h-screen bg-[#FDFDFD] text-gray-900 flex font-sans antialiased text-left select-none">

       

            {/* 🍽️ MAIN EXPLORER CANVAS */}
            <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto max-w-[1500px] mx-auto w-full space-y-14">

                {/* 🔝 UPPER HEADER BLOCK (Large & Clear) */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-6 w-full border-b border-gray-200/80 pb-8">
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-5xl font-serif font-medium text-black tracking-tight">
                            General overview
                        </h1>
                        <p className="text-gray-500 text-lg font-normal tracking-wide">
                            Here's what's happening with your premium dining coordinates.
                        </p>
                    </div>
                    {/* Clean Monochromatic Status Badge */}
                    <div className="flex items-center gap-3 border-2 border-gray-900 bg-black text-white rounded-full py-2.5 px-5 text-sm font-bold tracking-wide shadow-sm w-fit">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                        Live tracking active
                    </div>
                </div>

                {/* 📊 SUMMARY HERO TILES GRID (Images always display in natural colors) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {summaryCards.map((card, index) => {
                        const icons = ['lucide:utensils', 'lucide:calendar-days', 'lucide:shopping-bag', 'lucide:wallet'];
                        return (
                            <div key={card.id} className="bg-white border-2 border-gray-200/90 rounded-2xl overflow-hidden shadow-sm flex flex-col p-6 space-y-5 transition-all duration-300 hover:border-black group">
                                <div className="w-full h-48 bg-gray-50 rounded-xl overflow-hidden relative border border-gray-100">
                                    {/* Completely flat, full color image with no filter styles */}
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold font-mono shadow-md">
                                        {card.id}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                    <span className="text-sm uppercase tracking-widest text-gray-400 font-extrabold">{card.title}</span>
                                    <Icon icon={icons[index]} className="text-gray-400 group-hover:text-black transition-colors w-5 h-5 flex-shrink-0" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <h4 className="text-3xl md:text-4xl font-serif font-medium text-black tracking-tight">{card.metricValue}</h4>
                                    <span className="text-[11px] font-extrabold tracking-widest text-gray-400 uppercase">{card.pillText}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 🛠️ ASYMMETRIC HORIZONTAL GRID SYSTEM */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">

                    {/* TOP-LEFT SECTOR: ORDER ANALYTICS GRAPH (8 COLS) */}
                    <div className="col-span-1 lg:col-span-8 bg-white border-2 border-gray-200/90 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                        <div className="flex justify-between items-baseline w-full mb-8">
                            <div className="space-y-1.5">
                                <h4 className="text-xl font-serif font-medium text-black tracking-tight">Order Overview</h4>
                                <p className="text-sm text-gray-400 font-normal">Weekly reservation performance indicators</p>
                            </div>
                            <span className="text-xs font-extrabold uppercase tracking-widest text-black bg-gray-100 border-2 border-gray-200 px-4 py-1.5 rounded-full">Analytics Module</span>
                        </div>

                        {/* Clinical Stark SVG Line Graph */}
                        <div className="relative w-full h-64 mt-4 flex flex-col justify-between select-none">
                            <div className="absolute inset-0 z-10 pt-4 pb-8 pr-2 pl-12">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 700 180" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="minimalistPureFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#111827" stopOpacity="0.04" />
                                            <stop offset="100%" stopColor="#111827" stopOpacity="0.00" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M 0 130 Q 110 20, 233 80 T 466 100 T 700 30 L 700 180 L 0 180 Z" fill="url(#minimalistPureFill)" />
                                    <path d="M 0 130 Q 110 20, 233 80 T 466 100 T 700 30" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" />

                                    {/* Monochromatic target nodes */}
                                    <circle cx="115" cy="55" r="5" fill="#111827" stroke="white" strokeWidth="2.5" />
                                    <circle cx="583" cy="45" r="5" fill="#111827" stroke="white" strokeWidth="2.5" />
                                </svg>
                            </div>
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 font-bold font-mono z-0 pb-8 pl-1">
                                <span>600</span><span>400</span><span>200</span><span>0</span>
                            </div>
                            <div className="w-full flex justify-between text-sm text-gray-500 font-semibold border-t-2 border-gray-100 pt-4 z-10 pl-12">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                        </div>
                    </div>

                    {/* TOP-RIGHT SECTOR: LIVE ACTIVITY GRID (4 COLS - Height Perfectly Balanced) */}
                    <div className="col-span-1 lg:col-span-4 bg-white border-2 border-gray-200/90 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                        <div className="mb-6">
                            <h4 className="text-xl font-serif font-medium text-black tracking-tight">Live Activity</h4>
                            <p className="text-sm text-gray-400 font-normal mt-0.5">Realtime execution history logs</p>
                        </div>
                        <div className="flex flex-col gap-6 w-full flex-1 justify-center">
                            {activities.map((act, idx) => (
                                <div key={idx} className="flex items-center justify-between w-full group py-0.5">
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div className={`w-11 h-11 rounded-xl border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0
                                            ${act.active
                                                ? 'bg-black text-white border-black'
                                                : 'bg-white text-gray-700 border-gray-200 group-hover:bg-gray-100'}`}
                                        >
                                            <Icon icon={act.icon} className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-base font-bold text-black leading-snug truncate">{act.title}</span>
                                            <span className="text-sm text-gray-500 font-normal truncate mt-0.5">{act.desc}</span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400 font-bold font-mono flex-shrink-0">{act.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LOWER-LEFT SECTOR: TOP RESTAURANTS LIST (8 COLS - Images always display in natural colors) */}
                    <div className="col-span-1 lg:col-span-8 bg-white border-2 border-gray-200/90 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                        <div className="mb-6">
                            <h4 className="text-xl font-serif font-medium text-black tracking-tight">Top Favorite Restaurants</h4>
                            <p className="text-sm text-gray-400 font-normal mt-0.5">Most frequented dining properties inside your network profile grid</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {topRestaurants.map((res, index) => (
                                <div key={index} className="flex items-center justify-between py-2 border-b-2 border-gray-50 last:border-0 w-full group cursor-pointer">
                                    <div className="flex items-center gap-4 min-w-0">
                                        {/* Pure, normal color image */}
                                        <img src={res.image} alt={res.name} className="w-16 h-16 rounded-xl object-cover border border-gray-200 shadow-sm" />
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-lg font-bold text-black group-hover:underline truncate">{res.name}</span>
                                            <span className="text-sm text-gray-400 font-normal mt-1 truncate">{res.cuisine}</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-extrabold tracking-widest uppercase px-3.5 py-2 bg-black text-white rounded-xl flex-shrink-0">
                                        {res.reservations.split(' ')[0]} BOOKED
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LOWER-RIGHT SECTOR: STARK BLACK MEMBERSHIP CARD (4 COLS - Clean Horizontal Layout) */}
                    <div className="col-span-1 lg:col-span-4 bg-black text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">

                        <div className="space-y-2">
                            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block">Membership Status</span>
                            <h5 className="text-2xl md:text-3xl font-serif font-normal tracking-wide text-white">Mise Elite Tier</h5>
                        </div>

                        <div className="space-y-4 my-auto py-6">
                            <div className="flex justify-between items-baseline text-sm">
                                <span className="text-gray-400 font-medium">Priority Booking Gauge</span>
                                <span className="font-extrabold font-mono text-white text-right">85%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div style={{ width: '85%' }} className="h-full bg-white rounded-full transition-all duration-500" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-800 pt-5 w-full gap-4">
                            <span className="text-xs text-gray-400 font-normal leading-relaxed">
                                2 more dining events to unlock free valet pass
                            </span>
                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 shadow-md">
                                <Icon icon="lucide:arrow-up-right" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}