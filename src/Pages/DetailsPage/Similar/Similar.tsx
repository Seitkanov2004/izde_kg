import React from 'react';
import './Similar.scss'
import similar from './../../../img/Rectangle 9 (4).png'
import similarTwo from './../../../img/Rectangle 9 (5).png'
import similarTree from './../../../img/Rectangle 9 (6).png'
import Slider from "react-slick";


const Similar = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div id='Similar'>
            <div className="container">
                <div className="Similar">
                    <h1>Similar places in Bishkek</h1>
                    <div className="Similar--similarBlock">
                    <Slider {...settings}>
                        <div className="block">
                            <img src={similar} alt="img" />
                            <div className="blockText">
                                <h2>The Grand Estate</h2>
                                <div className="cityPrice">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={similarTwo} alt="img" />
                            <div className="blockText">
                                <h2>The Grand Estate</h2>
                                <div className="cityPrice">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={similarTree} alt="img" />
                            <div className="blockText">
                                <h2>The Grand Estate</h2>
                                <div className="cityPrice">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={similar} alt="img" />
                            <div className="blockText">
                                <h2>The Grand Estate</h2>
                                <div className="cityPrice">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={similarTwo} alt="img" />
                            <div className="blockText">
                                <h2>The Grand Estate</h2>
                                <div className="cityPrice">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={similar} alt="img" />
                            <div className="blockText">
                                <h2>The Grand Estate</h2>
                                <div className="cityPrice">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={similarTwo} alt="img" />
                            <div className="blockText">
                                <h2>The Grand Estate</h2>
                                <div className="cityPrice">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={similarTree} alt="img" />
                            <div className="blockText">
                                <h2>The Grand Estate</h2>
                                <div className="cityPrice">
                                    <p className='city'>Bishkek</p>
                                    <p className='price'>$ 100 000</p>
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Similar;