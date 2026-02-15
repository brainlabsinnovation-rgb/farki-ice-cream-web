"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/menu", label: "Menu" },
        { href: "/about", label: "About" },
        { href: "/locations", label: "Locations" },
        { href: "/party-orders", label: "Party Orders" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            {/* Top Bar with Call Now */}
            <div className="bg-[#E63946] text-white py-2 px-4 text-center sticky top-0 z-50">
                <a
                    href="tel:+917405013255"
                    className="flex items-center justify-center gap-2 font-semibold hover:text-[#FFD93D] transition-colors"
                >
                    <Phone className="w-4 h-4" />
                    <span>Call Now: +91 74050 13255</span>
                </a>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-lg sticky top-10 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="text-4xl">🍦</div>
                            <div>
                                <h1 className="text-2xl font-bold text-[#FF6B35]">Farki</h1>
                                <p className="text-xs text-gray-600 font-display">Since 1992</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-700 hover:text-[#FF6B35] font-semibold transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-gray-700 hover:text-[#FF6B35] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-white border-t overflow-hidden"
                        >
                            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-700 hover:text-[#FF6B35] font-semibold py-2 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
