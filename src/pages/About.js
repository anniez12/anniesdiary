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

const pageTitle = {
    initial: { height: "0" },
    animate: {
        height: "100vh",
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    }
};

const About = () => {
   
    return (
       <Layout>
           <div className="about">
               <motion.div className="about-title" variants={pageTitle}>
                    <motion.h2 variants={page}>à propos</motion.h2>
               </motion.div>
               <div className="about-content">
                    <motion.p className="about-text" variants={page} >
                        <h3>Hello!</h3><br/>
                        <p className="about-text-small"><i>Merci d’avoir pris le temps de jeter un coup d’œil à mon petit journal. À la fin de votre visite, j’espère que vous me connaitrez mieux à travers cet écran virtuel. Et oui, le rose est ma couleur préférée.</i></p><br/>
                        <p>Je détiens un <b>AEC en techniques de développement web</b>, mais avant l’obtention de ce diplôme, j’ai également étudié en programmation, en architecture et en art 3D.  Oui oui, ça m’a pris du temps trouver le bon dosage pour mon esprit [logique] et celui [créatif], mais j’ai fini par réussir!</p><br/>
                        <p>Je suis quelqu’un qui porte une grande importance sur le visuel, mais également sur l’originalité. J'aime réaliser des projets qui sortent du lot, sans compromettre l'apparence.</p><br/>
                        <p className="about-signature">Annie Zhang</p>
                    </motion.p>
                    <motion.div className="about-footer">
                        <motion.div className="about-footer-img" variants={page}>
                            <img  src="img/crucialMistake.png" alt="annie meurt lorsqu'elle réalise qu'elle a passé une heure sur un bogue à cause qu'elle a écrit {} au lieu de ()." />
                        </motion.div>
                        <motion.div className="about-footer-legend" variants={page}><p>Moment exact lorsque j'ai réalisé que je me suis cassé la tête pendant une heure parce que j'ai accidentellement écrit &#123; &#125; au lieu de ().</p></motion.div>
                    </motion.div>
                    
               </div>
           </div>
           
       </Layout>
        
    )
}

export default About