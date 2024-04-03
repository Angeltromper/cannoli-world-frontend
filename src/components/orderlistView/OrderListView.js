import React, { useState } from 'react';
import './OrderListView.css';

function OrderListView({applier, comment, id, productList, status }) {
    const [products, setProducts] = useState([productList]);
    const [articles, setArticles] = useState([Object.values(products[0])]);

    return (

        <>
            <section className="orderlist-page-container">
                <span className="orderlist-info-container">
                    <span className="orderlist-id">
                        <h2>Ordernummer: {id}</h2>
                        <span>
                            <h4>
                                <i>
                                    Status: {status}
                                </i>
                            </h4>
                        </span>
                    </span>

                    <br/>

                    <span className="orderlist-applier">
                        Persoonsgegevens:
                        <h4>{applier.personFirstname} {applier.personLastname}</h4>
                        <h4>{applier.personStreetName} {applier.personHouseNumber} {applier.personHouseNumberAdd}</h4>
                        <h4>{applier.personZipcode} {applier.personCity}</h4>
                    </span>

                    <br/>

                    <span className="orderlist-comment">
                        Opmerking:
                        <h4 className="orderlist-comment">{comment} </h4>
                    </span>

                    <br/>

                    <span className="bestellijst-artikelen">

                        Artikelen:
                        <ul>
                            {articles.map((article) => {
                                return (
                                    article.map((article1, index) => {
                                        return (
                                            <li key={index}>
                                                <h4>
                                                    {article1.replaceAll("-", "").replaceAll("-", " ")}
                                                </h4>
                                            </li>
                                        )
                                    }))
                            })}
                    </ul>
                    </span>
                </span>
            </section>
        </>
    );
}

export default OrderListView;
