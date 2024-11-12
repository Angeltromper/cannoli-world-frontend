import React from 'react';
import './ColumnWithImage.css';


function ColumnWithImage({children, img, name, articlecode, width, pieces, description, ingredients, value}) {
    return(

        <div className="column-view">
            <div className="columncontainer-text">
                {children}
            </div>

            <div className="image-wrapper">
                <figure>
                    <img src={img} alt={name} />

                </figure>
            </div>

            <div className="description">
                <p>{ description }</p>

                <table>
                    <tbody>
                    <tr>
                        <td>Artikelnummer:</td>
                        <td>{ articlecode }</td>
                    </tr>
                    <tr>
                        <td>Gewicht:</td>
                        <td>{ width } gr</td>
                    </tr>
                    <tr>
                        <td>Verpakt:</td>
                        <td>{ pieces }</td>
                    </tr>
                    <tr>
                        <td>Ingrediënten:</td>
                        <td>{ ingredients }</td>
                    </tr>
                    <tr>
                        <td>Gemiddelde Voedingswaarde:</td>
                        <td>{ value }</td>
                    </tr>
                    </tbody>
                </table>
            </div>
       </div>
    );
}

export default ColumnWithImage;

