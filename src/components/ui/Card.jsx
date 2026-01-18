import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
    return (
        <motion.div
            initial={hoverEffect ? { y: 0 } : undefined}
            whileHover={hoverEffect ? { y: -5 } : undefined}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-100 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
