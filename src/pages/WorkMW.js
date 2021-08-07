import React from 'react';
import { motion } from 'framer-motion';
import Work from '../layouts/Work';

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

const WorkMW = () => {
    return (
        <Work>
            <motion.div id="work-mw" className="web-work">
                <motion.div className="web-work-title" variants={page}>
                    <motion.h2 variants={page}>moonwave</motion.h2>
                    <motion.h5 variants={page}>illustrator, react, bootstrap, scss</motion.h5>
                    <motion.p variants={page}>Mon projet de session utilisant l'API de TMDB, où nous devions créer le branding et le site web à l'aide de react. </motion.p>
                    <motion.p variants={page}><i>Moonwave est une plateforme de streaming, possédant un immense catalogue de films pour satisfaire les plus grands passionnés du cinéma. Moonwave, le one-way au septième art!</i></motion.p>
                    <motion.div className="web-work-title-img" variants={page}>
                        <img src="../img/popcornMonster.png" />
                    </motion.div>
                    
                </motion.div>
                <div className="web-work-content">
                    <motion.div className="mw-item" variants={page}>
                        <a href="https://moonwave.anniesdiary.com" target="_blank">
                            <motion.img 
                                initial= {{scale: 0.7}}
                                whileHover={{scale: 0.8, rotate: 10}}
                                transition={{type:"spring"}}
                                src="../webImg/mw_boat.png" />
                            <h4>Visitez Moonwave &#8594;</h4>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </Work>
    )
}

export default WorkMW;