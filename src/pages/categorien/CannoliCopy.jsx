import React, { useEffect, useRef } from "react";
import pageImg from '../../assets/img.background/background cannolis.jpg';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import Card from "../../components/card_Menu/Card";
import cannolisnack from "../../assets/img.cannoli-snack/Cannolisnack-image.png";
import cannoliglutenfree from "../../assets/img.cannoli-glutenfree/Cannoliglutenfree-image.png";
import cannolivegan from "../../assets/img.cannoli-vegan/Cannolivegan-image.png";
import './Cannolis.css';
import '../../App.css';

function Cannolis({headerImageHandler, pageTitleHandler})  {
    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);


    const refSearch = useRef(null);
    return (
        <div className="cannolis">

            <section className="cannoli-assorti-container">

                <Card image={ cannolisnack} imageAlt="snack"/>



                <Card image={ cannoliglutenfree } imageAlt="glutenfree"/>
                <Card image={ cannolivegan } imageAlt="vegan"/>
            </section>

            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>
        </div>
    );
}

export default Cannolis;



