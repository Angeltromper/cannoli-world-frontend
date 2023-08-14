import {NavLink} from "react-router-dom";
import {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import logo from '../../../assets/logo/Logo Cannoli.png';
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import './NavRegister.css';
import Navbar from "../navbar/Navbar";

function NavRegister() {
    const [open, setOpen] = useState (false);

    /* When the window is less than 992px, switch to hamburger menu. */
    window.addEventListener ('resize', (event) => {
        if (window.innerWidth> 992) {
            setOpen (false);
        }
    });

    return (
        <div className="navRegister">
            <div className="columns">
                <NavLink to="/" className="logo-wrapper">
                    <img className="logo" src={logo} alt="logo"/>
                </NavLink>
                <div className="desktop-navbar">
                    <Navbar/>
                </div>
                <AiOutlineMenu
                    className="hamburger"
                    size="3rem"
                    color="white"
                    onClick={() => setOpen (!open)}
                />
            </div>
        <MobileNavbar open={open}/>
    </div>

    );
}

export default NavRegister;
