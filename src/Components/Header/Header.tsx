import React from 'react';
// @ts-ignore
import logo from "../../img/Logo.svg"
import {NavLink} from "react-router-dom";
import "./Header.scss"

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <NavLink to="/" className="header--logo"><span>find.kg</span><img src={logo} alt=""/></NavLink>
                    <nav className="header--nav">
                        <NavLink to="/buy">Buy</NavLink>
                        <NavLink to="/rent">Rent</NavLink>
                        <NavLink to="/agents">Agents</NavLink>
                        <NavLink to="/reciews">Reviews</NavLink>
                    </nav>
                    <div className="header--lan">
                        <select>
                            <option value="en-US">🇺🇸&emsp;English</option>
                            <option value="ru-RU">🇷🇺&emsp;Russia</option>
                        </select>
                        <NavLink to="/login" className="header--lan__btn">login</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;