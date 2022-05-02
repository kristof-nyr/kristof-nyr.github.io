import { motion } from "framer-motion";
import React from "react";

const About = () => {

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
        <motion.div className="about-container" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
            <h1 className="about-title">
                software<span>engineer</span> & <span>design</span>enthusiast
            </h1>
        </motion.div>
        <motion.div className="about-grid" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
            <div className="brutalism-container">
                <p>Brutalism is a utilitarian aesthetic movement that shuns decoration in favor of exposing and celebrating the raw materials used to construct the design. By exposing materials of construction, brutalism has nothing to hide. It trades lofty ideals of beauty for the cold, hard truth.</p>
                <p className="review">"Cannot be understood through stylistic analysis, although some day a comprehensible style might emerge"</p>
            </div>
            <div className="about-pic">
                {/* TODO: Maybe do a render (licensing problems?) */}
                {/* <img src="../../assets/holo_bg.jpg" alt="Holographic background render"></img> */}
            </div>
            {/* TODO: Refactor this */}
            <div className="about-pic2">
                {/* <img src="../../assets/holo_bg2.jpg" alt="Holographic background render"></img> */}
            </div>
            {/* <h2 className="about-me">
                <span>Hello</span>there
            </h2> */}
            {/* TODO: Make a picture (3D type, without bg) */}
            <p className="about-story">
                Computer science student based in Hungary. Currently working as a Software Engineer. My fascination with visual stuff came at an early age as I was mesmerized by certain art styles. Thus began my career as a front-end dev, which later transformed into full-stack. I'm also experimenting with DevOps principles and Golang development.
            </p>
            <p className="about-artsy">
                I also believe self-expression and visual storytelling go hand in hand. Hence I aim to create visually pleasing works which invoke feelings in its viewers. 
            </p>
        </motion.div>
        </>
    )
}

export default About;