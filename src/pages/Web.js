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
const Web = () => {
   
    return (
        <Layout>
            <div className="web">
                <motion.div className="web-title" variants={pageTitle}>
                    <motion.h2 variants={page}>réalisations en web</motion.h2>
                </motion.div>
                <div className="web-content">
                    <div className="web-menu">
                        <Link to="/web/cafepekoe" className="web-menu-option">
                            <div>
                                <motion.h3 variants={page} ><sup>i</sup>café pékoe<span class="slider"></span></motion.h3>
                                <motion.h5 variants={page} >photoshop, illustrator, xd</motion.h5>
                            </div>   
                            <motion.img variants={page} src="webImg/CP_logo.png" />
                        </Link>
                        <Link to="/web/moonwave" className="web-menu-option">
                        <motion.div>
                                <motion.h3 variants={page}><sup>ii</sup>moonwave<span class="slider"></span></motion.h3>
                                <motion.h5 variants={page}>react, bootstrap, scss</motion.h5>
                            </motion.div>   
                            <motion.img variants={page} src="webImg/mw_logo.png" />
                        </Link>
                        <Link to="/web/anniesdiary" className="web-menu-option">
                        <motion.div>
                                <motion.h3  variants={page}><sup>iii</sup>annie's diary<span class="slider"></span></motion.h3>
                                <motion.h5 variants={page}>react, framer motion, scss</motion.h5>
                            </motion.div>   
                            <motion.img  variants={page} src="img/welcome_delimiters.png" />
                        </Link>
                    </div>
                </div>
            </div>         
        </Layout>
    )
}

export default Web