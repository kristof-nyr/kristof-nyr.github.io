import React from "react";
import { Text } from "./Text";

const NavLink = ({link, text}) => {
    return (
        <div>
            <a href={link}>
                <Text page="nav" text={text}/>
            </a>
        </div>
    );
}

export default NavLink;