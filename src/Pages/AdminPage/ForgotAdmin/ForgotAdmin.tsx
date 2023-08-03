import React from 'react';
import logoLogin from "../../../img/Logo.svg";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import {fetchUserData, selectIsAuth} from "../../../store/Reducers/ActionCreater/authSlice";
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {useForm} from "react-hook-form";
import {Navigate, NavLink} from "react-router-dom";
import "./ForgotAdmin.scss"
import {BsEyeFill, BsEyeSlashFill} from "react-icons/bs";

const ForgotAdmin = () => {

    const isAuth = useAppSelector(selectIsAuth)
    const dispatch = useAppDispatch()

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "@gmail.com",
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
            window.localStorage.setItem("token", data.payload.token)
        }
    }

    if (isAuth) {
        return <Navigate to="/"/>
    }

    return (
        <div id="forgotAdmin">
            <div className="container">
                <div className="forgotAdmin">
                    <div className="forgotAdmin--form">
                        <h3>FIND.KG <img src={logoLogin} alt=""/></h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Forgot password</h1>
                            <p>Enter your email for the verification process,
                                we will send code to your email</p>
                            <ul className={`${Boolean(errors.email?.message) ? "errorEmail" : ""}`}>
                                <input type="email" {...register("email", {required: "Укажите почту"})} name="email"
                                       placeholder="Email"/>
                                <h5>{errors.email?.message}</h5>
                            </ul>
                            <NavLink to="/admin" className="forgotAdmin--form__helper">Back to login</NavLink>
                            <button disabled={!isValid} type="submit"
                                    style={{background: !isValid ? "rgb(65,82,117)" : ""}}><NavLink to="/about-admin">Send</NavLink>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotAdmin;