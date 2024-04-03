/*

import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


function DropdownMenu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {((item, index) => {
                return(
                    <li key={index}>
                        <NavLink className={item.Name} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
        </>
    );
}

export default DropdownMenu;


 */
