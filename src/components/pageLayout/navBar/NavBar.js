import React from 'react';
import {useLocation} from "react-router-dom";


function NavBar() {
    let location = useLocation().pathname;
    console.log(location);

    return (

        <main>


        </main>
    );
}

export default NavBar;