import React from 'react';
import NavRegister from "../../components/pageLayout/navRegister/NavRegister";
import RegisterForm from "../../components/pageLayout/registerForm/RegisterForm";
import Footer from "../../components/pageLayout/footer/Footer";

function Register() {
    return (
        <>
            <NavRegister/>

            <section className="register-container">
                <div className="columns">

                    <RegisterForm/>

                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Register;
