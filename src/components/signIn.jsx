import React from 'react';
import { Icon } from '@iconify/react';

export default function SignIn({ setView }) {
    return (
        <div className="w-full min-h-screen bg-[#F9F8F6] text-[#1C1B1A] grid grid-cols-1 lg:grid-cols-12 overflow-hidden select-none">

            {/* 🧭 LEFT COLUMN: FULLY VISIBLE LUXURY IMAGE (NO DARK OVERLAYS) */}
            <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-16 overflow-hidden border-r border-black/10">

                {/* CRISP, CLEAR IMAGE BACKDROP */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/sign.jpg"
                        alt="Mise Culinary Ambience"
                        className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.00]"
                    />
                    {/* Subtle light vignette just to protect top logo text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 🌟 CHOSEN SLOT FOR YOUR MISE LOGO IMAGE */}
                <div className="relative z-10 flex flex-col gap-3 text-left">
                    <div className="flex items-center gap-4">
                        {/* <img src="/logo.png" className="w-12 h-12 object-contain" alt="Mise Logo" /> */}
                        <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-base font-serif bg-white/80 backdrop-blur-sm font-bold text-[#2C4A3E]">M</div>

                        <div className="flex flex-col">
                            <span className="text-xl font-serif tracking-[0.25em] uppercase font-bold text-[#1C1B1A]">Mise</span>
                            <span className="text-[9px] tracking-[0.3em] uppercase text-black/40 font-bold">Reserve & Pre-Order</span>
                        </div>
                    </div>
                </div>

                {/* Headline text */}
                <div className="relative z-10 text-left space-y-4 my-auto max-w-sm">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#2C4A3E] font-bold block">Exclusive Entry</span>
                    <h2 className="text-4xl font-serif tracking-normal leading-[1.25] font-medium text-[#1C1B1A]">
                        Your table is set.<br />
                        Your dish is ready.
                    </h2>
                </div>

                {/* Back navigation option link */}
                <div className="relative z-10 text-left">
                    <button
                        onClick={() => setView('landing')}
                        className="text-xs uppercase tracking-widest text-black/50 hover:text-black flex items-center gap-2 transition-colors duration-300 group cursor-pointer font-semibold"
                    >
                        <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to home
                    </button>
                </div>
            </div>

            {/* 📝 RIGHT COLUMN: SPACIOUS PURE WHITE LIGHT THEME FORM PANEL */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center p-8 sm:p-16 md:p-24 bg-[#F9F8F6] relative z-10">

                {/* Switch Route Link */}
                <div className="absolute top-12 right-12 text-sm tracking-wide text-black/40">
                    New to Mise?{' '}
                    <button onClick={() => setView('signup')} className="text-black hover:underline font-bold transition-all ml-1 cursor-pointer">
                        Create account
                    </button>
                </div>

                {/* LARGER, LIGHT CANVAS CARD FORM WRAPPER (PURE DAYLIGHT WHITE) */}
                <div className="w-full max-w-xl bg-white border border-black/10 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-left space-y-8">

                    <div className="space-y-2 text-center sm:text-left">
                        <h3 className="text-3xl font-serif tracking-wide font-medium text-[#1C1B1A]">Sign in to Mise</h3>
                        <p className="text-black/40 text-sm font-light tracking-wide">Let's get you started on your gourmet journey.</p>
                    </div>

                    {/* Social login option columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button className="flex items-center justify-center gap-2.5 border border-black/10 bg-[#F9F8F6] rounded-xl py-4 text-xs tracking-wider uppercase font-bold hover:bg-black/5 transition-colors cursor-pointer text-zinc-700">
                            <Icon icon="logos:google-icon" className="w-4 h-4" /> Google
                        </button>
                        <button className="flex items-center justify-center gap-2.5 border border-black/10 bg-[#F9F8F6] rounded-xl py-4 text-xs tracking-wider uppercase font-bold hover:bg-black/5 transition-colors cursor-pointer text-zinc-700">
                            <Icon icon="ri:apple-fill" className="w-4 h-4 text-black" /> Apple
                        </button>
                        <button className="flex items-center justify-center gap-2.5 border border-black/10 bg-[#F9F8F6] rounded-xl py-4 text-xs tracking-wider uppercase font-bold hover:bg-black/5 transition-colors cursor-pointer text-zinc-700">
                            <Icon icon="logos:facebook" className="w-4 h-4" /> Facebook
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center py-2">
                        <div className="w-full border-t border-black/10" />
                        <span className="absolute bg-white px-4 text-[9px] uppercase tracking-[0.25em] text-black/30 font-bold select-none">or use email</span>
                    </div>

                    {/* BRIGHT TEXT ENTRIES WITH CRISP INPUT FIELDS */}
                    <div className="space-y-5">
                        {/* Email Box */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Email Address</label>
                            <div className="w-full bg-[#F9F8F6] border border-black/10 rounded-xl px-4 py-4 flex items-center gap-3.5 focus-within:border-black/30 transition-colors">
                                <Icon icon="lucide:mail" className="text-black/30 w-4 h-4 flex-shrink-0" />

                            </div>
                        </div>

                        {/* Password Box */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Password</label>
                                <span className="text-[10px] uppercase tracking-widest text-[#2C4A3E] hover:underline cursor-pointer font-bold">Forgot?</span>
                            </div>
                            <div className="w-full bg-[#F9F8F6] border border-black/10 rounded-xl px-4 py-4 flex items-center gap-3.5 focus-within:border-black/30 transition-colors">
                                <Icon icon="lucide:lock" className="text-black/30 w-4 h-4 flex-shrink-0" />
                                <input
                                    type="password"
                                    placeholder="Password credentials"
                                    className="w-full text-sm bg-transparent text-[#1C1B1A] placeholder-black/30 focus:outline-none font-medium tracking-widest"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer group pt-1">
                        <input type="checkbox" id="keep-signed-light" className="w-4 h-4 rounded border-black/10 accent-black cursor-pointer" />
                        <label htmlFor="keep-signed-light" className="text-xs text-black/50 font-light select-none group-hover:text-black transition-colors cursor-pointer">
                            Keep me signed in
                        </label>
                    </div>

                    {/* PURE LUXURY DARK SUBMIT BUTTON */}
                    <button className="w-full bg-[#1C1B1A] text-white text-xs font-bold py-4.5 rounded-xl uppercase tracking-[0.25em] hover:bg-zinc-800 transition-colors duration-500 shadow-lg flex items-center justify-center gap-2 cursor-pointer font-sans">
                        Sign In As Client <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </div>
    );
}
