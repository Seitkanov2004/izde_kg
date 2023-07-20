import React, {FormEvent, useState} from 'react';
import bg from "../../img/login-bg.png"
import "./Login.scss"
import logoLogin from './../../img/logo-login.svg'
import {NavLink} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {fetchUserData, selectIsAuth} from "../../store/Reducers/ActionCreater/authSlice";
import {useAppSelector} from "../../Hooks/useAppSelector";
import {Navigate} from "react-router-dom";

const Login = () => {

    const isAuth = useAppSelector(selectIsAuth)
    const dispatch = useAppDispatch()

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "text@gmail.com",
            password: "1234578"
        },
        mode: "onChange"
    })

    const onSubmit =  async (value: any) => {
        const data = await dispatch(fetchUserData(value))
        console.log(value)
        console.log(data)
        if(!data.payload){
            return alert("не удалось авторизоваться")
        }
        if("token" in data.payload){
            window.localStorage.setItem("token", data.payload.token)
        }
    }

    if(isAuth){
        return <Navigate to="/"/>
    }


    return (
        <div id="login">
            <div className="container">
                <div className="login">
                    <h1 className="login-title"><img src={logoLogin} alt="img"/><span>WELCOME TO IZDE.KG</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="login--form">
                        <ul className={`${Boolean(errors.email?.message) ? "errorInput": ""}`}>
                            <input type="email" {...register("email", {required: "Укажите почту"})} name="email"
                                   placeholder="Email" />
                            <h5>{errors.email?.message}</h5>
                        </ul>
                        <ul className={`${Boolean(errors.email?.message) ? "errorInput": ""}`}>
                            <input type="text" {...register("password", {required: "Укажите пароль"})} name="password"
                                   placeholder="Password" />
                            <h5>{errors.password?.message}</h5>
                        </ul>
                        <p>We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
                        <NavLink to="/forgot-password" className="login--form__helper">Forgot your password?</NavLink>
                        <NavLink to="/register" className="login--form__helper">Don’t have an account?
                            Register</NavLink>
                        <button type="submit">Continue</button>
                        <NavLink to="/with-google" className="login--form__withGoogle"><FcGoogle
                            className="login--form__withGoogle--icon"/><span>Continue with Google</span></NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;