import { NavLink } from "react-router-dom";
import snackVanille from "../../assets/img.cannoli-snack/Snack Vanille.png";
import snackLimoncello from "../../assets/img.cannoli-snack/Snack Limoncello.png";
import snackChampagne from "../../assets/img.cannoli-snack/Snack Champagne Proseco.png";
import snackAmandel from "../../assets/img.cannoli-snack/Snack Mandorla Amandel.png";
import snackCocos from "../../assets/img.cannoli-snack/Snack Cocos.png";
import React from "react";

function CannoliSnacks() {

    return (
        <div className="snacks">
            <h2>Cannoli Snacks</h2>
            <image className="cannoli-flavours">
                <NavLink to="/vanille">
                    <figure><img src={ snackVanille } alt="cannoli-snack" className="cannoli-img"/></figure>
                </NavLink>
                <NavLink to="/limoncello">
                    <figure><img src={ snackLimoncello } alt="cannoli-snack" className="cannoli-img"/>
                    </figure>
                </NavLink>
                <NavLink to="/champagne">
                    <figure><img src={ snackChampagne } alt="cannoli-snack" className="cannoli-img"/>
                    </figure>
                </NavLink>
                <NavLink to="/amandel">
                    <figure><img src={ snackAmandel } alt="cannoli-snack" className="cannoli-img"/></figure>
                </NavLink>
                <NavLink to="/cocos">
                    <figure><img src={ snackCocos } alt="cannoli-snack" className="cannoli-img"/></figure>
                </NavLink>
            </image>
        </div>

    );
}

export default CannoliSnacks;
