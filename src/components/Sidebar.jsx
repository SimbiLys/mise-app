import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Sidebar({ currentView, setView }) {
    // 🎛️ Track whether the sidebar is collapsed or expanded
    const [isCollapsed, setIsCollapsed] = useState(false);

    // 🗺️ Navigation Items Array with correct IDs matching your application routing
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'lucide:layout-dashboard' },
        { id: 'restaurants', label: 'Restaurants', icon: 'lucide:utensils-crosses' },
        { id: 'menu', label: 'Menu Workspace', icon: 'lucide:book-open-check' },
        { id: 'order', label: 'Live Orders', icon: 'lucide:shopping-cart' },
        { id: 'profile', label: 'My Profile', icon: 'lucide:user-cog' }
    ];

    return (
        <aside
            className={`h-screen bg-[#0F1115] text-gray-400 flex flex-col justify-between p-6 border-r border-zinc-800/60 sticky top-0 flex-shrink-0 z-50 shadow-2xl transition-all duration-300 ease-in-out
                ${isCollapsed ? 'w-24' : 'w-80'}`}
        >

            {/* 🔝 UPPER BRANDING & TOGGLE ACTION BLOCK */}
            <div className="space-y-10">

                {/* Header Container: Adapts alignment dynamically based on collapse state */}
                <div className={`flex items-center pt-4 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between px-3'}`}>

                    {/* Brand Name (Hidden cleanly when collapsed to prevent text overflow) */}
                    {!isCollapsed && (
                        <div className="flex flex-col cursor-pointer" onClick={() => setView('dashboard')}>
                            <span className="text-2xl font-serif font-black tracking-wide text-white leading-none">Mise</span>
                            <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mt-1">Premium Dining</span>
                        </div>
                    )}

                    {/* 🔘 COLLAPSE / EXPAND INTERACTIVE TOGGLE BUTTON */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="w-10 h-10 rounded-xl bg-gradient-to-tr from-zinc-100 to-zinc-400 flex items-center justify-center shadow-lg shadow-white/5 text-black hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
                        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        <Icon
                            icon={isCollapsed ? "lucide:chevron-right" : "lucide:chevron-left"}
                            className="w-5 h-5 stroke-[2.5]"
                        />
                    </button>
                </div>

                {/* 🧭 NAVIGATION INTERFACE LINKS */}
                <nav className="space-y-2.5">
                    {!isCollapsed && (
                        <span className="text-xs font-black tracking-widest text-zinc-600 uppercase block px-3 mb-4 animate-fade-in">
                            Main Navigation
                        </span>
                    )}

                    {navItems.map((item) => {
                        const isActive = currentView === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setView(item.id)}
                                className={`w-full flex items-center px-4 py-3.5 rounded-xl text-base font-medium tracking-wide transition-all group relative duration-200
                                    ${isActive
                                        ? 'bg-gradient-to-r from-zinc-800 to-zinc-900 text-white font-bold shadow-md border-l-4 border-white'
                                        : 'hover:bg-zinc-900/60 hover:text-zinc-200 text-zinc-400'
                                    }
                                    ${isCollapsed ? 'justify-center' : 'justify-between'}`}
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <Icon
                                        icon={item.icon}
                                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110
                                            ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}
                                    />
                                    {/* Hide button labels cleanly on collapse */}
                                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                                </div>

                                {/* Right-aligned status indicator dot */}
                                {isActive && !isCollapsed && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0 ml-2" />
                                )}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* 👤 HIGH-VISIBILITY PREMIUM PROFILE PANEL */}
            <div className="border-t border-zinc-800/80 pt-5 mt-2">
                <div className={`bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl flex items-center transition-all duration-300 shadow-xl group hover:border-zinc-700
                    ${isCollapsed ? 'p-2 justify-center' : 'p-4 justify-between gap-4'}`}
                >
                    <div className="flex items-center gap-3.5 min-w-0">
                        {/* Profile Image Wrapper */}
                        <div className="relative flex-shrink-0">
                            <img
                                src="/prof.jpg"
                                alt="Lys"
                                className="w-12 h-12 rounded-xl object-cover border-2 border-zinc-700 group-hover:border-white transition-colors shadow-md"
                            />
                        </div>

                        {/* User Metadata (Hidden safely when menu collapses) */}
                        {!isCollapsed && (
                            <div className="flex flex-col min-w-0 animate-fade-in">
                                <span className="text-base font-bold text-white tracking-wide truncate group-hover:text-zinc-200">
                                    Lys Krista
                                </span>
                                <span className="text-xs font-semibold text-zinc-500 font-mono tracking-wider uppercase mt-0.5">
                                    Personal Account
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Log Out Quick-Action Target Button */}
                    {!isCollapsed && (
                        <button
                            onClick={() => setView('profile')}
                            className="text-zinc-500 hover:text-white p-2 hover:bg-zinc-800 rounded-xl transition-colors flex-shrink-0"
                            title="Log Out"
                        >
                            <Icon icon="lucide:log-out" className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

        </aside>
    );
}