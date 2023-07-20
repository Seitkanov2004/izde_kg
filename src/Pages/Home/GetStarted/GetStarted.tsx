import React from 'react';
import './GetStarted.scss'
import {NavLink} from "react-router-dom";

const GetStarted = () => {
    return (
        <div id='GetStarted'>
            <div className="container">
                <div className="GetStarted">
                    <div className="GetStarted--addProperty">
                        <h1>List your property with us</h1>
                        <p>Grow your business with property finder</p>
                        <NavLink to="/login" onClick={() => window.scroll(0,0)}>Get Started</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;