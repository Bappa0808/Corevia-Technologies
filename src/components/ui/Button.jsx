import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-none';

    const variants = {
        primary: 'bg-primary text-white hover:bg-slate-800 focus:ring-slate-900',
        secondary: 'bg-secondary text-white hover:bg-opacity-90 focus:ring-secondary',
        outline: 'border border-slate-300 text-slate-700 hover:border-primary hover:text-primary focus:ring-slate-300',
        ghost: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
        'premium': 'bg-secondary text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary shadow-md',
        'premium-outline': 'border border-white text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary bg-transparent'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
