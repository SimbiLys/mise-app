import React from 'react';
import { Icon } from '@iconify/react';

export default function SignIn({ setView }) {
    return (
        <div className="w-full min-h-screen bg-[#0E1116] text-white grid grid-cols-1 lg:grid-cols-12 overflow-hidden select-none">

            {/* 🧭 LEFT COLUMN: HERO DETAIL VIEW */}
            <div className="hidden lg:flex lg:col-span-7 relative flex-col justify-between p-16 overflow-hidden">
                {/* Immersive Left Backdrop Asset */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/sign.jpg"
                        alt="Mise Culinary Ambience"
                        className="w-full h-full object-cover opacity-25 filter brightness-[0.60] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E1116] pointer-events-none" />
                </div>

                {/* Top Branding Block */}
                <div className="relative z-10 flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                        {/* LOGO PLACEHOLDER: Swap with <img src="/logo.png" className="w-8 h-8" /> if you have a file */}
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-serif tracking-widest bg-white/5 backdrop-blur-sm">M</div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm font-serif tracking-[0.2em] uppercase font-bold">Mise</span>
                            <span className="text-[7px] tracking-[0.3em] uppercase text-white/40 font-semibold">Reserve & Pre-Order</span>
                        </div>
                    </div>

                    {/* Back Home Navigation Action Link */}
                    <button
                        onClick={() => setView('landing')}
                        className="text-[9px] uppercase tracking-widest text-white/50 hover:text-white flex items-center gap-1.5 transition-colors duration-300"
                    >
                        ← Back to home
                    </button>
                </div>

                {/* Centered Editorial Typography Headline */}
                <div className="relative z-10 text-left max-w-xl space-y-4 my-auto">
                    <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-bold block">City · Cuisine · Tonight</span>
                    <h2 className="text-4xl md:text-[44px] font-serif tracking-normal leading-[1.2] font-medium text-white/95">
                        Your table is set.<br />
                        Your dish is ready.
                    </h2>
                    <p className="text-white/50 text-xs tracking-wider leading-relaxed font-light font-sans max-w-md antialiased">
                        Discover restaurants you'll love, reserve your table, and pre-order before you even arrive — no waiting on a packed Friday night.
                    </p>
                </div>
            </div>

            {/* 📝 RIGHT COLUMN: SLICK BLACK CREDENTIALS CONSOLE CARD */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center px-8 md:px-16 bg-[#0E1116] relative z-10 border-l border-white/5">

                {/* Upper Right Switch Path Navigation label */}
                <div className="absolute top-12 right-12 text-[10px] tracking-wide text-white/40">
                    New to Mise?{' '}
                    <button onClick={() => setView('signup')} className="text-white hover:underline font-bold transition-all ml-1">
                        Create account
                    </button>
                </div>

                {/* Center Card Blueprint Body */}
                <div className="w-full max-w-md bg-[#161B22] border border-white/5 rounded-3xl p-8 shadow-2xl text-left space-y-6">
                    <div className="space-y-1">
                        <span className="text-[8px] uppercase tracking-[0.25em] text-white/40 block font-semibold">Welcome Back</span>
                        <h3 className="text-xl font-serif tracking-wide">Sign in to Mise</h3>
                    </div>

                    {/* Social Single-Sign-On Layout Blocks from screenshot */}
                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 rounded-xl py-3 text-[10px] tracking-wider uppercase font-semibold hover:bg-white/10 transition-colors">
                            <Icon icon="logos:google-icon" className="w-3.5 h-3.5" /> Google
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 rounded-xl py-3 text-[10px] tracking-wider uppercase font-semibold hover:bg-white/10 transition-colors">
                            <Icon icon="ri:apple-fill" className="w-3.5 h-3.5" /> Apple
                        </button>
                    </div>

                    {/* Minimalist Divider Line */}
                    <div className="relative flex items-center justify-center py-2">
                        <div className="w-full border-t border-white/5" />
                        <span className="absolute bg-[#161B22] px-3 text-[8px] uppercase tracking-[0.2em] text-white/30 font-bold">Or continue with email</span>
                    </div>

                    {/* Core Input Parameter Fields */}
                    <div className="space-y-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full text-xs bg-[#0E1116] border border-white/10 rounded-xl px-4 py-3.5 placeholder-white/20 text-white focus:outline-none focus:border-white/30 transition-colors font-medium shadow-inner"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Password</label>
                                <span className="text-[8px] uppercase tracking-widest text-white/40 hover:underline cursor-pointer font-bold">Forgot?</span>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full text-xs bg-[#0E1116] border border-white/10 rounded-xl px-4 py-3.5 placeholder-white/20 text-white focus:outline-none focus:border-white/30 transition-colors font-medium shadow-inner tracking-widest"
                            />
                        </div>
                    </div>

                    {/* Persistent Stay Logged option checkbox fields */}
                    <div className="flex items-center gap-2 cursor-pointer group pt-1">
                        <input type="checkbox" id="keep-signed-in" className="w-3.5 h-3.5 rounded border-white/10 accent-white" />
                        <label htmlFor="keep-signed-in" className="text-[10px] text-white/40 font-light select-none group-hover:text-white/70 transition-colors">
                            Keep me signed in
                        </label>
                    </div>

                    {/* Main Process Button */}
                    <button className="w-full bg-white text-black text-[10px] font-bold py-4 rounded-xl uppercase tracking-[0.25em] hover:bg-zinc-200 transition-colors duration-500 shadow-xl font-sans mt-2">
                        Sign In
                    </button>
                </div>

            </div>
        </div>
    );
}
