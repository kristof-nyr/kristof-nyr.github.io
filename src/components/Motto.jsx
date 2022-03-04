import React from "react";
import { motion } from "framer-motion";

const Motto = () => {

    const variants = {
        offscreen: {
            
            opacity: 1,
            y:-100
        },
        onscreen: {
            opacity: 1,
            x:0,
            y:170,
            z:0,
            rotateX:-50,
            rotate: 18,
            skewX: 18,
            skewY:0,
            transition: {
                type:"spring",
                duration: 2.5
            }
        }
    }


    return (
        //TODO: Framer-Motion variant translate3d(0,170,0) rotateX(-50) rotate(18) skew(18,0)
        <div className="motto-container" initial="onscreen" whileInView="offscreen" variants={variants}>
            <h1>
                <div className="animate-motto">
                    Value is through&nbsp;
                    <span className="grd-bg">
                        scarcity
                    </span>
                </div>
            </h1>
        </div>
    )
}

export default Motto;