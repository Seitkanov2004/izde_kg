import React, {useState} from 'react';
import {FiMoreHorizontal} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import {LuEdit} from "react-icons/lu";
import "./Realty.scss"

const Realty = () => {

    const [openMore, setOpenMore] = useState(false)

    return (
        <div id="realty">
            <FiMoreHorizontal onClick={() => setOpenMore(!openMore)} className="realty--more"/>
            <div style={{display: openMore ? "block" : "none"}} className="realty--moreBlock">
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>All</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Accepted</span></NavLink>
                <NavLink to="/about-admin" onClick={() => setOpenMore(false)}><LuEdit/><span>Dicline</span></NavLink>
            </div>
            <div className="realty">
                <div className="realty__block">
                    <div className="realty__block--name">
                        <h3>Eleanor Pane</h3>
                        <h4>It’s an awesome home with a great view to...</h4>
                    </div>
                    <div className="realty__block--data">
                        <h4>Sat 17 June </h4>
                        <h5>12:00 PM </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Realty;