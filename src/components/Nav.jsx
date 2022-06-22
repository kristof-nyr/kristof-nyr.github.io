import React from "react";
import LanguageSelector from "./LanguageSelector";
import NavLink from "./NavLink";

const Nav = () => {
    return (
            <nav className="nav-main">
                <ul>
                   <li><NavLink link="#landing" text="home" /></li>
                    <li><NavLink link="#about" text="about" /></li>
                    <li><NavLink link="#skills" text="skills" /></li>
                    <li><NavLink link="#contact" text="contact" /></li> 
                </ul>
                <LanguageSelector/>
            </nav>
    )
}

export default Nav;