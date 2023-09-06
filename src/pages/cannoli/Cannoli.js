import React, { useEffect } from 'react';
import cannoliSnackImg from "../../assets/img.background/background-cannoli-snack.jpg";
import './Cannoli.css';

function Cannoli ({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(cannoliSnackImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);

    return (

        <div className="cannoli-container">
            <image className="cannoli-img-container">
                 <span>

                </span>
            </image>
            <div className="skewer--cannoli-top"></div>

        </div>
    );
}




export default Cannoli;
