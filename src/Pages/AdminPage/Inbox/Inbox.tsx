import React, {useState} from 'react';
import "./Inbox.scss"
import {FiMoreHorizontal} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import {LuEdit} from "react-icons/lu";

const Inbox = () => {

    const [openMore, setOpenMore] = useState(false)

    return (
        <div id="inbox">
            <FiMoreHorizontal onClick={() => setOpenMore(!openMore)} className="inbox--more"/>
            <div style={{display: openMore ? "block" : "none"}} className="inbox--moreBlock">
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>All</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Published</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Accepted</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Dicline</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Read</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Unread</span></NavLink>
            </div>
            <div className="inbox">
                <div className="inbox__block">
                    <div className="inbox__block--name">
                        <h3>Eleanor Pane</h3>
                        <h4>It’s an awesome home with a great view to...</h4>
                    </div>
                    <div className="inbox__block--data">
                        <h4>Sat 17 June </h4>
                        <h5>12:00 PM </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inbox;