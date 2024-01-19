import React, { useContext } from 'react';
import {NavLink} from "react-router-dom";
import AccountButton from "../../button/accountButton/AccountButton";
import LogOutButton from "../../button/logoutButton/LogOutButton";
import './NavRegister.css';
import { AuthContext } from "../../../context/AuthContext";




function NavRegister() {

    const {isAuth} = useContext(AuthContext);


    return (
        <>
            {isAuth === false ?

                <div className="navbar__register-login">
                    <NavLink to="/login" exact activeClassName="active-link">Inloggen</NavLink>
                    <br/>

                    <NavLink to="/register" exact activeClassName="active-link">
                        <button type="button" className="navbar__button-register">Registreren</button>
                    </NavLink>
                </div>
                :
                <span className="login__account-button">
                    <br/>

                    <AccountButton/>
                    <LogOutButton/>

                </span>
            }

            </>

    );
}

export default NavRegister;








