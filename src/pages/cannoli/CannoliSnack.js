import React, {useEffect} from 'react';
import pageImg from "../../../src/assets/img.background/background-cannoli-snack.png";


function CannoliSnack({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler ("Cannoli Snack");
        }, [headerImageHandler]);


    return (
        <>
            <h1>De smaak van cannoli-snack</h1>


        </>

    );

}

export default CannoliSnack;