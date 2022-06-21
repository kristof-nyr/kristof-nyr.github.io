import React from "react";
import LanguageSelector from "./LanguageSelector";
import NavLink from "./NavLink";

const Nav = () => {
    return (
            <nav className="nav-main">
                <ul>
                   <li><NavLink link="#landing" name="Home" /></li>
                    <li><NavLink link="#about" name="About" /></li>
                    <li><NavLink link="#skills" name="Skills" /></li>
                    <li><NavLink link="contact" name="Contact" /></li> 
                    <LanguageSelector/>
                </ul>
            </nav>
    )
}

export default Nav;