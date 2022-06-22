import react from "react";
import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'
import { Text } from "./Text";

const Contact = () => {

    const contactInformation = [
        {
            "title": "linkedin",
            "url":"url",
            "icon": <GrLinkedin />
        },
        {
            "title": "github",
            "url":"url",
            "icon": <GrGithub />
        },
        {
            "title": "github",
            "url":"url",
            "icon": <GrGithub />
        }
    ]

    return (
        <div className="contact-container">
            <div className="contact-title">
                <h1>
                    <Text page="contact" text="title" />
                </h1>
            </div>
            <div className="contact-list">
                {contactInformation.map(e => {
                    return (<div className={e.title}>
                        <a href={e.url}><h2>{e.title}</h2></a>
                        <h2>{e.icon}</h2>
                    </div>)
                })}
            </div>
        </div>
    )
}


export default Contact