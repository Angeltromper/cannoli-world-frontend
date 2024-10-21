import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FaInfoCircle } from "react-icons/fa";


export const AllCannolis = (props) => {

    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {

        const cannoli = {
            artikelnummer: props.cannoli_id,
            naam: props.cannoliName,
            prijs: props.cannoliPrice,
            url: props.url
        };

        const exists = cart.find((x) => x.id === cannoli.artikelnummer);
        if (exists) {
            setCart(
                cart.map((x, index) =>

                    x.id === cannoli.artikelnummer ? {...exists, qty: exists.qty + 1} : x
                )
            );
        } else {
            setCart([...cart, {...cannoli, qty: 1}]);
        }
        localStorage.setItem (cart, JSON.stringify (cart));
    };

    function redirect() {
        navigate (`cannolis/${props.cannoli_id}`)
    }

    return (
        <>
            <section className="cannoli">
                <div className="info-marker-cannoli"
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
                    <div className="cannoli-image">
                        <img alt={props.fileName} src={props.url}/>
                    </div>
                </div>

                <span className="container-textPrice">
                    <span className="cannoli-price">
                        <p> € {props.cannoliPrice.toFixed(2)} </p>
                    </span>

                    <span className="cannoli-text">
                        <h5> {props.cannoliName} </h5>
                    </span>
                </span>
            </section>
        </>
    );
}

export default AllCannolis;
