import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Code2, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2 text-white">
                            <Code2 className="text-secondary" size={28} />
                            <span className="text-xl font-bold">Corevia</span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Empowering businesses with cutting-edge digital solutions. We build scalable, modern, and high-performance websites.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
                            <li><Link to="/projects" className="hover:text-secondary transition-colors">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-secondary" />
                                <span className="text-sm">hello@coreviatech.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-secondary" />
                                <span className="text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin size={18} className="text-secondary" />
                                <span className="text-sm">Kolkata, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-secondary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-secondary transition-colors"><Github size={20} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-secondary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-secondary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Corevia Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
