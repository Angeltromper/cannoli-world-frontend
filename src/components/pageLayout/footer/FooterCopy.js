import React, {useContext} from 'react';
import {AuthContext} from "../../../context/AuthContext";
import {Link} from "react-router-dom";
import mail from "../../../assets/navIcon/mail.png";
import phone from "../../../assets/navIcon/phone.png";
import Column from "../designElement/column/Column";
import TwoColumn from "../designElement/column/TwoColumn";
import './Footer.css';
import rightColors from "../../../assets/img.header/rightColors.png";
import leftColors from "../../../assets/img.header/leftColors .png";
import Facebook from "../../../assets/mediaIcon/Facebook.png";
import Instagram from "../../../assets/mediaIcon/Instagram.png";

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

                            <li><Link to="/"><figure><img src={mail} alt="mail-icon" className="mail"/>srruffino@outlook.com</figure></Link></li>
                            <li><Link to="/"><figure><img src={phone} alt="phone-icon" className="phone"/>SR.Ruffino:(+31)620940691</figure></Link></li>
                            <li><Link to="/"><figure><img src={phone} alt="phone-icon" className="phone"/>E.Jongh Visscher:(+31)648889093</figure></Link></li>
                        </div>

                        <div className="color-container">
                            <figure><img src={rightColors} alt="right-colors" className="right"/></figure>
                            <figure><img src={leftColors} alt="left-colors" className="left"/></figure>
                        </div>


                        <div className="media-icon">
                            <ul>
                                <li><a href="https://www.facebook.com/cannoli-world"><img src={Facebook} alt="Facebook icon"/></a></li>
                                <li><a href="https://www.instagram.com/cannoli-world"><img src={Instagram} alt="Instagram icon"/></a></li>
                            </ul>
                        </div>


                        <p className="footer-text-section__newsletter">Wilt u onze nieuwsbrief ontvangen</p>
                        <button className="button">Inschrijven</button>
                        <div className="skewer--top"></div>
                    </Column>
                </TwoColumn>

            </div>
        </footer>
    );
}
export default Footer;
