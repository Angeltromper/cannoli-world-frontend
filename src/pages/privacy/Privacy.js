import React, { useEffect } from 'react';
import pageImg from '../../assets/img.background/background design.jpg';



function Privacy({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Privacy beleid");
    }, []);




    return (
        <div>

        </div>

    );
}

export default Privacy;
