import React, {useState} from 'react';
import './hero.scss';
import {FiSearch} from 'react-icons/fi'
import {BiChevronDown} from 'react-icons/bi'
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

const Hero = () => {

    const [type, setType] = useState("")

    return (
        <div id='Hero'>
            <div className="container">
                <div className="Hero">
                    <h1>Let’s find a perfect <br/> home for you!</h1>
                    <div className="Hero--block">
                        <div className="Hero--block__filter">
                            <div className="Hero--block__filter--rentOrBuy">
                                <div className="rentBuy">Rent</div>
                                <div className="rentBuy">Buy</div>
                            </div>
                            <div className="Hero--block__filter--options">
                                <select className='type'>
                                    <option style={{display: "none"}}>Property type</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Townhouse">Townhouse</option>
                                    <option value="Penthouse">Penthouse</option>
                                    <option value="Whole Building">Whole Building</option>
                                </select>
                                <select className='roomPrice'>
                                    <option value="" style={{display: "none"}}>Rooms</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                    <option value="">5+</option>
                                </select>
                                <select className='roomPrice'>
                                    <option value="" style={{display: "none"}} >Price</option>
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