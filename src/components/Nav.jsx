import React, { useState, useEffect, useRef, useCallback } from "react";
import LanguageSelector from "./LanguageSelector";
import NavLink from "./NavLink";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

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
            <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose className="navbar-icon" />
                ) : (
                    <FiMenu className="navbar-icon" />
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
            <nav className="nav-main">
                <ul>
                   <li><NavLink link="#landing" text="home"  /></li>
                    <li><NavLink link="#about" text="about"/></li>
                    <li><NavLink link="#skills" text="skills" /></li>
                    <li><NavLink link="#contact" text="contact"/></li> 
                </ul>
                <LanguageSelector/>
            </nav>
        </>

    )
}

export default Nav;