import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import NavRegister from "../navRegister/NavRegister";
import {NavLink} from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo/Logo.svg';
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import { AiOutlineMenu } from "react-icons/ai";
import '../navbar/Navbar.css'
import '../../../App.css';

function NavbarLinks() {
    const[open, setOpen] = useState(false);

    /* When the window is less than 1050px, switch to hamburger menu. */
    window.addEventListener('resize',() => {
        if (window.innerWidth > 1050) {
            setOpen(false)

        }
    })


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

                    <div className="navbar-hamburgermenu_container slide-bottom">
                        <div className="navbar-desktop_container_links">
                            <NavbarLinks/>
                        </div>

                        <div className="navbar-desktop_container_links_login">
                            <NavRegister/>
                        </div>
                    </div>
                </div>

            <MobileNavbar open={open}/>

        </section>

    );
}


export default NavbarLinks;
