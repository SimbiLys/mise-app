import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';

export default function App() {
    return (
        <div className="w-full min-h-screen bg-white text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth antialiased">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Contact />
            </main>
            <footer className="w-full bg-zinc-950 text-zinc-400 text-xs py-8 border-t border-zinc-900 text-center">
                © {new Date().getFullYear()} Mise App. All rights reserved for competition entry tracking.
            </footer>
        </div>
    );
}
