import React from 'react';
import { Icon } from '@iconify/react';

export default function Sidebar({ currentView, setView }) {
    // 1. Define the navigation items array matching your UI links exactly
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'lucide:layout-dashboard' },
        { id: 'restaurants', label: 'Restaurants', icon: 'lucide:utensils-crosses' },
        { id: 'menu', label: 'Menu Workspace', icon: 'lucide:book-open' },
        { id: 'order', label: 'Live Orders', icon: 'lucide:shopping-bag' },
        { id: 'profile', label: 'My Profile', icon: 'lucide:user' },
    ];

    return (
        <aside className="w-64 min-h-screen bg-[#0F1115] text-zinc-400 flex flex-col justify-between p-4 border-r border-zinc-800/40 flex-shrink-0 select-none">
            <div className="space-y-8 text-left">
                {/* Brand Identity Branding Header */}
                <div className="px-3 pt-2">
                    <h2 className="text-2xl font-serif font-bold text-white tracking-wide">Mise</h2>
                    <span className="text-[9px] font-bold tracking-widest text-zinc-600 uppercase block mt-0.5">
                        Premium Dining
                    </span>
                </div>

                {/* Navigation Links Loop */}
                <div className="space-y-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase block px-3 mb-3">
                        Main Navigation
                    </span>

                    {navItems.map((item) => {
                        const isActive = currentView === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setView(item.id)} // 🚀 2. This seamlessly updates App.jsx view state!
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group cursor-pointer text-left ${isActive
                                        ? 'bg-zinc-800/80 text-white shadow-sm border border-zinc-700/30'
                                        : 'hover:bg-zinc-900 hover:text-zinc-200'
                                    }`}
                            >
                                <Icon
                                    icon={item.icon}
                                    className={`w-4 h-4 transition-colors ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-400'
                                        }`}
                                />
                                <span>{item.label}</span>

                                {isActive && (
                                    <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Premium Minified User Panel Footer */}
            <div className="border-t border-zinc-800/60 pt-4 flex items-center gap-3 px-2 text-left">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900 flex-shrink-0">
                    <img src="/prof.jpg" alt="Guest" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col truncate">
                    <span className="text-xs font-semibold text-zinc-200 truncate">Lys Krista</span>
                    <span className="text-[10px] text-zinc-500 font-medium font-mono">Premium Account</span>
                </div>
                <button
                    onClick={() => setView('profile')} // Clicking profile footer goes there too!
                    className="ml-auto text-zinc-600 hover:text-zinc-400 transition-colors p-1 cursor-pointer"
                >
                    <Icon icon="lucide:settings" className="w-3.5 h-3.5" />
                </button>
            </div>
        </aside>
    );
}