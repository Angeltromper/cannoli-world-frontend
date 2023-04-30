import React from 'react';
import {NavLink} from "react-router-dom";



function NavBarItem({to, icon, title, onClick}) {
    return (
        <li className="navitems">
            <NavLink to={to} onClick={onClick} className="inactive"
                     activeClassName="active-link">
                <img src={icon} alt={icon}/>{title}
            </NavLink>
        </li>
    )
}

export default NavBarItem;