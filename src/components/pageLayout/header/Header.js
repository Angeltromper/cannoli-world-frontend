import React from 'react';
import Navbar from "../navbar/Navbar";
import './Header.css';

function Header() {

    return (
        <>
            <Navbar/>

            <header id="header" className="outer-content-container">
                <div className="skewer--bottom"></div>
                <div className="skewer--top"></div>
            </header>

        </>
    );
}

export default Header;











