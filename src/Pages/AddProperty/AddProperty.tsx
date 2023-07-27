import React, {useRef} from 'react';
import "./Addproperty.scss"
import {BiLogoBaidu, BiSolidImageAlt} from "react-icons/bi";
import {LuMicrowave, LuParkingSquare} from "react-icons/lu";
import {AiOutlineWifi} from "react-icons/ai";
import {SlScreenDesktop} from "react-icons/sl";
import {GiWashingMachine} from "react-icons/gi";
import {TbAirConditioning} from "react-icons/tb";
import {ImSpoonKnife} from "react-icons/im";
import {MdOutlineComputer} from "react-icons/md";
import {BsDoorClosed, BsThermometerHigh} from "react-icons/bs";
import {LiaSwimmingPoolSolid} from "react-icons/lia";
import {CgGym} from "react-icons/cg";


const AddProperty = () => {

 const handleRef = useRef<any>()

    return (
        <div id="addProperty">
            <div className="container">
                <div className="addProperty">
                    <div className="addProperty--title">
                        <h1>Fill out the form for the sale and rental of real estate</h1>
                        <div>
                            <button>Buy</button>
                            <button>Rent</button>
                        </div>
                    </div>
                    <div className='addProperty--images'>
                        <div className="addProperty--images__blocks">
                            <div className="addProperty--images__blocks--bigBlock"><BiSolidImageAlt/></div>
                            <div className="addProperty--images__blocks--letBlock">
                                <div><BiSolidImageAlt/></div>
                                <div className="addProperty--images__blocks--letBlock__border1"><BiSolidImageAlt/>
                                </div>
                                <div><BiSolidImageAlt/></div>
                                <div className="addProperty--images__blocks--letBlock__border2"><BiSolidImageAlt/>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => handleRef.current.click()} className="addProperty--images__btn">+ Add photo</button>
                        <input type="file" style={{display: "none"}} ref={handleRef}/>
                    </div>
                    <div className="addProperty--norm">
                        <div className="addProperty--inputs">
                            <label>
                                <span>Name</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Mobile number</span>
                                <input type="text" defaultValue="+996"/>
                            </label>
                            <label>
                                <span>E-mail Address</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Series</span>
                                <div>
                                    <input type="button" value="Elite"/>
                                    <input type="button" value="105"/>
                                    <input type="button" value="106"/>
                                    <input type="button" value="104"/>
                                    <input type="button" value="Individual project"/>
                                </div>
                            </label>
                            <label>
                                <span>Number of room</span>
                                <div>
                                    <input type="button" value="1"/>
                                    <input type="button" value="2"/>
                                    <input type="button" value="3"/>
                                    <input type="button" value="4"/>
                                    <input type="button" value="5"/>
                                    <input type="button" value="6+"/>
                                </div>
                            </label>
                            <label>
                                <span>Bathroom</span>
                                <div>
                                    <input type="button" value="Combined"/>
                                    <input type="button" value="Separate"/>
                                </div>
                            </label>
                            <label>
                                <span>Type of parking</span>
                                <div>
                                    <input type="button" value="Ground"/>
                                    <input type="button" value="Underground"/>
                                    <input type="button" value="📍No"/>
                                </div>
                            </label>
                            <label>
                                <span>Square: </span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Floor</span>
                                <div>
                                    <input className="of" type="text"/>
                                    <span>of</span>
                                    <input className="of" type="text"/>
                                </div>
                            </label>
                            <label>
                                <span>Price</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>About property </span>
                                <input type="text"/>
                            </label>
                        </div>
                        <div className="addProperty--checks">
                            <h3>Aminities: </h3>
                            <div className="addProperty--checks__parent">
                                <div className="addProperty--checks__parent__blocks">
                                    <label>
                                        <input type="checkbox" value="Microwave"/>
                                        <LuMicrowave/>
                                        <span>Microwave <h4>*</h4></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="WiFi"/>
                                        <AiOutlineWifi/>
                                        <span>AiOutlineWifi <h4>*</h4></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="TV"/>
                                        <MdOutlineComputer/>
                                        <span>TV <h4>*</h4></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Washing machine"/>
                                        <GiWashingMachine/>
                                        <span>GiWashing Machine <h4>*</h4></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Air-conditioner"/>
                                        <TbAirConditioning/>
                                        <span>Air-conditioner <h4>*</h4></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Tableware"/>
                                        <ImSpoonKnife/>
                                        <span>Tableware <h4>*</h4></span>
                                    </label>
                                </div>
                                <div className="addProperty--checks__parent__blocks">
                                    <label>
                                        <input type="checkbox" value="Balkony"/>
                                        <BsDoorClosed/>
                                        <span>Balkony</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Covered parking "/>
                                        <LuParkingSquare/>
                                        <span>Covered parking </span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Central heating"/>
                                        <BsThermometerHigh/>
                                        <span>Central heating</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Swimming pool"/>
                                        <LiaSwimmingPoolSolid/>
                                        <span>Swimming pool</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Gym"/>
                                        <CgGym/>
                                        <span>Gym</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Workspace"/>
                                        <SlScreenDesktop/>
                                        <span>Workspace</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Pet friendly"/>
                                        <BiLogoBaidu/>
                                        <span>Pet friendly</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="addProperty--send">Send to admin</button>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;