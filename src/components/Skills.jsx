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
        },
        {
            "name":"photoshop",
            "size":4
        },
        {
            "name":"nodejs",
            "size":3
        },
        {
            "name":"html",
            "size":3
        },
        {
            "name":"cybersec",
            "size":3
        },
        {
            "name":"design patters",
            "size":3
        },
        {
            "name":"golang",
            "size":2
        },
        {
            "name":"devops",
            "size":2
        },
        {
            "name":"typescript",
            "size":2
        }
    ]

    return (
        <>
        <div className="skills-container">
            <h1>SKILLS</h1>
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