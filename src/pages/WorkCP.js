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

const WorkCP = () => {
    return (
        <Work>
            <motion.div id="work-cp" className="web-work">
                <motion.div className="web-work-title" variants={page}>
                    <motion.h2 className="no-select" variants={page}>café pékoe</motion.h2>
                    <motion.h5 variants={page}>photoshop, illustrator, xd</motion.h5>
                    <motion.p variants={page}>Un projet d'école dont le mandat était de refaire le branding et l'interface d'un site mobile d'une entreprise de notre choix.</motion.p>
                    <motion.p variants={page}><i>Café Pékoe est un petit café vegan-friendly situé sur St-Joseph   qui offre une grande variété de breuvages et de repas rapides.</i></motion.p>
                    <motion.p variants={page}>La refonte du site a été effectuée tout en conservant le charme du café : chaleureux et jeune.</motion.p>
                    <motion.div className="web-work-title-img no-select" variants={page}>
                        <img src="../img/drinkingBubbleTea.png" />
                    </motion.div>
                    
                </motion.div>
                <div className="web-work-content no-select">
                    <motion.div className="cp-item" variants={page}>
                        <h4>Boites publicitaires</h4>
                        <div className="cp-ads-img">
                            <img src="../webImg/CP_ad_01.png" />
                            <img src="../webImg/CP_ad_02.png" />
                        </div>
                    </motion.div>
                    <motion.div className="cp-item" variants={page}>
                        <h4>Maquettes</h4>
                        <div className="cp-mockups-img">
                            <img src="../webImg/CP_home.png" />
                            <img src="../webImg/CP_nav.png" />
                            <img src="../webImg/CP_menu.png" />
                            
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Work>
    )
}

export default WorkCP;