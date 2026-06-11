import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Order({ selectedMeal, setView }) {
    // 🍽️ Fallback default meal data if user clicks "Order" directly without selecting from Menu first
    const defaultMeal = {
        name: "Sushi & Ramen Combo",
        restaurant: "The Garden Bistro",
        price: "8,500 RWF",
        image: "/slider (1).jpg",
        desc: "A refreshing effervescent botanical extraction of macerated spring wild raspberries, fresh lime, structural carbonated mineral spring waters."
    };

    const meal = selectedMeal || defaultMeal;

    // 📅 Reservation States
    const [reserveDate, setReserveDate] = useState('2026-06-12');
    const [reserveTime, setReserveTime] = useState('19:00');
    const [seatsCount, setSeatsCount] = useState('2');
    const [includePreOrder, setIncludePreOrder] = useState(true);

    return (
        <div className="w-full min-h-screen bg-[#FDFDFD] text-gray-900 flex font-sans antialiased text-left select-none">
            <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto max-w-[1600px] mx-auto w-full space-y-12">

                {/* 🔝 UPPER HEADER BLOCK */}
                <div className="flex items-center justify-between gap-6 w-full border-b border-gray-200/80 pb-6">
                    <div className="space-y-1.5">
                        <h1 className="text-4xl font-serif font-semibold text-black tracking-tight">
                            Detailed Reservation Order
                        </h1>
                    </div>
                </div>

                {/* 💳 MAIN CONSOLIDATED CENTRAL CARD */}
                <div className="w-full bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* LEFT COLUMN: MEAL SYNOPSIS (5 COLS) */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-6 border-r border-zinc-100 pr-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-serif font-bold tracking-tight text-black leading-tight">
                                {meal.name}
                            </h2>
                            <p className="text-base text-zinc-500 font-medium tracking-wide">
                                {meal.restaurant}
                            </p>
                            <div className="space-y-1.5 pt-2">
                                <span className="text-xs font-black tracking-wider text-zinc-400 uppercase block">
                                    Short Description
                                </span>
                                <p className="text-base text-zinc-600 leading-relaxed">
                                    {meal.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: RESERVATION CONTROLS (3 COLS) */}
                    <div className="lg:col-span-3 flex flex-col space-y-4 border-r border-zinc-100 px-2">
                        <span className="text-xs font-black tracking-wider text-zinc-400 uppercase block pl-1">
                            Reservation Details
                        </span>

                        {/* Date Field */}
                        <div className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 flex items-center gap-3">
                            <Icon icon="lucide:calendar" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <input
                                type="date"
                                value={reserveDate}
                                onChange={(e) => setReserveDate(e.target.value)}
                                className="w-full text-base bg-transparent text-black font-medium focus:outline-none"
                            />
                        </div>

                        {/* Time Selector */}
                        <div className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 flex items-center gap-3">
                            <Icon icon="lucide:clock" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <select
                                value={reserveTime}
                                onChange={(e) => setReserveTime(e.target.value)}
                                className="w-full text-base bg-transparent text-black font-medium focus:outline-none appearance-none cursor-pointer"
                            >
                                <option value="12:00">12:00 PM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="17:00">5:00 PM</option>
                                <option value="19:00">7:00 PM</option>
                                <option value="21:00">9:00 PM</option>
                            </select>
                        </div>

                        {/* Seats Selector */}
                        <div className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 flex items-center gap-3">
                            <Icon icon="lucide:users" className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                            <select
                                value={seatsCount}
                                onChange={(e) => setSeatsCount(e.target.value)}
                                className="w-full text-base bg-transparent text-black font-medium focus:outline-none appearance-none cursor-pointer"
                            >
                                <option value="1">1 Person</option>
                                <option value="2">2 Seats</option>
                                <option value="4">4 Seats</option>
                                <option value="6">6 Seats</option>
                            </select>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: LOCATION SPATIAL MAP & EXECUTION (5 COLS) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pl-2">
                        <div className="space-y-3">
                            <span className="text-xs font-black tracking-wider text-zinc-400 uppercase block">
                                Location Map
                            </span>
                            {/* BREATHEY MINI MAP INTERFACE */}
                            <div className="w-full h-36 bg-zinc-100 rounded-xl relative overflow-hidden border border-zinc-200 shadow-inner">
                                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                {/* Center simulated spatial vector track */}
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="flex items-center justify-between w-full relative">
                                        <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-white flex items-center justify-center text-white shadow-md z-10">
                                            <Icon icon="lucide:user" className="w-4 h-4" />
                                        </div>
                                        <div className="absolute left-5 right-5 h-0.5 bg-gradient-to-r from-zinc-900 via-zinc-400 to-zinc-300 border-dashed border-t"></div>
                                        <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-zinc-800 shadow-md z-10">
                                            <Icon icon="lucide:map-pin" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Distance Info Node */}
                            <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200/60 p-3 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
                                    <Icon icon="lucide:navigation" className="w-4 h-4 text-zinc-500" />
                                    <span>Distance to Restaurant: <b>1.2 KM</b></span>
                                </div>
                                <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-black select-none">
                                    <input
                                        type="checkbox"
                                        checked={includePreOrder}
                                        onChange={(e) => setIncludePreOrder(e.target.checked)}
                                        className="rounded border-zinc-300 accent-black cursor-pointer w-4 h-4"
                                    />
                                    Pre-order Items?
                                </label>
                            </div>
                        </div>

                        {/* Action Base Footer */}
                        <div className="flex items-center justify-between gap-4 border-t border-zinc-100 pt-4">
                            <div className="flex flex-col">
                                <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                                    Final Evaluation Price
                                </span>
                                <span className="text-2xl font-serif font-black text-black">
                                    {meal.price}
                                </span>
                            </div>
                            <button className="bg-black hover:bg-zinc-900 text-white font-bold text-sm tracking-wide rounded-xl px-6 py-3.5 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer">
                                Confirm Reservation & Order
                            </button>
                        </div>

                    </div>

                </div>

                {/* 📜 HISTORICAL ARCHIVES */}
                <div className="space-y-4">
                    <h3 className="text-xl font-serif font-bold tracking-tight text-black">
                        Reservation & Order History
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="p-4 bg-white border border-zinc-200 rounded-xl flex items-center justify-between gap-3 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100"><Icon icon="lucide:calendar-days" className="w-5 h-5 text-zinc-600" /></div>
                                <div className="flex flex-col"><span className="text-sm font-bold text-black">Table Booking</span><span className="text-xs text-zinc-400 font-medium">09/23 — 2 Seats</span></div>
                            </div>
                            <Icon icon="lucide:check-circle" className="w-5 h-5 text-zinc-400" />
                        </div>
                        <div className="p-4 bg-white border border-zinc-200 rounded-xl flex items-center justify-between gap-3 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100"><Icon icon="lucide:check" className="w-5 h-5 text-zinc-600" /></div>
                                <div className="flex flex-col"><span className="text-sm font-bold text-black">Pre-order Mix</span><span className="text-xs text-zinc-400 font-medium">Sushi Platter Standard</span></div>
                            </div>
                            <Icon icon="lucide:check-circle" className="w-5 h-5 text-zinc-400" />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}