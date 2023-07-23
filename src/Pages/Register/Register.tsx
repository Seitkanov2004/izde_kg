import React from 'react';
import logoLogin from "../../img/logo-login.svg";
import {Navigate, NavLink} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {useAppSelector} from "../../Hooks/useAppSelector";
import {fetchUserData, fetchUserRegister, selectIsAuth} from "../../store/Reducers/ActionCreater/authSlice";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {useForm} from "react-hook-form";
import "./Register.scss"

const Register = () => {


    const isAuth = useAppSelector(selectIsAuth)
    const dispatch = useAppDispatch()

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        mode: "onChange"
    })

    const onSubmit =  async (value: any) => {
        const data = await dispatch(fetchUserRegister(value))
        console.log(value)
        console.log(data)
        if(!data.payload){
            return alert("не удалось register")
        }
        if("token" in data.payload){
            window.localStorage.setItem("token", data.payload.token)
        }
    }

    if(isAuth){
        return <Navigate to="/"/>
    }

    return (
        <div id="register">
            <div className="container">
                <div className="register">
                    <h1 className="register--title"><img src={logoLogin} alt="img"/><span>WELCOME TO IZDE.KG</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="register--form">
                        <ul className={`${Boolean(errors.fullName?.message) ? "errorInput": ""}`}>
                            <input type="text" {...register("fullName", {required: "Укажите почту"})} name="fullName"
                                   placeholder="Full Name" />
                            <h5>{errors.fullName?.message}</h5>
                        </ul>
                        <ul className={`${Boolean(errors.email?.message) ? "errorInput": ""}`}>
                            <input type="email" {...register("email", {required: "Укажите почту"})} name="email"
                                   placeholder="Email" />
                            <h5>{errors.email?.message}</h5>
                        </ul>
                        <ul className={`${Boolean(errors.password?.message) ? "errorInput": ""}`}>
                            <input type="text" {...register("password", {required: "Укажите пароль"})} name="password"
                                   placeholder="Password" />
                            <h5>{errors.password?.message}</h5>
                        </ul>
                        <ul className={`${Boolean(errors.confirm_password?.message) ? "errorInput": ""}`}>
                            <input type="text" {...register("confirm_password", {required: "Укажите пароль"})} name="confirm_password"
                                   placeholder="Confirm password" />
                            <h5>{errors.confirm_password?.message}</h5>
                        </ul>
                        <button disabled={!isValid} type="submit" style={{background: !isValid ? "rgb(65,82,117)" : "" }}>Continue</button>
                        <NavLink to="/with-google" className="register--form__withGoogle"><FcGoogle
                            className="login--form__withGoogle--icon"/><span>Continue with Google</span></NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;