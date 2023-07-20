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
                    <div onClick={() => setMenu(true)} className="header--openMenu">
                        <div className="header--openMenu__showMenu">
                            <div className="header--openMenu__showMenu--big"/>
                            <div className="header--openMenu__showMenu--let"/>
                            <div className="header--openMenu__showMenu--big"/>
                        </div>
                    </div>
                    <div style={{display: menu ? "block" : ""}} className="header--navAdap">
                        <div className="header--navAdap__block">
                            <GrClose onClick={() => setMenu(false)} className="header--navAdap__block--close"/>
                            <NavLink onClick={() => setMenu(false)} to="/buy">Buy</NavLink>
                            <NavLink onClick={() => setMenu(false)} to="/rent">Rent</NavLink>
                            <NavLink onClick={() => setMenu(false)} to="/agents">Agents</NavLink>
                            <NavLink onClick={() => setMenu(false)} to="/reciews">Reviews</NavLink>
                            <select>
                                <option value="en-US">🇺🇸&emsp;English</option>
                                <option value="ru-RU">🇷🇺&emsp;Russia</option>
                            </select>
                            <NavLink onClick={() => setMenu(false)} to="/login" className="header--navAdap__block--btn">login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;