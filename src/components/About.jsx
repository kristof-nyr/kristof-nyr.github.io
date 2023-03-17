import { motion } from "framer-motion";
import React from "react";
import { Text } from "./Text";

const About = () => {

    const page = "about"

    const slidein = {
        offscreen: {
            opacity: 0
        },
        onscreen:{
            opacity:[0,1,1,1],
            y:[150,0,0],
        }
    }
    return (
        <>
        <motion.div className="about-grid" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
            <div className="brutalism-container">
                <p>
                    <Text page={page} text="brutalism-def"/>
                </p>
                <p className="review">
                    <Text page={page} text="brutalism-review"/>
                </p>
            </div>
            <p className="about-story">
                <Text page={page} text="story" />
            </p>
            <p className="about-artsy">
                <Text page={page} text="artsy" />
            </p>
        </motion.div>
        </>
    )
}

export default About;