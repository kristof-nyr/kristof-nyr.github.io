import { motion } from "framer-motion";
import { Text } from "./Text";
import info from "../lang/skills_contacts.json"

const Contact = () => {

    const contactInformation = info["contact"]
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
        <div className="contact-container">
            <motion.div className="contact-title" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
                <h1>
                    <Text page="contact" text="title" />&mdash;
                </h1>
            </motion.div>
            <motion.div className="contact-list" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
                {contactInformation.map(e => {
                    return (<div className={e.title}>
                        <a href={e.url} target="_blank" rel="noreferrer"><h2>{e.title}&raquo;</h2></a>
                    </div>)
                })}
            </motion.div>
        </div>
    )
}


export default Contact