import React, { useEffect, useState } from "react";
import './CannoliSnack.css';
import axios from "axios";
import { Product } from "../../components/index";

function CannoliLink() {
    const [cannoliSnack, setCannoliSnack] = useState([]);

    useEffect(() => {
        async function fetchCannoliSnack(e)  {
            try {
                const response = await axios.get ('http://localhost:8080/products/');

                setCannoliSnack (response.data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchCannoliSnack();
    }, []);

    return (
        <>
            <section className="cannoliSnack-container">

                <h2> Cannoli Snack </h2>

                <div className="product-container">

                    {cannoliSnack.map((product) => {
                        if (product.productType === 'Cannoli')

                            return (
                                product.picture !== null ?

                                    <Product key={product.id}

                                             url={product.picture.url}
                                             product_id={product.id}
                                             productName={product.productName}
                                             productPrice={product.price}
                                    />
                                    :
                                    <Product key={product.id}

                                             product_id{product.id}
                                             productName={product.productName}
                                             productPrice={product.price}
                                    />
                            )
                    })}

                </div>
            </section>
        </>
    );
}

export default CannoliLink;
