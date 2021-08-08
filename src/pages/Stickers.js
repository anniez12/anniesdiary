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
    initial: { y: "-60vh"},
    animate: {
        y:0,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    }
}

const Stickers = () => {
   
    return (
        <Layout>
            <div className="stickers">
                <div className="stickers-header">
                    <motion.div className="stickers-info" variants={pageTitle}>
                        <motion.p variants={page}>Mes autocollants / emotes.
                        </motion.p>
                    </motion.div>
                    <motion.div className="stickers-title stickers-title-1" variants= {page}>
                        <motion.h2 variants={page}>stickers</motion.h2>
                        <motion.h2 variants={page}>emotes</motion.h2>
                        <motion.h2 className="stickers-title-highlight" variants={page}>stickers</motion.h2>
                    </motion.div>
                    <motion.div className="stickers-title stickers-title-2" variants={page}>
                        <motion.h2>stickers</motion.h2>
                        <motion.h2 className="stickers-title-highlight" variants={page}>emotes</motion.h2>
                        <motion.h2>stickers</motion.h2>          
                    </motion.div>
                </div>
                <div className="stickers-section">
                    <motion.h3 variants={page}><sup>i</sup> les animaux opulents du zodiac<span class="slider"></span></motion.h3>
                    <motion.div className="stickers-img" variants={page}>
                        <img src="../emotesImg/sticker_zodiac_01.png" alt="autocollant - animal du zodiac #1"/>
                        <img src="../emotesImg/sticker_zodiac_02.png" alt="autocollant - animal du zodiac #2"/>
                        <img src="../emotesImg/sticker_zodiac_03.png" alt="autocollant - animal du zodiac #3"/>
                        <img src="../emotesImg/sticker_zodiac_04.png" alt="autocollant - animal du zodiac #4"/>
                        <img src="../emotesImg/sticker_zodiac_05.png" alt="autocollant - animal du zodiac #5"/>
                        <img src="../emotesImg/sticker_zodiac_06.png" alt="autocollant - animal du zodiac #6"/>
                        <img src="../emotesImg/sticker_zodiac_07.png" alt="autocollant - animal du zodiac #7"/>
                        <img src="../emotesImg/sticker_zodiac_08.png" alt="autocollant - animal du zodiac #8"/>
                        <img src="../emotesImg/sticker_zodiac_09.png" alt="autocollant - animal du zodiac #9"/>
                        <img src="../emotesImg/sticker_zodiac_10.png" alt="autocollant - animal du zodiac #10"/>
                        <img src="../emotesImg/sticker_zodiac_11.png" alt="autocollant - animal du zodiac #11"/>
                        <img src="../emotesImg/sticker_zodiac_12.png" alt="autocollant - animal du zodiac #12"/>
                    </motion.div>
                        
                </div>
                <div className="stickers-section">
                    <motion.h3 variants={page}><sup>ii</sup> valorant<span class="slider"></span></motion.h3>
                    <motion.div className="stickers-img" variants={page}>
                        <img src="../emotesImg/emote_jett_01.png" />
                        <img src="../emotesImg/emote_sage_01.png" />
                    </motion.div>                      
                </div>
            </div>
        </Layout>
        
    )
}

export default Stickers