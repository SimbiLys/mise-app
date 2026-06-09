import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Dashboard({ setView }) {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const menuItems = [
        { name: 'Dashboard', icon: 'lucide:layout-dashboard' },
        { name: 'Restaurants', icon: 'lucide:map-pin' },
        { name: 'Menu', icon: 'lucide:book-open' },
        { name: 'Order', icon: 'lucide:shopping-bag' },
        { name: 'Profile', icon: 'lucide:user' },
    ];

    // Upgraded Summary Cards with Premium Images and RWF Currency
    const summaryCards = [
        {
            title: 'Restaurants',
            value: '24',
            label: 'Curated spots in Kigali',
            bgImage: 'https://unsplash.com'
        },
        {
            title: 'Reservations',
            value: '8',
            label: 'Upcoming bookings',
            bgImage: 'https://unsplash.com'
        },
        {
            title: 'Active Orders',
            value: '3',
            label: 'Pre-ordered courses',
            bgImage: 'https://unsplash.com'
        },
        {
            title: 'Total Spent',
            value: '342,500 RWF',
            label: 'This month\'s balance',
            bgImage: 'https://unsplash.com'
        },
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
        <div className="w-full min-h-screen bg-[#F4F5F6] text-[#111827] flex font-sans antialiased text-left selection:bg-black selection:text-white">

            {/* 🧭 NAVIGATION SIDEBAR (With Smooth Collapse Transitions) */}
            <aside
                style={{ width: isSidebarCollapsed ? '80px' : '260px' }}
                className="hidden lg:flex bg-white border-r border-[#E5E7EB] flex-col justify-between p-6 sticky top-0 h-screen z-20 transition-all duration-300 ease-out"
            >
                <div className="space-y-10">
                    {/* Top Header Row with Logo & Collapse Toggle */}
                    <div className="flex items-center justify-between w-full px-2">
                        {!isSidebarCollapsed && (
                            <span className="text-xl font-serif tracking-[0.3em] uppercase font-bold text-gray-900 select-none animate-fade-in">
                                Mise
                            </span>
                        )}
                        <button
                            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-black transition-colors cursor-pointer mx-auto lg:mx-0"
                        >
                            <Icon icon={isSidebarCollapsed ? 'lucide:chevron-right' : 'lucide:chevron-left'} className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Navigation Menu Options List Links */}
                    <nav className="flex flex-col gap-1.5">
                        {menuItems.map((item) => {
                            const isActive = activeMenu === item.name;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveMenu(item.name)}
                                    className="w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all group cursor-pointer relative"
                                    style={{
                                        backgroundColor: isActive ? '#111827' : 'transparent',
                                        color: isActive ? '#ffffff' : '#4B5563'
                                    }}
                                >
                                    <Icon icon={item.icon} className={`w-4.5 h-4.5 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`} />
                                    {!isSidebarCollapsed && <span className="truncate">{item.name}</span>}

                                    {/* Subtle tooltip hint bubble if sidebar is collapsed */}
                                    {isSidebarCollapsed && (
                                        <div className="absolute left-16 bg-gray-900 text-white text-xs py-1 px-2.5 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 shadow-md">
                                            {item.name}
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Individual User Account Footer Information Panel */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-5 px-1 w-full overflow-hidden">
                    <div className="flex items-center gap-3 min-w-0">
                        <img
                            src="/prof.jpg"
                            alt="User Avatar Profile"
                            className="w-9 h-9 rounded-full object-cover border border-gray-200 shadow-sm flex-shrink-0"
                        />
                        {!isSidebarCollapsed && (
                            <div className="flex flex-col text-left min-w-0">
                                <span className="text-sm font-bold text-gray-900 leading-tight truncate">Simbi Lys</span>
                                <span className="text-[11px] text-gray-400 font-normal mt-0.5 truncate">lys@mise.com</span>
                            </div>
                        )}
                    </div>
                    {!isSidebarCollapsed && (
                        <button
                            onClick={() => setView('landing')}
                            className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded-md hover:bg-red-50 cursor-pointer flex-shrink-0"
                            title="Sign Out"
                        >
                            <Icon icon="lucide:log-out" className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </aside>

            {/* 🍽️ MAIN INTERFACE CANVAS FEED SLATE */}
            <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto max-w-[1440px] mx-auto w-full space-y-10">

                {/* Header Row Content Banner text block */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full border-b border-gray-200/60 pb-6">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-serif font-normal text-gray-900 tracking-tight">
                            General overview
                        </h1>
                        <p className="text-gray-400 text-sm font-normal">
                            Here's what's happening with your premium dining coordinates.
                        </p>
                    </div>

                    {/* Modern Calendar Tracking Filter Tab Capsule */}
                    <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-xl py-2.5 px-4 text-xs font-semibold text-gray-700 shadow-sm select-none w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                        Live tracking period
                    </div>
                </div>

                {/* 📊 SUMMARY METRICS ROW MODULE (With Luxury Image Backdrop Card Fills) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {summaryCards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200/70 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between relative min-h-[145px] p-6 group hover:border-gray-400 transition-all duration-300"
                        >
                            {/* Rich Micro-Image Texture Layer Backdrop Wrapper */}
                            <div className="absolute inset-y-0 right-0 w-28 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none z-0">
                                <img src={card.bgImage} alt="" className="w-full h-full object-cover grayscale mix-blend-multiply" />
                            </div>

                            <div className="relative z-10 flex justify-between items-start w-full">
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{card.title}</span>
                            </div>
                            <div className="relative z-10 space-y-1 mt-4">
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 font-sans">{card.value}</h3>
                                <p className="text-xs text-gray-400 font-normal">{card.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🛠️ MIDDLE SECTOR SUBSECTION MODULE ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">

                    {/* LEFT AREA: CHART & FAVORITE RESTAURANTS DATA STACK */}
                    <div className="col-span-1 lg:col-span-8 flex flex-col gap-8">

                        {/* 📈 COMPACT DYNAMIC CURVE PATH GRAPH MODULE */}
                        <div className="bg-white border border-gray-200/70 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] w-full">
                            <div className="flex flex-col text-left mb-6 space-y-1">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">Booking trend</h4>
                                <p className="text-xs text-gray-400 font-normal">Your table reservations analyzed over temporal milestones.</p>
                            </div>

                            {/* Enhanced Graph Canvas with Faint Shadow Area Gradient Effect */}
                            <div className="relative w-full h-64 mt-8 flex flex-col justify-between select-none">
                                <div className="absolute inset-0 z-10 pt-4 pb-8 pr-2">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 700 180" preserveAspectRatio="none">
                                        {/* Luxury Grayscale Gradient Filler definition maps */}
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#111827" stopOpacity="0.06" />
                                                <stop offset="100%" stopColor="#111827" stopOpacity="0.00" />
                                            </linearGradient>
                                        </defs>

                                        {/* Accent Horizontal Split Guide Gridlines */}
                                        <line x1="0" y1="0" x2="700" y2="0" stroke="#F1F2F4" strokeWidth="1" />
                                        <line x1="0" y1="90" x2="700" y2="90" stroke="#F1F2F4" strokeWidth="1" />
                                        <line x1="0" y1="180" x2="700" y2="180" stroke="#E5E7EB" strokeWidth="1" />

                                        {/* Filled Shadow Gradient Area Mesh under curve */}
                                        <path
                                            d="M 0 110 C 60 70, 70 50, 116 50 C 160 50, 180 110, 233 110 C 290 110, 310 50, 350 50 C 400 50, 420 100, 466 100 C 510 100, 550 20, 583 20 C 630 20, 650 70, 700 70 L 700 180 L 0 180 Z"
                                            fill="url(#chartGradient)"
                                        />

                                        {/* Deep Ink Solid Vector Curve Stroke Line */}
                                        <path
                                            d="M 0 110 C 60 70, 70 50, 116 50 C 160 50, 180 110, 233 110 C 290 110, 310 50, 350 50 C 400 50, 420 100, 466 100 C 510 100, 550 20, 583 20 C 630 20, 650 70, 700 70"
                                            fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round"
                                        />

                                        {/* Main Focal Data Anchor Highlight Node Indicator */}
                                        <circle cx="583" cy="20" r="5" fill="#111827" />
                                        <circle cx="583" cy="20" r="10" fill="#111827" fillOpacity="0.15" />
                                    </svg>
                                </div>

                                {/* Margins and Labels coordinates details parameters */}
                                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400 font-bold z-0 pl-1">
                                    <span>40</span><span>20</span><span>0</span>
                                </div>
                                <div className="w-full flex justify-between text-[11px] text-gray-400 font-semibold border-t border-gray-100 pt-3.5 z-10 pl-8">
                                    <span>May 10</span><span>May 13</span><span>May 16</span>
                                </div>
                            </div>
                        </div>

                        {/* 🏨 PREMIUM HIGHLIGHT RESTAURANTS MODULE GRID */}
                        <div className="bg-white border border-gray-200/70 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] w-full">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 text-left">Top favorite restaurants</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                                {topRestaurants.map((res, index) => (
                                    <div key={index} className="flex items-center justify-between py-1 border-b border-gray-100/50 last:border-0 w-full group">
                                        <div className="flex items-center gap-4">
                                            <img src={res.image} alt={res.name} className="w-12 h-12 rounded-xl object-cover border border-gray-200/60 shadow-sm transition-transform duration-300 group-hover:scale-105" />
                                            <div className="flex flex-col text-left">
                                                <span className="text-sm font-bold text-gray-900 leading-snug group-hover:underline cursor-pointer">{res.name}</span>
                                                <span className="text-xs text-gray-400 font-normal mt-0.5">{res.cuisine}</span>
                                            </div>
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg">
                                            {res.reservations}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* 🕒 RIGHT AREA: ACTIVITY FLOW LOG & EXCLUSIVE PRO FEATURE TIER BOX */}
                    <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">

                        {/* HISTORICAL ACTIVITY FEED PANEL */}
                        <div className="bg-white border border-gray-200/70 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] w-full">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 text-left">Your activity</h4>
                            <div className="flex flex-col gap-5 w-full">
                                {activities.map((act, idx) => (
                                    <div key={idx} className="flex items-start justify-between w-full py-0.5">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-700">
                                                <Icon icon={act.icon} className="w-4 h-4" />
                                            </div>
                                            <div className="flex flex-col text-left">
                                                <span className="text-sm font-bold text-gray-900 leading-tight">{act.title}</span>
                                                <span className="text-xs text-gray-400 font-normal mt-1">{act.desc}</span>
                                            </div>
                                        </div>
                                        <span className="text-[11px] text-gray-400 font-medium flex-shrink-0 pt-0.5">{act.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 🌟 PREMIUM FEATURE REPLACEMENT ADDITION: MISE ELITE LOYALTY CARD STATUS */}
                        <div className="bg-[#111827] border border-black text-white rounded-2xl p-6 shadow-xl w-full flex flex-col justify-between min-h-[220px] relative overflow-hidden">
                            {/* Geometric Vector Accent line elements backing card design */}
                            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full border-4 border-white/5 opacity-[0.04] pointer-events-none" />

                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Membership Status</span>
                                <h5 className="text-xl font-serif font-normal tracking-wide text-white">Mise Elite Tier</h5>
                            </div>

                            <div className="space-y-3 my-4">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-400">Priority Booking Threshold</span>
                                    <span className="font-bold text-white">85% Complete</span>
                                </div>
                                {/* Clean Horizontal Progress Gauge Track Box */}
                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div style={{ width: '85%' }} className="h-full bg-white rounded-full" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/10 pt-4 w-full">
                                <span className="text-xs text-gray-400 font-normal">2 more dining events to unlock free valet pass</span>
                                <Icon icon="lucide:arrow-up-right" className="w-4 h-4 text-white cursor-pointer hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
}
