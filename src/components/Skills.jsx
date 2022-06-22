import SingleSkill from "./SingleSkill";
import { Text } from "./Text";
import info from "../lang/skills_contacts.json"

const Skills = () => {

    const skillArray = info["skills"]


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