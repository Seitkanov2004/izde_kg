import React from 'react';
import logo from "./../../../img/Logo.svg"
import "./NavButton.scss"
import admin from "./../../../img/admin.svg"
import {NavLink} from "react-router-dom";
import {LuMessageSquare, LuSettings} from "react-icons/lu";
import {FiUser} from "react-icons/fi";
import {GiBank} from "react-icons/gi";
import {BsCurrencyDollar} from "react-icons/bs";
import {TbArrowBackUp} from "react-icons/tb";

const NavButton = () => {
    return (
        <div id="navButton">
             <h2>find.kg <img src={logo} alt=""/></h2>
            <div className="navButton--nav">
                <div className="navButton--nav__user">
                    <img src={admin} alt="img"/>
                    <div className="navButton--nav__user--name">
                        <h4>Leslie</h4>
                        <h5>Admin</h5>
                    </div>
                </div>
                <NavLink to="/about-admin"><LuMessageSquare/><span>Inbox</span></NavLink>
                <NavLink to="/about-admin/agents"><FiUser/><span>Agents</span></NavLink>
                <NavLink to="/about-admin/realty"><GiBank/><span>Realty</span></NavLink>
                <NavLink to="/about-admin/payment"><BsCurrencyDollar/><span>Payment</span></NavLink>
            </div>
            <div className="navButton--setting">
                <NavLink to="/about-admin/settings"><LuSettings/><span>Settings</span></NavLink>
                <NavLink to="/" className="navButton--setting__logout"><TbArrowBackUp/><span>Logout</span></NavLink>
            </div>
        </div>
    );
};

export default NavButton;