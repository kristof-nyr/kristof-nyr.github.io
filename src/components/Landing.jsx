import React from "react"
import MultiLingualContent from "./MultilingualComponent";

const Landing = () => {

    return (
        <div className="landing-container">
            <div className="logo-container">
                <div>    
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="267.947" viewBox="0 0 250 267.947">
                    <path id="Path_46" data-name="Path 46" d="M0,0H101.744V46.2L145.349,0H250V46.2l-72.89,87.868L250,221.749v46.2H145.349l-43.6-46.2v46.2H0Z" fill="#000"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="267.947" viewBox="0 0 250 267.947">
                    <path id="Path_47" data-name="Path 47" d="M0,0H101.744l43.6,46.2V0H250V267.947H145.349l-43.6-46.2v46.2H0Z" fill="#000"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="267.95" viewBox="0 0 250 267.95">
                    <path id="Path_48" data-name="Path 48" d="M0,0,101.743-.053,145.509,46.82V0H250V65.738l-73.334,69.494V267.9H70V135.232L0,65.738Z" transform="translate(0 0.053)" fill="#000"/>
                    </svg>
                </div>
            </div>
            <div className="explore-container">
                <a href="#motto">
                    <MultiLingualContent contentID="explore"/>
                </a>
                <p>&darr;</p>
            </div>
        </div>
    )
}

export default Landing;