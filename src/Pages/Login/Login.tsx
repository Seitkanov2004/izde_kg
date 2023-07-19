import React from 'react';
import bg from "../../img/login-bg.png"
import "./Login.scss"
import logoLogin from './../../img/logo-login.svg'

const Login = () => {
    return (
        <div id="login">
            <div className="container">
                <div className="login">
                    <h1 className="login-title"><img src={logoLogin} alt="img"/>&emsp;<span>WELCOME TO IZDE.KG</span></h1>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;