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
import './Cannoli.css';

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
                <h2>Almond Cannoli (glutenvrij)</h2>
            </div>

            <div className="cards-container">

                <Card image={ snackvanille } imageAlt="cannoli nocciola" title="Nocciola" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                <Card image={ snacklimoncello } imageAlt="cannoli ricotta" title="Ricotta" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                <Card image={ snackchampagne } imageAlt="cannoli cioccolatonero" title="Donkere Chocolade" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                <Card image={ snackamandel } imageAlt="cannoli limoncello" title="Limoncello" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                <Card image={ snackcocos } imageAlt="cannoli tiramisu" title="Tiramisu" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
            </div>


            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>

        </div>
    );
}

export default CannoliSnack;



