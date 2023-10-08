import React, { useEffect } from 'react';
import pageImg from "../../assets/img.background/background service.jpg";
import './Service.css';


function Service({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
    }, [headerImageHandler, pageTitleHandler]);




    return (
        <div>

        </div>

    );
}

export default Service;
