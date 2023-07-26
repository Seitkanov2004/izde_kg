import React, {useState} from 'react';
import logo from "../../img/Logo.svg"
import {NavLink} from "react-router-dom";
import "./Header.scss"
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {logout, selectIsAuth} from "../../store/Reducers/ActionCreater/authSlice";
import {GrClose} from "react-icons/gr";
import {useAppSelector} from "../../Hooks/useAppSelector";

const Header = () => {

    const isAuth = useAppSelector(selectIsAuth)

    console.log(isAuth)
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
                        <NavLink to="/buy" onClick={() => window.scroll(0, 0)}>Buy</NavLink>
                        <NavLink to="/rent" onClick={() => window.scroll(0, 0)}>Rent</NavLink>
                        <NavLink to="/agents" onClick={() => window.scroll(0, 0)}>Agents</NavLink>
                        <NavLink to="/reviews" onClick={() => window.scroll(0, 0)}>Reviews</NavLink>
                    </nav>
                    <div className="header--lan">
                        <select>
                            <option value="en-US">🇺🇸&emsp;English</option>
                            <option value="ru-RU">🇷🇺&emsp;Russia</option>
                        </select>
                        {
                            isAuth ?
                                <NavLink to="/" onClick={ClickLogOut} className="header--lan__btnOut">Logout</NavLink> :
                                <NavLink to="/login" onClick={() => window.scroll(0,0)} className="header--lan__btn">login</NavLink>
                        }
                    </div>
                    <div onClick={() => setMenu(true)} className="header--openMenu">
                        <div className="header--openMenu__showMenu">
                            <div className="header--openMenu__showMenu--big"/>
                            <div className="header--openMenu__showMenu--let"/>
                            <div className="header--openMenu__showMenu--big"/>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setMenu(false) } className={menu ? "header--navOpen" : "header--navClose"}>
                <div className={`header--${menu ? "navOpen" : "navClose"}__block`}>
                    <GrClose onClick={() => {
                        window.scroll(0, 0)
                        setMenu(false)
                    }} className={`header--${menu ? "navOpen" : "navClose"}__block--close`}/>
                    <NavLink onClick={() => {
                        window.scroll(0, 0)
                        setMenu(false)
                    }} to="/buy">Buy</NavLink>
                    <NavLink onClick={() => {
                        window.scroll(0, 0)
                        setMenu(false)
                    }} to="/rent">Rent</NavLink>
                    <NavLink onClick={() => {
                        window.scroll(0, 0)
                        setMenu(false)
                    }} to="/agents">Agents</NavLink>
                    <NavLink onClick={() => {
                        window.scroll(0, 0)
                        setMenu(false)
                    }} to="/reciews">Reviews</NavLink>
                    <select>
                        <option value="en-US">🇺🇸&emsp;English</option>
                        <option value="ru-RU">🇷🇺&emsp;Russia</option>
                    </select>
                    <NavLink onClick={() => {
                        window.scroll(0, 0)
                        setMenu(false)
                    }} to="/login"
                             className={`header--${menu ? "navOpen" : "navClose"}__block--btn`}>login</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;