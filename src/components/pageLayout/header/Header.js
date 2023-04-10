import React from 'react';
import NavBar from "../navBar/NavBar";
import './Header.css';

function Header({headerImage, pageTitle}) {

    return (
        <>
            <NavBar/>

            <header className="outer-content-container header header-image__background">
                <div className="inner-content-container"></div>
                <figure>
                    <img src={headerImage} className="header-img"/>
                </figure>

                <div className="skewer--top"></div>

                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>
            </header>
        </>
    );
}

export default Header;











