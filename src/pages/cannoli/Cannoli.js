import React, { useEffect, useRef } from "react";
import pageImg from './../../assets/img.background/background cannolis.jpg';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import './Cannoli.css';
import '../../App.css';

function Cannoli({headerImageHandler, pageTitleHandler})  {
    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);



    const refSearch = useRef(null);

    return (
        <div className="cannolis-container">





                <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                     className="search-result__go-up-icon"/>


            </div>
    );


}

export default Cannoli;



