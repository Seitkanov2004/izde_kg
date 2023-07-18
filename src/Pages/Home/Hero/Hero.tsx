import React from 'react';
import './hero.scss'
// @ts-ignore
import bg from "../../../img/Image.png"

const Hero = () => {
    return (
        <div id='Hero' style={{
            background: `url("${bg}")no-repeat center/cover`
        }}>
            <div className="container">
                <div className="Hero">

                </div>
            </div>
            
        </div>
    );
};

export default Hero;