import React, {useState} from 'react';
import logoLogin from "../../../img/Logo.svg";
import {BsEyeFill, BsEyeSlashFill} from "react-icons/bs";
import {Navigate, NavLink} from "react-router-dom";
import {GoogleLogin} from "@react-oauth/google";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import {fetchUserData, getToken, selectIsAuth} from "../../../store/Reducers/ActionCreater/authSlice";
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {useForm} from "react-hook-form";
import "./LoginAdmin.scss"

const LoginAdmin = () => {

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
    return (
        <div id="loginAdmin">
            <div className="container">
                <div className="loginAdmin">
                    <div className="loginAdmin--form">
                        <h3>FIND.KG <img src={logoLogin} alt=""/></h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Log in</h1>
                            <ul className={`${Boolean(errors.email?.message) ? "errorEmail" : ""}`}>
                                <input type="email" {...register("email", {required: "Укажите почту"})} name="email"
                                       placeholder="Email"/>
                                <h5>{errors.email?.message}</h5>
                            </ul>
                            <ul className={`${Boolean(errors.password?.message) ? "errorPassword" : ""}`}>
                                <div>
                                    {
                                        eye ? <BsEyeSlashFill onClick={() => setEye(false)}/> :
                                            <BsEyeFill onClick={() => setEye(true)}/>
                                    }
                                </div>
                                <input
                                    type={eye ? "text" : "password"} {...register("password", {required: "Укажите пароль"})}
                                    name="password"
                                    placeholder="Password"/>
                                <h5>{errors.password?.message}</h5>
                            </ul>
                            <NavLink to="/forgot-admin-pass" className="loginAdmin--form__helper">Forgot your password?</NavLink>
                            <button disabled={!isValid} type="submit"
                                    style={{background: !isValid ? "rgb(65,82,117)" : ""}}>Log in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAdmin;