import React from 'react';
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
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

                <Hero/>


                <div className="header-text-section">
                    <div className= "section-one">
                        <h2>Heerlijk</h2>
                    </div>
                    <br/>

                    <div className="section-two">
                        <h2>Momentje</h2>
                        <br/>

                        <h2>Genieten</h2>
                    </div>
                </div>


                <div className="skewer--top"></div>
            </div>
        </>
    );
}

export default Header;











