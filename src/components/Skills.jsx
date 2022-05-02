import react from "react";
import SingleSkill from "./SingleSkill";

const Skills = () => {

    const skillArray = [
        {
            "name":"react",
            "size":4
        },
        {
            "name":"scss",
            "size":4
        },
        {
            "name":"javascript",
            "size":4
        }
    ]

    return (
        <div className="skills-container">
            {skillArray.map(skill => {
                return <SingleSkill name={skill.name} size={skill.name} />
            })}
        </div>
    )
}

export default Skills