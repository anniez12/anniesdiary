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

const WorkAD = () => {
    return (
        <Work>
            <motion.div id="work-ad" className="web-work">
                <motion.div className="web-work-title" variants={page}>
                    <motion.h2 variants={page}>annie's diary</motion.h2>
                    <motion.h5 variants={page}>photoshop, react, framer motion, scss</motion.h5>
                    <motion.p variants={page}><i>Mon petit monde à moi, où le rose est président.</i></motion.p>
                    <motion.p variants={page}>Ce site est mon havre de paix où je compte présenter mes projets personnels, peu importe le médium.</motion.p>
                    <motion.div className="web-work-title-img" variants={page}>
                        <img src="../img/welcome_annie.png" />
                    </motion.div>
                    
                </motion.div>
                <div className="web-work-content">
                    <motion.div className="mw-item" variants={page}>
                        <a href="https://github.com/anniez12/anniesdiary" target="_blank">
                            <motion.img 
                                initial= {{scale: 0.7}}
                                whileHover={{scale: 0.8, rotate: 10}}
                                transition={{type:"spring"}}
                                src="../img/welcome_delimiters.png" />
                            <h4>Github &#8594;</h4>
                        </a>                      
                    </motion.div>
                </div>
            </motion.div>
        </Work>
    )
}

export default WorkAD;