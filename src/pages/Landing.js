import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PinkScreen from '../components/PinkScreen';

const Landing = () => {

    return (
        <motion.main
            className="landing-container">
            <PinkScreen />
            <motion.div
            initial={{ opacity: 0, y: 20, scale: 1.4 }}
            animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] },
            }}>
                <motion.div className="landing-title-container no-select"
                    exit= {{ opacity: 0 }}>
                    <motion.div className="landing-title-single">
                        <h1>le journal d'annie</h1>
                    </motion.div>
                    <motion.div className="landing-title-single">
                        <h1>le journal d'annie</h1>
                    </motion.div>
                    <motion.div className="landing-title-single landing-title-chosen">
                    <h1 className="landing-title" title="le journal d'annie">le journal d'annie</h1>
                    </motion.div>
                    <motion.div className="landing-title-single">
                        <h1>le journal d'annie</h1>
                    </motion.div>
                    <motion.div className="landing-title-single">
                        <h1>le journal d'annie</h1>
                    </motion.div>
                    <motion.div className="landing-title-single">
                        <h1>le journal d'annie</h1>
                    </motion.div>
                    <motion.div className="landing-title-single">
                        <h1>le journal d'annie</h1>
                    </motion.div>
                    <motion.div className="landing-title-single">
                        <h1>le journal d'annie</h1>
                    </motion.div>
                    <motion.div className="landing-title-single">
                        <h1>le journal d'annie</h1>
                    </motion.div>
                    <motion.div className="landing-title-single">
                        <h1>le journal d'annie</h1>
                    </motion.div>
                </motion.div>
            
                <div className="landing-img-containers no-select">
                    <motion.div className="landing-img-delimiters">
                        <motion.img 
                            exit={{ opacity: 0, x: 0, y: 100}}
                            transition={{ type: "spring", stiffness: 100 }}
                            src="img/welcome_delimiters.png" />
                        <motion.p 
                            className="landing-text"
                            exit= {{ opacity: 0 }}
                            exit={{ opacity: 0, x: 0, y: 100}}
                            transition={{ type: "spring", stiffness: 100 }}>
                                cliquez-moi!
                        </motion.p>
                    </motion.div>
                        <Link className="landing-img-annie" to ="/home">
                            <motion.img src="img/welcome_annie.png" 
                                exit= {{ opacity: 0, x: 0, y: -100 }}
                                whileHover={{ rotate: 15 }}
                                transition={{ type: "spring", stiffness: 100 }}/>
                        </Link>
                </div>
            </motion.div>
        </motion.main>
    )
}

export default Landing