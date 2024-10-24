/*
import React, { useEffect, useState } from "react";
import pageImg from '../../../src/assets/img.background/background marktkraam cannolis.jpg';
import axios from "axios";
import Tabel from "../../components/tabel/Tabel";
import ContentBox from "../../components/pageLayout/designElement/contentBox/ContentBox";

function Assortiment({headerImageHandler, pageTitleHandler}) {
    const [cannoliView, setCannoliView] = useState ([]);

    useEffect (() => {
        axios.get ("http://localhost:8080/cannolis/")
             `then` ((response) => {
                setCannoliView (response.data);
            })`catch` (error => {
            console.error ('There was an error!', error);
        });

    }, []);

    function showCannolis(array) {
        return array.map (({id, name, type}) => {
            return <li key={ id }>{ type } { name }</li>;
        });
    }

    useEffect (() => {
        headerImageHandler (pageImg);
        pageTitleHandler ("assortiment");
    }, []);


    return (
        <>
            <div className="page content">
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
*/



















