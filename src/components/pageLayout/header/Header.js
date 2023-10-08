import React from 'react';
import Navbar from "../navbar/Navbar";
import rightColor from "../../../assets/img.header/rightColor.png";
import leftColor from "../../../assets/img.header/leftColor.png";
import './Header.css';

function Header({headerImage, pageTitle}) {

    return (
        <>
            <header className="header">

                <Navbar/>

                <div className="color-container">
                    <figure><img src={rightColor} alt="right-color" className="right"/></figure>
                    <figure><img src={leftColor} alt="left-color" className="left"/></figure>
                </div>

            </header>

            <image className="header-img-container">
                <span>
                    <img src={headerImage} className="header-img" alt="/"/>
                </span>

                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>
            </image>
        </>
    );
}

export default Header;





