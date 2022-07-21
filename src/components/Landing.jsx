import React from "react"
import { Text } from "./Text";

const Landing = () => {

    return (
        <div className="landing-container">
            <div className="logo-container">
                <img src="../../assets/kny_logo.gif" alt="logo_gif"/>
            </div>
            <div className="explore-container">
                <a href="#motto">
                    <Text page="landing" text="explore"/>
                </a>
                <p>&darr;</p>
            </div>
        </div>
    )
}

export default Landing;