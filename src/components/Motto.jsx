import React from "react";
import { motion } from "framer-motion";

const Motto = () => {
  
    const slidein = {
        offscreen: {
            opacity: 0
        },
        onscreen:{
            opacity:[0,1,1,1],
            y:[150,-25,0]
        }
    }



    return (
        //TODO: Framer-Motion variant translate3d(0,170,0) rotateX(-50) rotate(18) skew(18,0)
        <motion.div className="motto-container" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
            <h1>
                <div className="animate-motto">
                    Value is through&nbsp;
                    <span className="grd-bg">
                        scarcity
                    </span>
                </div>
            </h1>
        </motion.div>
    )
}

export default Motto;