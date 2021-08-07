import React from 'react';
import { motion } from 'framer-motion';
import BackPrevPage from '../components/BackPrevPage';

const content = {
    animate: {
      transition: { staggerChildren: 0.15 },
    },
  };


const Work =({children}) =>{
    return(
        <>
            <BackPrevPage />
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

export default Work;