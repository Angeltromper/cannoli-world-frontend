import React, {useContext} from 'react';
import {AuthContext} from "../../../context/AuthContext";
import {Link} from "react-router-dom";
import './Footer.css';

function Footer() {
    // eslint-disable-next-line no-unused-vars
    const {auth} = useContext(AuthContext);

    return (
        <footer className="outer-container__reusable">

            {auth ? <li><Link to="/inloggen"></Link></li> :
                <li><Link to="/inloggen">Inloggen</Link></li>}

        </footer>



    );
}
export default Footer;