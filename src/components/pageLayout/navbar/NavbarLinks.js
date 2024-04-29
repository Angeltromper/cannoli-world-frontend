import React, { useEffect, useState } from 'react';
import Navbar from "../navbar/Navbar";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import SignIn from "../../../pages/signIn/SignIn";
import './Navbar.css';

function NavbarLinks({headerImageHandler, pageTitleHandler}) {
    const [open,  setOpen] = useState (false);


    useEffect(() => {
        headerImageHandler();
        pageTitleHandler('navbar menu');
        }, [headerImageHandler, pageTitleHandler]);

    /* When the window is less than 1050, switch to hamburger menu. */
    window.addEventListener( 'resize', () => {
        if (window.innerWidth > 992) {
            setOpen(false);
        }
    });

    return (
        <section className="navbar">
            <div className="container">
                <div className="columns">
                    <div className="12col, nav-container">

                        <div className="nav-menu">
                            <Navbar/>
                        </div>

                        <AiOutlineMenu
                            className="hamburger"
                            size="3rem"
                            color="white"
                            onClick={ () => setOpen (!open) }
                        />

                        <div className="navbar__register-login">
                            <SignIn/>
                        </div>
                    </div>
                </div>

                <MobileNavbar open={ open }/>
            </div>
        </section>
    );
}

export default NavbarLinks;


