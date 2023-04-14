import React from 'react';
import NavBar from "../navBar/NavBar";
import './Header.css';

function Header({headerImage, pageTitle}) {

    return (
        <>
            <NavBar/>

            <header className="outer-content-container">
                <div className="header-image"></div>
                <figure>
                    <img src={headerImage} className="header-img"/>
                </figure>
                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>

                <div className="skewer--bottom"></div>

            </header>


        </>
    );
}

export default Header;











