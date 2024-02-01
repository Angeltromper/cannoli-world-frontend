import React from 'react';
import './MobileNavbar.css';
import Navbar from "../navbar/Navbar";

function MobileNavbar({open}) {

    return (
        <div className={`mobile-nav ${open ? 'active' : ''}`}>
            <div className="mobile-container">
                <div className="nav-menu">
                    <Navbar/>
                </div>
            </div>
        </div>
    );
}

export default MobileNavbar;
