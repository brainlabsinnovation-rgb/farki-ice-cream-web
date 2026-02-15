"use client";

import { motion } from "framer-motion";
import { Calendar, ChefHat, Leaf, IndianRupee, MapPin, Star } from "lucide-react";

export default function WhyFarki() {
    const features = [
        {
            icon: Calendar,
            title: "32 Years Legacy",
            description: "Trusted by generations since 1992",
            color: "bg-gradient-to-br from-[#FF6B35] to-[#E63946]",
        },
        {
            icon: ChefHat,
            title: "Made Fresh Daily",
            description: "All sweets and ice creams prepared fresh every day",
            color: "bg-gradient-to-br from-[#FFD93D] to-[#FF6B35]",
        },
        {
            icon: Leaf,
            title: "No Preservatives",
            description: "100% natural ingredients, no artificial additives",
            color: "bg-gradient-to-br from-[#6BCB77] to-[#4CAF50]",
        },
        {
            icon: IndianRupee,
            title: "₹250 For Two",
            description: "Premium quality at pocket-friendly prices",
            color: "bg-gradient-to-br from-[#E63946] to-[#C62828]",
        },
        {
            icon: MapPin,
            title: "Multiple Locations",
            description: "5 outlets across Ahmedabad for your convenience",
            color: "bg-gradient-to-br from-[#9C27B0] to-[#7B1FA2]",
        },
        {
            icon: Star,
            title: "2,197+ Reviews",
            description: "4.3★ rating from happy customers",
            color: "bg-gradient-to-br from-[#FF9800] to-[#F57C00]",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
                        Why Choose <span className="text-[#FF6B35]">Farki?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience the perfect blend of tradition, quality, and taste
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-[#FF6B35] hover:scale-105">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-2xl font-semibold text-gray-700 mb-6">
                        Ready to taste the tradition?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/locations"
                            className="inline-block bg-[#FF6B35] hover:bg-[#ff5722] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Find a Location
                        </a>
                        <a
                            href="tel:+917405013255"
                            className="inline-block bg-[#6BCB77] hover:bg-[#5bb967] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Call to Order
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
