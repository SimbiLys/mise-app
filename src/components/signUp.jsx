import React from 'react';
import { Icon } from '@iconify/react';

export default function SignUp({ setView }) {
    return (
        <div className="w-full min-h-screen bg-[#0E1116] text-white grid grid-cols-1 lg:grid-cols-12 overflow-hidden select-none">

            {/* LEFT COLUMN DETAILS GRID */}
            <div className="hidden lg:flex lg:col-span-7 relative flex-col justify-between p-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/sign.jpg"
                        alt="Mise Culinary Ambience"
                        className="w-full h-full object-cover opacity-25 filter brightness-[0.60] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E1116] pointer-events-none" />
                </div>

                <div className="relative z-10 flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-serif tracking-widest bg-white/5 backdrop-blur-sm">M</div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm font-serif tracking-[0.2em] uppercase font-bold">Mise</span>
                            <span className="text-[7px] tracking-[0.3em] uppercase text-white/40 font-semibold">Reserve & Pre-Order</span>
                        </div>
                    </div>
                    <button onClick={() => setView('landing')} className="text-[9px] uppercase tracking-widest text-white/50 hover:text-white flex items-center gap-1.5 transition-colors duration-300">
                        ← Back to home
                    </button>
                </div>

                <div className="relative z-10 text-left max-w-xl space-y-4 my-auto">
                    <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-bold block">Connoisseur Portfolio Access</span>
                    <h2 className="text-4xl md:text-[44px] font-serif tracking-normal leading-[1.2] font-medium text-white/95">
                        Join the global<br />
                        <span className="italic font-light">culinary desk.</span>
                    </h2>
                </div>
            </div>

            {/* RIGHT REGISTER INPUT FIELDS COLUMN */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center px-8 md:px-16 bg-[#0E1116] relative z-10 border-l border-white/5 py-12 overflow-y-auto">
                <div className="absolute top-12 right-12 text-[10px] tracking-wide text-white/40">
                    Already registered?{' '}
                    <button onClick={() => setView('signin')} className="text-white hover:underline font-bold transition-all ml-1">
                        Sign in
                    </button>
                </div>

                <div className="w-full max-w-md bg-[#161B22] border border-white/5 rounded-3xl p-8 shadow-2xl text-left space-y-5">
                    <div className="space-y-1">
                        <span className="text-[8px] uppercase tracking-[0.25em] text-white/40 block font-semibold">Concierge Access</span>
                        <h3 className="text-xl font-serif tracking-wide">Create Account</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Full Identity Name</label>
                            <input type="text" placeholder="Your name" className="w-full text-xs bg-[#0E1116] border border-white/10 rounded-xl px-4 py-3.5 placeholder-white/20 text-white focus:outline-none focus:border-white/30 transition-colors" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                            <input type="email" placeholder="you@example.com" className="w-full text-xs bg-[#0E1116] border border-white/10 rounded-xl px-4 py-3.5 placeholder-white/20 text-white focus:outline-none focus:border-white/30 transition-colors" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Choose Password</label>
                            <input type="password" placeholder="••••••••" className="w-full text-xs bg-[#0E1116] border border-white/10 rounded-xl px-4 py-3.5 placeholder-white/20 text-white focus:outline-none focus:border-white/30 transition-colors tracking-widest" />
                        </div>
                    </div>

                    <button className="w-full bg-white text-black text-[10px] font-bold py-4 rounded-xl uppercase tracking-[0.25em] hover:bg-zinc-200 transition-colors duration-500 shadow-xl font-sans mt-2">
                        Create Account
                    </button>
                </div>
            </div>

        </div>
    );
}
