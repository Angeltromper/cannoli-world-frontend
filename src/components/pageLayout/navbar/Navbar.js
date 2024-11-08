import React, { useContext } from 'react';
import logo from "../../../assets/logo/Logo Cannoli.png";
import { AuthContext } from "../../../context/AuthContext";
import { NavLink } from "react-router-dom";


function Navbar() {

    const {isAuth} = useContext (AuthContext);


    return (

        <nav className="navbar__main-container">
            <div className="navbar-register-menu">
                <NavLink to="/register" exact activeClassName="active-link"><button type="button">Registreren</button></NavLink>
                <NavLink to="/login" exact activeClassName="active-link"><button type="button">Inloggen</button></NavLink>
            </div>

            <div className="navbar-menu">
                <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                <NavLink to="/cannoli" exact activeClassName="active-link">Cannoli</NavLink>
                <NavLink to="/giftbox" exact activeClassName="active-link">Giftbox</NavLink>

                <NavLink to="/logo">
                    <figure><img src={ logo } alt="logo" className="logo"/></figure>
                </NavLink>

                <NavLink to="/service" exact activeClassName="active-link">Service</NavLink>
                <NavLink to="/franchise" exact activeClassName="active-link">Franchise</NavLink>
                <NavLink to="/contact" exact activeClassName="active-link">Contact</NavLink>
                { isAuth && <NavLink to="/deliveryRequests/:deliveryRequest" exact activeClassName="active-link">Bestellingen</NavLink> }
            </div>


            <div className="skewer--bottom">

            </div>
        </nav>
    );
}


export default Navbar;
