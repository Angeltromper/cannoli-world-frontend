import React, {useEffect, useState} from 'react';
import {useAuth} from "../../../context/AuthContext";
import NavPageTitle from "../navPageTitle/NavPageTitle";
import NavBar from "../navBar/NavBar";
import NavBarItem from "../navBarItem/NavBarItem";
import MobileNavBar from "../mobileNavBar/MobileNavBar";
import login from "../../../assets/navIcon/login.png";
import favorite from "../../../assets/navIcon/favorite.png";
import shoppingBasket from "../../../assets/navIcon/shoppingBasket.png";
import register from "../../../assets/navIcon/register.png";
import signout from "../../../assets/navIcon/signOut.png";
import {AiOutlineMenu} from "react-icons/ai";


function NavBarResp() {
    const {user, logOut} = useAuth();
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    function menuopener() {
        setOpen(!open);
    }

    function logout() {
        logOut();
        setOpen(!open);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener( 'resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);

            }
        }, []);


    return (
        <div className="navigation">
            <div className="desktop-navigation">
                <NavBar/>
            </div>

            <div className="mobile-title-container">
                {!open && (<NavPageTitle/>)}
            </div>


            {(screenWidth > 992 || open) && (
            <div className="mobilelist">
                {!user && (
                    <>

                        <AiOutlineMenu
                            className="hamburger"
                            size="2.5rem"
                            color="white"
                            onClick={() => setOpen(!menuopener)}/>
                    </>
                )}
                {user && (
                    <>
                        <NavBarItem
                            icon={register}
                            title="Register"
                            to="/register"
                            onClick={menuopener}/>
                        <NavBarItem
                            icon={login}
                            title="Login"
                            to="/login"
                            onClick={menuopener}/>
                        <NavBarItem
                            icon={favorite}
                            title="Favorite"
                            to="/favorite"
                            onClick={menuopener}/>
                        <NavBarItem
                            icon={shoppingBasket}
                            title="ShoppingBasket"
                            to="/shoppingBasket"
                            onClick={menuopener}/>
                        <NavBarItem
                            icon={signout}
                            title="Logout"
                            to="/Login"
                            onClick={logout}/>

                    </>
                    )}
            </div>
            )}
            <MobileNavBar open={open}/>
        </div>
    );
}

export default NavBarResp;