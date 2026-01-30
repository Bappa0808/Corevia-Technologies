import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    // Navbar logic: Transparent on Home (until scroll), Solid Navy elsewhere
    const isTransparent = isHome && !scrolled;

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isTransparent ? 'bg-transparent py-6' : 'bg-primary shadow-md py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="group relative z-50">
                        <span className={`text-2xl font-bold font-serif tracking-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-white'
                            }`}>
                            COREVIA
                            <span className="text-secondary">.</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs font-semibold uppercase tracking-widest hover:text-secondary transition-colors duration-300 ${location.pathname === link.path ? 'text-secondary' : 'text-white/80'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact">
                            <button className={`
                px-6 py-2 border text-xs font-bold uppercase tracking-widest transition-all duration-300
                ${isTransparent
                                    ? 'border-white text-white hover:bg-white hover:text-primary'
                                    : 'border-secondary text-secondary hover:bg-secondary hover:text-white'}
              `}>
                                Get Started
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden z-50">
                        <button
                            onClick={toggleMenu}
                            className={`focus:outline-none transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-white'}`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 w-full h-screen bg-primary flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-2xl font-serif text-white hover:text-secondary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact">
                            <button className="px-8 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all uppercase tracking-widest text-sm font-bold">
                                Get Started
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
