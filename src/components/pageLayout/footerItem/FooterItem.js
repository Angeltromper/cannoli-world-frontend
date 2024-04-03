import {NavLink} from "react-router-dom";
import './FooterItem.css'

function FooterItem({to, onClick, icon, title}) {
    return (
        <li className="footer-items">
            <NavLink to={to} onClick={onClick} className="inactive"
                     activeClassName="active-link">
                <img src={icon} alt={icon}/>{title}
            </NavLink>
        </li>
    )
}

export default FooterItem;
