import React from 'react';
import { Icon } from '@iconify/react';

export default function Sidebar({ currentView, setView }) {
    const menuItems = [
        { id: 'dashboard', name: 'Sidebar', icon: 'lucide:layout-dashboard' },
        { id: 'restaurants', name: 'Restaurants', icon: 'lucide:utensils' },
        { id: 'menu', name: 'Menu', icon: 'lucide:book-open' },
        { id: 'order', name: 'Order', icon: 'lucide:shopping-bag' },
        { id: 'profile', name: 'Profile', icon: 'lucide:user' },
    ];

    return (
        <aside className="hidden lg:flex w-64 bg-[#F2F2F2] border-r border-gray-200 flex-col justify-between p-8 sticky top-0 h-screen z-20 flex-shrink-0">
            <div className="space-y-12">
                {/* Elegant Brand Logo Header */}
                <div className="text-left px-2 flex items-center gap-3 select-none">
                    <Icon icon="lucide:spline" className="w-6 h-6 text-gray-900 rotate-45" />
                    <span className="text-3xl font-serif tracking-wide text-gray-900 font-medium">
                        Mise
                    </span>
                </div>

                {/* Highly Interactive Navigation Container */}
                <nav className="flex flex-col gap-2 pl-1">
                    {menuItems.map((item) => {
                        // Check if current view matches this item's structural identifier
                        const isActive = currentView === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => setView?.(item.id)}
                                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer ${isActive
                                        ? 'bg-zinc-900 text-white font-bold shadow-sm'
                                        : 'text-gray-500 font-medium hover:bg-gray-200/60 hover:text-gray-900'
                                    }`}
                            >
                                <Icon
                                    icon={item.icon}
                                    className={`w-4.5 h-4.5 flex-shrink-0 transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                                        }`}
                                />
                                <span className="truncate">{item.name}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* 🍾 WINE BOTTLE GRAPHIC ASSET PILL */}
            <div className="w-full px-2 mt-auto text-left select-none group">
                <img
                    src="/wine-bottle.png"
                    alt="Mise Premium Selection"
                    className="w-24 h-auto object-contain opacity-90 brightness-95 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => e.target.style.display = 'none'}
                />
            </div>
        </aside>
    );
}