import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Order({ selectedMeal, setView }) {
    // 🍽️ Rich fallback default meal data with an image
    const defaultMeal = {
        name: "Sushi & Ramen Combo",
        restaurant: "The Garden Bistro",
        price: "8,500 RWF",
        image: "/slider (1).jpg", // Using your slider image asset
        desc: "A magnificent 24-hour slow-simmered rich aromatic broth layered with complex red chili tare, fresh springy noodles, and perfectly tender rolled proteins paired with premium house hand-rolled sushi."
    };

    const meal = selectedMeal || defaultMeal;

    // 📅 Reservation & Additional Feature States
    const [reserveDate, setReserveDate] = useState('2026-06-12');
    const [reserveTime, setReserveTime] = useState('19:00');
    const [seatsCount, setSeatsCount] = useState('2');
    const [includePreOrder, setIncludePreOrder] = useState(true);
    const [dietary, setDietary] = useState('');
    const [specialNotes, setSpecialNotes] = useState('');

    return (
        <div className="w-full min-h-screen bg-[#FDFDFD] text-gray-900 flex font-sans antialiased text-left select-none">
            <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto max-w-[1600px] mx-auto w-full space-y-12">

                {/* 🔝 UPPER HEADER BLOCK */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 w-full border-b border-gray-200/80 pb-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-black tracking-tight">
                            Detailed Reservation Order
                        </h1>
                        <p className="text-gray-500 text-lg font-normal tracking-wide">
                            Review item specifications, select your dining metrics, and finalize your table placement parameters.
                        </p>
                    </div>
                </div>

                {/* 💳 MAIN CONSOLIDATED CENTRAL STAGE CARD */}
                <div className="w-full bg-white border-2 border-zinc-200 rounded-3xl p-8 lg:p-10 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative overflow-hidden bg-gradient-to-b from-white to-[#FAFAFA]">

                    {/* LEFT COLUMN: MEAL SYNOPSIS & PHOTOGRAPHY HERO (5 COLS) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-r lg:border-zinc-200 lg:pr-8">
                        <div className="space-y-6">
                            {/* Rich Photographic Core Image */}
                            <div className="w-full h-64 rounded-2xl overflow-hidden border border-zinc-200 shadow-md relative">
                                <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                                <span className="absolute top-4 right-4 text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1.5 rounded-md shadow">
                                    Pre-Order Selected
                                </span>
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-black leading-tight">
                                    {meal.name}
                                </h2>
                                <span className="text-lg text-zinc-500 font-bold underline decoration-zinc-300 block">
                                    {meal.restaurant}
                                </span>
                            </div>

                            <div className="space-y-2 pt-2">
                                <span className="text-xs font-black tracking-wider text-zinc-400 uppercase block">
                                    Culinary Narrative Description
                                </span>
                                <p className="text-base text-zinc-700 leading-relaxed font-normal">
                                    {meal.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: INTERACTIVE UTILITIES & SPATIAL VERIFICATION (7 COLS) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-8 lg:pl-4">

                        {/* Upper Inputs Grid */}
                        <div className="space-y-6">
                            <span className="text-xs font-black tracking-wider text-zinc-400 uppercase block">
                                Reservation Parameter Setup
                            </span>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Date Input */}
                                <div className="bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm focus-within:border-black transition-colors">
                                    <Icon icon="lucide:calendar" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                                    <input
                                        type="date"
                                        value={reserveDate}
                                        onChange={(e) => setReserveDate(e.target.value)}
                                        className="w-full text-base bg-transparent text-black font-bold focus:outline-none"
                                    />
                                </div>

                                {/* Time Input */}
                                <div className="bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm focus-within:border-black transition-colors">
                                    <Icon icon="lucide:clock" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                                    <select
                                        value={reserveTime}
                                        onChange={(e) => setReserveTime(e.target.value)}
                                        className="w-full text-base bg-transparent text-black font-bold focus:outline-none appearance-none cursor-pointer"
                                    >
                                        <option value="12:00">12:00 PM</option>
                                        <option value="14:00">2:00 PM</option>
                                        <option value="17:00">5:00 PM</option>
                                        <option value="19:00">7:00 PM</option>
                                        <option value="21:00">9:00 PM</option>
                                    </select>
                                </div>

                                {/* Seats Input */}
                                <div className="bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm focus-within:border-black transition-colors">
                                    <Icon icon="lucide:users" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                                    <select
                                        value={seatsCount}
                                        onChange={(e) => setSeatsCount(e.target.value)}
                                        className="w-full text-base bg-transparent text-black font-bold focus:outline-none appearance-none cursor-pointer"
                                    >
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Seats</option>
                                        <option value="4">4 Seats</option>
                                        <option value="6">6 Seats</option>
                                        <option value="8">8 Seats</option>
                                    </select>
                                </div>
                            </div>

                            {/* EXTRA ATTRACTIVE FEATURES: DIETARY RESTRICTIONS & SPECIAL NOTES */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <span className="text-xs font-black tracking-wider text-zinc-500 uppercase block pl-0.5">Dietary Restrictions?</span>
                                    <input
                                        type="text"
                                        placeholder="e.g., Allergies, Vegan, Nut-free..."
                                        value={dietary}
                                        onChange={(e) => setDietary(e.target.value)}
                                        className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 text-base text-black font-medium focus:outline-none focus:border-black transition-colors shadow-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <span className="text-xs font-black tracking-wider text-zinc-500 uppercase block pl-0.5">Special Requests?</span>
                                    <input
                                        type="text"
                                        placeholder="e.g., Window seat, Anniversary setup..."
                                        value={specialNotes}
                                        onChange={(e) => setSpecialNotes(e.target.value)}
                                        className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 text-base text-black font-medium focus:outline-none focus:border-black transition-colors shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* BREATHEY MAP AND SPATIAL CLARITY HOUSING */}
                            <div className="space-y-3 pt-2">
                                <span className="text-xs font-black tracking-wider text-zinc-400 uppercase block">
                                    Location Spatial Alignment
                                </span>
                                <div className="w-full h-40 bg-zinc-50 border-2 border-zinc-200 rounded-2xl relative overflow-hidden shadow-inner">
                                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="flex items-center justify-between w-full relative max-w-md">
                                            <div className="w-12 h-12 rounded-2xl bg-black border-2 border-white flex items-center justify-center text-white shadow-md z-10">
                                                <Icon icon="lucide:user" className="w-5 h-5" />
                                            </div>
                                            <div className="absolute left-6 right-6 h-0.5 border-dashed border-t-2 border-zinc-400"></div>
                                            <div className="w-12 h-12 rounded-2xl bg-zinc-200 border-2 border-white flex items-center justify-center text-zinc-900 shadow-md z-10 animate-pulse">
                                                <Icon icon="lucide:map-pin" className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Distance Verification Badge */}
                                <div className="flex items-center justify-between bg-zinc-100/80 border border-zinc-300/60 px-4 py-3.5 rounded-xl">
                                    <div className="flex items-center gap-2.5 text-base text-zinc-800 font-semibold">
                                        <Icon icon="lucide:navigation" className="w-5 h-5 text-zinc-600" />
                                        <span>Proximity Indicator: <b className="text-black font-black underline">1.2 KM Away</b></span>
                                    </div>
                                    <label className="flex items-center gap-2.5 cursor-pointer text-base font-bold text-black select-none">
                                        <input
                                            type="checkbox"
                                            checked={includePreOrder}
                                            onChange={(e) => setIncludePreOrder(e.target.checked)}
                                            className="rounded border-zinc-400 accent-black cursor-pointer w-5 h-5"
                                        />
                                        Pre-order Items?
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Financial Processing Base */}
                        <div className="border-t border-zinc-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
                            <div className="flex flex-col text-center sm:text-left">
                                <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                                    Total Evaluation Price
                                </span>
                                <span className="text-3xl font-serif font-black text-black tracking-wide">
                                    {meal.price}
                                </span>
                            </div>
                            <button className="bg-black hover:bg-zinc-900 text-white font-bold text-base tracking-wide rounded-xl px-8 py-4 transition-all shadow-md w-full sm:w-auto flex items-center justify-center gap-3 cursor-pointer">
                                <Icon icon="lucide:calendar-check" className="w-5 h-5" />
                                Confirm Reservation & Order
                            </button>
                        </div>

                    </div>

                </div>

                {/* 📜 HISTORICAL ARCHIVES GRID */}
                <div className="space-y-4 pt-4">
                    <h3 className="text-2xl font-serif font-bold tracking-tight text-black">
                        Reservation & Order History
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 bg-white border-2 border-zinc-200 rounded-2xl flex items-center justify-between gap-4 shadow-sm hover:border-zinc-400 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center border border-zinc-200">
                                    <Icon icon="lucide:calendar-days" className="w-6 h-6 text-zinc-700" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-bold text-black">Table Booking Verified</span>
                                    <span className="text-sm text-zinc-400 font-semibold font-mono">09/23 — 2 Seats</span>
                                </div>
                            </div>
                            <Icon icon="lucide:check-circle-2" className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div className="p-5 bg-white border-2 border-zinc-200 rounded-2xl flex items-center justify-between gap-4 shadow-sm hover:border-zinc-400 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center border border-zinc-200">
                                    <Icon icon="lucide:utensils" className="w-6 h-6 text-zinc-700" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-bold text-black">Pre-order Mix Confirmed</span>
                                    <span className="text-sm text-zinc-400 font-semibold font-mono">Sushi Platter Standard</span>
                                </div>
                            </div>
                            <Icon icon="lucide:check-circle-2" className="w-6 h-6 text-emerald-500" />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}