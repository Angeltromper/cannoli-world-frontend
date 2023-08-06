import React from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import './Header.css';

function Header({headerImage, pageTitle}) {
    const navigate= useNavigate();

    const toLink = (e) => {
        e.preventDefault();
        navigate("/inloggen");
    }

    return (
        <>
            <header className="header">
                <div className="btn">
                    <button type="button" onClick={toLink}><span className="btn-text">inloggen</span></button>
                </div>

                <div className="header-text">
                    <div className="header-text-one">
                        <h2>Heerlijk</h2>
                        <br/>
                    </div>

                    <div className="header-text-two">
                        <h2>Momentje</h2>
                        <br/>
                        <h2>Genieten</h2>
                    </div>
                </div>
            </header>

            <Navbar/>

            <image className="header-img-container">
                <span>
                    <img src={headerImage} className="header-img" alt="/"/>
                </span>



                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>



                <div className="skewer--top">

                </div>
            </image>
        </>
    );
}

export default Header;









