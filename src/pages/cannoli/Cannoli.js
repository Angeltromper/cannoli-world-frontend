import React, { useEffect, useRef } from "react";
import './Cannoli.css';
import pageImg from './../../assets/img.background/background cannoli-snack.jpg';
import snackVanille from "../../assets/img.cannoli-snack/Snack Vanille.png";
import snackLimoncello from "../../assets/img.cannoli-snack/Snack Limoncello.png";
import snackChampagne from "../../assets/img.cannoli-snack/Snack Champagne Proseco.png";
import snackAmandel from "../../assets/img.cannoli-snack/Snack Mandorla Amandel.png";
import snackCocos from "../../assets/img.cannoli-snack/Snack Cocos.png";
import snackAmaretto from "../../assets/img.cannoli-snack/Snack Amaretto.png";
import glutenLimoncello from "../../assets/img.cannoli-glutenfree/Glutenfree Lemon Limoncello.png";
import glutenStrawberry from "../../assets/img.cannoli-glutenfree/Glutenfree Strawberry.png";
import glutenVanille from "../../assets/img.cannoli-glutenfree/Glutenfree Vanille.png";
import glutenPistache from "../../assets/img.cannoli-glutenfree/Glutenfree Pistache.png";
import glutenRicotta from "../../assets/img.cannoli-glutenfree/Glutenfree Ricotta.png";
import glutenTeramisu from "../../assets/img.cannoli-glutenfree/Glutenfree Teramisu.png";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";

function Cannoli({headerImageHandler, pageTitleHandler})  {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);

    const refSearch = useRef(null);

    return (

        <div className="cannoli-container">
            <div className="inner-container__reusable">
                <div className="search-query__section" ref={refSearch}>

                <div className="snacks">
                    <h2>Cannoli Snacks</h2>
                    <image className="cannoli-flavours">
                        <figure><img src={snackVanille} alt="cannoli-snack" className="cannoli-img"/></figure>
                        <figure><img src={snackLimoncello} alt="cannoli-snack" className="cannoli-img"/></figure>
                        <figure><img src={snackChampagne} alt="cannoli-snack" className="cannoli-img"/></figure>
                        <figure><img src={snackAmandel} alt="cannoli-snack" className="cannoli-img"/></figure>
                        <figure><img src={snackCocos} alt="cannoli-snack" className="cannoli-img"/></figure>
                        <figure><img src={snackAmaretto} alt="cannoli-snack" className="cannoli-img"/></figure>
                    </image>
                </div>


                    <div className="glutenfree">
                        <h2>Cannoli Glutenfree</h2>
                        <image className="cannoli-flavours">
                            <figure><img src={glutenLimoncello} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenStrawberry} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenVanille} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenPistache} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenRicotta} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenTeramisu} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                        </image>
                    </div>
                </div>

                <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}
                     className="search-result__go-up-icon"/>

                </div>
            </div>
            );
        }

export default Cannoli;



