import React from 'react';
import { Icon } from '@iconify/react';
import Sidebar from './Sidebar'; // Import the shared sidebar

export default function Restaurants({ setView }) {
    const restaurantList = [
        { name: "Pili-pili", location: "Kibagabaga, Kigali, Rwanda", street: "KG 303 st", rating: 5, img: "/res1 (1).jpg" },
        { name: "Meza Malonga", location: "Musanze, Rwanda", street: "picturesque shores of Lake Ruhondo", rating: 3.5, img: "/res1 (2).jpg" },
        { name: "Repub Lounge", location: "Kimihurura, Kigali, Rwanda", street: "16 KG 674 Street", rating: 3.5, img: "/res1 (3).jpg" },
        { name: "Poivre Noire", location: "Kimihurura, Kigali, Rwanda", street: "KG 670 st n°2", rating: 4, img: "/res1 (4).jpg" },
        { name: "La Creola", location: "Kimihurura, Kigali, Rwanda", street: "KG 28 Ave", rating: 4.5, img: "/res1 (5).jpg" },
        { name: "Khana Khazana", location: "Kiyovu, Kigali, Rwanda", street: "KN 9 st", rating: 3, img: "/res1 (6).jpg" },
        { name: "Lily Fine", location: "Kimihurura, Kigali, Rwanda", street: "KG 670 st", rating: 5, img: "/res1 (7).jpg" },
        { name: "Good to back", location: "Huye, Butare, Rwanda", street: "DT 003 st", rating: 5, img: "/res1 (8).jpg" }
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<Icon key={i} icon="bi:star-fill" className="w-3.5 h-3.5 text-amber-500" />);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<Icon key={i} icon="bi:star-half" className="w-3.5 h-3.5 text-amber-500" />);
            } else {
                stars.push(<Icon key={i} icon="bi:star" className="w-3.5 h-3.5 text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <div className="w-full min-h-screen bg-white text-gray-900 flex font-sans antialiased text-left select-none">

            {/* 🧭 INJECT REUSABLE UNIFIED SIDEBAR */}
            <Sidebar currentView="restaurants" setView={setView} />

            {/* 🍽️ EXPANSIVE FLUID MAIN EXPLORER WORKSPACE */}
            <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto space-y-6">

                {/* Top Title Row */}
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl md:text-3xl font-sans text-gray-900 font-medium tracking-tight">
                        Restaurants
                    </h1>
                    <div className="flex items-center gap-5">
                        <Icon icon="lucide:bell" className="w-5 h-5 text-gray-700 cursor-pointer hover:text-black" />
                        <div className="w-9 h-9 rounded-full bg-gray-300 border border-gray-200 overflow-hidden shadow-sm">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Expanded Search Input Bar */}
                <div className="w-full max-w-md bg-[#EAEAEA] rounded-xl px-4 py-2 flex items-center gap-3">
                    <Icon icon="lucide:search" className="text-gray-500 w-4 h-4 flex-shrink-0" />
                    <input type="text" placeholder="Search..." className="w-full text-sm bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none" />
                </div>

                {/* Filter Indicator Bar */}
                <div className="w-full bg-[#BDBDBD] rounded-lg px-5 py-3.5 flex items-center justify-between gap-3 text-xs font-semibold text-gray-800">
                    <div className="flex flex-col">
                        <span className="text-gray-900 font-bold text-sm">All restaurants</span>
                        <span className="text-[11px] text-gray-600 font-normal mt-0.5">all registered restaurants</span>
                    </div>
                    <button className="flex items-center gap-2 bg-transparent text-gray-900 hover:text-black font-semibold text-sm">
                        Filter restaurants <Icon icon="lucide:sliders-horizontal" className="w-4 h-4" />
                    </button>
                </div>

                {/* 📋 RESPONSIVE PROPORTIONAL LIST CONTAINER */}
                <div className="flex flex-col w-full divide-y divide-gray-100 pt-2">
                    {restaurantList.map((res, index) => (
                        <div key={index} className="grid grid-cols-1 sm:grid-cols-[1.5fr_2fr_1fr] items-center gap-6 py-4 px-2 bg-white transition-all duration-200">
                            {/* Column 1: Image, Name & Rating */}
                            <div className="flex items-center gap-4 min-w-0">
                                <img src={res.img} alt={res.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100 flex-shrink-0" onError={(e) => { e.target.src = "https://placehold.co/100" }} />
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[15px] font-bold text-gray-900 leading-tight truncate">{res.name}</span>
                                    <div className="flex items-center gap-0.5 mt-1">{renderStars(res.rating)}</div>
                                </div>
                            </div>

                            {/* Column 2: Region and Street Address */}
                            <div className="flex flex-col min-w-0">
                                <span className="text-[14px] font-medium text-gray-800 truncate">{res.location}</span>
                                <span className="text-[11px] text-gray-400 font-normal mt-0.5 truncate">{res.street}</span>
                            </div>

                            {/* Column 3: Actions Pinned Right */}
                            <div className="flex flex-col text-left sm:text-right sm:items-end flex-shrink-0">
                                <button className="text-[14px] font-medium text-gray-900 hover:underline bg-transparent border-0 p-0 cursor-pointer w-fit">View full profile</button>
                                <span className="text-[11px] text-gray-400 font-normal mt-0.5">view more details</span>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}