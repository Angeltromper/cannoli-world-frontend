import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import isTokenValid from "../helpers/isTokenValid";
import jwtDecode from "jwt-decode";
import axios from "axios";
export const AuthContext = createContext(null);


function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState ({
        isAuth: false,
        user: null,
        status:'pending',
    });

    let navigate = useNavigate();

    // is er een token? En zo ja, is deze nog geldig?
    useEffect (() => {
        const token = localStorage.getItem ('token');

        if (token && isTokenValid (token)) {
            const decodedToken = jwtDecode (token);
            getData (decodedToken.sub, token);
        } else {
            // als er geen token is doen we niks en zetten we de status op 'done'
            toggleIsAuth ( {
                isAuth: false,
                user: null,
                status: 'done',
            } );
        }
    }, []);

    function login(token) {
        const decodedToken = jwtDecode (token);
        localStorage.setItem ('token', token);
        getData (decodedToken.sub, token, "/profiel").then ();
    }

    function logout(e) {
        localStorage.clear ('De gebruiker is uitgelogd!');
        e.preventDefault ();
        toggleIsAuth ({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate('/');
    }

    async function getData(id, token, redirectUrl) {
        try {
            const response = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: response.data.username,
                },
                status: 'done',
            });
            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (error) {
            console.error('There was an error!', error);
            localStorage.clear();
        }
    }


    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Ogenblik geduld alstublieft...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
















