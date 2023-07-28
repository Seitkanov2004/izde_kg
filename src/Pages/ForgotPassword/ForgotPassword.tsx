import React from 'react';
import logoLogin from "../../img/logo-login.svg";
import {Navigate, NavLink} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {useAppSelector} from "../../Hooks/useAppSelector";
import {fetchUserData, selectIsAuth} from "../../store/Reducers/ActionCreater/authSlice";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {useForm} from "react-hook-form";
import "./ForgotPassword.scss"

const ForgotPassword = () => {

    const isAuth = useAppSelector(selectIsAuth)
    const dispatch = useAppDispatch()

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "@gmail.com",
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
        <div id="forgot">
            <div className="container">
                <div className="forgot">
                    <h1 className="forgot--title"><img src={logoLogin} alt="img"/><span>WELCOME TO IZDE.KG</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="forgot--form">
                        <ul className={`${Boolean(errors.email?.message) ? "errorInput": ""}`}>
                            <input type="email" {...register("email", {required: "Укажите почту"})} name="email"
                                   placeholder="Email" />
                            <h5>{errors.email?.message}</h5>
                        </ul>
                        <button disabled={!isValid} type="submit" style={{background: !isValid ? "rgb(65,82,117)" : "" }}><NavLink to="/about-me">Send</NavLink></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;