import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import OrderListView from "../orderlistView/OrderListView";
import './OrderList.css';
import axios from "axios";


function OrderList() {
    const navigate = useNavigate ();
    const token = localStorage.getItem ('token');
    const [deliveryRequests, setDeliveryRequests] = useState ([]);
    const {deliveryRequest_id} = useParams ();

    useEffect (() => {
        async function fetchDeliveryRequest() {
            try {
                const response = await axios.get (`http://localhost:8080/deliveryRequests/${ deliveryRequest_id }`,
                    {
                        headers: {
                            "Content-Typ": "application/json",
                            "Authorization": `Bearer ${ token }`,
                        }
                    }
                );
                setDeliveryRequests (response.data);
            } catch (error) {
                console.error ('There was an error!', error);
            }
        }

        fetchDeliveryRequest ();
    }, [deliveryRequest_id]);

    async function updateStatusConfirm() {
        try {
            await axios.put (`http://localhost:8080/deliveryRequests/${ deliveryRequest_id }`,
                {
                    headers: {
                        "Content-Typ": "application/json",
                        Authorization: `Bearer ${ token }`,
                    },

                    id: deliveryRequest_id,
                    status: "CONFIRMED",

                }).then (updateStatusClick)
        } catch (error) {
            console.error (error);
        }
    }

    async function updateStatusFinish() {
        try {
            await axios.put (`http://localhost:8080/deliveryRequests/${ deliveryRequest_id }`,
                {
                    headers: {
                        "Content-Typ": "application/json",
                        Authorization: `Bearer ${ token }`,
                    },
                    id: deliveryRequest_id,
                    status: "FINISHED",
                }).then (updateStatusClick)
        } catch (error) {
            console.error (error);
        }
    }

    function updateStatusClick() {
        navigate.go (`/deliveryRequests/${ deliveryRequest_id }`)
    }

    return (
        <>
            <section className="orderlist-page-padding">
                <div className="status-update-order">

                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum explicabo facere
                        optio quos sit. Aliquam expedita non obcaecati omnis?
                    </h4>
                    <br/>

                    <h4>
                        <i>*AVAILABLE</i> = Beschikbaar voor bezorging<br/>
                        <i>*CONFIRMED</i> = Bestelling opgepakt en bevestigd<br/>
                        <i>*FINISHED</i> = Bestelling bezorgd en afgehandeld
                    </h4><br/>

                    <div className="order-button">
                        <button onClick={ updateStatusConfirm }> Bevestigen</button>
                        <button onClick={ updateStatusFinish }> Afronden</button>
                    </div>
                </div>

                <br/>

                <section className="Order-page">
                    { deliveryRequests.applier &&
                        <OrderListView key={ deliveryRequests.id }
                                       id={ deliveryRequests.id }
                                       applier={ deliveryRequests.applier }
                                       productList={ deliveryRequests.productList }
                                       status={ deliveryRequests.status }
                                       comment={ deliveryRequests.comment }
                        />
                    }
                </section>
            </section>
        </>
    )
}

export default OrderList;

