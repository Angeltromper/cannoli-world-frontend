import React, { useEffect, useRef } from 'react';
import './Franchise.css';
import pageImg from "../../assets/img.background/background franchise.jpg";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";


function Franchise({headerImageHandler,pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler,pageTitleHandler]);

    const refSearch = useRef(null);

    return (
        <div className="franchise-container">
            <div className="inner-container__reusable">
                <div className="search-query__section" ref={refSearch}>

            </div>

            <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}
                 className="search-result__go-up-icon"/>
            </div>
        </div>
    );
}

export default Franchise;
