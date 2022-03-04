import { motion } from "framer-motion";
import React from "react";

const About = () => {

    const slidein = {
        offscreen: {
            opacity: 0
        },
        onscreen:{
            opacity:[0,1,1,1],
            y:[150,-25,0],
            skewX:[5,0]
        }
    }
    return (
        <>
        <motion.div className="about-container" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
            <h1 className="about-title">
                software<span>engineer</span> & <span>design</span>enthusiast
            </h1>
        </motion.div>
        <motion.div>
            
        </motion.div>
        </>
    )
}

export default About;