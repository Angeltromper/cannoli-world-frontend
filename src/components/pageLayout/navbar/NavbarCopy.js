/*
import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../../assets/logo/Logo Cannoli.png";
import {AuthContext} from "../../../context/AuthContext";
import './Navbar.css';

function Navbar() {
    const navigate= useNavigate();
    const toLink = (e) => {
        e.preventDefault();
        navigate("/inloggen");
    };

    const {isAuth} = useContext(AuthContext);


    return (
        <nav className="navbar-container">
            <div className="btn">
                <button type="button" onClick={toLink}><span className="btn-text">inloggen</span></button>
            </div>

            <ul className="navbar-menu">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/cannoli">Cannoli</NavLink>
                <NavLink to="/giftbox">Giftbox</NavLink>

                <NavLink to="/logo"><figure><img src= {logo} alt="logo" className="logo"/></figure></NavLink>

                <NavLink to="/service">Service</NavLink>
                <NavLink to="/franchise">Franchise</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {isAuth && <NavLink to="/orderList">Bestellingen</NavLink>}
            </ul>

            <div className="skewer--bottom"></div>
        </nav>
    );
}
*/
