import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GoogleOAuthProvider} from "@react-oauth/google";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Buy from "./Pages/Buy/Buy";
import Rent from "./Pages/Rent/Rent";
import Register from "./Pages/Register/Register";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import LoginAdmin from "./Pages/AdminPage/LoginAdmin/LoginAdmin";
import ForgotAdmin from "./Pages/AdminPage/ForgotAdmin/ForgotAdmin";
import AboutUser from "./Pages/AboutUser/AboutUser";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore()
const clientId = "809510400798-udfdbo3fculoernhe06p3273l19m731d.apps.googleusercontent.com"


root.render(
    <BrowserRouter>
        <Provider store={store}>
            <GoogleOAuthProvider clientId={clientId}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path='/buy' element={<Buy/>}/>
                        <Route path='/rent' element={<Rent/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="/about-me" element={<AboutUser/>}/>
                    </Route>
                    <Route path={"/admin"} element={<LoginAdmin/>}/>
                    <Route path={"/forgot-admin-pass"} element={<ForgotAdmin/>}/>
                </Routes>
            </GoogleOAuthProvider>
        </Provider>
    </BrowserRouter>
)