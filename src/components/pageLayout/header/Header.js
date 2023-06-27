import React from 'react';
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import './Header.css';

function Header({headerImage, pageTitle}) {




    return (
        <>
            <header className="header">

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
                    <img src={headerImage} className="header-img"/>
                </span>



                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>


                <Hero/>

                <div className="skewer--top">

                    </div>
            </image>
        </>
    );
}

export default Header;











