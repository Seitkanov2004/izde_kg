import React from 'react';
// @ts-ignore
import logo from "../../img/Logo.svg"
import {NavLink} from "react-router-dom";
import "./Header.scss"

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <NavLink to="/login" className="header--logo"><span>find.kg</span><img src={logo} alt=""/></NavLink>
                    <div className="header--nav">
                        <NavLink to="/buy">Buy</NavLink>
                        <NavLink to="/rent">Rent</NavLink>
                        <NavLink to="/agents">Agents</NavLink>
                        <NavLink to="/reciews">Reviews</NavLink>
                    </div>
                    <div className="header--lan">
                        <select>
                            <option value="en-US">🇺🇸&emsp;English</option>
                            <option value="ru-RU">🇷🇺&emsp;Russia</option>
                        </select>
                        <button>login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;