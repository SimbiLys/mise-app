import React from 'react';
import { Icon } from '@iconify/react';

export default function SignUp({ setView }) {
    return (
        <div className="w-full min-h-screen bg-[#F3F4F6] text-[#111827] grid grid-cols-1 lg:grid-cols-2 overflow-hidden select-none font-sans">

            {/* 🖼️ LEFT COLUMN: ATRIUM IMAGE AND HERO TEXT (50% Width) */}
            <div className="hidden lg:flex relative flex-col justify-between p-12 overflow-hidden">

                {/* Background Image - Changed to Atrium */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/atrium.jpg"
                        alt="Mise Atrium Ambience"
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
                <div className="relative z-10 text-left space-y-4 max-w-md mt-auto mb-auto">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-semibold block">CITY CUISINE • TONIGHT</span>
                    <h2 className="text-5xl font-serif tracking-normal leading-[1.15] font-normal text-white">
                        Your table is set.<br />
                        Your dish is ready.
                    </h2>
                    <p className="text-white/80 text-sm max-w-sm leading-relaxed font-normal">
                        Discover restaurants you'll love, reserve your table, and pre-order before you even arrive.
                    </p>
                </div>


            </div>

            {/* 📝 RIGHT COLUMN: SIGN UP FORM CANVAS (50% Width) */}
            <div className="flex flex-col justify-between items-center p-6 sm:p-12 md:p-16 bg-[#F4F4F6] relative z-10 min-h-screen">

                {/* Top Right Navigation */}
                <div className="w-full flex justify-end text-sm text-gray-500 font-normal">
                    Already have an account?{' '}
                    <button
                        onClick={() => setView('signin')}
                        className="text-black underline font-semibold ml-1 cursor-pointer"
                    >
                        Login
                    </button>
                </div>

                {/* Center Form Card */}
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
                            Create your account
                        </h3>
                        <p style={{ fontSize: '1rem', color: '#6B7280', fontWeight: 'normal' }}>
                            Let's get you started
                        </p>
                    </div>

                    {/* Social Buttons Row (Google, Apple, Facebook) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px', marginBottom: '36px' }}>
                        <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white rounded-xl py-3.5 text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer text-gray-700 shadow-sm">
                            <Icon icon="logos:google-icon" className="w-4 h-4" /> Google
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white rounded-xl py-3.5 text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer text-gray-700 shadow-sm">
                            <Icon icon="ri:apple-fill" className="w-4 h-4 text-black" /> Apple
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white rounded-xl py-3.5 text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer text-gray-700 shadow-sm">
                            <Icon icon="logos:facebook" className="w-4 h-4" /> Facebook
                        </button>
                    </div>

                    {/* Divider */}
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '36px' }}>
                        <div style={{ width: '100%', borderTop: '1px solid #E5E7EB' }} />
                        <span style={{ position: 'absolute', backgroundColor: '#ffffff', paddingLeft: '16px', paddingRight: '16px', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF', fontWeight: '600' }}>
                            or
                        </span>
                    </div>

                    {/* Input Fields Container */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>

                        {/* Full Name */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ fontSize: '14px', color: '#111827', fontWeight: 'bold' }}>
                                Full name
                            </label>
                            <div className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center gap-3.5 focus-within:border-gray-400 transition-colors shadow-sm">
                                <Icon icon="lucide:user" className="text-gray-400 w-4.5 h-4.5 flex-shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="w-full text-base bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none font-normal"
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ fontSize: '14px', color: '#111827', fontWeight: 'bold' }}>
                                Email address
                            </label>
                            <div className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center gap-3.5 focus-within:border-gray-400 transition-colors shadow-sm">
                                <Icon icon="lucide:mail" className="text-gray-400 w-4.5 h-4.5 flex-shrink-0" />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full text-base bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none font-normal"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ fontSize: '14px', color: '#111827', fontWeight: 'bold' }}>
                                Password
                            </label>
                            <div className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between focus-within:border-gray-400 transition-colors shadow-sm">
                                <div className="flex items-center gap-3.5 w-full">
                                    <Icon icon="lucide:lock" className="text-gray-400 w-4.5 h-4.5 flex-shrink-0" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full text-base bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none font-normal tracking-wide"
                                    />
                                </div>
                                <Icon icon="lucide:eye" className="text-gray-400 w-4.5 h-4.5 flex-shrink-0 cursor-pointer hover:text-gray-600 ml-2" />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ fontSize: '14px', color: '#111827', fontWeight: 'bold' }}>
                                Confirm password
                            </label>
                            <div className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between focus-within:border-gray-400 transition-colors shadow-sm">
                                <div className="flex items-center gap-3.5 w-full">
                                    <Icon icon="lucide:lock" className="text-gray-400 w-4.5 h-4.5 flex-shrink-0" />
                                    <input
                                        type="password"
                                        placeholder="Confirm password"
                                        className="w-full text-base bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none font-normal tracking-wide"
                                    />
                                </div>
                                <Icon icon="lucide:eye" className="text-gray-400 w-4.5 h-4.5 flex-shrink-0 cursor-pointer hover:text-gray-600 ml-2" />
                            </div>
                        </div>

                    </div> {/* 💡 This tag closes out your input container perfectly */}

                    {/* Terms Agreement Checkbox */}
                    <div style={{ marginBottom: '36px' }} className="flex items-start gap-3 cursor-pointer w-fit select-none">
                        <input
                            type="checkbox"
                            id="agree"
                            className="w-4.5 h-4.5 mt-0.5 accent-orange-500 rounded border-gray-300 focus:ring-0 cursor-pointer"
                        />
                        <label htmlFor="agree" className="text-sm text-gray-500 font-normal cursor-pointer leading-tight">
                            I agree to the <a href="#terms" className="underline text-gray-600">Terms of services</a> and <a href="#privacy" className="underline text-gray-600">Privacy Policy</a>
                        </label>
                    </div>

                    {/* Primary Orange Action Button */}
                    <button style={{ marginBottom: '24px', backgroundColor: 'black' }} className="w-full hover:brightness-95 text-white rounded-xl py-4 text-base font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                        Register as a client <span className="text-lg">→</span>
                    </button>
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
