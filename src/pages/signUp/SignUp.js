import React, {useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import pageImg from '../../assets/img.background/background registration.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import './SignUp.css';


const userRegex = /^[A-z][A-z0-9-_]{4,12}$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,24}$/;
const emailRegex =/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function SignUp({headerImageHandler, pageTitleHandler}) {
    const navigate = useNavigate();
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState ('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState ('');
    const [validEmail, setValidEmail] = useState (false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState ('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState ('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState ('');
    const [succes, setSuccess] = useState (false);


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler('Registreren');
    }, [headerImageHandler, pageTitleHandler]);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect (() => {
        setValidName(userRegex.test(user));
    }, [user]);

    useEffect (() => {
        setValidPassword(passwordRegex.test(password));
        setValidMatch (password === matchPassword);
    }, [password, matchPassword]);

    useEffect (() => {
        setValidEmail(emailRegex.test(email));
    }, [email]);

    useEffect (() => {
        setErrorMessage ('');
    }, [user, password, matchPassword, email]);

    const handleSubmit = async (e) => {
        e.preventDefault ();

        const v1 = userRegex.test (user);
        const v2 = passwordRegex.test (password);
        if (!v1 || !v2) {
            setErrorMessage ('Ongeldige invoer');
            return;
        }

        try {
            await axios.post ("http://localhost:8080/users/createUser",
                {
                    username: user,
                    password: password,
                    email: email,
                });
            setSuccess (true);

            setTimeout (() => {

                navigate('/inloggen');

            }, 2500);

        } catch (error) {
            if(!error?.response) {
                setErrorMessage ('Geen server response');
            } else if (error.response?.status === 409) {
                setErrorMessage('Registratie is mislukt.. Gebruikersnaam en/of emal is al in gebruik!')
            }
            errorRef.current.focus();
        }
    }

    return (
        <>
            {succes ? (
                <section className="timeout-succes succes-slide-down">
                    <div>
                        <h1>Gelukt! <FontAwesomeIcon icon={ faCheck } className="valid-check"/></h1>
                        <h3>U heeft succesvol een account aangemaakt<br/> en wordt doorgestuurd naar de inlog pagina..</h3>
                        <h5>Mocht u niet automatisch worden doorgestuurd<br/>
                            <NavLink to="/login" exact activeClassName="active-link">klik dan hier!</NavLink>
                        </h5>
                    </div>
                </section>

            ) : (

                 <section className="register flip-2-hor-top-1">
                     <p ref={ errorRef } className={ errorMessage ? 'error-message' : 'offscreen' } aria-live="assertive">
                        { errorMessage }</p>
                    <h2>Registreren</h2>
                     <form className="form-register"
                           onSubmit={ handleSubmit }>

                         <label htmlFor="user">
                             Gebruikersnaam:
                             <FontAwesomeIcon icon={ faCheck } className={ validName ? "valid" : "hide" }/>
                             <FontAwesomeIcon icon={ faTimes } className={ validName || !user ? "hide" : "invalid" }/>
                         </label>

                         <input
                             type="text"
                             className="user"
                             id="user"
                             ref={ userRef }
                             autoComplete="off"
                             onChange={ (e) => setUser(e.target.value) }
                             value={user}
                             required
                             aria-invalid={ validName ? "false" : "true" }
                             aria-describedby="usernamenote"
                             onFocus={() => setUserFocus (true)}
                             onBlur={() => setUserFocus (false)}
                         />

                         <p id="uidnote" className={ userFocus && !validName ? "instructions" : "offscreen" }>
                             <FontAwesomeIcon icon={ faInfoCircle }/>
                             <em>4 tot 12 karakters. <br/>
                                 Moet met een letter beginnen.<br/>
                                 Letters, cijfers, underscore, middenstreep zijn toegestaan.</em>
                             <br/>
                         </p>


                         <label htmlFor="email">
                             E-mail:
                             <FontAwesomeIcon icon={ faCheck } className={ validEmail ? "valid" : "hide" }/>
                             <FontAwesomeIcon icon={ faTimes } className={ validEmail || !email ? "hide" : "invalid" }/>
                         </label>

                         <input
                             type="e-mail"
                             className="email"
                             id="email"
                             onChange={ (e) => setEmail(e.target.value) }
                             value={ email }
                             required
                             aria-invalid={ validEmail ? "false" : "true" }
                             aria-describedby="emailnote"
                             onFocus={ () => setEmailFocus (true) }
                             onBlur={ () => setEmailFocus (false) }
                         />

                         <p id="emailnote"
                            className={ emailFocus && !validEmail ? "instructions" : "offscreen" }>
                             <FontAwesomeIcon icon={ faInfoCircle }/>
                             <em>Dit veld mag niet leeg zijn!</em>
                         </p>


                         <label htmlFor="password">
                             Wachtwoord:
                             <FontAwesomeIcon icon={ faCheck } className={ validPassword ? "valid" : "hide" }/>
                             <FontAwesomeIcon icon={ faTimes } className={ validPassword || !password ? "hide" : "invalid" }/>
                         </label>

                         <input
                             type="password-user"
                             className="password"
                             id="password"
                             onChange={ (e) => setPassword(e.target.value) }
                             value={ password }
                             required
                             aria-invalid={ validPassword ? "false" : "true" }
                             aria-describedby="password-note"
                             onFocus={ () => setPasswordFocus (true) }
                             onBlur={ () => setPasswordFocus (false) }
                         />

                         <p id="password-note"
                            className={ passwordFocus && !validPassword ? "instructions" : "offscreen" }>
                             <FontAwesomeIcon icon={ faInfoCircle }/>
                             <em>8 tot 24 karakters.<br/>
                                 Moet een hoofd en klein letter, cijfer plus een speciaal teken bevatten.<br/>
                                 De toegestane speciale tekens zijn: <span aria-label="exclamation mark">!</span>
                                 <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>
                                 <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span></em>
                         </p>

                         <label htmlFor="confirm">
                             Herhaal wachtwoord:
                             <FontAwesomeIcon icon={ faCheck } className={ validMatch ? "valid" : "hide" }/>
                             <FontAwesomeIcon icon={ faTimes } className={ validMatch || !matchPassword ? "hide" : "invalid" }/>
                         </label>

                         <input
                             type="confirm-password"
                             className="confirm"
                             id="confirm"
                             onChange={ (e) => setMatchPassword(e.target.value) }
                             value={ matchPassword }
                             required
                             aria-invalid={ setValidEmail ? "false" : "true" }
                             aria-describedby="confirm-note"
                             onFocus={ () => setMatchFocus (true) }
                             onBlur={ () => setMatchFocus (false) }
                         />

                         <p id="confirmnote" className={ matchFocus && !validMatch ? "instructions" : "offscreen" }>
                             <FontAwesomeIcon icon={ faInfoCircle }/>
                             <em>Wachtwoorden moeten overeenkomen.</em>
                         </p>


                         <button
                             type="submit"
                             className="button-register"
                             disabled={ !validName || !validPassword || !validMatch || !validEmail }>Registreren
                         </button>
                     </form>

                     <div className="akkoord-registratie">
                         <h4>Door te registreren ga ik akkoord met de algemene voorwaarden <br/>
                             en het privacybeleid</h4>
                     </div>

                     <div className="form-footer">
                         Heeft u al een account?<br/>

                         <span className="inline">
                             <NavLink to="/login" exact activeClassName="active-link">Inloggen</NavLink>
                         </span>
                     </div>
                 </section>
            )}
        </>
    );
}

export default SignUp;


