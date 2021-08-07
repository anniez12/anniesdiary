import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../layouts/Layout';
  
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

const Home = () => {
    return (
        <Layout>
            <div className="home">
            <motion.div className="home-title">
                <motion.h1 className="first-name" variants={page}>annie</motion.h1>
                <motion.h1 className="last-name" variants={page}>zhang</motion.h1>
            </motion.div>
            <motion.div className="home-subtitle">
                <motion.h3 className="home-subtitle-a" variants={page}>design. </motion.h3>
                <motion.h3 className="home-subtitle-b" variants={page}>développement web.</motion.h3>
            </motion.div>
            </div>
        </Layout>
    );
          
}

export default Home