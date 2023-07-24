import React from 'react';
import NavButton from "./NavButton/NavButton";
import "./AdminPage.scss"
import {LuSearch} from "react-icons/lu";
import {Outlet} from "react-router-dom";

const AdminPage = () => {
    return (
        <div id="adminPage">
            <div className="adminPage--navBg"/>
            <div className="container">
                <div className="adminPage">
                    <NavButton/>
                    <div className="adminPage--helper">
                        <div className="adminPage--helper--menu">
                            <div className="adminPage--helper--menu__search">
                                <LuSearch className="adminPage--helper--menu__search--icon" />
                                <input type="text" placeholder="Search"/>
                            </div>
                            <div className="adminPage--helper--menu__lan">
                                <select>
                                    <option value="en-US">🇺🇸&emsp;English</option>
                                    <option value="ru-RU">🇷🇺&emsp;Russia</option>
                                </select>
                            </div>
                        </div>
                        <Outlet/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminPage;