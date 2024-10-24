import  React, {useState} from 'react';
import './Card.css';
import { Link } from "react-router-dom";


function Card({title, content, image, imageAlt}) {


    return (
        <div className="card-container">
            <img className="card-image" src={ image } alt={ imageAlt }/>

            <div className="text-container">
                <h2>{ title }</h2>
                { content }
            </div>

            <Link to={ "/registreren/" }>
                <p className="btn-text-registreren">Registreer/Log in</p>
            </Link>
        </div>
    );
}

export default Card;
