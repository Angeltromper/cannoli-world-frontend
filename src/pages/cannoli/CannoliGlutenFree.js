<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import pageImg from './../../assets/img.background/background-cannoli-glutenfree.jpg';
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
import './CannoliGlutenFree.css';

function CannoliGlutenFree({headerImageHandler, pageTitleHandler})  {
=======
import React, { useEffect } from 'react';
import pageImg from "../../assets/img.background/background-cannoli-glutenfree.jpg";
import './CannoliGlutenFree.css'



function CannoliGlutenFree ({headerImageHandler, pageTitleHandler}) {
>>>>>>> c83920548427fc702a209e27b3a5f2e767c34712

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);

    return (

        <div className="cannoli-glutenfree-container">



        </div>
    );
}

export default CannoliGlutenFree;
<<<<<<< HEAD



=======
>>>>>>> c83920548427fc702a209e27b3a5f2e767c34712
