import React, { useState } from 'react';
import './SignInButton.css';


function SignInButton() {

    const [validName, setValidName] = useState (false);
    const [validPassword, setValidPassword] = useState (false);

    return (

        <button className="signin-button"
                type="submit">

            Inloggen

        </button>
    )
}

export default SignInButton
