import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const content = {
    animate: {
      transition: { staggerChildren: 0.15 },
    },
  };


const Layout =({children}) =>{
    return(
        <>
            <Navigation />
            <motion.div
                className = "page"
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                variants={content}
            >
                {children}
            </motion.div>
        </>
    )
}

export default Layout;