import React from "react";
import { motion } from "framer-motion";

const Landing = () => {


    return (
        <div className="landing-container">
            <motion.div className="logo-container" animate={{y:[200,0]}} transition={{ease:"easeInOut",duration: 0.3}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="267.947" viewBox="0 0 250 267.947">
                <path id="Path_46" data-name="Path 46" d="M0,0H101.744V46.2L145.349,0H250V46.2l-72.89,87.868L250,221.749v46.2H145.349l-43.6-46.2v46.2H0Z" fill="#d9ccc5"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="267.947" viewBox="0 0 250 267.947">
                <path id="Path_47" data-name="Path 47" d="M0,0H101.744l43.6,46.2V0H250V267.947H145.349l-43.6-46.2v46.2H0Z" fill="#d9ccc5"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="267.95" viewBox="0 0 250 267.95">
                <path id="Path_48" data-name="Path 48" d="M0,0,101.743-.053,145.509,46.82V0H250V65.738l-73.334,69.494V267.9H70V135.232L0,65.738Z" transform="translate(0 0.053)" fill="#d9ccc5"/>
                </svg>

            </motion.div>
                <motion.div className="circle" animate={{rotate:360}} transition={{ease:"linear", duration:8, repeat:Infinity}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="308" height="307.5" viewBox="0 0 308 307.5">
                    <g id="circle" transform="translate(-1385 -315)">
                        <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(1385 315)" fill="none" stroke="#d9ccc5" stroke-width="3">
                        <ellipse cx="154" cy="153.5" rx="154" ry="153.5" stroke="none"/>
                        <ellipse cx="154" cy="153.5" rx="152.5" ry="152" fill="none"/>
                        </g>
                        <line id="Line_1" data-name="Line 1" y2="307" transform="translate(1539.5 315.5)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_2" data-name="Line 2" y2="307" transform="translate(1692.5 468.5) rotate(90)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_11" data-name="Line 11" y2="307" transform="translate(1692.5 468.5) rotate(90)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_12" data-name="Line 12" y2="307" transform="matrix(-0.259, 0.966, -0.966, -0.259, 1687.27, 508.229)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_13" data-name="Line 13" y2="307" transform="translate(1671.935 545.25) rotate(120)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_9" data-name="Line 9" y2="307" transform="matrix(0.259, 0.966, -0.966, 0.259, 1687.27, 428.771)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_10" data-name="Line 10" y2="307" transform="translate(1671.935 391.75) rotate(60)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_3" data-name="Line 3" y2="307" transform="translate(1647.541 359.959) rotate(45)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_7" data-name="Line 7" y2="307" transform="matrix(0.966, 0.259, -0.259, 0.966, 1578.729, 320.23)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_8" data-name="Line 8" y2="307" transform="translate(1615.75 335.565) rotate(30)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_4" data-name="Line 4" y2="307" transform="translate(1430.459 359.959) rotate(-45)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_5" data-name="Line 5" y2="307" transform="matrix(0.966, -0.259, 0.259, 0.966, 1499.271, 320.23)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                        <line id="Line_6" data-name="Line 6" y2="307" transform="translate(1462.25 335.565) rotate(-30)" fill="none" stroke="#d9ccc5" stroke-width="3"/>
                    </g>
                    </svg>
                </motion.div>
            <div className="explore-container">
                <a href="#motto">EXPLORE</a>
            </div>
        </div>
    )
}

export default Landing;