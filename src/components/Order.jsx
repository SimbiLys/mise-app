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

    // Reservation States
    const [reserveDate, setReserveDate] = useState('2026-06-12');
    const [reserveTime, setReserveTime] = useState('19:00');
    const [seatsCount, setSeatsCount] = useState('2');
    const [includePreOrder, setIncludePreOrder] = useState(true);
    const [dietary, setDietary] = useState('');
    const [specialNotes, setSpecialNotes] = useState('');

    return (
        <div className="w-full min-h-screen bg-[#FAFAFA] text-zinc-800 flex font-sans antialiased select-none">
            <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto max-w-[1400px] mx-auto w-full space-y-8">

                {/* 👑 SOPHISTICATED, REFINED HEADER */}
                <div className="flex flex-col gap-1 w-full border-b border-zinc-200/60 pb-5 text-left">
                    <h1 className="text-3xl md:text-4xl font-serif font-medium text-zinc-900 tracking-tight">
                        Detailed Reservation Order
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base font-normal">
                        Review your dining selections, specify table preferences, and finalize your pre-ordered items.
                    </p>
                </div>

                {/* 💳 CLEAN, ULTRA-PREMIUM MAIN STAGE CARD */}
                <div className="w-full bg-white border border-zinc-200/80 rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* LEFT COLUMN: VISUAL TEXTURE & DESCRIPTION (5 COLS) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-r lg:border-zinc-100 lg:pr-8 text-left">
                        <div className="space-y-5">
                            {/* Sleek Cinematic Image */}
                            <div className="w-full h-56 rounded-xl overflow-hidden border border-zinc-100 shadow-sm relative">
                                <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-zinc-900/90 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                                    Pre-Order Active
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-zinc-900">
                                    {meal.name}
                                </h2>
                                <div className="inline-flex items-center gap-1.5 text-sm text-amber-700 font-semibold bg-amber-50/60 px-2.5 py-0.5 rounded-md border border-amber-100">
                                    <Icon icon="lucide:utensils-crosses" className="w-3.5 h-3.5" />
                                    {meal.restaurant}
                                </div>
                            </div>

                            <div className="space-y-1 pt-3 border-t border-zinc-100">
                                <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase block">
                                    Culinary Profile Description
                                </span>
                                <p className="text-sm md:text-base text-zinc-500 leading-relaxed font-normal">
                                    {meal.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: REFINED INPUT CONTROLS & SPATIAL NODE (7 COLS) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-8 lg:pl-4 text-left">

                        <div className="space-y-6">
                            <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase block">
                                Reservation Settings
                            </span>

                            {/* Inputs Row with Crisp, Fine Borders */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {/* Date Input */}
                                <div className="bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all focus-within:border-zinc-400 focus-within:bg-white">
                                    <Icon icon="lucide:calendar" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                                    <div className="flex flex-col w-full">
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Date</span>
                                        <input
                                            type="date"
                                            value={reserveDate}
                                            onChange={(e) => setReserveDate(e.target.value)}
                                            className="w-full text-sm bg-transparent text-zinc-800 font-semibold focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Time Input */}
                                <div className="bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all focus-within:border-zinc-400 focus-within:bg-white">
                                    <Icon icon="lucide:clock" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                                    <div className="flex flex-col w-full">
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Arrival Time</span>
                                        <select
                                            value={reserveTime}
                                            onChange={(e) => setReserveTime(e.target.value)}
                                            className="w-full text-sm bg-transparent text-zinc-800 font-semibold focus:outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="19:00">7:00 PM</option>
                                            <option value="20:00">8:00 PM</option>
                                            <option value="21:00">9:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Party Size Input */}
                                <div className="bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all focus-within:border-zinc-400 focus-within:bg-white">
                                    <Icon icon="lucide:users" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                                    <div className="flex flex-col w-full">
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Party Size</span>
                                        <select
                                            value={seatsCount}
                                            onChange={(e) => setSeatsCount(e.target.value)}
                                            className="w-full text-sm bg-transparent text-zinc-800 font-semibold focus:outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="2">2 Guests</option>
                                            <option value="4">4 Guests</option>
                                            <option value="6">6 Guests</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Elegant Preferences Block */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block pl-0.5">Dietary Requests</span>
                                    <input
                                        type="text"
                                        placeholder="Allergies, restrictions..."
                                        value={dietary}
                                        onChange={(e) => setDietary(e.target.value)}
                                        className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-800 font-normal focus:outline-none focus:border-zinc-400 focus:bg-white transition-all placeholder-zinc-300"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block pl-0.5">Special Seating</span>
                                    <input
                                        type="text"
                                        placeholder="Window seat, quiet table..."
                                        value={specialNotes}
                                        onChange={(e) => setSpecialNotes(e.target.value)}
                                        className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-800 font-normal focus:outline-none focus:border-zinc-400 focus:bg-white transition-all placeholder-zinc-300"
                                    />
                                </div>
                            </div>

                            {/* Minimalist Map Tracking Frame */}
                            <div className="space-y-2.5 pt-1">
                                <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase block">
                                    Location Mapping
                                </span>
                                <div className="w-full h-24 bg-zinc-50/80 border border-zinc-200 rounded-xl relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:14px_16px]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center px-12">
                                        <div className="flex items-center justify-between w-full relative max-w-md">
                                            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center shadow-sm z-10">
                                                <Icon icon="lucide:user" className="w-4 h-4" />
                                            </div>
                                            <div className="absolute left-4 right-4 h-[1px] border-dashed border-t border-zinc-300"></div>
                                            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shadow-sm z-10 border border-amber-300/40">
                                                <Icon icon="lucide:map-pin" className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Proximity Status Sub-Bar */}
                                <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200/80 px-4 py-2.5 rounded-xl text-sm font-medium">
                                    <div className="flex items-center gap-2 text-zinc-600">
                                        <Icon icon="lucide:navigation" className="w-4 h-4 text-zinc-400" />
                                        <span>Restaurant Proximity: <b className="text-zinc-900">1.2 KM</b></span>
                                    </div>
                                    <label className="flex items-center gap-2 cursor-pointer text-zinc-700 select-none">
                                        <input
                                            type="checkbox"
                                            checked={includePreOrder}
                                            onChange={(e) => setIncludePreOrder(e.target.checked)}
                                            className="rounded border-zinc-300 accent-zinc-900 cursor-pointer w-4 h-4"
                                        />
                                        <span>Pre-order Attached</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Luxury-Tier Action Checkout Footer */}
                        <div className="border-t border-zinc-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
                            <div className="flex flex-col text-center sm:text-left">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                    Estimated Summary
                                </span>
                                <span className="text-2xl font-serif font-bold text-zinc-900">
                                    {meal.price}
                                </span>
                            </div>
                            <button className="bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm tracking-wide rounded-xl px-6 py-3.5 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                                <Icon icon="lucide:calendar-check" className="w-4 h-4 text-amber-400" />
                                Confirm Reservation & Order
                            </button>
                        </div>

                    </div>

                </div>

                {/* 📜 MINIMALIST ARCHIVES */}
                <div className="space-y-3 pt-2 text-left">
                    <h3 className="text-xl font-serif font-bold text-zinc-900">
                        Reservation History
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-4 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-between gap-3 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100">
                                    <Icon icon="lucide:calendar-days" className="w-5 h-5 text-zinc-500" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-zinc-800">Table Booking Verified</span>
                                    <span className="text-xs text-zinc-400 font-medium font-mono">09/23 — 2 Seats</span>
                                </div>
                            </div>
                            <Icon icon="lucide:check-circle-2" className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div className="p-4 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-between gap-3 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100">
                                    <Icon icon="lucide:utensils-crosses" className="w-5 h-5 text-zinc-500" />
                                </div>
                                <div className="flex flex-col">
                                    <Icon icon="lucide:cooking-pot" className="w-5 h-5 text-zinc-600" />
                                    <span className="text-sm font-semibold text-zinc-800">Pre-order Mix Confirmed</span>
                                    <span className="text-xs text-zinc-400 font-medium font-mono">Sushi Platter Standard</span>
                                </div>
                            </div>
                            <Icon icon="lucide:check-circle-2" className="w-5 h-5 text-emerald-500" />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}