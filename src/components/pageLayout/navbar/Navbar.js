import React, {useContext} from 'react';
import {NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/Logo Cannoli.png";
import {AuthContext} from "../../../context/AuthContext";
import './Navbar.css';
import rightColors from "./../../../assets/img.header/rightColors.png";
import leftColors from "./../../../assets/img.header/leftColors .png";


function Navbar() {
    let location = useLocation().pathname;
    console.log(location);

    const {isAuth} = useContext(AuthContext);

    function getNavClass(location) {
        switch (location) {
            case "":
                return "/nav-home";
            case "/cannoli":
                return "/cannoli";
            case "/giftbox":
                return "/giftbox";
            case "/service":
                return "/service";
            case "/franchise":
                return "/franchise";
            case "/contact":
                return "contact";
            case "/bestellingen":
                return "bestellingen";
            default:
                return "nav-home";
        }
    }

    return (
        <nav className="nav-container">
                <ul className={getNavClass(location) + " nav-list-items"}>
                    <li><NavLink to="/" end exact activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/cannoli" exact activeClassName="active-link">Cannoli</NavLink></li>
                    <li><NavLink to="/giftbox" exact activeClassName="active-link">Giftbox</NavLink></li>

                    <li><NavLink to="/logo"><figure><img src= {logo} alt="logo" className="logo"/></figure></NavLink></li>

                    <li><NavLink to="/service" exact activeClassName="active-link">Service</NavLink></li>
                    <li><NavLink to="/franchise" exact activeClassName="active-link">Franchise</NavLink></li>
                    <li><NavLink to="/contact" exact activeClassName="active-link">Contact</NavLink></li>
                    {isAuth && <li><NavLink to="/orderList" end activeClassName="active-link">Bestellingen</NavLink></li>}
                </ul>

            <div className="color-container">
                <figure><img src={rightColors} alt="right-colors" className="right"/></figure>
                <figure><img src={leftColors} alt="left-colors" className="left"/></figure>
            </div>


            <div className="skewer--bottom"></div>
        </nav>
    );
}

export default Navbar;
