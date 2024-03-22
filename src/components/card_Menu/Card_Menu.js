import React from 'react';
import './Card_Menu.css';

function Card_Menu({title, content, image, imageAlt}) {
    return (
        <div className="card__menu-container">
            <img className="card__menu-image" src={image} alt={imageAlt}/>
            <div className="text__menu-container">
                <h4>{ title }</h4>
                { content }
            </div>
        </div>
    );
}

export default Card_Menu;
