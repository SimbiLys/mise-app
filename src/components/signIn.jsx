import React from 'react';
import { Icon } from '@iconify/react';

export default function SignIn({ setView }) {
    return (
        <div className="w-full min-h-screen bg-[#F3F4F6] text-[#111827] grid grid-cols-1 lg:grid-cols-2 overflow-hidden select-none font-sans">

            {/* 🖼️ LEFT COLUMN: IMAGE AND HERO TEXT (50% Width) */}
            <div className="hidden lg:flex relative flex-col justify-between p-12 overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/atrium.jpg"
                        alt="Mise Restaurant Ambience"
                        className="w-full h-full object-cover brightness-[0.90]"
                    />
                </div>

                {/* Top Header Row */}
                <div className="relative z-10 flex justify-between items-start w-full">
                    {/* Brand Logo Group */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-serif bg-white/15 backdrop-blur-md font-bold text-white">
                            M
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="text-lg font-serif tracking-[0.2em] uppercase font-semibold leading-tight">Mise</span>
                            <span className="text-[8px] tracking-[0.25em] uppercase text-white/60 font-medium">Reserve & Pre-Order</span>
                        </div>
                    </div>

                    {/* Back to Home Link */}
                    <button
                        onClick={() => setView('landing')}
                        className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer font-medium"
                    >
                        ← Back to home
                    </button>
                </div>

                {/* Middle Text Content */}
                <div className="relative z-10 text-left space-y-4 max-w-md mt-auto mb-auto pb-40">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/90 font-semibold block">CITY CUISINE • TONIGHT</span>
                    <h2 className="text-6xl font-serif tracking-normal leading-[1.15] font-normal text-white">
                        Your table is set.<br />
                        Your dish is ready.
                    </h2>
                    <p className="text-white text-base max-w-lg leading-relaxed font-semibold">
                        Discover restaurants you'll love, reserve your table, and pre-order before you even arrive.
                    </p>
                </div>


            </div>

            {/* 📝 RIGHT COLUMN: SIGN IN FORM CANVAS (50% Width) */}
            <div className="flex flex-col justify-between items-center p-6 sm:p-12 md:p-16 bg-[#F4F4F6] relative z-10 min-h-screen">

                {/* Top Right Navigation */}
                <div className="w-full flex justify-end text-sm text-gray-500 font-normal">
                    New to Mise?{' '}
                    <button
                        onClick={() => setView('signup')}
                        className="text-black underline font-semibold ml-1 cursor-pointer"
                    >
                        Create account
                    </button>
                </div>

                {/* Center Form Card - Shifted lower with marginTop */}
                <div
                    style={{
                        width: '100%',
                        maxWidth: '540px',
                        padding: '52px',
                        backgroundColor: '#ffffff',
                        borderRadius: '32px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                        border: '1px solid #E5E7EB',
                        marginTop: '40px',
                        marginBottom: 'auto',
                        textAlign: 'left'
                    }}
                >

                    {/* Header */}
                    <div style={{ marginBottom: '36px' }}>
                        <h3 style={{ fontSize: '2.2rem', fontFamily: 'ui-serif, Georgia', fontWeight: 'normal', color: '#111827', marginBottom: '6px' }}>
                            Sign in to Mise
                        </h3>
                    </div>

                    {/* Social Buttons Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px', marginBottom: '36px' }}>
                        <button className="flex items-center justify-center gap-3 border border-gray-200 bg-white rounded-xl py-3.5 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer text-gray-700 shadow-sm">
                            <Icon icon="logos:google-icon" className="w-4 h-4" /> Google
                        </button>
                        <button className="flex items-center justify-center gap-3 border border-gray-200 bg-white rounded-xl py-3.5 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer text-gray-700 shadow-sm">
                            <Icon icon="ri:apple-fill" className="w-4 h-4 text-black" /> Apple
                        </button>
                    </div>

                    {/* Divider */}
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '36px' }}>
                        <div style={{ width: '100%', borderTop: '1px solid #E5E7EB' }} />
                        <span style={{ position: 'absolute', backgroundColor: '#ffffff', paddingLeft: '16px', paddingRight: '16px', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF', fontWeight: '600' }}>
                            or continue with email
                        </span>
                    </div>

                    {/* Input Fields Container */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '36px' }}>
                        {/* Email Address */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ fontSize: '14px', color: '#111827', fontWeight: 'bold' }}>
                                Email address
                            </label>
                            <div className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center gap-3.5 focus-within:border-gray-400 transition-colors shadow-sm">
                                <Icon icon="lucide:mail" className="text-gray-400 w-4.5 h-4.5 flex-shrink-0" />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full text-base bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none font-normal"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label style={{ fontSize: '14px', color: '#111827', fontWeight: 'bold' }}>
                                    Password
                                </label>
                                <span style={{ fontSize: '13px', color: '#6B7280', cursor: 'pointer', fontWeight: '500' }} className="hover:underline">
                                    Forgot?
                                </span>
                            </div>
                            <div className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between focus-within:border-gray-400 transition-colors shadow-sm">
                                <div className="flex items-center gap-3.5 w-full">
                                    <Icon icon="lucide:lock" className="text-gray-400 w-4.5 h-4.5 flex-shrink-0" />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full text-base bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none font-normal tracking-wide"
                                    />
                                </div>
                                <Icon icon="lucide:eye" className="text-gray-400 w-4.5 h-4.5 flex-shrink-0 cursor-pointer hover:text-gray-600 ml-2" />
                            </div>
                        </div>
                    </div>

                    {/* Keep Logged In Checkbox */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px', cursor: 'pointer', width: 'fit-content' }}>
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4.5 h-4.5 accent-black rounded border-gray-300 focus:ring-0 cursor-pointer"
                            defaultChecked
                        />
                        <label htmlFor="remember" style={{ fontSize: '14px', color: '#374151', fontWeight: '500', cursor: 'pointer' }}>
                            Keep me signed in
                        </label>
                    </div>

                    {/* Main Action Button */}
                    <button style={{ marginBottom: '24px' }} className="w-full bg-[#18181B] hover:bg-black text-white rounded-xl py-4 text-base font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                        Sign in <span className="text-lg">→</span>
                    </button>

                    {/* 🔗 New Terms and Policy Location under the Sign In Button */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', fontSize: '12px', color: '#9CA3AF' }}>
                        <a href="#terms" className="hover:underline">Terms</a>
                        <span>•</span>
                        <a href="#privacy" className="hover:underline">Privacy</a>
                    </div>
                </div>

                {/* Bottom Secure Anchor Badge */}
                <div style={{ paddingBottom: '16px' }} className="w-full flex justify-end text-[11px] text-gray-400 px-4">
                    <span className="flex items-center gap-1">
                        <Icon icon="lucide:shield-check" className="w-3.5 h-3.5" /> Secure & reliable booking
                    </span>
                </div>
            </div>

        </div>
    );
}