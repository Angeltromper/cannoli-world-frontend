import React from 'react';
import Navbar from "../navbar/Navbar";
import './Header.css';

import {useNavigate} from "react-router-dom";



function Header({headerImage, pageTitle}) {
    const history = useNavigate ();

    const toLink = (e) => {
        e.preventDefault();
        history("/inloggen")
    };

    return (
        <>
            <header className="header">
                <div className="-btn">
                    <button type="button" onClick={toLink}><span className="btn-text">Inloggen</span></button>
                </div>
            </header>
            <Navbar/>

            <div className="header-img-container">
                <span>
                    <img src={headerImage} className="header-img"/>
                </span>
            <div className="page-title">
                <h1>{pageTitle}</h1>
            </div>
                <div className="skewer--top"></div>
            </div>
        </>
    );
}

export default Header;











