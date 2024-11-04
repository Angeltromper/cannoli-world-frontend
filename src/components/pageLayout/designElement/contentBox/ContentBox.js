import React from 'react';

function ContentBox({children}) {
    return (
        <div>
           <article className="content-bigbox">
               {children}
           </article>
        </div>
    );
}

export default ContentBox;
