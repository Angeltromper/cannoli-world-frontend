import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FaInfoCircle } from "react-icons/fa";
import './AllCannoli.css';


export const AllCannoli = (props) => {

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
            <section className="allCannoli">
                <div className="info-marker-allCannoli"
                     onClick={redirect}>
                    <FaInfoCircle/>
                </div>

                <div className="add-items-container">

                    <div className="buy_button_plus_container">
                        <button type="button"
                                onClick={addToCart}> +
                        </button>
                    </div>

                </div>

                <div className="imageButton-container">
                    <div className="allCannoli-image">
                        <img alt={props.fileName} src={props.url}/>
                    </div>
                </div>

                <span className="textPrice-container">
                    <span className="cannoli-price">
                        <p> € {props.cannoliPrice.toFixed(2)} </p>
                    </span>

                    <span className="allCannoli-text">
                        <h5> {props.cannoliName} </h5>
                    </span>
                </span>
            </section>
        </>
    );
};

export default AllCannoli;
