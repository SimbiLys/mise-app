import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Profile() {
    // State management mapped directly to your design architecture
    const [profile, setProfile] = useState({
        firstName: "Simbi",
        lastName: "Lys",
        email: "simbilys@gmail.com",
        phone: "+250 788529315",
        location: "Nyarugenge, Rwanda",
        joinedDate: "May 10, 2026",
        avatar: "/prof.jpg"
    });

    const [currentPassword, setCurrentPassword] = useState("********");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full min-h-screen bg-[#FAFAFA] text-zinc-800 flex font-sans antialiased select-none">
            <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto max-w-[1400px] mx-auto w-full space-y-6">

                {/* 👑 MINIMALIST TOP NAV BAR BAR */}
                <div className="flex items-center justify-between w-full pb-4 border-b border-zinc-200/60">
                    <div className="text-left">
                        <h1 className="text-3xl font-serif font-semibold text-zinc-900 tracking-tight">Profile</h1>
                        <p className="text-zinc-400 text-xs mt-0.5">Manage your account and preferences</p>
                    </div>

                    {/* Top Right System Alerts */}
                    <div className="flex items-center gap-4">
                        <button className="text-zinc-400 hover:text-zinc-600 relative p-1 transition-colors cursor-pointer">
                            <Icon icon="lucide:bell" className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-zinc-950 rounded-full"></span>
                        </button>
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-200">
                            <img src={profile.avatar} alt="User Avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* 🗺️ MAIN ARCHITECTURE CONTAINER */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* ================= LEFT SIDEBAR BLOCK (5 COLS) ================= */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Primary Identity Card */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.03)] text-center space-y-5 relative">
                            {/* Avatar Frame with custom Camera Trigger */}
                            <div className="relative w-24 h-24 mx-auto rounded-full p-0.5 border border-zinc-200 bg-zinc-50 shadow-inner">
                                <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover rounded-full" />
                                <button className="absolute bottom-0 right-0 bg-zinc-900 text-white p-1.5 rounded-full hover:bg-zinc-800 border-2 border-white shadow transition-all cursor-pointer">
                                    <Icon icon="lucide:camera" className="w-3 h-3" />
                                </button>
                            </div>

                            {/* Name & Account Status Designation */}
                            <div className="space-y-1">
                                <h2 className="text-xl font-serif font-bold text-zinc-900">{profile.firstName} {profile.lastName}</h2>
                                <span className="text-xs font-semibold text-zinc-400 tracking-wide block">Client</span>
                            </div>

                            <hr className="border-zinc-100" />

                            {/* Verification Data Coordinates */}
                            <div className="space-y-3 text-left px-2">
                                <div className="flex items-center gap-3 text-sm text-zinc-600">
                                    <Icon icon="lucide:mail" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                                    <span className="font-medium truncate">{profile.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-600">
                                    <Icon icon="lucide:phone" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                                    <span className="font-medium">{profile.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-600">
                                    <Icon icon="lucide:map-pin" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                                    <span className="font-medium">{profile.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-500">
                                    <Icon icon="lucide:calendar" className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                                    <span className="text-xs">Joined on {profile.joinedDate}</span>
                                </div>
                            </div>

                            <hr className="border-zinc-100" />

                            {/* System Logout Link */}
                            <button className="w-full flex items-center justify-center gap-2 py-1 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer">
                                <Icon icon="lucide:log-out" className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>

                        {/* General Metrics Overview Sub-Card */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.03)] text-left space-y-4">
                            <span className="text-sm font-serif font-bold text-zinc-900 block pl-0.5">
                                General overview
                            </span>
                            <div className="space-y-2.5">
                                <div className="flex items-center justify-between border-b border-zinc-100 pb-2 text-sm">
                                    <div className="flex items-center gap-2 text-zinc-600 font-medium">
                                        <Icon icon="lucide:building-2" className="w-4 h-4 text-zinc-400" />
                                        <span>Total restaurants</span>
                                    </div>
                                    <span className="font-mono font-bold text-zinc-900">3</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-zinc-100 pb-2 text-sm">
                                    <div className="flex items-center gap-2 text-zinc-600 font-medium">
                                        <Icon icon="lucide:heart" className="w-4 h-4 text-zinc-400" />
                                        <span>Liked dishes</span>
                                    </div>
                                    <span className="font-mono font-bold text-zinc-900">7</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-zinc-600 font-medium">
                                        <Icon icon="lucide:armchair" className="w-4 h-4 text-zinc-400" />
                                        <span>Seats reserved</span>
                                    </div>
                                    <span className="font-mono font-bold text-zinc-900">4</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ================= RIGHT EDITABLE SETTINGS FORM (7 COLS) ================= */}
                    <div className="lg:col-span-7 bg-[#E5E5E5] rounded-2xl p-6 lg:p-8 space-y-8 text-left shadow-inner">

                        {/* Section Division Header */}
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold tracking-tight text-zinc-900">Change account information</h2>
                        </div>

                        {/* Block 1: Personal Credentials Grid */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800">Personal information</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* First Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-zinc-700 pl-0.5">First Name</label>
                                    <input
                                        type="text"
                                        value={profile.firstName}
                                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                                        className="w-full bg-white rounded-lg px-4 py-2 text-sm text-zinc-800 font-medium focus:outline-none focus:ring-1 focus:ring-zinc-400 shadow-sm"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-zinc-700 pl-0.5">Last Name</label>
                                    <input
                                        type="text"
                                        value={profile.lastName}
                                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                                        className="w-full bg-white rounded-lg px-4 py-2 text-sm text-zinc-800 font-medium focus:outline-none focus:ring-1 focus:ring-zinc-400 shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Email Handling Matrix */}
                            <div className="flex flex-col gap-1.5 pt-1">
                                <label className="text-xs font-semibold text-zinc-700 pl-0.5">Email</label>
                                <div className="flex gap-3 items-center w-full">
                                    <input
                                        type="email"
                                        value={profile.email}
                                        disabled
                                        className="flex-1 bg-white/70 rounded-lg px-4 py-2 text-sm text-zinc-500 font-medium focus:outline-none cursor-not-allowed shadow-sm border border-zinc-200/40"
                                    />
                                    <button className="bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 font-medium text-xs rounded-lg px-4 py-2 transition-colors cursor-pointer shadow-sm flex-shrink-0">
                                        Edit email
                                    </button>
                                </div>
                                <span className="text-[10px] text-zinc-500 pl-0.5">Used to login into your account</span>
                            </div>
                        </div>

                        {/* Block 2: Security Verification Matrix */}
                        <div className="space-y-4 pt-2 border-t border-zinc-300/60">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800">Password</h3>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-zinc-700 pl-0.5">Your current password</label>
                                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full">
                                    {/* Obfuscated Input Container */}
                                    <div className="flex-1 bg-white rounded-lg px-4 py-2 flex items-center justify-between shadow-sm focus-within:ring-1 focus-within:ring-zinc-400">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            className="w-full text-sm bg-transparent text-zinc-800 font-medium focus:outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer"
                                        >
                                            <Icon icon={showPassword ? "lucide:eye-off" : "lucide:eye"} className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <button className="bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 font-medium text-xs rounded-lg px-4 py-2 transition-colors cursor-pointer shadow-sm h-full flex-shrink-0">
                                        Change password
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Form Submission Triggers */}
                        <div className="pt-4 border-t border-zinc-300/60 flex items-center justify-end gap-3 w-full">
                            <button className="bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 font-semibold text-sm rounded-lg px-5 py-2 transition-colors cursor-pointer shadow-sm">
                                Cancel
                            </button>
                            <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm rounded-lg px-6 py-2 transition-colors cursor-pointer shadow-sm">
                                Save
                            </button>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}