import React from 'react';
import bg from "../../img/login-bg.png"
import "./Login.scss"
import logoLogin from './../../img/logo-login.svg'
import {NavLink} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

const Login = () => {
    return (
        <div id="login">
            <div className="container">
                <div className="login">
                    <h1 className="login-title"><img src={logoLogin} alt="img"/><span>WELCOME TO IZDE.KG</span></h1>
                    <form className="login--form">
                        <input type="text" name="name" placeholder="Email"/>
                        <input type="text" name="password" placeholder="Password"/>
                        <p>We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
                        <NavLink to="/forgot-password" className="login--form__helper">Forgot your password?</NavLink>
                        <NavLink to="/register" className="login--form__helper">Don’t have an account? Register</NavLink>
                        <button type="submit">Continue</button>
                        <NavLink to="/with-google" className="login--form__withGoogle"><FcGoogle className="login--form__withGoogle--icon"/><span>Continue with Google</span></NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;