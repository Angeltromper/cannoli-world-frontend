import React, {useContext, useState} from 'react';
import {CartContext} from "../../context/CartContext";
import {useNavigate} from "react-router-dom";
import {RiCloseLine, RiShoppingBasket2Line} from "react-icons/ri";

export const Cart = () => {

    const navigate = useNavigate();
    const [toggleCart, setToggleCart] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, cart) => acc + cart.prijs, 0);

    const removeItem = (index) => {
        setCart(cart.filter((o, i) => index !== i));
    };

    function cart_deliveryRequest() {
        navigate( `/cart items/checkout`)
    }

    return (
        <div>
            <div className="cart-number">
                {Object.keys(cart).length}
            </div>

            {toggleCart ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleCart(false)}/>
                :
                <RiShoppingBasket2Line color="#fff" size={50} onClick={() => setToggleCart(true)}/>
            }

            {toggleCart &&
                (
                    <div className="cart-container">

                        <div className="cart-button">
                            <h1>Winkelwagen</h1>
                            <div>

                                <button className="cart-checkout-button"
                                        onClick={cart_deliveryRequest}>

                                    Checkout
                                </button>
                            </div>
                        </div>
                        {cart.map((product,index) => {
                            product.prijs = undefined;
                            product.naam = undefined;
                            return (
                                <ul key={index}>

                                    <div className="cart-items">
                                        <div className="cart-items-left">
                                            <button
                                                className="cart-button-remove"
                                                onClick={() => removeItem(index)}><RiCloseLine/>
                                            </button>
                                            <div className="cart-items-name-padding">
                                                {product.naam}
                                            </div>
                                        </div>
                                        <div>
                                            € {product.prijs.toFixed(2)}
                                        </div>

                                    </div>
                                </ul>
                            )
                        })}

                        {cart.length === 0 && <div> Winkelwagen is leeg</div>}
                        <br/>

                        {Object.keys(cart).length} product(en)

                        <br/>
                        <h3><strong> Totaal prijs: € {totalPrice.toFixed(2)} </strong></h3>

                    </div>
                )}
        </div>
    )
}
