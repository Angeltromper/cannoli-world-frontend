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

function Footer() {
    // eslint-disable-next-line no-unused-vars
    const {auth} = useContext(AuthContext);

    return (


            <footer className="footer">

                <div className="skewer--top"></div>

                <TwoColumn>
                    <Column>

                            <ul className="footer-text__section-list">
                                <h4>navigatie</h4>

                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/webshop">Webshop</Link></li>
                                <li><Link to="/faq's">Faq's</Link></li>
                                <li><Link to="/home">Allergens</Link></li>
                                <li><Link to="/webshop">Contact</Link></li>
                                <li><Link to="/faq's">Mijn Account</Link></li>

                                {auth ? <li><Link to="/inloggen">Uitloggen</Link></li> :
                                    <li><Link to="/inloggen">Inloggen</Link></li>}
                                {auth && <li><Link to="/profiel">Profiel</Link></li>}
                            </ul>

                    </Column>
                    <Column>
                    <aside className="footer-container">


                        <ol className= "footer-text-section__contact">
                            <h4>contact</h4>

                            <li><Link to="/"><figure><img src={mail} alt="mail-icon" className="mail-icon"/>srruffino@outlook.com</figure></Link></li>
                            <li><Link to="/"><figure><img src={phone} alt="phone-icon" className="phone-icon"/>SR.Ruffino:(+31)620940691</figure></Link></li>
                            <li><Link to="/"><figure><img src={phone} alt="phone-icon" className="phone-icon"/>E.Jongh Visscher:(+31)648889093</figure></Link></li>
                        </ol>

                        <div className="color-footer-container">
                            <figure><img src={rightColors} alt="right-colors" className="footer-right"/></figure>
                            <figure><img src={leftColors} alt="left-colors" className="footer-left"/></figure>
                        </div>



                        <p className="footer-text-section__newsletter">Wilt u onze nieuwsbrief ontvangen</p>
                        <button className="button">Inschrijven</button>
                    </aside>
                    </Column>
                </TwoColumn>


            </footer>


    );
}
export default Footer;
