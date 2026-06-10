import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Sidebar from './Sidebar'; // Shared sidebar

export default function Menu({ setView }) {
    // 🗂️ 1. Categories Archetype mapped by unique string IDs
    const categories = [
        { id: 'mains', name: 'Main courses', desc: 'Primary dish selections', rating: '4.8', image: '/meal (3).jpg' },
        { id: 'sides', name: 'Sides', desc: 'Accompanying sides', rating: '4.9', image: '/meal (2).jpg' },
        { id: 'soups', name: 'Soups and stews', desc: 'Liquid based meals', rating: '4.6', image: '/meal (1).jpg' },
        { id: 'desserts', name: 'Deserts', desc: 'Sweet treats & pastries', rating: '4.7', image: '/meal (5).jpg' },
        { id: 'drinks', name: 'Drinks', desc: 'Premium beverages', rating: '4.5', image: '/meal (4).jpg' },
    ];

    // 🍽️ 2. Comprehensive Dishes Database linked strictly to category matching rules
    const allDishes = [
        // Main Courses
        { id: 'd1', categoryId: 'mains', name: "Sushi platter", price: "45,000 RWF", rating: 5, reviews: "198 reviews", image: "/slider (5).jpg", desc: "Expertly sliced oceanic cut selections paired beautifully with hand-rolled seasoned sushi grains, crisp premium nori sheets, and freshly grated house wasabi root.", ingredients: "Bluefin Tuna, Atlantic Salmon, Premium Sushi Rice, Nori, Wasabi Root" },
        { id: 'd2', categoryId: 'mains', name: "Gourmet burger", price: "28,000 RWF", rating: 4.8, reviews: "142 reviews", image: "/trend (4).jpg", desc: "A premium hand-pressed beef patty grilled to juicy perfection, layers of sharp melted cheddar, and secret signature kitchen sauces on toasted brioche bun profiles.", ingredients: "Premium Beef Patty, Aged Cheddar, Brioche Bun, House Truffle Aioli" },
        { id: 'd3', categoryId: 'mains', name: "Hawaiian Pizza", price: "18,500 RWF", rating: 4.6, reviews: "88 reviews", image: "/trend (3).jpg", desc: "Slow-fermented sourdough base fired in an intense oakwood brick oven, topped with organic san marzano tomato reduction, cured ham, and sweet grilled pineapples.", ingredients: "Sourdough Base, San Marzano Tomato Crust, Artisan Ham, Sweet Pineapple" },

        // Sides
        { id: 'd4', categoryId: 'sides', name: "Caesar salad", price: "12,000 RWF", rating: 4.9, reviews: "210 reviews", image: "/trend (2).jpg", desc: "Crisp architectural organic romaine lettuce leaves tossed completely in creamy tableside Caesar emulsion, dusted generously with microplane grated real parmigiano reggiano cheese.", ingredients: "Romaine Hearts, Parmigiano-Reggiano, House Croutons, Anchovy Essence Cream" },
        { id: 'd5', categoryId: 'sides', name: "Rustic French Fries", price: "9,500 RWF", rating: 4.5, reviews: "340 reviews", image: "/meal (2).jpg", desc: "Skin-on freshly cut russet potato batons blanched then double-fried for maximum crisp snap. Lightly seasoned with hand-harvested sea salt flaky clusters.", ingredients: "Russet Potatoes, Sea Salt Flakes, Cold Pressed Peanut Oil" },

        // Soups and Stews
        { id: 'd6', categoryId: 'soups', name: "Spicy ramen", price: "15,000 RWF", rating: 5, reviews: "320 reviews", image: "/slider (1).jpg", desc: "A magnificent 24-hour slow-simmered rich aromatic broth layered with complex red chili tare base, fresh springy noodles, and perfectly tender pork configurations.", ingredients: "Rich Bone Broth Base, Hand Pulled Noodles, Soft Boiled Jammy Egg, Scallions" },
        { id: 'd7', categoryId: 'soups', name: "Smoked Tomato Stew", price: "13,500 RWF", rating: 4.4, reviews: "94 reviews", image: "/meal (1).jpg", desc: "Fire-roasted heirloom plum tomatoes pureed evenly with aromatic baseline mirepoix mix, rich vegetable reduction stock, and vibrant cold-extracted extra virgin olive oil clouds.", ingredients: "Roasted Tomatoes, Sweet Basil Infusion, Garlic Confit, Mirepoix Vegetables" },

        // Desserts
        { id: 'd8', categoryId: 'desserts', name: "Tiramisu", price: "11,000 RWF", rating: 4.7, reviews: "175 reviews", image: "/meal (5).jpg", desc: "Light velvet cloud waves of authentic Italian whipped mascarpone cheese layered perfectly above savoiardi ladyfingers deeply saturated in rich local roasted espresso extract.", ingredients: "Mascarpone Sabayon, Espresso Soak, Savoiardi Sponge Biscuits, Dark Cacao Powder" },
        { id: 'd9', categoryId: 'desserts', name: "Coconut icecream", price: "7,000 RWF", rating: 4.5, reviews: "215 reviews", image: "/slider (3).jpg", desc: "House-churned dairy-free chilled extraction of cold-pressed organic coconut cream interior flesh, naturally sweetened with raw sugarcane honey profiles.", ingredients: "Organic Coconut Milk, Real Madagascar Vanilla Pod, Sugarcane Honey" },

        // Drinks
        { id: 'd10', categoryId: 'drinks', name: "Pink lady", price: "8,500 RWF", rating: 4.5, reviews: "112 reviews", image: "/trend (1).jpg", desc: "A refreshing effervescent botanical extraction of macerated spring wild raspberries, fresh key lime juice drops, and structural carbonated mineral spring waters.", ingredients: "Wild Raspberry Shrub, Key Lime Cold Press, Carbonated Spring Waters" },
        { id: 'd11', categoryId: 'drinks', name: "Mocha Coffee", price: "10,000 RWF", rating: 4, reviews: "101 reviews", image: "/slider (4).jpg", desc: "A luxurious balanced alignment of dynamic single-origin espresso shot extraction emulsified inside warm melted dark premium cacao paste skin with silky steamed dairy layer milk caps.", ingredients: "Single Origin Espresso, 72% Dark Chocolate Paste, Silky Steamed Milk Skin" }
    ];

    // 🎛️ 3. Core Interaction Reactive States
    const [selectedCategoryId, setSelectedCategoryId] = useState('mains');
    const [selectedDishId, setSelectedDishId] = useState('d1');
    const [itemQuantity, setItemQuantity] = useState(1);

    // Filter processing calculations
    const filteredDishes = allDishes.filter(dish => dish.categoryId === selectedCategoryId);
    const activeDish = allDishes.find(dish => dish.id === selectedDishId) || filteredDishes[0] || allDishes[0];

    // Fast-acting category shift handler
    const handleCategoryShift = (catId) => {
        setSelectedCategoryId(catId);
        const firstDishInNewCat = allDishes.find(dish => dish.categoryId === catId);
        if (firstDishInNewCat) {
            setSelectedDishId(firstDishInNewCat.id);
        }
        setItemQuantity(1);
    };

    // Stark monochromatic star utility tracker
    const renderCleanStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<Icon key={i} icon="bi:star-fill" className="w-3.5 h-3.5 text-black" />);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<Icon key={i} icon="bi:star-half" className="w-3.5 h-3.5 text-black" />);
            } else {
                stars.push(<Icon key={i} icon="bi:star" className="w-3.5 h-3.5 text-gray-200" />);
            }
        }
        return stars;
    };

    return (
        <div className="w-full min-h-screen bg-[#FDFDFD] text-gray-900 flex font-sans antialiased text-left select-none">

            {/* 🧭 SHARED SIDEBAR NAVIGATION */}
            <Sidebar currentView="menu" setView={setView} />

            {/* 🍽️ MAIN EXPLORER CANVAS */}
            <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto max-w-[1500px] mx-auto w-full space-y-14">

                {/* 🔝 UPPER HEADER BLOCK */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-6 w-full border-b border-gray-200/80 pb-8">
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-5xl font-serif font-medium text-black tracking-tight">
                            Menu Workspace
                        </h1>
                        <p className="text-gray-500 text-lg font-normal tracking-wide">
                            Select a collection array below to filter sub-variants, then explore analytical dish focus inside the central stage.
                        </p>
                    </div>
                    {/* Modern Clean Control Elements */}
                    <div className="w-full max-w-xs bg-white border-2 border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                        <Icon icon="lucide:search" className="text-gray-400 w-5 h-5 flex-shrink-0" />
                        <input type="text" placeholder="Search menu dishes..." className="w-full text-base bg-transparent text-black placeholder-gray-400 focus:outline-none font-medium" />
                    </div>
                </div>

                {/* 🗂️ STEP 1: CLASSIFIED COLLECTIONS SELECTOR ROW */}
                <div className="space-y-6">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Step 1: Classified Collections</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {categories.map((cat) => {
                            const isCurrentCat = selectedCategoryId === cat.id;
                            return (
                                <div
                                    key={cat.id}
                                    onClick={() => handleCategoryShift(cat.id)}
                                    className={`bg-white border-2 rounded-2xl overflow-hidden p-4 flex flex-col space-y-4 transition-all group cursor-pointer shadow-sm
                                        ${isCurrentCat ? 'border-black ring-1 ring-black' : 'border-gray-200/90 hover:border-gray-400'}`}
                                >
                                    <div className="w-full h-32 bg-gray-50 rounded-xl overflow-hidden relative">
                                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                        <span className="absolute bottom-3 right-3 text-xs font-bold font-mono bg-black text-white px-2 py-0.5 rounded-md shadow">
                                            ★ {cat.rating}
                                        </span>
                                    </div>
                                    <div className="space-y-1 pl-0.5">
                                        <h4 className="text-lg font-bold text-black leading-tight truncate">{cat.name}</h4>
                                        <p className="text-xs text-gray-400 truncate font-medium">{cat.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 🛠️ STEP 2 & 3: TWO-COLUMN ASYMMETRIC LIVE INTERACTIVE INTERFACE SYSTEM */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch w-full">

                    {/* LEFT COLUMN: SELECTED CATEGORY SUITE GRID LISTING (5 COLS) */}
                    <div className="col-span-1 lg:col-span-5 flex flex-col space-y-5">
                        <div className="flex flex-col">
                            <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Step 2: Associated Category Selections</h3>
                            <span className="text-xs text-gray-400 font-bold tracking-wide mt-1">
                                Filtering archives for: <b className="text-black underline font-extrabold">{categories.find(c => c.id === selectedCategoryId)?.name}</b>
                            </span>
                        </div>

                        <div className="flex flex-col gap-3.5 max-h-[600px] overflow-y-auto pr-2">
                            {filteredDishes.map((dish) => {
                                const isSelectedDish = selectedDishId === dish.id;
                                return (
                                    <div
                                        key={dish.id}
                                        onClick={() => {
                                            setSelectedDishId(dish.id);
                                            setItemQuantity(1);
                                        }}
                                        className={`flex items-center justify-between p-4 bg-white border-2 rounded-2xl cursor-pointer transition-all w-full shadow-sm group
                                            ${isSelectedDish ? 'border-black bg-gray-50/60' : 'border-gray-200/90 hover:border-black'}`}
                                    >
                                        <div className="flex items-center gap-4 min-w-0">
                                            <img src={dish.image} alt={dish.name} className="w-16 h-16 rounded-xl object-cover border border-gray-200/60 flex-shrink-0 shadow-sm" />
                                            <div className="flex flex-col min-w-0">
                                                <span className={`text-base font-bold text-gray-900 group-hover:underline truncate leading-snug ${isSelectedDish ? 'underline font-extrabold text-black' : ''}`}>
                                                    {dish.name}
                                                </span>
                                                <div className="flex items-center gap-1.5 mt-0.5">
                                                    <div className="flex items-center">{renderCleanStars(dish.rating)}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm font-extrabold font-mono text-black pl-3 flex-shrink-0">
                                            {dish.price.split(' ')[0]}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: THE CENTRAL STAGE EXPLICIT DETAIL INTERACTIVE CONSOLE (7 COLS) */}
                    <div className="col-span-1 lg:col-span-7 bg-white border-2 border-black rounded-3xl p-8 shadow-md flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white to-[#FAFAFA]">

                        {/* Upper Segment: Text Context, Star Specifications & Image Framing */}
                        <div className="space-y-8 w-full">

                            {/* Layout Header Asymmetrical Split Frame */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-200 pb-6 w-full">
                                <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-md flex-shrink-0 relative">
                                    <img src={activeDish.image} alt={activeDish.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-2 text-center sm:text-left flex-1 min-w-0 pt-1">
                                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block">Step 3: Central Evaluation Stage</span>
                                    <h2 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-black leading-tight break-words">
                                        {activeDish.name}
                                    </h2>
                                    <div className="flex items-center justify-center sm:justify-start gap-2.5 mt-1.5">
                                        <div className="flex items-center">{renderCleanStars(activeDish.rating)}</div>
                                        <span className="text-xs text-gray-400 font-bold font-mono">({activeDish.reviews})</span>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Paragraph Sections: Gastronomic Character and Tracked Ingredients */}
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <span className="text-xs font-extrabold tracking-wider text-gray-400 uppercase block">Culinary Narrative Description</span>
                                    <p className="text-base text-gray-700 font-normal leading-relaxed">
                                        {activeDish.desc}
                                    </p>
                                </div>

                                <div className="space-y-2 border-l-2 border-black pl-4 bg-gray-50/60 py-3 pr-3 rounded-r-xl">
                                    <span className="text-xs font-extrabold tracking-wider text-gray-500 uppercase block">Validated Composition Ingredients</span>
                                    <p className="text-sm text-gray-600 font-semibold tracking-wide leading-snug">
                                        {activeDish.ingredients}
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Lower Structural Base: Live Multiplier Metrics & Submission Triggers */}
                        <div className="border-t border-gray-200 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">

                            {/* Interactive Segment: Increment Portions Counter Panel */}
                            <div className="flex flex-col gap-1.5 items-center sm:items-start flex-shrink-0">
                                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Adjust Order Portions</span>
                                <div className="flex items-center border-2 border-gray-200 rounded-xl bg-white p-1 overflow-hidden">
                                    <button
                                        disabled={itemQuantity <= 1}
                                        onClick={() => setItemQuantity(prev => prev - 1)}
                                        className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black disabled:opacity-30 cursor-pointer transition-colors"
                                    >
                                        <Icon icon="lucide:minus" className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center text-base font-bold font-mono text-black">{itemQuantity}</span>
                                    <button
                                        onClick={() => setItemQuantity(prev => prev + 1)}
                                        className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black cursor-pointer transition-colors"
                                    >
                                        <Icon icon="lucide:plus" className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Aggregation Checkout Cost and Execution Interaction */}
                            <div className="flex flex-col sm:items-end w-full sm:w-auto space-y-1.5">
                                <div className="text-center sm:text-right">
                                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block">Total Evaluation</span>
                                    <span className="text-2xl font-serif font-medium text-black tracking-wide">
                                        {(parseInt(activeDish.price.replace(/[^0-9]/g, '')) * itemQuantity).toLocaleString()} RWF
                                    </span>
                                </div>
                                <button className="bg-black hover:bg-zinc-900 text-white font-bold text-sm tracking-wide rounded-xl px-8 py-3.5 transition-all shadow-md w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer">
                                    <Icon icon="lucide:shopping-bag" className="w-4 h-4" />
                                    Confirm Pre-Order Selection
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}