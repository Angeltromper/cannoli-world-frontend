import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import NavRegister from "../navRegister/NavRegister";
import {NavLink} from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo/Logo.svg';
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import { AiOutlineMenu } from "react-icons/ai";
import '../navbar/Navbar.css'

function NavbarLinks() {
    const[open, setOpen] = useState('');

    /* When the window is less than 992px, switch to hamburger menu. */
    window.addEventListener('resize', (event) => {
        if (window.innerWidth > 992) {
            setOpen (false);
        }
    });

    return (
        <section className="navbar-link">
            <NavLink to="/" exact activeClassName="active-link">
                    <div className="navbar_logo rotate-center">
                        <Logo/>
                    </div>
                </NavLink>
                <div>
                    <div className="navbar-fullscreen">
                        <Navbar/>
                        <NavRegister/>
                    </div>
                    <AiOutlineMenu
                        className="hamburger-menu"
                        size="3rem"
                        color="black"
                        onClick={() => setOpen(!open)}
                    />
                </div>

            <MobileNavbar open={open}/>

        </section>

    );
}


export default NavbarLinks;
