import React from 'react';
import './Card.css';

function Card({title, content, image, imageAlt}) {
    return (
        <div className="card-container">
            <img className="card-image" src={image} alt={imageAlt}/>
            <div className="text-container">
                <h4>{ title }</h4>
                { content }
            </div>
        </div>
    );
}

export default Card;
