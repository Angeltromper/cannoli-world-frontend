import React, { useEffect } from 'react';
import pageImg from './../../assets/img.background/background cannoli-vegan.jpg';
import './CannoliVegan.css';

function CannoliVegan({headerImageHandler, pageTitleHandler}) {

    useEffect (() => {
        headerImageHandler (pageImg);
        pageTitleHandler();

    }, [headerImageHandler, pageTitleHandler]);

    return (
        <div className="cannoli-container">

            <div>
                <h2>Cannoli (vegan)</h2>
            </div>




        </div>
    );
}

export default CannoliVegan;
