"use client";

import { motion } from "framer-motion";
import { Calendar, Star, MapPin, Award } from "lucide-react";

export default function LegacySection() {
    const achievements = [
        {
            icon: Calendar,
            title: "Since 1992",
            subtitle: "32+ Years",
            color: "text-[#FF6B35]",
        },
        {
            icon: Star,
            title: "2,197+ Reviews",
            subtitle: "4.3★ Rating",
            color: "text-[#FFD93D]",
        },
        {
            icon: MapPin,
            title: "5 Locations",
            subtitle: "Across Ahmedabad",
            color: "text-[#6BCB77]",
        },
        {
            icon: Award,
            title: "Made Fresh Daily",
            subtitle: "No Preservatives",
            color: "text-[#E63946]",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-[#FFF9E6] via-white to-[#FFF9E6] relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
                        <span className="text-[#E63946]">32 Years</span> of Sweet Memories
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From a small shop at Delhi Darwaja to Ahmedabad&apos;s favorite dessert destination
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 flex items-center justify-center gap-4 flex-wrap"
                >
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="text-4xl font-display font-bold text-[#FF6B35]">1992</div>
                        <div className="text-sm text-gray-600 mt-2">Founded</div>
                    </div>
                    <div className="hidden md:block text-4xl text-[#FFD93D]">→</div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="text-4xl font-display font-bold text-[#6BCB77]">2000s</div>
                        <div className="text-sm text-gray-600 mt-2">Expansion</div>
                    </div>
                    <div className="hidden md:block text-4xl text-[#FFD93D]">→</div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="text-4xl font-display font-bold text-[#E63946]">2026</div>
                        <div className="text-sm text-gray-600 mt-2">Still Growing</div>
                    </div>
                </motion.div>

                {/* Story */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto mb-16 bg-white rounded-3xl shadow-xl p-8 md:p-12"
                >
                    <h3 className="text-3xl font-bold text-[#2C2C2C] mb-6 text-center">
                        Our Family Story
                    </h3>
                    <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                        <p>
                            In 1992, we started with a simple dream - to bring the authentic taste of traditional Gujarati desserts to the people of Ahmedabad. What began as a small shop outside Delhi Gate has grown into a beloved brand with 5 locations across the city.
                        </p>
                        <p>
                            For over three decades, we&apos;ve been crafting ice creams, lassis, and traditional sweets using time-honored recipes passed down through generations. Our commitment to quality, freshness, and authentic flavors has made us a household name.
                        </p>
                        <p>
                            Every scoop of ice cream, every glass of lassi, and every piece of mithai is made with the same love and care that our founders started with. We believe in using only the finest ingredients, making everything fresh daily, and never compromising on taste.
                        </p>
                    </div>
                </motion.div>

                {/* Achievement Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                                <Icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`} />
                                <h4 className="text-lg font-bold text-[#2C2C2C] mb-1">
                                    {achievement.title}
                                </h4>
                                <p className="text-sm text-gray-600">{achievement.subtitle}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Gujarati Tradition Message */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-2xl md:text-3xl font-display font-bold text-[#E63946] italic">
                        &quot;Gujarati tradition in every bite&quot;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
