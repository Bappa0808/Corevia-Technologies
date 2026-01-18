import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-primary text-white hover:bg-slate-800 focus:ring-slate-900',
        secondary: 'bg-secondary text-white hover:bg-purple-700 focus:ring-purple-600',
        outline: 'border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary focus:ring-slate-300',
        ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
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
