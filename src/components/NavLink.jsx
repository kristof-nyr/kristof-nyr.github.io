import React from "react";

const NavLink = (props) => {
    return (
        <div>
            <a href={props.link}>{props.name}</a>
        </div>
    )
}

export default NavLink;