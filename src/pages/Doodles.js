import React from 'react';
import { Link } from 'react-router-dom';
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

const pageTitle = {
    initial: { height: "0" },
    animate: {
        height: "40vh",
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    }
}

const Doodles = () => {
    return (
        <Layout>
            <div className="doodles">
                <motion.div className="doodles-info" variants={pageTitle}>
                    <p>Ici se retrouve une compilation de divers réalisations   faites par moi-même: des petits sketchs, des textures ou encore   des modèles 3D. En d'autres mots, une présentation de mes     autres intérêts!</p>
                </motion.div>
                <motion.div className="doodles-content">
                <motion.h2 variants={page}>des choses</motion.h2>
                    <p>allô</p>
                </motion.div>
            </div>
            
        </Layout>
        
    )
}

export default Doodles