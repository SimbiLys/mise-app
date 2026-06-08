import React from 'react';
import { Icon } from '@iconify/react';

export default function SignIn({ setView }) {
    return (
        <div className="w-full min-h-screen bg-[#0E1116] text-white grid grid-cols-1 lg:grid-cols-12 overflow-x-hidden select-none">

            {/* 🧭 LEFT COLUMN: IMMERSIVE DETAIL SCREEN (WIDTH COMPRESSED FOR BETTER FOCUS) */}
            <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-16 overflow-hidden border-r border-white/10">

                {/* INCREASED IMAGE VISIBILITY BACKDROP CONTAINER */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/sign.jpg"
                        alt="Mise Culinary Ambience"
                        className="w-full h-full object-cover opacity-40 filter brightness-[0.70] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0E1116]/80 pointer-events-none" />
                </div>

                {/* 🌟 THIS IS EXACTLY WHERE YOU INSERT THE MISE LOGO IMAGE */}
                <div className="relative z-10 flex flex-col gap-3 text-left">
                    <div className="flex items-center gap-4">
                        {/* LOGO IMAGE HOOK: If you have a logo.png file, uncomment the line below and delete the circle div! */}
                        {/* <img src="/logo.png" className="w-12 h-12 object-contain" alt="Mise Logo" /> */}
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-base font-serif bg-white/5 backdrop-blur-sm font-bold text-[#D4AF37]">M</div>

                        <div className="flex flex-col">
                            <span className="text-xl font-serif tracking-[0.25em] uppercase font-bold text-white">Mise</span>
                            <span className="text-[9px] tracking-[0.3em] uppercase text-white/40 font-bold">Reserve & Pre-Order</span>
                        </div>
                    </div>
                </div>

                {/* Headline block */}
                <div className="relative z-10 text-left space-y-4 my-auto max-w-sm">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold block">Exclusive Entry</span>
                    <h2 className="text-4xl font-serif tracking-normal leading-[1.25] font-medium text-white">
                        Your table is set.<br />
                        Your dish is ready.
                    </h2>
                </div>

                {/* Back navigation anchor */}
                <div className="relative z-10 text-left">
                    <button
                        onClick={() => setView('landing')}
                        className="text-xs uppercase tracking-widest text-white/50 hover:text-white flex items-center gap-2 transition-colors duration-300 group cursor-pointer"
                    >
                        <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to home
                    </button>
                </div>
            </div>

            {/* 📝 RIGHT COLUMN: MASSIVE ENLARGED CREDENTIALS PANEL */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center p-8 sm:p-16 md:p-24 bg-[#0E1116] relative z-10">

                {/* Switch Route Anchor */}
                <div className="absolute top-12 right-12 text-sm tracking-wide text-white/40">
                    New to Mise?{' '}
                    <button onClick={() => setView('signup')} className="text-white hover:underline font-bold transition-all ml-1 cursor-pointer">
                        Create account
                    </button>
                </div>

                {/* LARGER, FULLY DETAILED CARD FORM WRAPPER */}
                <div className="w-full max-w-xl bg-[#161B22] border border-white/5 rounded-[32px] p-8 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.5)] text-left space-y-8">

                    <div className="space-y-2 text-center sm:text-left">
                        <h3 className="text-3xl font-serif tracking-wide font-medium">Sign in to Mise</h3>
                        <p className="text-white/40 text-sm font-light tracking-wide">Let's get you started on your gourmet journey.</p>
                    </div>

                    {/* 3 SOCIAL BUTTON TIERS (Google, Apple, Facebook from screenshot) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button className="flex items-center justify-center gap-2.5 border border-white/10 bg-white/5 rounded-xl py-4 text-xs tracking-wider uppercase font-bold hover:bg-white/10 transition-colors cursor-pointer">
                            <Icon icon="logos:google-icon" className="w-4 h-4" /> Google
                        </button>
                        <button className="flex items-center justify-center gap-2.5 border border-white/10 bg-white/5 rounded-xl py-4 text-xs tracking-wider uppercase font-bold hover:bg-white/10 transition-colors cursor-pointer">
                            <Icon icon="ri:apple-fill" className="w-4 h-4 text-white" /> Apple
                        </button>
                        <button className="flex items-center justify-center gap-2.5 border border-white/10 bg-white/5 rounded-xl py-4 text-xs tracking-wider uppercase font-bold hover:bg-white/10 transition-colors cursor-pointer">
                            <Icon icon="logos:facebook" className="w-4 h-4" /> Facebook
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center py-2">
                        <div className="w-full border-t border-white/5" />
                        <span className="absolute bg-[#161B22] px-4 text-[9px] uppercase tracking-[0.25em] text-white/30 font-bold select-none">or</span>
                    </div>

                    {/* COMPREHENSIVE INPUT BOXES WITH EMBEDDED ICONS */}
                    <div className="space-y-5">
                        {/* Email field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Email Address</label>
                            <div className="w-full bg-[#0E1116] border border-white/10 rounded-xl px-4 py-4 flex items-center gap-3.5 focus-within:border-white/30 transition-colors shadow-inner">
                                <Icon icon="lucide:mail" className="text-white/30 w-4 h-4 flex-shrink-0" />

                            </div>
                        </div>

                        {/* Password field */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Password</label>
                                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] hover:underline cursor-pointer font-bold">Forgot?</span>
                            </div>
                            <div className="w-full bg-[#0E1116] border border-white/10 rounded-xl px-4 py-4 flex items-center gap-3.5 focus-within:border-white/30 transition-colors shadow-inner">
                                <Icon icon="lucide:lock" className="text-white/30 w-4 h-4 flex-shrink-0" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full text-sm bg-transparent text-white placeholder-white/20 focus:outline-none font-medium tracking-widest"
                                />
                                <button className="text-white/30 hover:text-white transition-colors"><Icon icon="lucide:eye" className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>

                    {/* Keep logged selector option row */}
                    <div className="flex items-center gap-3 cursor-pointer group pt-1">
                        <input type="checkbox" id="keep-signed" className="w-4 h-4 rounded border-white/10 accent-white cursor-pointer" />
                        <label htmlFor="keep-signed" className="text-xs text-white/40 font-light select-none group-hover:text-white/70 transition-colors cursor-pointer">
                            Keep me signed in
                        </label>
                    </div>

                    {/* MAIN ENLARGED BUTTON */}
                    <button className="w-full bg-white text-black text-xs font-bold py-4.5 rounded-xl uppercase tracking-[0.25em] hover:bg-zinc-200 transition-colors duration-500 shadow-2xl flex items-center justify-center gap-2 cursor-pointer font-sans">
                        Sign In As Client <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </div>
    );
}
