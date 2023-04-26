import {NavLink} from "react-router-dom";
import {useState} from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import logo from "../../../assets/logo/Logo Cannoli.png";
import NavBar from "../navBar/NavBar";
import MobileNavBar from "../mobileNavBar/MobileNavBar";
import './navBarResp.css';



function NavBarResp() {
    const [open, setOpen] = useState(false);



    return (
        <nav className="navbarResp">
            <div className="container">
                <div className= "navbar-container">
                    <NavLink to="/" className="logo-wrapper">
                        <img className="logo" src={logo} alt="logo"/>
                    </NavLink>
                    <div className="desktop-navbar">
                        <NavBar/>
                    </div>
                    <AiOutlineMenu
                        className="hamburger"
                        size="2.5rem"
                        color="black"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>
            <MobileNavBar open={open}/>
        </nav>
    );
}

export default NavBarResp;