import './index.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import CtaSection from './components/CtaSection';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar'; // 🚀 Added missing Sidebar import
import Dashboard from './components/Dashboard';
import Restaurant from './components/Restaurant';
import Menu from './components/Menu';
import Order from './components/Order';

export default function App() {
    const [view, setViewState] = useState('landing');
    const [selectedMeal, setSelectedMeal] = useState(null);

    // Smooth state view transitions animation wrapper handler
    const setView = (nextView) => {
        if (!document.startViewTransition) {
            setViewState(nextView);
            return;
        }
        document.startViewTransition(() => {
            setViewState(nextView);
        });
    };

    return (
        <div className="w-full min-h-screen bg-white text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth antialiased">

            {/* 🏠 LANDING PAGE LAYER */}
            {view === 'landing' && (
                <div>
                    <Navbar setView={setView} />
                    <main>
                        <Hero />
                        <Features />
                        <Contact />
                        <CtaSection setView={setView} />
                    </main>
                    <footer className="w-full bg-zinc-950 text-zinc-500 text-xs py-8 border-t border-zinc-900 text-center">
                        © {new Date().getFullYear()} Mise App. All rights reserved for competition entry tracking.
                    </footer>
                </div>
            )}

            {/* 🔐 SIGN IN LAYER */}
            {view === 'signin' && <SignIn setView={setView} />}

            {/* 📝 SIGN UP LAYER */}
            {view === 'signup' && <SignUp setView={setView} />}

            {/* 🍽️ THE INNER APP DASHBOARD LAYER */}
            {view === 'dashboard' && (
                <div className="flex w-full min-h-screen bg-[#0F1115]">
                    <Sidebar currentView={view} setView={setView} />
                    <div className="flex-1 bg-[#FDFDFD] overflow-y-auto">
                        <Dashboard setView={setView} />
                    </div>
                </div>
            )}

            {/* 🗺️ RESTAURANTS PROFILE FLOW LAYER */}
            {view === 'restaurants' && (
                <div className="flex w-full min-h-screen bg-[#0F1115]">
                    <Sidebar currentView={view} setView={setView} />
                    <div className="flex-1 bg-[#FDFDFD] overflow-y-auto">
                        <Restaurant setView={setView} />
                    </div>
                </div>
            )}

            {/* 📜 NEW MENU CATEGORIES ARC CANVAS LAYER */}
            {view === 'menu' && (
                <div className="flex w-full min-h-screen bg-[#0F1115]">
                    <Sidebar currentView={view} setView={setView} />
                    <div className="flex-1 bg-[#FDFDFD] overflow-y-auto">
                        <Menu setView={setView} setSelectedMeal={setSelectedMeal} />
                    </div>
                </div>
            )}

            {/* 💳 DETAILED RESERVATION ORDER LAYER */}
            {view === 'order' && (
                <div className="flex w-full min-h-screen bg-[#0F1115]">
                    {/* Sidebar locked cleanly to the left */}
                    <Sidebar currentView={view} setView={setView} />

                    {/* Order form occupies the remaining space on the right */}
                    <div className="flex-1 bg-[#FDFDFD] overflow-y-auto">
                        <Order selectedMeal={selectedMeal} setView={setView} />
                    </div>
                </div>
            )}

        </div>
    );
}