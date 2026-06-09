import './index.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import CtaSection from './components/CtaSection';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

export default function App() {
    const [view, setViewState] = useState('landing');

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
            {view === 'dashboard' && <Dashboard setView={setView} />}

        </div>
    );
}
