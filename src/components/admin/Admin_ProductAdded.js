import React, { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import SaveButton from "../button/saveButton/SaveButton";
import {ReactComponent as Delete} from "../../assets/navIcon/delete.svg";
import './Admin_ProductAdded.css';

function Admin_ProductAdded() {
    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = ".. veld is verplicht";
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const {user} = useContext(AuthContext);


    const [ products, setProducts] = useState([])

    async function sendProductData(productdata) {
        try {
            await axios.post (`http://localhost:8080/products/create`,
                {

                    id: productdata.product_id,
                    productName: productdata.product_name,
                    productType: productdata.product_type,
                    productDescription: productdata.product_description,
                    productIngredients: productdata.product_ingredients,
                    productPrice: productdata.product_price,

                }).then(addedNewProduct)

        } catch (error) {
            console.error (error);
        }
    }

    console.log();

    function addedNewProduct() {
        navigate('/producten')
    }

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get (`http://localhost:8080/products`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setProducts(response.data)
            } catch (error) {
                console.error ('There was an error', error);
            }
        }

        fetchProducts ();
    }, [products]);

    async function deleteProduct(productName) {
        try {
            await axios.delete (`http://localhost:8080/products/delete/${productName}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                })
        } catch (error) {
            console.error (error)
        }

        setTimeout(() => {
            navigate ('/producten-toevoegen');
        }, 1000)
    }

    return (
        <>

            {user.roles !== 'ROLE_ADMIN' ?

                <div className="admin-info-container">
                    <div className="admin-info">
                        <h1>U moet ingelogd zijn als
                            <br/> ADMINISTRATOR
                            <br/> om deze content te mogen zien..
                        </h1>
                    </div>
                </div>
                :

                <section>
                    <div className="product-form-container">
                        <div className="product-form-text">
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda enim eos itaque ratione!
                            Alias amet consectetur deleniti, odio omnis quidem.
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ipsum provident, quod suscipit
                            totam vero voluptas? Cupiditate ipsum officiis quaerat.
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsam iste molestias natus
                            perferendis rerum sapiente? Esse ipsa quisquam sit.
                        </div>

                        <form className="product-form"
                              onSubmit={handleSubmit(sendProductData)}>

                            <div>
                                <label htmlFor="product-name">
                                    Productnaam:
                                    <input
                                        type="text"
                                        id="product_name"
                                        {...register("product_name", {
                                            required: {value: true, message: message}
                                        })}
                                        placeholder="product-naam"
                                    />
                                </label>
                                {errors.product_name && <p>{errors.product_name.message}</p>}
                                <br/>

                                <label htmlFor="product_type">
                                    <select
                                        id="product_type"
                                        {...register("product_type", {
                                            required: {value: true, message: message}
                                        })}
                                        placeholder="product-soort"
                                    >
                                        <option value="Cannoli Snack">
                                            Cannoli Snack
                                        </option>

                                        <option value="Cannoli Glutenfree">
                                            Cannoli Glutenfree
                                        </option>

                                        <option value="Cannoli Vegan">
                                            Cannoli Vegan
                                        </option>

                                        <option value="Giftbox">
                                            Giftbox
                                        </option>
                                    </select>

                                </label>
                                {errors.product_type && <p>{errors.product_type.message}</p>}
                                <br/>

                            </div>
                            <div className="product-omschrijving">
                                <label htmlFor="product-description">
                                    Omschrijving:
                                    <textarea
                                        type="text"
                                        id="product_description"
                                        cols="40"
                                        rows="10"
                                        {...register("product_description", {
                                            required: {value: false, message: message}
                                        })}
                                        placeholder="Cannoli's is een Italiaanse koekje gevuld met
                                   cremé in diverse smaken."
                                    />

                                </label>
                                {errors.product_description && <p>{errors.product_description.message}</p>}
                                <br/>

                                <label htmlFor="product-ingredients">
                                    Ingredient:
                                    <textarea
                                        type="text"
                                        id="product_ingredients"
                                        cols="40"
                                        rows="10"
                                        {...register("product_ingredients", {
                                            required: {value: false, message: message}
                                        })}
                                        placeholder="Room, tiramisu-créme (52%, suiker, plantaardig vet
                               (palmolie, zonnebloemolie)."
                                    />
                                </label>
                                {errors.product_ingredients && <p>{errors.product_ingedrients.message}</p>}
                                <br/>
                            </div>

                            <div>
                                <label htmlFor="product-price">
                                    Prijs:
                                    <input
                                        type="text"
                                        id="product_price"
                                        {...register("product_price", {
                                        required: {value: true, message: message}
                                        })}
                                        placeholder="prijs"
                                    />
                                </label>
                                {errors.product_price && <p>{errors.product_price.message}</p>}
                                <br/>

                                <div className="product-form-saveButton">
                                    <SaveButton/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <section className="Admin_ProductAdded">

                        <div>
                            <h2> Producten </h2>
                        </div>

                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>ID/Artnr.</th>
                                <th>ProductNaam</th>
                                <th>Afbeelding</th>
                                <th>Prijs</th>
                                <th>Omschrijving</th>
                                <th>Ingrediënten</th>
                            </tr>
                            </thead>

                            <tbody className="admin_tbody">

                            {products.map((product) => {
                                product.ingredient = undefined;
                                return <tr key={product.id}>

                                    <td>
                                        <button className="delete-button"
                                                onClick={() => deleteProduct(product.id)}>
                                            <Delete/>
                                        </button>
                                    </td>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.picture && <img src={product.picture.url} alt={product.picture.fileName}/>}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.ingredient}</td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </section>
                </section>
            }
            </>
    )
}

export default Admin_ProductAdded;
