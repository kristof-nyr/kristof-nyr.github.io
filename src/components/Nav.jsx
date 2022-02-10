import React from "react";
import NavLink from "./NavLink";

const Nav = () => {
    return (
            <nav className="nav-main">
                <ul>
                   <li><NavLink link="#" name="Home" /></li>
                    <li><NavLink link="#" name="About" /></li>
                    <li><NavLink link="#" name="Projects" /></li>
                    <li><NavLink link="#" name="Contact" /></li> 
                </ul>
            </nav>
    )
}

export default Nav;