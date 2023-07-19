import React from 'react';
import "./HomeSearch.scss";
import {RiMedalFill} from 'react-icons/ri'
import {RiCheckboxCircleFill} from 'react-icons/ri'
// import cardOne from './../../../img/Rectangle 3.png'

const HomeSearch = () => {
    return (
        <div id="homeSearch">
            <div className="container">
                <div className="homeSearch">
                    <h1 className='text'>Easy Home Search</h1>
                    <p className='title'>We can help you to find your dream home</p>
                    <div className="homeSearch--cards">
                        <div className="card">
                            <div className="SuperAgents">
                                <RiMedalFill/>
                                <p className='super'>SUPERAGENTS</p>
                            </div>
                            <h1>Find your SuperAgent</h1>
                            <p>The most responsive agents with up-to-date and improved accuracy on the properties you are searching for.</p>
                        </div>
                        <div className="card">
                            <h1>Verified  listings</h1>
                            <p>Explore property listing that have passed our verification process</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;