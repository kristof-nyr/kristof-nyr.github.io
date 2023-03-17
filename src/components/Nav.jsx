import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import NavLink from "./NavLink";

const Nav = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <>
            <nav className="mobile-menu">
            <button onClick={handleToggle} className="menu-toggle-btn">
                {navbarOpen ? (
                    <p style={{color: "#fff"}}>&#9778;</p>
                ) : (
                    <p >&#9783;</p>
                )}
                </button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li><NavLink link="#landing" text="home" onClick={closeMenu}  /></li>
                    <li><NavLink link="#about" text="about" onClick={closeMenu} /></li>
                    <li><NavLink link="#skills" text="skills" onClick={closeMenu}  /></li>
                    <li><NavLink link="#contact" text="contact" onClick={closeMenu}/></li> 
                    <LanguageSelector/>
                </ul>
            </nav>
        </>

    )
}

export default Nav;