import React from 'react';
import './NewProperties.scss'
import HouseOwn from './../../../img/Rectangle 9.png'
import HouseTwo from './../../../img/Rectangle 9 (1).png'
import HouseTree from './../../../img/Rectangle 9 (2).png'
import HouseFour from './../../../img/Rectangle 9 (3).png'


const NewProperties = () => {

    return (
        <div id='NewProperties'>
            <div className="container">
                <div className="NewProperties">
                    <div className="NewProperties--explore">
                        <h1>Explore the New Properties</h1>
                        <div className="NewProperties--explore__filterBtn">
                            <select>
                                <option value="">Recently added</option>
                                <option value="">Recently added</option>
                                <option value="">Recently added</option>
                            </select>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="NewProperties--blocks">
                        <div className="block">
                            <img src={HouseOwn} alt="House"/>
                            <div className="description">
                                <h1>The Grand Estate</h1>
                                <div className="text">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>

                        </div>
                        <div className="block">
                            <img src={HouseTwo} alt="House"/>
                            <div className="description">
                                <h1>The Grand Estate</h1>
                                <div className="text">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>

                        </div>
                        <div className="block">
                            <img src={HouseTree} alt="House"/>
                            <div className="description">
                                <h1>The Grand Estate</h1>
                                <div className="text">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>

                        </div>
                        <div className="block">
                            <img src={HouseFour} alt="House"/>
                            <div className="description">
                                <h1>The Grand Estate</h1>
                                <div className="text">
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

export default NewProperties;