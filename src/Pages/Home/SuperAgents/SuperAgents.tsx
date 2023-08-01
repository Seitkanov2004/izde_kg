import React from 'react';
import './SuperAgents.scss'
import AgentOwn from './../../../img/Rectangle 13.svg'
import AgentTwo from './../../../img/Rectangle 13 (1).svg'
import AgentThree from './../../../img/Rectangle 13 (2).svg'
import AgentFour from './../../../img/Rectangle 13 (3).svg'
import AgentFive from './../../../img/Rectangle 13 (4).svg'
import AgentSix from './../../../img/Rectangle 13 (5).svg'
import {RiMedalFill} from 'react-icons/ri'
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

const SuperAgents = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <div id='SuperAgents'>
            <div className="container">
                <div className="SuperAgents">
                    <div className="SuperAgents--text">
                        <h1>Meet our SuperAgents</h1>
                        <NavLink to="/agents" onClick={() => window.scroll(0,0)}>See more</NavLink>
                    </div>
                    <div className="SuperAgents--blocks">
                        <Slider {...settings}>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img className='agen' src={AgentOwn} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentTwo} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentThree} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentFour} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentFive} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentSix} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentSix} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentSix} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentSix} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentSix} alt="agent"/>
                            </div>
                            <div className="agent">
                                <div className="medalFill">
                                    <RiMedalFill className='medal'/>
                                </div>
                                <img src={AgentSix} alt="agent"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuperAgents;