import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";


function FooterNav() {
    const {user, logOut} = useAuth();

    return (
        <>
            <NavLink to="/privacystatement">Privacy statement</NavLink>
            <NavLink to="/algemene voorwaarden">Algemene Voorwaarden</NavLink>
            {
                user ?
                    <>
                        <NavLink to="/Cookie beleid">Cookie beleid</NavLink>
                        <NavLink onClick={logOut} to="/">Uitloggen</NavLink>
                    </>
                    : <>
                        <NavLink to="/log-in">Inloggen</NavLink>
                        <NavLink to="/registreer">Registreren</NavLink>
                    </>
            }
        </>
    )
}

export default FooterNav;
