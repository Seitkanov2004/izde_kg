import React, {FormEvent, useEffect, useState} from 'react';
import bg from "../../img/login-bg.png"
import "./Login.scss"
import logoLogin from './../../img/logo-login.svg'
import {NavLink} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {fetchUserData, getToken, selectIsAuth} from "../../store/Reducers/ActionCreater/authSlice";
import {useAppSelector} from "../../Hooks/useAppSelector";
import {Navigate} from "react-router-dom";
import {GoogleLogin} from "@react-oauth/google";
import { useGoogleLogin } from '@react-oauth/google';
import {BsEyeFill, BsEyeSlashFill} from "react-icons/bs";

//809510400798-udfdbo3fculoernhe06p3273l19m731d.apps.googleusercontent.com
//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
//AIzaSyDUdnz6HqFEMGFL4vOcsnOsfQHof1SyDEo

const Login = () => {

    const isAuth = useAppSelector(selectIsAuth)
    const dispatch = useAppDispatch()
    const [eye, setEye] = useState(false)

    console.log("isAuth", isAuth)

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onChange"
    })


    const onSubmit = async (value: any) => {
        const data = await dispatch(fetchUserData(value))
        console.log(value)
        console.log(data)
        if (!data.payload) {
            return alert("не удалось авторизоваться")
        }
        if ("token" in data.payload) {
            // window.localStorage.setItem("token", data.payload.token)
            dispatch(getToken(data.payload.token))
        }
    }

    if (isAuth) {
        return <Navigate to="/"/>
    }


    const clientId = "809510400798-udfdbo3fculoernhe06p3273l19m731d.apps.googleusercontent.com"


    return (
        <div id="login">
            <div className="container">
                <div className="login">
                    <h1 className="login-title"><img src={logoLogin} alt="img"/><span>WELCOME TO IZDE.KG</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="login--form">
                        <ul className={`${Boolean(errors.email?.message) ? "errorEmail" : ""}`}>
                            <input type="email" {...register("email", {required: "Укажите почту"})} name="email"
                                   placeholder="Email"/>
                            <h5>{errors.email?.message}</h5>
                        </ul>
                        <ul className={`${Boolean(errors.password?.message) ? "errorPassword" : ""}`}>
                            <div>
                                {
                                    eye ? <BsEyeSlashFill onClick={() => setEye(false)}/> : <BsEyeFill onClick={() => setEye(true)}/>
                                }
                            </div>
                            <input type={eye ? "text" : "password"} {...register("password", {required: "Укажите пароль"})} name="password"
                                   placeholder="Password"/>
                            <h5>{errors.password?.message}</h5>
                        </ul>
                        <p>We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
                        <NavLink to="/forgot-password" onClick={() => window.scroll(0,0)} className="login--form__helper">Forgot your password?</NavLink>
                        <NavLink to="/register" onClick={() => window.scroll(0,0)} className="login--form__helper">Don’t have an account?
                            Register</NavLink>
                        <button disabled={!isValid} type="submit"
                                style={{background: !isValid ? "rgb(65,82,117)" : ""}}>Continue
                        </button>

                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;