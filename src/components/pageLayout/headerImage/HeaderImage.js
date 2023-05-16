import React from 'react';
import './HeaderImage.css';

function HeaderImage({text, text1, text2, text3, children}) {
    return (


    <div className="outer-container__reusable">
        <main className="inner-container__reusable">

            <section className="header-text__section">
                <h3 className="header-text-section__button">{text}</h3>
                <h3 className="header-text-section__intro-1">{text1}</h3>
                <h3 className="header-text-section__intro-2">{text2}</h3>
                <h3 className="header-text-section__intro-3">{text3}</h3>
            </section>

            <div className="header-text-section__title"></div>
            {children}
        </main>
    </div>

);
}
export default HeaderImage;





