import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../../assets/logo/Logo Cannoli.png";
import {AuthContext} from "../../../context/AuthContext";


function Navbar() {
    const {isAuth} = useContext(AuthContext);

    return (
        <>
            {isAuth ?

                <div className="header-content__navbar">
                    <ul className="header-content__navbar-list">
                        <li><NavLink to="/" end exact activeClassName="active-link">Home</NavLink></li>
                        <li><NavLink to="/cannoli" exact activeClassName="active-link">Cannoli</NavLink></li>
                        <li><NavLink to="/giftbox" exact activeClassName="active-link">Giftbox</NavLink></li>

                        <li><NavLink to="/logo"><figure><img src= {logo} alt="logo" className="logo"/></figure></NavLink></li>

                        <li><NavLink to="/service" exact activeClassName="active-link">Service</NavLink></li>
                        <li><NavLink to="/franchise" exact activeClassName="active-link">Franchise</NavLink></li>
                        <li><NavLink to="/contact" exact activeClassName="active-link">Contact</NavLink></li>
                        <li><NavLink to="/orderList"end activeClassName="active-link">Bestellingen</NavLink></li>
                    </ul>
                </div>
                :
                <div className="header-content__navbar">
                    <ul className="header-content__navbar-list">
                        <li><NavLink to="/" end exact activeClassName="active-link">Home</NavLink></li>
                        <li><NavLink to="/cannoli" exact activeClassName="active-link">Cannoli</NavLink></li>
                        <li><NavLink to="/giftbox" exact activeClassName="active-link">Giftbox</NavLink></li>

                        <li><NavLink to="/logo"><figure><img src= {logo} alt="logo" className="logo"/></figure></NavLink></li>

                        <li><NavLink to="/service" exact activeClassName="active-link">Service</NavLink></li>
                        <li><NavLink to="/franchise" exact activeClassName="active-link">Franchise</NavLink></li>
                        <li><NavLink to="/contact" end activeClassName="active-link">Contact</NavLink></li>
                    </ul>
                </div>

            }
        </>
    );
}

export default Navbar;