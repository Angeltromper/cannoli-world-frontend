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
<<<<<<< HEAD

            <ButtonInfo url={`/cannolis/$`} variation="secondary" size="small">Meer informatie</ButtonInfo>

            <Link to={ "/registreren/" }>
                <p className="btn-text-registreren">Registreer/Log in om prijzen te kunnen zien</p>
            </Link>


=======
>>>>>>> c83920548427fc702a209e27b3a5f2e767c34712
        </div>
    );
}

export default Card;
