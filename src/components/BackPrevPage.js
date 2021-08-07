import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const page = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
};

const BackPrevPage = () => {

    return (
        <motion.div variants={page} initial="initial" animate="animate" className="prev-page">
            <NavLink exact to="/web" className="nav-link">
                <span>&#8592;<span class="slider"></span></span>
            </NavLink>
        </motion.div>
    )
}

export default BackPrevPage;