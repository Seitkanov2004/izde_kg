import React from 'react';
import './Location.scss'
import rules from './../../../img/Rectangle 2.png'
import rulesTwo from './../../../img/Rectangle 6 (1).png'
import rulesTree from './../../../img/Rectangle 7 (1).png'

const Location = () => {
    return (
        <div id='Location'>
            <div className="container">
                <div className="Location">
                    <h1>Location</h1>
                    <div className="Location--locationBlock">
                        <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.5621959927396!2d74.58629821702957!3d42.88013832501622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8193a365f7f%3A0xd0f03b4694502966!2sTucano%20Coffee%20Sri%20Lanka!5e0!3m2!1sru!2skg!4v1690540342712!5m2!1sru!2skg" width="650" height="500" loading="lazy"  referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="address">8/25 St.Aaly Tokombaeva </div>
                        </div>
                        <div className="locationImages">
                            <img src={rules} alt="img" />
                            <img src={rulesTwo} alt="img" />
                            <img src={rulesTree} alt="3img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;