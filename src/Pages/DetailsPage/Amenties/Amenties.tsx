import React from 'react';
import './Amenties.scss'
import {MdOutlineDoorBack} from 'react-icons/md'
import {LuParkingSquare} from 'react-icons/lu'
import {GiWashingMachine} from 'react-icons/gi'
import {MdOutlineMicrowave} from 'react-icons/md'
import {PiThermometerSimpleBold} from 'react-icons/pi'
import {TbAirConditioning} from 'react-icons/tb'
import {AiOutlineWifi} from 'react-icons/ai'
import {RiComputerLine} from 'react-icons/ri'
import Elippse from './../../../img/Ellipse 2.svg'
import {FaVolumeUp} from 'react-icons/fa'
import {FaSmokingBan} from 'react-icons/fa'


const Amenties = () => {
    return (
        <div id='Amenties'>
            <div className="container">
                <div className="Amenties">
                    <div className="Amenties--amentiesBlocks">
                        <div className="block">
                        <h1>Amenities</h1>
                        <div className="amenityBlock">
                            <div className="amenity">
                                <MdOutlineDoorBack className='amenityIcons'/>
                                <p>Balkony</p>
                            </div>
                            <div className="amenity">
                                <LuParkingSquare className='amenityIcons'/>
                                <p>Covered parking </p>
                            </div>
                            <div className="amenity">
                                <GiWashingMachine className='amenityIcons'/>
                                <p>Washing machine</p>
                            </div>
                            <div className="amenity">
                                <MdOutlineMicrowave className='amenityIcons'/>
                                <p>Microwave </p>
                            </div>
                            <div className="amenity">
                                <PiThermometerSimpleBold className='amenityIcons'/>
                                <p>Central heating</p>
                            </div>
                            <div className="amenity">
                                <TbAirConditioning className='amenityIcons'/>
                                <p>Air-conditioner</p>
                            </div>
                            <div className="amenity">
                                <AiOutlineWifi className='amenityIcons'/>
                                <p>WiFi</p>
                            </div>
                            <div className="amenity">
                                <RiComputerLine className='amenityIcons'/>
                                <p>TV</p>
                            </div>
                        </div>
                         <div className="RoulesBlock">
                        <h2>House roules</h2>
                        <div className="roules">
                            <div className="rules">
                                <FaSmokingBan className='roulesIcons'/>
                                <p>Smoking in the  apartment</p>
                            </div>
                            <div className="rules">
                                <FaVolumeUp className='roulesIcons'/>
                                <p>Listen to music loudly</p>
                            </div>
                        </div>
                    </div>
                        </div>
                       <div className="Owner">
                        <h2>Owner</h2>
                        <img src={Elippse} alt="img" />
                        <a href="a">Timur Timurov</a>
                        <p className='text'>DreHomes proud to offer this stunning 2 Bedroom apartment with Marina view for rent in Dorrabay, Dubai Marina. Located nearby JBR and is a convenient short walk to the beach club with kids playing facilities and restaurants & shopping outlets nearby.</p>
                        <p className='title'>
                        Response rate 100% <br />
                        Response time within a few hours
                        </p>
                        <button>Contact owner</button>
                       </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Amenties;