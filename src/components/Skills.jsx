import react from "react";
import SingleSkill from "./SingleSkill";
import { Text } from "./Text";
import skills from "../lang/skills.json"

const Skills = () => {

    const skillArray = skills


    return (
        <>
        <div className="skills-container">
            <h1>
                <Text page="skills" text="title" />
            </h1>
        </div>
        <div className="skills-grid">
            {skillArray.map(skill => {
                return <SingleSkill name={skill.name} size={skill.size} />
            })}
        </div>
        </>
    )
}

export default Skills