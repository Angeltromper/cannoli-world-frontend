import React, { useContext } from 'react';
import './Product.css';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FaInfoCircle } from "react-icons/fa";


export const Product = (props) => {

    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {

        const product = {
            artikelnummer: props.product_id,
            naam: props.productName,
            prijs: props.productPrice,
            url: props.url
        };

        const exists = cart.find((x) => x.id === product.artikelnummer);
        if (exists) {
            setCart(
                cart.map((x, index) =>

                    x.id === product.artikelnummer ? {...exists, qty: exists.qty + 1} : x
                )
            );
        } else {
            setCart([...cart, {...product, qty: 1}]);
        }
        localStorage.setItem (cart, JSON.stringify (cart));
    };

    function redirect() {
        navigate (`products/${props.product_id}`)
    }

    return (
        <>
            <section className="product">
                <div className="info-marker-product"
                     onClick={redirect}>
                    <FaInfoCircle/>
                </div>

                <div className="flavour-container">

                    <div className="buy-button-container">
                        <button type="button"
                                onClick={addToCart}> +
                        </button>
                    </div>

                </div>

                <div className="container-imageButton">
                    <div className="product-image">
                        <img alt={props.fileName} src={props.url}/>
                    </div>
                </div>

                <span className="container-textPrice">
                    <span className="product-price">
                        <p> € {props.productPrice.toFixed(2)} </p>
                    </span>

                    <span className="product-text">
                        <h5> {props.productName} </h5>
                    </span>
                </span>
            </section>
        </>
    );
}

export default Product;
