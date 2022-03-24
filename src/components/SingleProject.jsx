import react from "react";
import { motion } from "framer-motion";

const SingleProject = ({title, description, gridarea}) => {

    const slidein = {
        offscreen: {
            opacity: 0
        },
        onscreen:{
            opacity:[0,1,1,1],
            y:[150,-25,0],
            skewX:[3,0]
        }}

    return (
        <>
            <motion.div className="single-project-container" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
                <div className="single-project-content">
                    <img src="../../assets/holo_bg.jpg" />
                </div>
                <p>
                    {description}
                </p>
                <h1>
                    {title}
                </h1>
            </motion.div>
        </>
    )
}

export default SingleProject;