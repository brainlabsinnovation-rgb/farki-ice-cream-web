"use client";

import { motion } from "framer-motion";
import { Badge } from "lucide-react";

interface BestSellerItem {
    name: string;
    price: string;
    badge: string;
    emoji: string;
    description: string;
}

const bestSellers: BestSellerItem[] = [
    {
        name: "Rajwadi Dry Fruit Lassi",
        price: "₹90",
        badge: "SIGNATURE",
        emoji: "🥤",
        description: "Loaded with premium dry fruits",
    },
    {
        name: "Sitafal Ice Cream",
        price: "₹55",
        badge: "SPECIALTY",
        emoji: "🍦",
        description: "Unique custard apple flavor",
    },
    {
        name: "Magic Nut Matho",
        price: "₹300/kg",
        badge: "TRADITIONAL",
        emoji: "🍯",
        description: "Authentic Gujarati sweet",
    },
    {
        name: "Titanic Sundae",
        price: "₹125",
        badge: "POPULAR",
        emoji: "🍨",
        description: "Serves 2 people",
    },
    {
        name: "Premium Shahi Falooda",
        price: "₹75",
        badge: "PREMIUM",
        emoji: "🥛",
        description: "Royal dessert experience",
    },
    {
        name: "Party Pack Ice Cream",
        price: "₹110+",
        badge: "PARTY FAVORITE",
        emoji: "🎉",
        description: "700ml perfect for celebrations",
    },
    {
        name: "Chocolate Lassi",
        price: "₹80",
        badge: "BESTSELLER",
        emoji: "🍫",
        description: "Rich chocolate blend",
    },
    {
        name: "Farki Halwo",
        price: "₹400/kg",
        badge: "TRADITIONAL",
        emoji: "🍬",
        description: "Made fresh daily",
    },
];

const badgeColors: Record<string, string> = {
    SIGNATURE: "bg-[#E63946] text-white",
    SPECIALTY: "bg-[#FF6B35] text-white",
    TRADITIONAL: "bg-[#6BCB77] text-white",
    POPULAR: "bg-[#FFD93D] text-[#2C2C2C]",
    PREMIUM: "bg-purple-600 text-white",
    "PARTY FAVORITE": "bg-pink-500 text-white",
    BESTSELLER: "bg-blue-500 text-white",
};

export default function BestSellers() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-[#FFF9E6]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
                        Our <span className="text-[#FF6B35]">Bestsellers</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Taste the favorites that have delighted Ahmedabad for 32 years
                    </p>
                </motion.div>

                {/* Horizontal Scrolling Carousel */}
                <div className="relative">
                    <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                        {bestSellers.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-shrink-0 w-80 snap-center"
                            >
                                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105">
                                    {/* Image Placeholder with Emoji */}
                                    <div className="h-48 bg-gradient-to-br from-[#FFD93D] to-[#FF6B35] flex items-center justify-center relative overflow-hidden">
                                        <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                                            {item.emoji}
                                        </div>
                                        {/* Badge */}
                                        <div
                                            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${badgeColors[item.badge]
                                                }`}
                                        >
                                            {item.badge}
                                        </div>
                                        {/* Veg Icon */}
                                        <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-green-600 rounded-sm flex items-center justify-center bg-white">
                                            <div className="w-3 h-3 bg-green-600 rounded-full" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-[#FF6B35]">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* View Full Menu CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/menu"
                        className="inline-block bg-[#FF6B35] hover:bg-[#ff5722] text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        View Full Menu
                    </a>
                </motion.div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
