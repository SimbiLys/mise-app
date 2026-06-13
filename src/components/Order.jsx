import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Order({ selectedMeal, setView }) {
    const defaultMeal = {
        name: "Sushi & Ramen Combo",
        restaurant: "The Garden Bistro",
        price: "8,500 RWF",
        image: "/slider (1).jpg",
        desc: "A magnificent 24-hour slow-simmered rich aromatic broth layered with complex red chili tare, fresh springy noodles, and perfectly tender rolled proteins paired with premium house hand-rolled sushi."
    };

    const meal = selectedMeal || defaultMeal;

    // States
    const [reserveDate, setReserveDate] = useState('2026-06-12');
    const [reserveTime, setReserveTime] = useState('19:00');
    const [seatsCount, setSeatsCount] = useState('2');
    const [includePreOrder, setIncludePreOrder] = useState(true);
    const [dietary, setDietary] = useState('');
    const [specialNotes, setSpecialNotes] = useState('');

    return (
        <div className="w-full min-h-screen bg-[#FAFAFA] text-zinc-900 flex font-sans antialiased select-none">
            <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto max-w-[1600px] mx-auto w-full space-y-10">

                {/* 🔝 BOLD DYNAMIC HEADER BLOCK */}
                <div className="flex flex-col gap-2 w-full border-b-2 border-zinc-200 pb-6 text-left">
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-zinc-950 tracking-tight">
                        Secure Your Dining Table
                    </h1>
                    <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl">
                        Review your premium selections, configure reservation parameters, and finalize tableside pre-orders.
                    </p>
                </div>

                {/* 💳 PREMIUM HERO GRID STAGE */}
                <div className="w-full bg-white border-2 border-zinc-950 rounded-[32px] p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(9,9,11,1)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative overflow-hidden">

                    {/* LEFT COLUMN: VISUAL CULINARY SHOWCASE (5 COLS) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:border-r-2 lg:border-zinc-100 lg:pr-10 text-left">
                        <div className="space-y-6">
                            {/* Cinematic Large Image Showcase */}
                            <div className="w-full h-80 rounded-2xl overflow-hidden border-2 border-zinc-950 shadow-md relative group">
                                <img src={meal.image} alt={meal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <span className="absolute top-4 left-4 text-xs font-black uppercase tracking-widest bg-amber-500 text-black px-4 py-2 rounded-lg shadow-sm border border-zinc-950">
                                    ★ Selected Masterpiece
                                </span>
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950 leading-tight">
                                    {meal.name}
                                </h2>
                                <span className="inline-flex items-center gap-2 text-xl text-amber-600 font-extrabold bg-amber-50 px-3 py-1 rounded-md border border-amber-200/60">
                                    <Icon icon="lucide:utensils" className="w-5 h-5" />
                                    {meal.restaurant}
                                </span>
                            </div>

                            <div className="space-y-2 pt-2 border-t border-zinc-100">
                                <span className="text-xs font-black tracking-widest text-zinc-400 uppercase block">
                                    Culinary Profile Description
                                </span>
                                <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                                    {meal.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: ACTION METRICS PANEL (7 COLS) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-10 lg:pl-4 text-left">

                        <div className="space-y-8">
                            <div className="flex items-center gap-2 border-b border-zinc-100 pb-2">
                                <Icon icon="lucide:sliders" className="text-zinc-950 w-6 h-6" />
                                <span className="text-sm font-black tracking-widest text-zinc-950 uppercase block">
                                    Reservation Metrics Setup
                                </span>
                            </div>

                            {/* Main Parameter Inputs Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Date Box */}
                                <div className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl px-5 py-4 flex items-center gap-4 transition-all focus-within:border-zinc-950 focus-within:bg-white shadow-sm">
                                    <Icon icon="lucide:calendar" className="text-zinc-400 w-6 h-6 flex-shrink-0" />
                                    <div className="flex flex-col w-full">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Date</span>
                                        <input
                                            type="date"
                                            value={reserveDate}
                                            onChange={(e) => setReserveDate(e.target.value)}
                                            className="w-full text-base bg-transparent text-zinc-950 font-black focus:outline-none pt-0.5"
                                        />
                                    </div>
                                </div>

                                {/* Time Box */}
                                <div className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl px-5 py-4 flex items-center gap-4 transition-all focus-within:border-zinc-950 focus-within:bg-white shadow-sm relative">
                                    <Icon icon="lucide:clock" className="text-zinc-400 w-6 h-6 flex-shrink-0" />
                                    <div className="flex flex-col w-full">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Arrival Time</span>
                                        <select
                                            value={reserveTime}
                                            onChange={(e) => setReserveTime(e.target.value)}
                                            className="w-full text-base bg-transparent text-zinc-950 font-black focus:outline-none appearance-none cursor-pointer pt-0.5"
                                        >
                                            <option value="12:00">12:00 PM</option>
                                            <option value="14:00">2:00 PM</option>
                                            <option value="17:00">5:00 PM</option>
                                            <option value="19:00">7:00 PM</option>
                                            <option value="21:00">9:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Seats Box */}
                                <div className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl px-5 py-4 flex items-center gap-4 transition-all focus-within:border-zinc-950 focus-within:bg-white shadow-sm">
                                    <Icon icon="lucide:users" className="text-zinc-400 w-6 h-6 flex-shrink-0" />
                                    <div className="flex flex-col w-full">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Party Size</span>
                                        <select
                                            value={seatsCount}
                                            onChange={(e) => setSeatsCount(e.target.value)}
                                            className="w-full text-base bg-transparent text-zinc-950 font-black focus:outline-none appearance-none cursor-pointer pt-0.5"
                                        >
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="4">4 Guests</option>
                                            <option value="6">6 Guests</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Tailored Preferences Group */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <span className="text-xs font-black tracking-widest text-zinc-950 uppercase block pl-1">Dietary Exclusions</span>
                                    <input
                                        type="text"
                                        placeholder="Allergies, Vegan, Nut-free restrictions..."
                                        value={dietary}
                                        onChange={(e) => setDietary(e.target.value)}
                                        className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-2xl px-5 py-4 text-base text-zinc-950 font-semibold focus:outline-none focus:border-zinc-950 focus:bg-white transition-all shadow-sm placeholder-zinc-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-xs font-black tracking-widest text-zinc-950 uppercase block pl-1">Special Table Placement</span>
                                    <input
                                        type="text"
                                        placeholder="Window seat, quiet corner, event setup..."
                                        value={specialNotes}
                                        onChange={(e) => setSpecialNotes(e.target.value)}
                                        className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-2xl px-5 py-4 text-base text-zinc-950 font-semibold focus:outline-none focus:border-zinc-950 focus:bg-white transition-all shadow-sm placeholder-zinc-400"
                                    />
                                </div>
                            </div>

                            {/* Map Proximity Tracking Component */}
                            <div className="space-y-3 pt-2">
                                <span className="text-xs font-black tracking-widest text-zinc-400 uppercase block">
                                    Spatial Verification Map
                                </span>
                                <div className="w-full h-44 bg-zinc-50 border-2 border-zinc-200 rounded-[24px] relative overflow-hidden shadow-inner">
                                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="flex items-center justify-between w-full relative max-w-lg">
                                            <div className="w-14 h-14 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-lg z-10 border border-zinc-800">
                                                <Icon icon="lucide:user" className="w-6 h-6" />
                                            </div>
                                            <div className="absolute left-6 right-6 h-1 border-dashed border-t-4 border-zinc-300"></div>
                                            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-black flex items-center justify-center shadow-lg z-10 border-2 border-zinc-950 animate-bounce">
                                                <Icon icon="lucide:map-pin" className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Proximity Indicators */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-zinc-950 text-white px-6 py-4 rounded-2xl border-2 border-zinc-950 shadow-md gap-4">
                                    <div className="flex items-center gap-3 text-base font-bold">
                                        <Icon icon="lucide:navigation" className="w-6 h-6 text-amber-400 animate-pulse" />
                                        <span>Proximity Indicator: <b className="text-amber-400 text-lg font-black tracking-wide">1.2 KM Away</b></span>
                                    </div>
                                    <label className="flex items-center gap-3 cursor-pointer text-base font-black tracking-wide select-none bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl">
                                        <input
                                            type="checkbox"
                                            checked={includePreOrder}
                                            onChange={(e) => setIncludePreOrder(e.target.checked)}
                                            className="rounded accent-amber-500 cursor-pointer w-5 h-5 border-zinc-700"
                                        />
                                        Active Pre-order
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Financial Processing Base Checkout Section */}
                        <div className="border-t-2 border-zinc-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
                            <div className="flex flex-col text-center sm:text-left space-y-1">
                                <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                                    Total Combined Price
                                </span>
                                <span className="text-4xl font-serif font-black text-zinc-950 tracking-tight">
                                    {meal.price}
                                </span>
                            </div>
                            <button className="bg-zinc-950 hover:bg-zinc-900 hover:scale-[1.02] active:scale-[0.98] text-white font-black text-lg tracking-wide rounded-2xl px-10 py-5 transition-all shadow-[4px_4px_0px_0px_rgba(245,158,11,1)] flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto">
                                <Icon icon="lucide:calendar-check" className="w-6 h-6 text-amber-400" />
                                Confirm Reservation & Order
                            </button>
                        </div>

                    </div>

                </div>

                {/* 📜 HISTORICAL RECORDS */}
                <div className="space-y-5 pt-4 text-left">
                    <h3 className="text-2xl md:text-3xl font-serif font-black tracking-tight text-zinc-950">
                        Past Verification History
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 bg-white border-2 border-zinc-200 rounded-2xl flex items-center justify-between gap-4 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-zinc-50 flex items-center justify-center border-2 border-zinc-100">
                                    <Icon icon="lucide:calendar-days" className="w-7 h-7 text-zinc-800" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-black text-zinc-950">Table Booking Verified</span>
                                    <span className="text-sm text-zinc-400 font-bold font-mono">09/23 — 2 Seats</span>
                                </div>
                            </div>
                            <Icon icon="lucide:check-circle-2" className="w-7 h-7 text-emerald-500" />
                        </div>
                        <div className="p-6 bg-white border-2 border-zinc-200 rounded-2xl flex items-center justify-between gap-4 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-zinc-50 flex items-center justify-center border-2 border-zinc-100">
                                    <Icon icon="lucide:utensils" className="w-7 h-7 text-zinc-800" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-black text-zinc-950">Pre-order Mix Confirmed</span>
                                    <span className="text-sm text-zinc-400 font-bold font-mono">Sushi Platter Standard</span>
                                </div>
                            </div>
                            <Icon icon="lucide:check-circle-2" className="w-7 h-7 text-emerald-500" />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}