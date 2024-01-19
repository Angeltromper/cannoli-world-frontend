import React from 'react';
import './MobileNavbar.css';
import NavbarLinks from "../navbar/NavbarLinks";

function MobileNavbar({open}) {

    return (
        <div className={`mobile-nav ${open ? 'active' : ''}`}>
            <div className="mobile-container">
                <div className="nav-menu">
                    <NavbarLinks/>
                </div>
            </div>
        </div>
    );
}

export default MobileNavbar;
