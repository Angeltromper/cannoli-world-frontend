import React, { useEffect } from 'react';
import './Franchise.css';
import pageImg from "../../assets/img.background/background franchise.jpg";


function Franchise({headerImageHandler,pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler,pageTitleHandler]);

    return (
        <div className="franchise-container">

        </div>

    );
}

export default Franchise;
