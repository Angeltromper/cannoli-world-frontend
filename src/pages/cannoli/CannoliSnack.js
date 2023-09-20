import React, { useEffect } from 'react';
import './Cannoli.css';
import pageImg from "../../assets/img.background/background cannoli-snack.jpg";

function CannoliSnack({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);

    return (

        <div className="cannoli-snack-container">


        </div>
    );

}

export default CannoliSnack;


