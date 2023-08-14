import React, {useContext} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import Column from "../designElement/column/Column";
import TwoColumn from "../designElement/column/TwoColumn";
import FooterResp from "../footerResp/FooterResp";
import './Footer.css';
import mail from "../../../assets/navIcon/mail.png";
import phone from "../../../assets/navIcon/phone.png";


function Footer() {

    // eslint-disable-next-line no-unused-vars
    const {isAuth} = useContext(AuthContext);


    return (
        <footer className="footer">
            <div className="footer-container">

            <TwoColumn>
                <Column>
                    <div className="footer-menu">
                        <h3>navigatie</h3>
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/webshop">Webshop</NavLink></li>
                            <li><NavLink to="/faq's">Faq's</NavLink></li>
                            <li><NavLink to="/webshop">Contact</NavLink></li>
                            <li><NavLink to="/faq's">Account</NavLink></li>

                            {isAuth ? <li><NavLink to="/inloggen">Uitloggen</NavLink></li> : <li><NavLink to="/inloggen">Inloggen</NavLink></li>}
                            {isAuth && <li><NavLink to="/profiel">Profiel</NavLink></li>}
                        </ul>
                    </div>
                </Column>

                <Column>
                    <div className= "footer-contact">
                        <h3>contact</h3>
                        <ul>
                            <NavLink to="mail"><img src={mail} alt="mail" className="mail"/>srruffino@outlook.com</NavLink>
                            <NavLink to="phone"><img src={phone} alt="phone" className="phone"/>SR.Ruffino:(+31)620940691</NavLink>
                            <NavLink to="phone"><img src={phone} alt="phone" className="phone"/>E.Jongh Visscher:(+31)648889093</NavLink>
                        </ul>
                    </div>

                    <div className="register-content">
                        <h3 className="register-subtitle">Wilt u onze nieuwsbrief ontvangen?</h3>
                        <form className="register-form">
                            <label>
                                <input className="register-input" type="text" placeholder="E-mail adres..."/>
                            </label>
                            <button className="button" type="submit">inschrijven</button>
                        </form>
                    </div>
                </Column>
            </TwoColumn>

            <FooterResp/>

            <div className="skewer--footer-top"></div>
            </div>
        </footer>
    );
}

export default Footer;







