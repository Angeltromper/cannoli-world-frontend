import React from 'react';
import "./TwoColumn.css";

function TwoColumn({children}) {

    return (
        <div className="columnContainer page-content-two">
            {children}
        </div>
    );
}

export default TwoColumn;