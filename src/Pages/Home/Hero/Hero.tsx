import React from 'react';
import './hero.scss';
import {FiSearch} from 'react-icons/fi'
import {BiChevronDown} from 'react-icons/bi'
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

const Hero = () => {
    return (
        <div id='Hero'>
            <div className="container">
                <div className="Hero">
                    <h1>Let’s find a perfect <br/> home for you!</h1>
                    <div className="Hero--block">
                        <div className="Hero--block__filter">
                            <div className="Hero--block__filter--rentOrBuy">
                                <div className="rent">Rent</div>
                                <div className="buy">Buy</div>
                            </div>
                            <div className="Hero--block__filter--options">
                                <div className="type">
                                    <input type="text" className='textBox' placeholder='Property type' readOnly/>
                                    <BiChevronDown className='down' />
                                    <div className="option">
                                        <div><span>Apartment</span></div>
                                        <div><span>Villa</span></div>
                                        <div><span>Townhouse</span></div>
                                        <div><span>Penthouse</span></div>
                                        <div><span>Whole Building</span></div>
                                    </div>
                                </div>
                                <select name="" id="" className='room'>
                                    <option value="">Room</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                    <option value="">5+</option>
                                </select>
                                <select name="" id="" className='price'>
                                    <option value="">Price</option>
                                    <option value="">| Min</option>
                                    <option value="">| Max</option>
                                </select>
                            </div>
                        </div>
                        <div className="Hero--block__field">
                            <input type="text" className='search' name='search' placeholder="Enter an address or city"/>
                            <button className='btnSearch'><FiSearch/>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;