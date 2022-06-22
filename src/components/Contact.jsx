import { Text } from "./Text";
import info from "../lang/skills_contacts.json"

const Contact = () => {

    const contactInformation = info["contact"]
    console.log(contactInformation)

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
                        <a href={e.url} target="_blank" rel="noreferrer"><h2>{e.title}</h2></a>
                    </div>)
                })}
            </div>
        </div>
    )
}


export default Contact