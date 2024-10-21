import React, { useEffect, useRef, useState } from 'react';
import pageImg from './../../assets/img.background/background image ingredienten.png';
import cannolisnackimage from '../../assets/img.cannoli-snack/Cannolisnack-image.png';
import cannoliglutenfreeimage from '../../assets/img.cannoli-glutenfree/Cannoliglutenfree-image.png';
import cannoliveganimage from '../../assets/img.cannoli-vegan/Cannolivegan-image.png';
import '../../assets/img.cannoli-glutenfree/Cannoliglutenfree-image.png';
import '../../assets/img.cannoli-vegan/Cannolivegan-image.png';
import Card from "../../components/card_Menu/Card";
import HandleRef from "../../helpers/HandleRef";
import goUp from "../../assets/navIcon/goUp.png";
import './CannoliIngredient.css';



function CannoliIngredient({headerImageHandler, pageTitleHandler}) {

    useEffect (() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
    }, [headerImageHandler, pageTitleHandler]);

    const [cannoliQuery, setCannoliQuery] = useState ("");
    const refSearch = useRef (null);


    return (
        <div className="cannoli-container">

            <div>
                <h2>Cannoli Ingredienten</h2>
            </div>

            <div className="cards-container">
                    <Card image={ cannolisnackimage } imageAlt="cannoli ingredient snack" title= "Ingredienten Cannoli Snack"/>
                    <Card image={ cannoliglutenfreeimage } imageAlt="cannoli ingredient glutenfree" title= "Ingredienten Cannoli Glutenfree"/>
                <Card image={ cannoliveganimage } imageAlt="cannoli ingredient vegan" title= "Ingredienten Cannoli Vegan"/>
            </div>

            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>

        </div>
    );
}

export default CannoliIngredient;
