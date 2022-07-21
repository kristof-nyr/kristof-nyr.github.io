import React from "react";
import { Text } from "./Text";

const NavLink = ({link, text, onClick}) => {
    return (
        <div>
            <a href={link} onClick={onClick} >
                <Text page="nav" text={text}/>
            </a>
        </div>
    );
}

export default NavLink;