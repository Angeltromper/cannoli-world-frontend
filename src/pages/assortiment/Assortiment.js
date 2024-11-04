import React, { useEffect } from "react";
import pageImg from '../../../src/assets/img.background/background marktkraam cannolis.jpg';
import Tabel from "../../components/tabel/Tabel";
import ContentBox from "../../components/pageLayout/designElement/contentBox/ContentBox";
import './Assortiment.css';


function Assortiment({headerImageHandler, pageTitleHandler}) {

    useEffect (() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
    }, []);


    return (
        <>
            <div className="assortiment-container">
                <h2>Assortiment</h2>
                <p>


                </p>
            </div>
            <ContentBox>
                <h2>Assortiment cannolis</h2>
                <p>Overzicht assortiment diverse soorten cannolis</p>
                <Tabel/>
            </ContentBox>

        </>
    )
}

export default Assortiment;




















