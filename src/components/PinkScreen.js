import React from 'react';
import { motion } from 'framer-motion';

const pinkScreen = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const PinkScreen = () => {
    return (
        <div className="pink-screen">
            <motion.div
                className="bg-pink"
                initial="initial"
                animate="animate"
	            variants={pinkScreen}
                onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                onAnimationComplete={() => {
                    document.body.classList.remove("overflow-hidden");
                    document.querySelector(".pink-screen").classList.add("hidden");
                }
                  }
      />      
    </div>
    )
}

export default PinkScreen