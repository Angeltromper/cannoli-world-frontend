import React, {useState}  from 'react';
import {NavLink} from "react-router-dom";
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from "../../../assets/logo/Logo Cannoli.png";
import Navbar from "../navbar/Navbar";
import NavbarRegister from "../navRegister/NavRegister";
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import './NavbarResp.css';



function NavbarResp() {
    const [open, setOpen] = useState(false);
    const [toggleMenu, setToggleMenu] = useState('');

    /* When the window is less than 992px, switch to hamburger menu. */
    window.addEventListener('resize', () => {
        if (window.innerWidth) {
            setOpen(false);
        }
    });

    return (
        <section className="navbar-resp__container">
            <div className= "navbar-resp__menu">
                <NavLink to="/" exact activeClassName="active-link">
                    <img className="logo-wrapper" src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div className="navbar-resp__menu-medium">
                <NavbarRegister/>
            </div>

            <div className="nav-container">
                <div>
                    <div className="navbar-resp__desktop-fullscreen">
                        <Navbar/>
                        <NavbarRegister/>
                    </div>

                    <div className="navbar-resp__menu_mobile">
                        {toggleMenu ? <RiCloseLine color="#010101" size={30} onClick={() => setToggleMenu(false)}/>
                            :
                            <RiMenu3Line color="#010101" size={30} onClick={() => setToggleMenu(true )}/>
                    }
                    {toggleMenu && (

                        <div className="navbar-resp__hamburger_container slide-bottom">
                            <div className="navbar-resp__menu_container">
                                <Navbar/>
                            </div>
                            <div className="navbar__menu_container_login">
                                <NavbarRegister/>
                                <MobileNavbar open={open}/>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
      </section>
    );
}

export default NavbarResp;