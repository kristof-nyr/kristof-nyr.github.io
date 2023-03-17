import React from "react"
import { Text } from "./Text";

const Landing = () => {

    return (
        <div className="landing-container">
            {// <div className="logo-container">
            //    <img src="../../assets/kny_logo.gif" alt="logo_gif"/>
            //</div>
        }
        <div id="text-container" className="text-container">
             <div className="line">
                <p className="word unbounded bold">Kristóf</p>
                <p className="word unbounded bold">&#10043;</p>
                <p className="word unbounded light">Nyári</p>

             </div>
             <div className="line">
                <p className="word unbounded light">DevOps</p>
                <p className="word unbounded bold">Engineer</p>
                <p className="word unbounded light">& </p>

             </div>
             <div className="line">
                <p className="word unbounded bold">Design</p>
                <p className="word unbounded light">&#9737;</p>
                <p className="word unbounded light">enjoyer </p>

             </div>

        </div>
        
        </div>
    )
}

export default Landing;