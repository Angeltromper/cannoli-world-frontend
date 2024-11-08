import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import './FooterNav.css';



function FooterNav() {
    const {user, logOut} = AuthContext();

    return (
        <div className="footer-nav">
            {

                user ?
                    <>
                        <NavLink onClick={logOut} to="/">Uitloggen</NavLink>
                    </>
                    :
                    <>
                        <NavLink to="/login">Inloggen</NavLink>
                        <NavLink to="/register">Registreren</NavLink>
                    </>
                }
            </div>
    );
}

export default FooterNav;
