import React, { useEffect, useRef } from "react";
import './Cannoli.css';
import pageImg from './../../assets/img.background/background cannoli-snack.jpg';
import snackVanille from "../../assets/img.cannoli-snack/Snack Vanille.png";
import snackLimoncello from "../../assets/img.cannoli-snack/Snack Limoncello.png";
import snackChampagne from "../../assets/img.cannoli-snack/Snack Champagne Proseco.png";
import snackAmandel from "../../assets/img.cannoli-snack/Snack Mandorla Amandel.png";
import snackCocos from "../../assets/img.cannoli-snack/Snack Cocos.png";


import glutenfreePistacchio from "../../assets/img.cannoli-glutenfree/Glutenfree Pistacchio.png";
import glutenfreeNocciola from "../../assets/img.cannoli-glutenfree/Glutenfree Nocciola (hazelnoot).png";
import glutenfreeRicotta from "../../assets/img.cannoli-glutenfree/Glutenfree Ricotta.png";
import glutenfreeCioccolatoNero from "../../assets/img.cannoli-glutenfree/Glutenfree Cioccolato Nero (donkere chocolade).png";
import glutenfreeLimoncello from "../../assets/img.cannoli-glutenfree/Glutenfree Limoncello (citroen).png";
import glutenfreeTiramisu from "../../assets/img.cannoli-glutenfree/Glutenfree Tiramisu.png";
import glutenfreeCaramello from "../../assets/img.cannoli-glutenfree/Glutenfree Caramello (zoute caramel).png";
import glutenfreeCaffe from "../../assets/img.cannoli-glutenfree/Glutenfree Caffe.png";
import glutenfreeFruttidiBosco from "../../assets/img.cannoli-glutenfree/Glutenfree Frutti di Bosco (bosvruchten).png";
import glutenfreeMandarino from "../../assets/img.cannoli-glutenfree/Glutenfree Mandarino (mandarijn).png";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import { NavLink } from "react-router-dom";


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
                            <NavLink to="/vanille"><figure><img src={snackVanille} alt="cannoli-snack" className="cannoli-img"/></figure></NavLink>
                            <NavLink to="/limoncello"><figure><img src={snackLimoncello} alt="cannoli-snack" className="cannoli-img"/></figure></NavLink>
                            <NavLink to="/champagne"><figure><img src={snackChampagne} alt="cannoli-snack" className="cannoli-img"/></figure></NavLink>
                            <NavLink to="/amandel"><figure><img src={snackAmandel} alt="cannoli-snack" className="cannoli-img"/></figure></NavLink>
                            <NavLink to="/cocos"><figure><img src={snackCocos} alt="cannoli-snack" className="cannoli-img"/></figure></NavLink>
                        </image>
                    </div>

                    <div className="glutenfree">
                        <h2>Cannoli Glutenfree</h2>
                        <image className="cannoli-flavours">
                            <figure><img src={glutenfreePistacchio} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenfreeNocciola} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenfreeRicotta} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenfreeCaramello} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenfreeCioccolatoNero} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenfreeLimoncello} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenfreeTiramisu} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenfreeCaffe} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenfreeFruttidiBosco} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                            <figure><img src={glutenfreeMandarino} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                        </image>
                    </div>
                </div>

                <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}/>
                <div className="search-result__go-up-icon"/>
            </div>
        </div>
    );
}
export default Cannoli;



