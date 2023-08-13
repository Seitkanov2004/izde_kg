import React, { useState } from 'react';
import './GrandEstate.scss'
import ApartmentOwn from './../../../img/Rectangle 2 (1).png'
import ApartmentTwo from './../../../img/Rectangle 5.png'
import ApartmentTree from './../../../img/Rectangle 6.png'
import ApartmentFour from './../../../img/Rectangle 7.png'
import ApartmentFive from './../../../img/Rectangle 8.png'
import ApartmentSix from './../../../img/Rectangle 70.png'
import { TbBookmark } from 'react-icons/tb'
import { BiHomeAlt2 } from 'react-icons/bi'
import { BiBed } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BiSelection } from 'react-icons/bi'
import { LuBath } from 'react-icons/lu'
import { FaRegBuilding } from 'react-icons/fa'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'


const GrandEtate = () => {

    const [modal, setModal] = useState(false)

    return (
        <div id='GrandEstate'>
            <div className="container">
                <div className="GrandEstate">
                    <div className="GrandEstate--apartmentBlock">
                        <p>Rent a dream apartment</p>
                        <div className="GrandEstate--apartmentBlock__apartmentImages">
                            <img className='home' src={ApartmentOwn} alt="img" />
                            <div className="images">
                                <img src={ApartmentTwo} alt="img" />
                                <img src={ApartmentFour} alt="img" />
                                <img src={ApartmentTree} alt="img" />
                                <img src={ApartmentFive} alt="img" />
                            </div>
                        </div>
                        <div className="GrandEstate--apartmentBlock__apartmentImagesTwo">
                        <img src={ApartmentTwo} alt="img" />
                        <img src={ApartmentSix} alt="img" />
                        <img src={ApartmentFour} alt="img" />
                        <img src={ApartmentTree} alt="img" />
                        <img src={ApartmentFive} alt="img" />
                        </div>
                    </div>
                    <div className="GrandEstate--GrandBlock">
                        <div className="GrandEstate--GrandBlock__title">
                            <h1>The Grand Estate</h1>
                            <TbBookmark className='bookmark' />
                        </div>
                        <div className="GrandEstate--GrandBlock__conditionBlock">
                            <div className="condition">
                                <BiHomeAlt2 className='conditionIcons' />
                                <p>Apartment</p>
                            </div>
                            <div className="condition">
                                <BiBed className='conditionIcons' />
                                <p>1 Bedroom</p>
                            </div>
                            <div className="condition">
                                <p>Furnished</p>
                            </div>
                            <div className="condition">
                                <AiOutlineUserAdd className='conditionIcons' />
                                <p>Without settlement</p>
                            </div>
                            <div className="condition">
                                <BiSelection className='conditionIcons' />
                                <p>Square: 120 m2</p>
                            </div>
                            <div className="condition">
                                <LuBath className='conditionIcons' />
                                <p>1 Bathroom</p>
                            </div>
                            <div className="condition">
                                <FaRegBuilding className='conditionIcons' />
                                <p>Floor:3 of 12</p>
                            </div>
                            <div className="condition">
                                <HiOutlineBuildingOffice2 className='conditionIcons' />
                                <p>Serie: Elite</p>
                            </div>
                        </div>
                        <div className="GrandEstate--GrandBlock__GrandText">
                            <p className='text'>The unsurpassed panoramic view into the horizon, where earth and sky embrace, and the enticing summer breeze, offer moments of unique relaxation and wellbeing. The calm design of the property, combined with the harmonious synthesis of natural material, and the exceptional landscape of Aleomandra, complete this luxurious setting. <br/>
                                The location of Untold Mykonos is ideal. It offers absolute privacy and tranquillity to guests, only 200 meters from the serene, crystal clear Glyfadi beach, and has direct access to tourist amenities.
                            </p>
                            <div className="GrandPrice">
                                <h3>60 000com <span>/month</span></h3>
                                <div className="deposit">
                                    <h4>Minimum stay</h4>
                                    <p>6 month</p>
                                </div>
                                <div className="deposit">
                                    <h4>Deposit</h4>
                                    <p>20 000 с</p>
                                </div>
                                <button>Contact owner</button>
                            </div>

                            <div className="GrandPriceTwo">
                                <div style={
                                    {display: modal ? 'block' : 'none'}
                                } className="depositBlock">
                                <div  className="depositTwo">
                                    <h4>Minimum stay</h4>
                                    <p>6 month</p>
                                </div>
                                <div className="depositTwo">
                                    <h4>Deposit</h4>
                                    <p>20 000 с</p>
                                </div>
                                <hr />
                                </div>
                                <div onClick={() => setModal(!modal)} className="priceContact">
                                    <h2>60 000com <span>/month</span></h2>
                                    <button>Contact owner</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GrandEtate;