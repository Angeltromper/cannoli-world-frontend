import React, { useEffect } from 'react';
import './CannoliView.css';



function CannoliView({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler ();
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);




    return (
        <div className="columns col-1 col-md-6 col-sm-12">
            <div className="cannoli-view shadow">
                <div className="image-wrapper">



                </div>


        </div>
</div>

    );
}


export default CannoliView;














