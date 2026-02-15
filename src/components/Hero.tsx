"use client";

import { Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFD93D] via-[#FF6B35] to-[#E63946]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-40 right-20 w-40 h-40 bg-white/20 rounded-full blur-3xl"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Legacy Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
                    >
                        <span className="text-2xl">🍦</span>
                        <span className="font-display text-lg md:text-xl text-[#E63946] font-bold">
                            32 Years of Sweetness
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl"
                    >
                        Taste Tradition
                        <br />
                        <span className="text-[#FFF9E6]">Since 1992</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-6 max-w-3xl font-semibold"
                    >
                        Ahmedabad&apos;s Favorite Ice Cream & Lassi for 32 Years
                    </motion.p>

                    {/* Rating Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-10 flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-xl"
                    >
                        <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-[#FFD93D] text-[#FFD93D]" />
                            ))}
                            <Star className="w-5 h-5 fill-[#FFD93D] text-[#FFD93D] opacity-50" />
                        </div>
                        <span className="text-lg font-bold text-[#2C2C2C]">4.3</span>
                        <span className="text-sm text-gray-600">• 2,197+ Happy Customers</span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl px-4"
                    >
                        {/* Swiggy Button */}
                        <a
                            href="https://www.swiggy.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#FF6B35] hover:bg-[#ff5722] text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl flex items-center justify-center gap-2"
                        >
                            🛵 Order on Swiggy
                        </a>

                        {/* Zomato Button */}
                        <a
                            href="https://www.zomato.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#E63946] hover:bg-[#d62839] text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl flex items-center justify-center gap-2"
                        >
                            🍽️ Order on Zomato
                        </a>

                        {/* Call Now Button */}
                        <a
                            href="tel:+917405013255"
                            className="flex-1 bg-[#6BCB77] hover:bg-[#5bb967] text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call Now
                        </a>
                    </motion.div>

                    {/* Floating Ice Cream Animation */}
                    <motion.div
                        className="mt-16 relative"
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="text-9xl drop-shadow-2xl">🍦</div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/4 left-10 text-6xl opacity-30 animate-float">
                        🥤
                    </div>
                    <div className="absolute top-1/3 right-10 text-7xl opacity-30 animate-float" style={{ animationDelay: "1s" }}>
                        🍨
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 text-5xl opacity-30 animate-float" style={{ animationDelay: "2s" }}>
                        🍧
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
