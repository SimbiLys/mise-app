import React from 'react';
import { Icon } from '@iconify/react';
import Sidebar from './Sidebar'; // Import the shared sidebar

export default function Dashboard({ setView }) {
    const summaryCards = [
        { id: '01', title: 'Restaurants', metricValue: '24', pillText: 'CURATED PICKS JUST FOR YOU', image: '/step1.jpg' },
        { id: '02', title: 'Reservations', metricValue: '8', pillText: '8 ACTIVE TABLES TONIGHT', image: 'step2.jpg' },
        { id: '03', title: 'Active Orders', metricValue: '3', pillText: '3 DISHES PRE-ORDERED', image: 'step3.jpg' },
        { id: '04', title: 'Total Balance', metricValue: '342,500 RWF', pillText: '342,500 RWF SPENT', image: 'step4.jpg' },
    ];

    const topRestaurants = [
        { name: "The Garden Bistro", cuisine: "Contemporary Fusion", reservations: "12 Bookings", image: "/res1 (1).jpg" },
        { name: "Ember Steakhouse", cuisine: "Artisanal Grill", reservations: "7 Bookings", image: "/res1 (2).jpg" },
        { name: "Ocean's Table", cuisine: "Premium Seafood", reservations: "9 Bookings", image: "/res1 (3).jpg" },
        { name: "La Maison", cuisine: "Classic French Tastes", reservations: "6 Bookings", image: "/res1 (4).jpg" },
    ];

    const activities = [
        { title: "Reservation confirmed", desc: "The Garden Bistro", time: "2m ago", icon: "lucide:calendar-check" },
        { title: "Order completed", desc: "Ocean's Table", time: "1h ago", icon: "lucide:shopping-bag" },
        { title: "Reservation upcoming", desc: "Ember Steakhouse", time: "3h ago", icon: "lucide:calendar" },
        { title: "Order placed", desc: "La Maison", time: "5h ago", icon: "lucide:shopping-cart" },
    ];

    return (
        <div className="w-full min-h-screen bg-[#F4F5F6] text-[#111827] flex font-sans antialiased text-left select-none">

            {/* 🧭 INJECT REUSABLE UNIFIED SIDEBAR */}
            <Sidebar currentView="dashboard" setView={setView} />

            {/* 🍽️ MAIN INTERFACE CANVAS */}
            <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto w-full space-y-10">

                {/* Header Row Content */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full border-b border-gray-200/60 pb-6">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-serif font-normal text-gray-900 tracking-tight">
                            General overview
                        </h1>
                        <p className="text-gray-400 text-sm font-normal">
                            Here's what's happening with your premium dining coordinates.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-xl py-2.5 px-4 text-xs font-semibold text-gray-700 shadow-sm select-none w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                        Live tracking period
                    </div>
                </div>

                {/* 📊 UPPER CARDS ROW GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {summaryCards.map((card, index) => {
                        const icons = ['lucide:utensils', 'lucide:calendar-days', 'lucide:shopping-bag', 'lucide:wallet'];
                        return (
                            <div key={card.id} className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col p-4 space-y-4 transition-all hover:shadow-md">
                                <div className="w-full h-44 bg-gray-100 rounded-xl overflow-hidden relative border border-gray-100">
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/90 text-white flex items-center justify-center text-[11px] font-bold font-mono tracking-tight shadow-md">
                                        {card.id}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between px-1 border-b border-gray-50 pb-2">
                                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-extrabold">{card.title}</span>
                                    <Icon icon={icons[index]} className="text-gray-400 w-4 h-4 flex-shrink-0" />
                                </div>
                                <div className="flex items-center justify-between gap-3 w-full px-1 pt-1">
                                    <div className="flex-1 bg-[#F8F9FA] border border-gray-200/40 rounded-xl py-2 px-3 text-center">
                                        <span className="text-[9px] uppercase font-bold tracking-wider text-gray-500 block truncate">{card.pillText}</span>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-sans font-black text-gray-900 tracking-tight whitespace-nowrap flex-shrink-0">{card.metricValue}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 🛠️ MIDDLE SECTOR MODULE ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
                    {/* LEFT AREA: CHART & FAVORITE RESTAURANTS */}
                    <div className="col-span-1 lg:col-span-8 flex flex-col gap-8">
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm w-full">
                            <div className="flex justify-between items-center w-full mb-6">
                                <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400">Analytics module</span>
                                <h4 className="text-base font-sans font-bold text-gray-800 pr-2">Order Overview</h4>
                            </div>
                            <div className="relative w-full h-60 mt-4 flex flex-col justify-between select-none">
                                <div className="absolute inset-0 z-10 pt-2 pb-8 pr-2 pl-10">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 700 180" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="premiumSilverGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#111827" stopOpacity="0.04" />
                                                <stop offset="100%" stopColor="#111827" stopOpacity="0.00" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M 0 144 C 60 40, 70 45, 116 45 C 160 45, 180 85, 233 85 C 290 85, 310 120, 350 120 C 400 120, 420 90, 466 90 C 510 90, 545 20, 583 20 C 630 20, 650 55, 700 55 L 700 180 L 0 180 Z" fill="url(#premiumSilverGradient)" />
                                        <path d="M 0 144 C 60 40, 70 45, 116 45 C 160 45, 180 85, 233 85 C 290 85, 310 120, 350 120 C 400 120, 420 90, 466 90 C 510 90, 545 20, 583 20 C 630 20, 650 55, 700 55" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400 font-bold z-0 pb-7 pl-1">
                                    <span>600</span><span>500</span><span>400</span><span>300</span><span>200</span><span>100</span>
                                </div>
                                <div className="w-full flex justify-between text-[11px] text-gray-400 font-semibold border-t border-gray-100 pt-3 z-10 pl-10">
                                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                </div>
                            </div>
                        </div>

                        {/* TOP RESTAURANTS LIST */}
                        <div className="bg-white border border-gray-200/70 rounded-2xl p-6 w-full">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Top favorite restaurants</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                                {topRestaurants.map((res, index) => (
                                    <div key={index} className="flex items-center justify-between py-1 border-b border-gray-100/50 last:border-0 w-full group">
                                        <div className="flex items-center gap-4">
                                            <img src={res.image} alt={res.name} className="w-12 h-12 rounded-xl object-cover border border-gray-200/60 shadow-sm transition-transform duration-300 group-hover:scale-105" />
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-gray-900 group-hover:underline cursor-pointer">{res.name}</span>
                                                <span className="text-xs text-gray-400 font-normal mt-0.5">{res.cuisine}</span>
                                            </div>
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg">{res.reservations}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT AREA: ACTIVITY & STATUS LOYALTY CARD */}
                    <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-white border border-gray-200/70 rounded-2xl p-6 w-full">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Your activity</h4>
                            <div className="flex flex-col gap-5 w-full">
                                {activities.map((act, idx) => (
                                    <div key={idx} className="flex items-start justify-between w-full py-0.5">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700"><Icon icon={act.icon} className="w-4 h-4" /></div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-gray-900 leading-tight">{act.title}</span>
                                                <span className="text-xs text-gray-400 font-normal mt-1">{act.desc}</span>
                                            </div>
                                        </div>
                                        <span className="text-[11px] text-gray-400 font-medium pt-0.5">{act.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#111827] text-white rounded-2xl p-6 min-h-[220px] relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full border-4 border-white/5 opacity-[0.04]" />
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Membership Status</span>
                                <h5 className="text-xl font-serif font-normal tracking-wide text-white">Mise Elite Tier</h5>
                            </div>
                            <div className="space-y-3 my-4">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-400">Priority Booking Threshold</span>
                                    <span className="font-bold text-white">85% Complete</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div style={{ width: '85%' }} className="h-full bg-white rounded-full" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-t border-white/10 pt-4 w-full">
                                <span className="text-xs text-gray-400 font-normal">2 more dining events to unlock free valet pass</span>
                                <Icon icon="lucide:arrow-up-right" className="w-4 h-4 text-white hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}