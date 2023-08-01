import React from 'react';
import {NavLink} from "react-router-dom";
import {CiEdit} from "react-icons/ci";
import "./AboutUser.scss"
import home from "../../img/Rectangle 9.png";
import {LuBath} from "react-icons/lu";
import {BiBed, BiSelection} from "react-icons/bi";
const AboutUser = () => {
    return (
        <div id="aboutUser">
            <div className="container">
                <div className="aboutUser">
                    <div className="aboutUser--user">
                        <div className="aboutUser--user__name">
                            <NavLink to="/" >Change profile<CiEdit className="edit-icon"/></NavLink>
                            <h2>User Name</h2>
                            <div>
                                <span>City:</span>
                                <h4>Bishkek</h4>
                            </div>
                        </div>
                        <div className="aboutUser--user__haveDo">
                            <NavLink to="/ask-property">Add property</NavLink>
                            <NavLink to="/become-agent">Become agent</NavLink>
                        </div>
                    </div>

                    <div className="aboutUser--saved">
                        <h2 className="aboutUser--saved__title">Saved properties:</h2>
                        <div className="home">
                            <img src={home} alt="home"/>
                            <div className="homeText">
                                <h2>Apartment</h2>
                                <h1>The Grand Estate</h1>
                                <div className="conditions">
                                    <div className="condi">
                                        <LuBath className='conditionsIcon'/>
                                        <p>1 Bathroom</p>
                                    </div>
                                    <div className="condi">
                                        <BiSelection className='conditionsIcon'/>
                                        <p>Square: 120 m2</p>
                                    </div>
                                    <div className="condi">
                                        <BiBed className='conditionsIcon'/>
                                        <p>1 Bedroom</p>
                                    </div>
                                </div>
                                <div className="title">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUser;