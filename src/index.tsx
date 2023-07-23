import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GoogleOAuthProvider} from "@react-oauth/google";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore()
const clientId = "809510400798-udfdbo3fculoernhe06p3273l19m731d.apps.googleusercontent.com"


root.render(
    <BrowserRouter>
        <Provider store={store}>
            <GoogleOAuthProvider clientId={clientId}>
            <App />
            </GoogleOAuthProvider>
        </Provider>
    </BrowserRouter>
)