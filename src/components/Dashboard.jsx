import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Dashboard({ setView }) {
    const [activeMenu, setActiveMenu] = useState('Dashboard');

    const menuItems = [
        { name: 'Dashboard', icon: 'lucide:layout-dashboard' },
        { name: 'Restaurants', icon: 'lucide:map-pin' },
        { name: 'Menu', icon: 'lucide:book-open' },
        { name: 'Order', icon: 'lucide:shopping-bag' },
        { name: 'Profile', icon: 'lucide:user' },
    ];

    const summaryCards = [
        { title: 'Restaurants', value: '24', label: 'Registered', icon: 'lucide:store' },
        { title: 'Reservations', value: '48', label: 'This week', icon: 'lucide:calendar' },
        { title: 'Orders', value: '73', label: 'This week', icon: 'lucide:shopping-bag' },
        { title: 'Total Spent', value: '$1,247', label: 'This week', icon: 'lucide:dollar-sign' },
    ];

    const topRestaurants = [
        { name: "The Garden Bistro", reservations: 12, image: "https://unsplash.com" },
        { name: "Ember Steakhouse", reservations: 7, image: "https://unsplash.com" },
        { name: "Ocean's Table", reservations: 9, image: "https://unsplash.com" },
        { name: "La Maison", reservations: 6, image: "https://unsplash.com" },
    ];

    const activities = [
        { title: "Reservation confirmed", desc: "The Garden Bistro", time: "2m ago", icon: "lucide:calendar-check", bg: "#F3F4F6" },
        { title: "Order completed", desc: "Ocean's Table", time: "1h ago", icon: "lucide:shopping-bag", bg: "#F3F4F6" },
        { title: "Reservation upcoming", desc: "Ember Steakhouse", time: "3h ago", icon: "lucide:calendar", bg: "#F3F4F6" },
        { title: "Order placed", desc: "La Maison", time: "5h ago", icon: "lucide:shopping-cart", bg: "#F3F4F6" },
    ];

    return (
        <div className="w-full min-h-screen bg-[#F8F9FA] text-[#111827] flex font-sans antialiased text-left">

            {/* 🧭 LEFT SIDEBAR */}
            <aside className="hidden lg:flex w-64 bg-white border-r border-gray-100 flex-col justify-between p-7 sticky top-0 h-screen z-20">
                <div className="space-y-12">
                    <div className="text-left px-2">
                        <span className="text-2xl font-serif tracking-[0.35em] uppercase font-bold text-gray-900 block select-none">
                            Mise
                        </span>
                    </div>

                    <nav className="flex flex-col gap-1">
                        {menuItems.map((item) => {
                            const isActive = activeMenu === item.name;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveMenu(item.name)}
                                    className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all group cursor-pointer"
                                    style={{
                                        backgroundColor: isActive ? '#F3F4F6' : 'transparent',
                                        color: isActive ? '#111827' : '#6B7280'
                                    }}
                                >
                                    <Icon icon={item.icon} className="w-4.5 h-4.5" fallback={<span>•</span>} />
                                    {item.name}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-5 px-1">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white text-sm font-semibold shadow-sm">
                            A
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm font-semibold text-gray-900 leading-tight">Admin</span>
                            <span className="text-xs text-gray-400 font-normal mt-0.5">admin@mise.com</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* 🍽️ MAIN WORKSPACE */}
            <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto max-w-[1440px] mx-auto w-full space-y-9">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                    <div className="space-y-1">
                        <h1 className="text-2xl md:text-3xl font-normal text-gray-900 flex items-center gap-2">
                            Welcome back, Admin 👋🏼
                        </h1>
                        <p className="text-gray-400 text-sm font-normal">
                            Here's what's happening with your dining experience.
                        </p>
                    </div>
                </div>

                {/* 📊 METRICS CARD GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {summaryCards.map((card, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between min-h-[140px] shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
                            <div className="flex justify-between items-start w-full">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{card.title}</span>
                                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                                    <Icon icon={card.icon} className="w-4 h-4 text-gray-800" fallback={<span>•</span>} />
                                </div>
                            </div>
                            <div className="space-y-0.5 mt-4">
                                <h3 className="text-3xl font-semibold tracking-tight text-gray-900">{card.value}</h3>
                                <p className="text-xs text-gray-400 font-normal">{card.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🛠️ CORE SECTOR */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">

                    {/* Left Column Stack */}
                    <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">

                        {/* 📈 LINE GRAPH CARD */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.015)] w-full">
                            <div className="flex justify-between items-start w-full mb-6">
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-gray-900">Booking trend</h4>
                                    <p className="text-xs text-gray-400 font-normal">Your reservations over time.</p>
                                </div>
                            </div>

                            <div className="relative w-full h-64 mt-8 flex flex-col justify-between">
                                <div className="absolute inset-0 z-10 pt-4 pb-8 pr-2">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 700 180" preserveAspectRatio="none">
                                        <line x1="0" y1="0" x2="700" y2="0" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="0" y1="90" x2="700" y2="90" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="0" y1="180" x2="700" y2="180" stroke="#E5E7EB" strokeWidth="1" />
                                        <path
                                            d="M 0 110 C 60 70, 70 50, 116 50 C 160 50, 180 110, 233 110 C 290 110, 310 50, 350 50 C 400 50, 420 100, 466 100 C 510 100, 550 20, 583 20 C 630 20, 650 70, 700 70"
                                            fill="none" stroke="#111827" strokeWidth="2"
                                        />
                                        <circle cx="583" cy="20" r="5" fill="#111827" />
                                    </svg>
                                </div>
                                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400 font-medium z-0 pl-1">
                                    <span>40</span><span>20</span><span>0</span>
                                </div>
                                <div className="w-full flex justify-between text-[11px] text-gray-400 font-medium border-t border-gray-100 pt-3 z-10 pl-8">
                                    <span>May 10</span><span>May 13</span><span>May 16</span>
                                </div>
                            </div>
                        </div>

                        {/* 🏨 TOP FAVORITES */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.015)] w-full">
                            <h4 className="text-sm font-bold text-gray-900 mb-6">Top favorite restaurants</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {topRestaurants.map((res, index) => (
                                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 w-full">
                                        <div className="flex items-center gap-3.5">
                                            <img src={res.image} alt={res.name} className="w-11 h-11 rounded-xl object-cover border border-gray-100" />
                                            <div className="flex flex-col text-left">
                                                <span className="text-sm font-bold text-gray-900">{res.name}</span>
                                                <span className="text-xs text-gray-400 font-normal mt-0.5">{res.reservations} reservations</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* 🕒 RIGHT COLUMN: ACTIVITY LOG */}
                    <div className="col-span-1 lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.015)] w-full">
                        <h4 className="text-sm font-bold text-gray-900 mb-6">Your activity</h4>
                        <div className="flex flex-col gap-5 w-full">
                            {activities.map((act, idx) => (
                                <div key={idx} className="flex items-start justify-between w-full group py-0.5">
                                    <div className="flex items-center gap-3.5">
                                        <div style={{ backgroundColor: act.bg }} className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Icon icon={act.icon} className="w-4 h-4 text-gray-800" fallback={<span>•</span>} />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-sm font-bold text-gray-900 leading-tight">{act.title}</span>
                                            <span className="text-xs text-gray-400 font-normal mt-1">{act.desc}</span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400 font-normal flex-shrink-0 pt-0.5">{act.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}
