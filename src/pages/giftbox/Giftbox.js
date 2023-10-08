import React, { useEffect } from 'react';
import pageImg from './../../assets/img.background/background giftbox.jpg';
import HeaderResp from "../../components/pageLayout/header/headerResp/HeaderResp";



function Giftbox({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
    }, [headerImageHandler, pageTitleHandler]);

    return (
        <>
            <div className="giftbox">




            </div>





        </>


    );
}

export default Giftbox;
