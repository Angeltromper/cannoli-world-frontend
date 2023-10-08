import React, { useEffect } from 'react';
import pageImg from './../../assets/img.background/background contact.jpg';

function Contact({headerImageHandler,pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
        }, [headerImageHandler, pageTitleHandler]);



    return (
        <div>

        </div>

    );
}

export default Contact;
