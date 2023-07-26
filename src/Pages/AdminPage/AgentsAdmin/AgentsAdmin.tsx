import React, {useState} from 'react';
import {FiMoreHorizontal} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import "./AgentsAdmin.scss"
import {LuEdit} from "react-icons/lu";
import awaAdmin from "./../../../img/admin-ava.svg"

const AgentsAdmin = () => {

    const [openMore, setOpenMore] = useState(false)


    return (
        <div id="adminAgent">
            <FiMoreHorizontal onClick={() => setOpenMore(!openMore)} className="adminAgent--more"/>
            <div style={{display: openMore ? "block" : "none"}} className="adminAgent--moreBlock">
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>All</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Rating</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Agents</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Accepted</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Dicline</span></NavLink>
            </div>
            <div className="adminAgent">
                <div className="adminAgent--block">
                    <div className="adminAgent--block__user">
                        <img src={awaAdmin} alt=""/>
                        <h3>Eleanor Pane</h3>
                        <h4>Senior Property Advisor</h4>
                    </div>
                    <div className="adminAgent--block__data">
                        <h4>Sat 17 June </h4>
                        <h5>12:00 PM </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentsAdmin;