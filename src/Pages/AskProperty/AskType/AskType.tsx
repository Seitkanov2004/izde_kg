import React from 'react';
import "./AskType.scss"
import {NavLink} from "react-router-dom";

const AskType = () => {
    return (
        <div id="askType">
            <div className="container">
                <div className="askType">
                    <div className="askType--type">
                        <label className="firstLabel">
                            <span>Select a category</span>
                            <div>
                                <input type="button" value="Sale"/>
                                <input type="button" value="Rent"/>
                            </div>
                        </label>
                        <label>
                            <span>Your property type</span>
                            <div>
                                <input type="button" value="Apartment"/>
                                <input type="button" value="Townhouse"/>
                                <input type="button" value="Penthouse"/>
                                <input type="button" value="Office"/>
                            </div>
                        </label>
                    </div>
                    <NavLink to="/add-property">Continue</NavLink>
                </div>
            </div>
        </div>
    );
};

export default AskType;