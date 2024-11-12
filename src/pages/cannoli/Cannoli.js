import React, { useEffect, useRef } from "react";
import './Cannoli.css';
import pageImg from './../../assets/img.background/background cannoli-snack.jpg';
import glutenfreepistacchio from "../../assets/img.cannoli-glutenfree/Glutenfree Pistacchio.png";
import glutenfreenocciola from "../../assets/img.cannoli-glutenfree/Glutenfree Nocciola (hazelnoot).png";
import glutenfreericotta from "../../assets/img.cannoli-glutenfree/Glutenfree Ricotta.png";
import glutenfreecioccolatonero from "../../assets/img.cannoli-glutenfree/Glutenfree Cioccolato Nero (donkere chocolade).png";
import glutenfreelimoncello from "../../assets/img.cannoli-glutenfree/Glutenfree Limoncello (citroen).png";
import glutenfreetiramisu from "../../assets/img.cannoli-glutenfree/Glutenfree Tiramisu.png";
import glutenfreecaramello from "../../assets/img.cannoli-glutenfree/Glutenfree Caramello (zoute caramel).png";
import glutenfreecaffe from "../../assets/img.cannoli-glutenfree/Glutenfree Caffe.png";
import glutenfreefruttidibosco from "../../assets/img.cannoli-glutenfree/Glutenfree Frutti di Bosco (bosvruchten).png";
import glutenfreemandarino from "../../assets/img.cannoli-glutenfree/Glutenfree Mandarino (mandarijn).png";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import Card from "../../components/card_Menu/Card";


function Cannoli({headerImageHandler, pageTitleHandler})  {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
        }, [headerImageHandler, pageTitleHandler]);

    const refSearch = useRef(null);

    return (
        <div className="cannoli-container">


                    <div>
                        <h2>Almond Cannoli (glutenvrij)</h2>
                    </div>

                    <div className="cards-container">
                        <Card image={ glutenfreepistacchio } imageAlt="cannoli pistache" title="Pistache" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                        <Card image={ glutenfreenocciola } imageAlt="cannoli nocciola" title="Nocciola" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                        <Card image={ glutenfreericotta } imageAlt="cannoli ricotta" title="Ricotta" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                        <Card image={ glutenfreecioccolatonero } imageAlt="cannoli cioccolatonero" title="Donkere Chocolade" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                        <Card image={ glutenfreelimoncello } imageAlt="cannoli limoncello" title="Limoncello" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                        <Card image={ glutenfreetiramisu } imageAlt="cannoli tiramisu" title="Tiramisu" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                        <Card image={ glutenfreecaramello } imageAlt="cannoli caramello" title="Zoute Caramel" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                        <Card image={ glutenfreecaffe } imageAlt="cannoli caffe" title="Caffe" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                        <Card image={ glutenfreefruttidibosco } imageAlt="fruttidibosco" title="Bosvruchten" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                        <Card image={ glutenfreemandarino } imageAlt="cannoli mandorino" title="Manderijn" content="Almond Cannoli is een
                         glutenvrije cannoli"/>
                    </div>


            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                     className="search-result__go-up-icon"/>

        </div>
    );
}

export default Cannoli;



