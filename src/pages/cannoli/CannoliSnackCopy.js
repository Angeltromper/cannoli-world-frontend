import React, { useEffect, useRef, useState } from "react";
import pageImg from './../../assets/img.background/background cannoli-snack.jpg';
import snackvanille from "../../assets/img.cannoli-snack/Snack Vanille.png";
import snacklimoncello from "../../assets/img.cannoli-snack/Snack Limoncello.png";
import snackchampagne from "../../assets/img.cannoli-snack/Snack Champagne Proseco.png";
import snackamandel from "../../assets/img.cannoli-snack/Snack Mandorla Amandel.png";
import snackcocos from "../../assets/img.cannoli-snack/Snack Cocos.png";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import Card from "../../components/card_Menu/Card";
import './CannoliSnack.css';




function CannoliSnack({headerImageHandler, pageTitleHandler})  {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);

    const [cannoliQuery, setCannoliQuery] = useState("");
    const refSearch = useRef(null);

    return (
        <div className="cannoli-container">


            <div>
                <h2>Cannoli (snack)</h2>
            </div>

            <div className="cards-container">
                <Card image={ snackvanille } imageAlt="cannoli vanille" title="Vanille"
                      content="Snack Cannoli (niet glutenvrij)"/>
                <Card image={ snacklimoncello } imageAlt="cannoli limoncello" title="Limoncello"
                      content="Snack Cannoli (niet glutenvrij)"/>
                <Card image={ snackchampagne } imageAlt="cannoli cioccolatonero" title="Champagne"
                      content="Snack Cannoli (niet glutenvrij)"/>
                <Card image={ snackamandel } imageAlt="cannoli Amandel" title="Amandel"
                      content="Snack Cannoli (niet glutenvrij)"/>
                <Card image={ snackcocos } imageAlt="cannoli cocos" title="Cocos"
                      content="Snack Cannoli (niet glutenvrij)"/>
            </div>


            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>

        </div>

    );
}

export default CannoliSnack;



