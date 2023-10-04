import React, { useEffect } from 'react';
import pageImg from "../../assets/img.background/background cannoli-snack.jpg";
import cannoliVanille from "../../assets/img.cannoli-snack/Snack Vanille.png";
import cannoliLimoncello from "../../assets/img.cannoli-snack/Snack Limoncello.png";
import cannoliChampagne from "../../assets/img.cannoli-snack/Snack Champagne Proseco.png";
import cannoliAmandel from "../../assets/img.cannoli-snack/Snack Mandorla Amandel.png";
import cannoliCocos from "../../assets/img.cannoli-snack/Snack Cocos.png";
import cannoliAmaretto from "../../assets/img.cannoli-snack/Snack Amaretto.png";
import './CannoliSnack.css';

function Cannoli({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);

    return (

        <div className="cannoli-snack-container">
            <image className="cannoli-snack">
                <figure><img src={cannoliVanille} alt="cannoli-snack" className="snack-img"/></figure>
                <figure><img src={cannoliLimoncello} alt="cannoli-snack" className="snack-img"/></figure>
                <figure><img src={cannoliChampagne} alt="cannoli-snack" className="snack-img"/></figure>
                <figure><img src={cannoliAmandel} alt="cannoli-snack" className="snack-img"/></figure>
                <figure><img src={cannoliCocos} alt="cannoli-snack" className="snack-img"/></figure>
                <figure><img src={cannoliAmaretto} alt="cannoli-snack" className="snack-img"/></figure>
            </image>
        </div>
    );

}

export default Cannoli;


