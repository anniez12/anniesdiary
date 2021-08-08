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

const img = {
    initial: { y:-20, opacity: 0, rotate: -10 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",

            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    }
};

const Contact = () => {
   
    return (
       <Layout>
            <motion.div variants={page} className="contact">
                    <motion.a 
                        href="mailto:anniezhangweb@gmail.com"
                        transition={{ type: "spring", stiffness: 100 }}>
                            <div className="contact-img">
                                <motion.img variants={img}           
                                    whileHover={{ rotate: 5 }}
                                    src="../img/mail.png" alt="contactez-moi" />
                            </div>                       
                            <motion.h3 variants={page}>Contactez-moi &#8594;</motion.h3>
                    </motion.a>
                    <motion.div className="footer">
                        <p>© 2021 Annie Zhang</p>
                    </motion.div>
            </motion.div>
           
       </Layout>
        
    )
}

export default Contact