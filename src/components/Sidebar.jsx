import React from 'react';
import { Icon } from '@iconify/react';

export default function Sidebar({ currentView, setView }) {
    // Array matching your app routes with explicit identifiers
    const menuItems = [
        { id: 'dashboard', name: 'Sidebar', icon: 'lucide:layout-dashboard' },
        { id: 'restaurants', name: 'Restaurants', icon: 'lucide:utensils' },
        { id: 'menu', name: 'Menu', icon: 'lucide:book-open' },
        { id: 'order', name: 'Order', icon: 'lucide:shopping-bag' },
        { id: 'profile', name: 'Profile', icon: 'lucide:user' },
    ];

    return (
        <aside className="hidden lg:flex w-72 bg-[#F2F2F2] border-r border-gray-200 flex-col justify-between p-8 sticky top-0 h-screen z-20 flex-shrink-0 select-none">

            {/* 🔝 TOP PANEL COMPONENT */}
            <div className="space-y-12">

                {/* 🏷️ BRAND LOGO BLOCK */}
                <div className="px-2 text-left flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Mise"
                        className="h-9 w-auto object-contain"
                        onError={(e) => {
                            // Elegant fallback layout text if the logo file doesn't load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="hidden font-serif text-3xl font-medium tracking-wide text-gray-900">
                        Mise
                    </span>
                </div>

                {/* 🧭 NAVIGATION FLOW PANEL */}
                <nav className="flex flex-col gap-2.5">
                    {menuItems.map((item) => {
                        const isActive = currentView === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => setView?.(item.id)}
                                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-base tracking-wide transition-all duration-200 cursor-pointer group ${isActive
                                        ? 'bg-zinc-900 text-white font-bold shadow-sm'
                                        : 'text-gray-500 font-medium hover:bg-gray-200/70 hover:text-gray-900'
                                    }`}
                            >
                                <Icon
                                    icon={item.icon}
                                    className={`w-5 h-5 flex-shrink-0 transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-700'
                                        }`}
                                />
                                <span className="truncate">{item.name}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* 🍾 LOWER PROFILE HUB SECTION */}
            <div className="space-y-6">

                {/* WINE BOTTLE BRAND PILL */}
                <div className="px-2 text-left w-fit opacity-80 hover:opacity-100 transition-opacity">
                    <img
                        src="/wine-bottle.png"
                        alt="Mise Selection"
                        className="w-24 h-auto object-contain"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                </div>

                {/* 👤 LYS PROFILE ACCOUNT CONTAINER */}
                <div className="flex items-center gap-4 px-3 py-3 border-t border-gray-300/60 w-full">
                    <div className="w-11 h-11 rounded-xl bg-gray-300 overflow-hidden border border-gray-200 shadow-sm flex-shrink-0">
                        <img
                            src="/prof.jpg"
                            alt="Lys Profile"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // Fallback avatar if prof.jpg is absent from your public folder
                                e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150";
                            }}
                        />
                    </div>

                    <div className="flex flex-col text-left min-w-0">
                        <span className="text-sm font-bold text-gray-900 leading-tight truncate">Lys</span>
                        <span className="text-[11px] text-gray-400 font-medium tracking-wide mt-0.5">Premium Account</span>
                    </div>

                    <Icon
                        icon="lucide:chevrons-up-down"
                        className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0 cursor-pointer hover:text-gray-700"
                    />
                </div>

            </div>

        </aside>
    );
}