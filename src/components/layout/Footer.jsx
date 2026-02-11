import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="group inline-block">
                            <span className="text-2xl font-bold font-serif text-white tracking-tight">
                                ESTATEWEBLY<span className="text-secondary">.</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 font-light">
                            Transforming real estate businesses globally through digital innovation. We help you reach global markets and grow your property business.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-serif font-bold mb-6 tracking-wide">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="hover:text-secondary transition-colors duration-300 uppercase tracking-widest text-xs font-semibold">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-serif font-bold mb-6 tracking-wide">Contact Us</h3>
                        <ul className="space-y-4 text-sm font-light">
                            <li className="flex items-start space-x-3">
                                <Mail size={18} className="text-secondary shrink-0 mt-0.5" />
                                <span>hello@estatewebly.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone size={18} className="text-secondary shrink-0 mt-0.5" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                                <span>Bangalore, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-white font-serif font-bold mb-6 tracking-wide">Follow Us</h3>
                        <div className="flex space-x-4">
                            {[Linkedin, Github, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 bg-slate-800/50 rounded-none hover:bg-secondary hover:text-white transition-all duration-300 group">
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-wider">
                    <p>&copy; {currentYear} EstateWebly. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
