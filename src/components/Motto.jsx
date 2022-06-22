import React from "react";
import { motion } from "framer-motion";
import { Text } from "./Text";

const Motto = () => {
  
    const slidein = {
        offscreen: {
            opacity: 0
        },
        onscreen:{
            opacity:[0,1,1,1],
            y:[150,0,0]
        }
    }

    return (
        <motion.div className="motto-container" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
            <h1>
                <div className="animate-motto">
                    <Text page="motto" text="motto-text"/>                 
                </div>
            </h1>
        </motion.div>
    )
}

export default Motto;