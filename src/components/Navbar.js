import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    CYBERFOLIO
                </Link>

                <button
                    className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className={`navbar-item navbar-dropdown ${dropdownOpen ? 'active' : ''}`}>
                        <div className="navbar-link dropdown-toggle" onClick={toggleDropdown}>
                            Learning
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink
                                    to="/learning/operating-systems"
                                    className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Operating Systems
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/learning/linux-basics"
                                    className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Linux Basics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/learning/sql-basics"
                                    className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    SQL Basics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/learning/threats-vulnerabilities"
                                    className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Threats & Vulnerabilities
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/learning/cisco-intro"
                                    className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Cisco Intro
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/practical-work"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Practical Work
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/reflection"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Reflection
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
