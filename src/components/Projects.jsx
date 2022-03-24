import { motion } from "framer-motion";
import react from "react";
import SingleProject from "./SingleProject";

const Projects = () => {


    const slidein = {
        offscreen: {
            opacity: 0
        },
        onscreen:{
            opacity:[0,1,1,1],
            y:[150,-25,0],
            skewX:[3,0]
        }}

        const projects = [
            {
                title: "project1",
                description: "Lorem ipsum dolor amet"
            },
            {
                title: "project2",
                description: "Lorem ipsum dolor amet"
            },
            {
                title:"project3",
                description: "Lorem ipsum dolor amet"
            }
        ]

    return (
        <>
            <motion.div className="projects-container" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
                <h1>
                    projects
                </h1>
            </motion.div>
            <motion.div className="projects-grid" initial="offscreen" whileInView="onscreen" variants={slidein} viewport={{once:true, amount:0.8}}>
               {projects.map(project => {
                    return <SingleProject title={project.title} description={project.description} />
               })}
            </motion.div>
        </>
    )
}

export default Projects;