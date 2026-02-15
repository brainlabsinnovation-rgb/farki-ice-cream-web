import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    const quickLinks = [
        { href: "/", label: "Home" },
        { href: "/menu", label: "Menu" },
        { href: "/about", label: "About Us" },
        { href: "/locations", label: "Locations" },
        { href: "/party-orders", label: "Party Orders" },
        { href: "/contact", label: "Contact" },
    ];

    const locations = [
        "Delhi Darwaja (Original)",
        "Maninagar",
        "Chandkheda",
        "Income Tax Area",
        "Gandhinagar",
    ];

    return (
        <footer className="bg-gradient-to-br from-[#2C2C2C] to-[#1a1a1a] text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="text-5xl">🍦</div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#FF6B35]">Farki</h3>
                                <p className="text-sm text-gray-400 font-display">Since 1992</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Ahmedabad&apos;s favorite ice cream & lassi destination for 32 years. Taste tradition in every bite.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-[#FFD93D]">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-[#FFD93D]">Our Outlets</h4>
                        <ul className="space-y-3">
                            {locations.map((location) => (
                                <li key={location} className="text-gray-400 flex items-start gap-2">
                                    <MapPin className="w-4 h-4 mt-1 text-[#6BCB77] flex-shrink-0" />
                                    <span>{location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-[#FFD93D]">Contact Us</h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+917405013255"
                                className="flex items-center gap-3 text-gray-400 hover:text-[#FF6B35] transition-colors"
                            >
                                <Phone className="w-5 h-5 text-[#6BCB77]" />
                                <span>+91 74050 13255</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-[#6BCB77] mt-1 flex-shrink-0" />
                                <span>
                                    Outside Delhi Gate, Shahibaug Road,
                                    <br />
                                    Opposite BG Tower, Madhupura,
                                    <br />
                                    Ahmedabad, Gujarat 380004
                                </span>
                            </div>
                            <div className="text-gray-400">
                                <p className="font-semibold text-white mb-1">Operating Hours:</p>
                                <p>7:00 AM - 11:00 PM</p>
                                <p className="text-sm">(All Days)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-gray-400 mb-2">
                        © 2026 Farki - House of Lassi & Ice Cream. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500">
                        Made with ❤️ for the people of Ahmedabad
                    </p>
                </div>
            </div>
        </footer>
    );
}
