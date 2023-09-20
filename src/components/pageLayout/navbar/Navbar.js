import React, { useContext, useRef, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/Logo Cannoli.png";
import './Navbar.css';
import { AuthContext } from "../../../context/AuthContext";
import * as PropTypes from "prop-types";
import { Button } from "../../button/buttonGroup/Button";


function HashLink(props) {
    return null;
}

HashLink.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node
};

function Navbar() {

    const navigate = useNavigate ();
    const toLink = (e) => {
        e.preventDefault ();
        navigate ("/inloggen");
    };

    const [cannoliQuery, setCannoliQuery] = useState("");
    const refSearch = useRef(null);

    const {isAuth} = useContext(AuthContext);

    return (
        <nav className="navbar-container">
            <div className="btn">
                <button type="button" onClick={toLink}><span className="btn-text">inloggen</span></button>
            </div>

            <div className="navbar-menu">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/cannoli">

                    <fieldset>
                    <label htmlFor="search-by-cannoli-snack">
                        <select
                            id="search-by-cannoli-snack"
                            className="dropdown-menu"
                            value={cannoliQuery}
                            onChange={(e ) => setCannoliQuery(e.target.value)}
                        >
                            <option value="cannoli" >Cannoli</option>
                            <HashLink className="button button-primary" to="#cannolisnack">Cannoli Snack</HashLink>
                            : <Button variation={"primary"} url={"/cannoli snack"}>Cannoli Snack</Button>}

                            <option value="cannoli snack">Cannoli Snack</option>
                            <option value="cannoli glutenvrij">Cannoli Glutenvrij</option>
                            <option value="cannoli vegan" >Cannoli vegan</option>
                        </select>
                    </label>
                </fieldset>
            </NavLink>

                <NavLink to="/giftbox">Giftbox</NavLink>

                <NavLink to="/logo"><figure><img src={logo} alt="logo" className="logo"/></figure></NavLink>

                <NavLink to="/service">Service</NavLink>
                <NavLink to="/franchise">Franchise</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {isAuth && <NavLink to="/orderList">Bestellingen</NavLink>}


            </div>
            <div className="skewer--bottom"></div>

        </nav>
    );
}

export default Navbar;
