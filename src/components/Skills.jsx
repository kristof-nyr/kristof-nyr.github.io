import { motion } from "framer-motion";
import SingleSkill from "./SingleSkill";
import { Text } from "./Text";
import info from "../lang/skills_contacts.json"

const Skills = () => {

    const skillArray = info["skills"]
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
        <motion.div className="skills-container" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
            <h1>
                &mdash;<Text page="skills" text="title" />
            </h1>
        </motion.div>
        <motion.div className="skills-grid" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
            {skillArray.map(skill => {
                return <SingleSkill name={skill.name} size={skill.size} />
            })}
        </motion.div>
        </>
    )
}

export default Skills