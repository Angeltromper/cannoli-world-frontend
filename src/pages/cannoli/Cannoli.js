import React, { useEffect, useRef, useState } from 'react';
import pageImg from "../../assets/img.background/background-cannoli-snack.png";


function Cannoli({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);

    const [cannoliQuery, setCannoliQuery] = useState( "");
    const refSearch = useRef(null);

    return (
        <cannoli className="cannoli">
            <div className="skewer--top"></div>
            <div className="inner-container__reusable">

            </div>




</cannoli>

    );
}

export default Cannoli;
