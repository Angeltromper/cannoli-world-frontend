import React, { useEffect } from 'react';
import pageImg from "../../assets/img.background/background-cannoli-glutenfree.jpg";
import './CannoliGlutenFree.css'



function CannoliGlutenFree ({headerImageHandler, pageTitleHandler}) {

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
