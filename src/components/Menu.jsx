import React, { useState } from 'react';
import { Icon } from '@iconify/react';


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

    // 🗛️ 3. Interaction States
    const [selectedCategoryId, setSelectedCategoryId] = useState('drinks'); // Matches your final image view default
    const [selectedDishId, setSelectedDishId] = useState('d10');           // Default focused on Pink Lady
    const [itemQuantity, setItemQuantity] = useState(1);

    const filteredDishes = allDishes.filter(dish => dish.categoryId === selectedCategoryId);
    const activeDish = allDishes.find(dish => dish.id === selectedDishId) || filteredDishes[0] || allDishes[0];

    const handleCategoryShift = (catId) => {
        setSelectedCategoryId(catId);
        const firstDishInNewCat = allDishes.find(dish => dish.categoryId === catId);
        if (firstDishInNewCat) {
            setSelectedDishId(firstDishInNewCat.id);
        }
        setItemQuantity(1);
    };

    const renderCleanStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<Icon key={i} icon="bi:star-fill" className="w-4 h-4 text-black" />);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<Icon key={i} icon="bi:star-half" className="w-4 h-4 text-black" />);
            } else {
                stars.push(<Icon key={i} icon="bi:star" className="w-4 h-4 text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <div className="w-full min-h-screen bg-[#FDFDFD] text-gray-900 flex font-sans antialiased text-left select-none">


            {/* 🍽️ MAIN EXPLORER CANVAS */}
            <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto max-w-[1600px] mx-auto w-full space-y-16">

                {/* 🔝 UPPER HEADER BLOCK */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 w-full border-b border-gray-200/80 pb-8">
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-black tracking-tight">
                            Menu Workspace
                        </h1>
                        <p className="text-gray-500 text-xl font-normal tracking-wide">
                            Select a collection array below to filter sub-variants, then explore analytical dish focus inside the central stage.
                        </p>
                    </div>
                    <div className="w-full max-w-sm bg-white border-2 border-gray-300 rounded-xl px-5 py-3.5 flex items-center gap-3 shadow-sm">
                        <Icon icon="lucide:search" className="text-gray-400 w-6 h-6 flex-shrink-0" />
                        <input type="text" placeholder="Search menu dishes..." className="w-full text-lg bg-transparent text-black placeholder-gray-400 focus:outline-none font-medium" />
                    </div>
                </div>

                {/* 🗂️ STEP 1: CLASSIFIED COLLECTIONS SELECTOR ROW */}
                <div className="space-y-6">
                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-md inline-block">
                        Step 1: Classified Collections
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {categories.map((cat) => {
                            const isCurrentCat = selectedCategoryId === cat.id;
                            return (
                                <div
                                    key={cat.id}
                                    onClick={() => handleCategoryShift(cat.id)}
                                    className={`bg-white border-2 rounded-2xl overflow-hidden p-5 flex flex-col space-y-4 transition-all group cursor-pointer shadow-sm
                                        ${isCurrentCat ? 'border-black ring-2 ring-black' : 'border-gray-200/90 hover:border-zinc-400'}`}
                                >
                                    <div className="w-full h-36 bg-gray-50 rounded-xl overflow-hidden relative">
                                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                        <span className="absolute bottom-3 right-3 text-sm font-bold font-mono bg-black text-white px-2.5 py-1 rounded-md shadow">
                                            ★ {cat.rating}
                                        </span>
                                    </div>
                                    <div className="space-y-1 pl-0.5">
                                        <h4 className="text-xl font-bold text-black leading-tight truncate group-hover:text-zinc-700">{cat.name}</h4>
                                        <p className="text-sm text-gray-500 truncate font-medium">{cat.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 🛠️ STEP 2 & 3: TWO-COLUMN ASYMMETRIC INTERACTIVE SYSTEM */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch w-full">

                    {/* LEFT COLUMN: SELECTED CATEGORY SUITE GRID LISTING (5 COLS) */}
                    <div className="col-span-1 lg:col-span-5 flex flex-col space-y-6">
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-md inline-block self-start">
                                Step 2: Associated Category Selections
                            </h3>
                            <span className="text-sm text-zinc-500 font-medium tracking-wide pl-1">
                                Filtering archives for: <b className="text-black underline font-bold text-base">{categories.find(c => c.id === selectedCategoryId)?.name}</b>
                            </span>
                        </div>

                        <div className="flex flex-col gap-4 max-h-[650px] overflow-y-auto pr-2">
                            {filteredDishes.map((dish) => {
                                const isSelectedDish = selectedDishId === dish.id;
                                return (
                                    <div
                                        key={dish.id}
                                        onClick={() => {
                                            setSelectedDishId(dish.id);
                                            setItemQuantity(1);
                                        }}
                                        className={`flex items-center justify-between p-5 bg-white border-2 rounded-2xl cursor-pointer transition-all w-full shadow-sm group
                                            ${isSelectedDish ? 'border-black bg-zinc-50/80 ring-1 ring-black' : 'border-gray-200/90 hover:border-black'}`}
                                    >
                                        <div className="flex items-center gap-5 min-w-0">
                                            <img src={dish.image} alt={dish.name} className="w-20 h-20 rounded-xl object-cover border border-gray-200/60 flex-shrink-0 shadow-sm" />
                                            <div className="flex flex-col min-w-0 space-y-1.5">
                                                <span className={`text-lg font-bold text-gray-900 group-hover:text-black truncate leading-snug ${isSelectedDish ? 'text-xl font-extrabold text-black' : ''}`}>
                                                    {dish.name}
                                                </span>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="flex items-center gap-0.5">{renderCleanStars(dish.rating)}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-base font-black font-mono text-black pl-4 flex-shrink-0">
                                            {dish.price}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CENTRAL STAGE EVALUATION CONSOLE (7 COLS) */}
                    <div className="col-span-1 lg:col-span-7 bg-white border-2 border-black rounded-3xl p-10 shadow-lg flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white to-[#FAFAFA]">

                        <div className="space-y-8 w-full">

                            {/* Header Frame */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 border-b border-zinc-200 pb-8 w-full">
                                <div className="w-48 h-48 rounded-2xl overflow-hidden border border-zinc-200 shadow-md flex-shrink-0 relative">
                                    <img src={activeDish.image} alt={activeDish.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-3 text-center sm:text-left flex-1 min-w-0 pt-2">
                                    <span className="text-xs font-black text-zinc-400 uppercase tracking-widest block">
                                        Step 3: Central Evaluation Stage
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-black leading-tight break-words">
                                        {activeDish.name}
                                    </h2>
                                    <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                                        <div className="flex items-center gap-0.5">{renderCleanStars(activeDish.rating)}</div>
                                        <span className="text-sm text-zinc-500 font-bold font-mono">({activeDish.reviews})</span>
                                    </div>
                                </div>
                            </div>

                            {/* Narrative Paragraph Blocks */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <span className="text-xs font-black tracking-wider text-zinc-400 uppercase block">
                                        Culinary Narrative Description
                                    </span>
                                    <p className="text-lg text-zinc-800 font-normal leading-relaxed">
                                        {activeDish.desc}
                                    </p>
                                </div>

                                <div className="space-y-2 border-l-4 border-black bg-zinc-50 p-5 rounded-r-xl">
                                    <span className="text-xs font-black tracking-wider text-zinc-500 uppercase block">
                                        Validated Composition Ingredients
                                    </span>
                                    <p className="text-base text-zinc-900 font-medium tracking-wide leading-relaxed">
                                        {activeDish.ingredients}
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Lower Structural Base: Quantity & Action controls */}
                        <div className="border-t border-zinc-200 pt-8 mt-10 flex flex-col sm:flex-row items-center justify-between gap-8 w-full">

                            {/* Counter Panel */}
                            <div className="flex flex-col gap-2 items-center sm:items-start flex-shrink-0">
                                <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                                    Adjust Order Portions
                                </span>
                                <div className="flex items-center border-2 border-zinc-300 rounded-xl bg-white p-1.5 overflow-hidden shadow-sm">
                                    <button
                                        disabled={itemQuantity <= 1}
                                        onClick={() => setItemQuantity(prev => prev - 1)}
                                        className="w-10 h-10 rounded-lg flex items-center justify-center text-zinc-500 hover:bg-zinc-100 hover:text-black disabled:opacity-20 cursor-pointer transition-colors"
                                    >
                                        <Icon icon="lucide:minus" className="w-5 h-5" />
                                    </button>
                                    <span className="w-14 text-center text-lg font-black font-mono text-black">{itemQuantity}</span>
                                    <button
                                        onClick={() => setItemQuantity(prev => prev + 1)}
                                        className="w-10 h-10 rounded-lg flex items-center justify-center text-zinc-500 hover:bg-zinc-100 hover:text-black cursor-pointer transition-colors"
                                    >
                                        <Icon icon="lucide:plus" className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Final Output Calculation & Submission */}
                            <div className="flex flex-col sm:items-end w-full sm:w-auto space-y-2">
                                <div className="text-center sm:text-right">
                                    <span className="text-xs font-black text-zinc-400 uppercase tracking-widest block">
                                        Total Evaluation
                                    </span>
                                    <span className="text-3xl font-serif font-black text-black tracking-wide">
                                        {(parseInt(activeDish.price.replace(/[^0-9]/g, '')) * itemQuantity).toLocaleString()} RWF
                                    </span>
                                </div>
                                <button className="bg-black hover:bg-zinc-900 text-white font-bold text-base tracking-wide rounded-xl px-8 py-4 transition-all shadow-md w-full sm:w-auto flex items-center justify-center gap-3 cursor-pointer">
                                    <Icon icon="lucide:shopping-bag" className="w-5 h-5" />
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