import React, {useState} from 'react';
import logo from "../../img/Logo.svg"
import {NavLink} from "react-router-dom";
import "./Header.scss"
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {logout} from "../../store/Reducers/ActionCreater/authSlice";
import {GrClose} from "react-icons/gr";

const Header = () => {

    const [menu, setMenu] = useState(false)
    const dispatch = useAppDispatch()
    const ClickLogOut = () => {
        if (window.confirm("are you sure")) {
            dispatch(logout())
        }
    }

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <NavLink to="/" className="header--logo"><span>find.kg</span><img src={logo} alt=""/></NavLink>
                    <nav className="header--nav">
                        <NavLink to="/buy" onClick={() => window.scroll(0,0)}>Buy</NavLink>
                        <NavLink to="/rent" onClick={() => window.scroll(0,0)}>Rent</NavLink>
                        <NavLink to="/agents" onClick={() => window.scroll(0,0)}>Agents</NavLink>
                        <NavLink to="/reciews" onClick={() => window.scroll(0,0)}>Reviews</NavLink>
                    </nav>
                    <div className="header--lan">
                        <select>
                            <option value="en-US">🇺🇸&emsp;English</option>
                            <option value="ru-RU">🇷🇺&emsp;Russia</option>
                        </select>
                        <NavLink to="/login" className="header--lan__btn">login</NavLink>
                    </div>
                    <div onClick={() => setMenu(true)} className="header--openMenu">
                        <div className="header--openMenu__showMenu">
                            <div className="header--openMenu__showMenu--big"/>
                            <div className="header--openMenu__showMenu--let"/>
                            <div className="header--openMenu__showMenu--big"/>
                        </div>
                    </div>
                    <div style={{display: menu ? "block" : ""}} className="header--navAdap">
                        <div className="header--navAdap__block">
                            <GrClose onClick={() => {
                                window.scroll(0,0)
                                setMenu(false)
                            }} className="header--navAdap__block--close"/>
                            <NavLink onClick={() => {
                                window.scroll(0,0)
                                setMenu(false)
                            }} to="/buy">Buy</NavLink>
                            <NavLink onClick={() => {
                                window.scroll(0,0)
                                setMenu(false)
                            }} to="/rent">Rent</NavLink>
                            <NavLink onClick={() => {
                                window.scroll(0,0)
                                setMenu(false)
                            }} to="/agents">Agents</NavLink>
                            <NavLink onClick={() => {
                                window.scroll(0,0)
                                setMenu(false)
                            }} to="/reciews">Reviews</NavLink>
                            <select>
                                <option value="en-US">🇺🇸&emsp;English</option>
                                <option value="ru-RU">🇷🇺&emsp;Russia</option>
                            </select>
                            <NavLink onClick={() => {
                                window.scroll(0,0)
                                setMenu(false)
                            }} to="/login" className="header--navAdap__block--btn">login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;