import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../../assets/logo/Logo Cannoli.png";
import {AuthContext} from "../../../context/AuthContext";
import './Navbar.css';
import rightColors from "./../../../assets/img.header/rightColors.png";
import leftColors from "./../../../assets/img.header/leftColors .png";


function Navbar() {
    const navigate= useNavigate();
    const toLink = (e) => {
        e.preventDefault();
        navigate("/inloggen");
    };

    const {isAuth} = useContext(AuthContext);


    return (
        <nav className="nav-container">
            <div className="btn">
                <button type="button" onClick={toLink}><span className="btn-text">inloggen</span></button>
            </div>

            <ul className="nav-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cannoli">Cannoli</NavLink>
                <NavLink to="/giftbox">Giftbox</NavLink>

                <NavLink to="/logo"><figure><img src= {logo} alt="logo" className="logo"/></figure></NavLink>

                <NavLink to="/service">Service</NavLink>
                <NavLink to="/franchise">Franchise</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {isAuth && <NavLink to="/orderList">Bestellingen</NavLink>}
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
