import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

export default function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <h1 className="header-logo">RAYAN KHYARE</h1>
            <nav>
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}><Link to="/">HOME</Link></li>
                    <li className={location.pathname.startsWith("/about") ? "active" : ""}><Link to="/about">ABOUT</Link></li>
                    <li className={location.pathname.startsWith("/project") ? "active" : ""}><Link to="/project">PROJECT</Link></li>
                    <li className={location.pathname.startsWith("/contact") ? "active" : ""}><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    );
}