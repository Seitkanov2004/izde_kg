import React from 'react';
import './ListPagination.scss'
import home from './../../../img/Rectangle 9 (3).png'
import {LuBath} from 'react-icons/lu'
import {BiSelection} from 'react-icons/bi'
import {BiBed} from 'react-icons/bi'

const ListPagination = () => {

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div id='ListPagination'>
            <div className="container">
                <div className="ListPagination">
                    <div className="ListPagination--homeBlock">
                        <div className="ListPagination--homeBlock__homes">
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
                                        <p className='price'>$ 10 000</p>
                                    </div>
                                </div>
                            </div>
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
                                        <p className='price'>$ 10 000</p>
                                    </div>
                                </div>
                            </div>
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
                                        <p className='price'>$ 10 000</p>
                                    </div>
                                </div>
                            </div>
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
                                        <p className='price'>$ 10 000</p>
                                    </div>
                                </div>
                            </div>
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
                                        <p className='price'>$ 10 000</p>
                                    </div>
                                </div>
                            </div>
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
                                        <p className='price'>$ 10 000</p>
                                    </div>
                                </div>
                            </div>
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
                                        <p className='price'>$ 10 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ListPagination--homeBlock__popularSearch">

                            <h1>Popular Searches</h1>
                            <p>Properties for sale</p>
                            <p>Apartments for sale</p>
                            <p>Villas for sale</p>
                            <p>Townhouses for sale</p>
                            <p>Compounds for sale</p>
                            <p>Duplexes for sale</p>
                            <p>Land for sale</p>
                            <p>Hotel Apartments for sale</p>
                        </div>

                    </div>
                    <div className="ListPagination--pagination">
                        <div className="ListPagination--pagination__block">
                            {
                                pages.map(el => (
                                    <button>{el}</button>
                                ))
                            }
                            <button className="ListPagination--pagination__block--next">next</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListPagination;