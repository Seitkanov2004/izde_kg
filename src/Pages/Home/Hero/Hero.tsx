import React from 'react';
import './hero.scss';
import {FiSearch} from 'react-icons/fi'

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
                                <select name="" id="" className='type'>
                                    <option value="">Property type</option>
                                    <option value="">Apartment</option>
                                    <option value="">Villa</option>
                                    <option value="">Townhouse</option>
                                    <option value="">Renthouse</option>
                                    <option value="">Whole Building</option>
                                </select>
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
                            <input type="text" className='search' name='' placeholder="Enter an address or city "/>
                            <button className='btnSearch'><FiSearch/>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;