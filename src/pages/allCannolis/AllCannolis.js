import React from 'react';

function AllCannolis(props) {
    return (
        <article className="cannoli">
            <img src={props.image} alt={props.title}/>
            <h2 className="cannoli-name">{props.title}</h2>
            <p className="cannoli-description">{props.description}</p>
        </article>
    )
}

export default AllCannolis;

