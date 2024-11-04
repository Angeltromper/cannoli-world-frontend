import React from 'react';
import {Button} from "../button/Button";


function RedirectArea({text, buttonText, buttonVariation, buttonUrl}) {
    return (
        <div className="redirect">
            <div className="container">
                <div className="redirect-content shadow">
                    <p>{text}</p>
                    <Button url={buttonUrl} variaton={buttonVariation}>{buttonText}</Button>
                </div>
            </div>
        </div>
    );
}

export default RedirectArea
