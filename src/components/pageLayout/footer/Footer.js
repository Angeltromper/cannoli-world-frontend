import React, {useContext} from 'react';
import {AuthContext} from "../../../context/AuthContext";
import {Link, NavLink} from "react-router-dom";
import Column from "../designElement/column/Column";
import TwoColumn from "../designElement/column/TwoColumn";
import './Footer.css';
import rightColors from "../../../assets/img.header/rightColors.png";
import leftColors from "../../../assets/img.header/leftColors .png";
import mail from "../../../assets/navIcon/mail.png";
import phone from "../../../assets/navIcon/phone.png";


function Footer() {
    // eslint-disable-next-line no-unused-vars
    const {auth} = useContext(AuthContext);

    return (
        <footer className="footer-container">



            <div className="footer">
                <TwoColumn>
                    <Column>

                            <ul className="footer-text__section-list">
                                <h3>navigatie</h3>

                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/webshop">Webshop</Link></li>
                                <li><Link to="/faq's">Faq's</Link></li>
                                <li><Link to="/webshop">Contact</Link></li>
                                <li><Link to="/faq's">Mijn Account</Link></li>

                                {auth ? <li><Link to="/inloggen">Uitloggen</Link></li> : <li><Link to="/inloggen">Inloggen</Link></li>}
                                {auth && <li><Link to="/profiel">Profiel</Link></li>}
                            </ul>

                    </Column>
                    <Column>

                        <div className= "footer-text-section__contact">
                            <h3>contact</h3>

                            <figure><img src={mail} alt="mail" className="mail"/></figure>
                            <h4><NavLink to="mail">srruffino@outlook.com</NavLink></h4>
                            <figure><img src={phone} alt="phone-icon" className="phone"/></figure>
                            <h4><NavLink to="phone">SR.Ruffino:(+31)620940691</NavLink></h4>
                            <figure><img src={phone} alt="phone" className="phone"/></figure>
                            <h4><NavLink to="phone">E.Jongh Visscher:(+31)648889093</NavLink></h4>
                        </div>



                        <div className="footer-color">
                            <figure><img src={rightColors} alt="right-colors" className="right"/></figure>
                            <figure><img src={leftColors} alt="left-colors" className="left"/></figure>
                        </div>


                        <p className="footer-text-section__newsletter">Wilt u onze nieuwsbrief ontvangen</p>
                        <button className="button">Inschrijven</button>


                    </Column>
                </TwoColumn>

            </div>

            <div className="skewer--footer-top"></div>

        </footer>
    );
}
export default Footer;
