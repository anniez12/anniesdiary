import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../layouts/Layout';
import DoodleItem from '../components/DoodleItem';
import { doodles } from '../contentData/doodles';

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
    initial: { y: "-60vh"},
    animate: {
        y:0,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    }
}

const Doodles = () => {

    return (
        <>
        <Layout>
            <div className="doodles-header">
                <motion.div className="doodles-info" variants={pageTitle}>
                    <motion.p variants={page}>Ici se retrouve une compilation de divers réalisations faites par moi-même: des petits sketchs, des textures ou encore des modèles 3D. En d'autres mots, une présentation de mes autres intérêts!</motion.p>
                </motion.div>
                <motion.div className="doodles-title doodles-title-1" variants={page}>
                    <motion.h2 variants={page}>doodles</motion.h2>
                    <motion.h2 variants={page}>doodles</motion.h2>
                    <motion.h2 className="doodles-title-highlight" variants={page}>doodles</motion.h2>
                </motion.div>
                <motion.div className="doodles-title doodles-title-2" variants={page}>
                    <motion.h2>doodles</motion.h2>
                    <motion.h2>doodles</motion.h2>
                    <motion.h2>doodles</motion.h2>
                </motion.div>
            </div>
            <motion.div className="doodles-content" variants={page}>
                <h3><sup>i</sup> 3d<span class="slider"></span></h3>
                <div className="doodles-work">
                    {doodles.doodles3d.map(doodle3d => (
                        <DoodleItem
                            img = {doodle3d.img}
                            alt = {doodle3d.alt}
                            title = {doodle3d.title}
                            softwares = {doodle3d.softwares}
                            desc = {doodle3d.desc}
                        />
                    ))}

                </div>
            </motion.div>
            <motion.div className="doodles-content" variants={page}>
                <h3><sup>ii</sup> textures<span class="slider"></span></h3>
                <div className="doodles-work">
                    {doodles.doodlesTexture.map(doodleTexture => (
                        <DoodleItem
                            img = {doodleTexture.img}
                            alt = {doodleTexture.alt}
                            title = {doodleTexture.title}
                            softwares = {doodleTexture.softwares}
                            desc = {doodleTexture.desc}
                        />
                    ))}

                </div>
            </motion.div>
            <div className="popup">
                <div id='popup-bg' onClick = {() => {
                document.querySelector("#popup-bg").style.display = "none";
                }}>
                    <div class='popup-content'>
                        <img id='popup-image' />
                    </div>
                </div>
            </div>
            
        </Layout>
        
        </>
    )
}

export default Doodles