import React, {useRef, useState} from 'react';
import "./BecomeAgent.scss"
import {BiArrowBack} from "react-icons/bi";
import {CiEdit} from "react-icons/ci";
import {BsDownload, BsTrash3} from "react-icons/bs";
import {FaCamera} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const BecomeAgent = () => {

    const [file, setFile] = useState<any>()
    const handleRef = useRef<any>()
    const nav = useNavigate()


    return (
        <div id="becomeAgent">
            <div className="container">
                <div className="becomeAgent">
                    <div className="becomeAgent--close">
                        <BiArrowBack onClick={() => nav(-1)} className="becomeAgent--close__back"/>
                        <div className="becomeAgent--close__down">
                            <CiEdit className="becomeAgent--close__down--icons"/>
                            <BsDownload className="becomeAgent--close__down--icons"/>
                            <BsTrash3 className="becomeAgent--close__down--icons"/>
                        </div>
                    </div>
                    <div className="becomeAgent--user">
                        <div onClick={() => handleRef.current.click()} className="becomeAgent--user__photo">
                            {
                                file ? <img src="" alt=""/> : <div>Profile</div>
                            }
                            <input type="file" ref={handleRef} style={{display: "none"}} accept="image/*"/>
                            <FaCamera className="becomeAgent--user__photo--icon"/>
                        </div>
                        <div className="becomeAgent--user__name">
                            <input type="text" placeholder="Firstname Lastname"
                                   className="becomeAgent--user__name--firstName"/>
                            <input type="text" placeholder="Your job title"
                                   className="becomeAgent--user__name--jobTitle"/>
                            <div className="becomeAgent--user__name--contact">
                                <div className="becomeAgent--user__name--contact__firstBlock">
                                    <h3>CONTACT</h3>
                                    <input type="text" placeholder="Email"/>
                                    <input type="text" placeholder="Phone No."/>
                                    <input type="text" placeholder="Areas:"/>
                                </div>
                                <div className="becomeAgent--user__name--contact__secondBlock">
                                    <h3>SOCIAL</h3>
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="becomeAgent--parent">
                        <div className="becomeAgent--parent__men">
                            <div className="becomeAgent--parent__men--work">
                                <h3>SELECTED WORK</h3>
                                <input type="text" className="becomeAgent--parent__men--work__name" placeholder="Work name 1"/>
                                <div className="becomeAgent--parent__men--work__text">
                                    <textarea placeholder="Here a short explanation about the project. Not more than 2 or 3 lines. "/>
                                    <div className="becomeAgent--parent__men--work__text--icons">
                                        <CiEdit/>
                                        <BsTrash3/>
                                    </div>
                                </div>
                                <input type="text" className="becomeAgent--parent__men--work__url" placeholder="URL to work"/>
                            </div>
                            <div className="becomeAgent--parent__men--expen">
                                <h3>EXPERIENCE</h3>
                                <input type="text" placeholder="Job Title"/>
                                <input type="text"/>
                                <input type="text"/>
                                <div className="becomeAgent--parent__men--expen__text">
                                    <textarea placeholder="Here a short explanation about what you did at this company. Not more than 3 or 4 lines. "/>
                                    <div className="becomeAgent--parent__men--work__text--icons">
                                        <CiEdit/>
                                        <BsTrash3/>
                                    </div>
                                </div>

                            </div>
                            <div className="becomeAgent--parent__men--edu">
                                <h3>EDUCATION</h3>
                                <input type="text" placeholder="Degree & Name"/>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="becomeAgent--parent__women">
                            <div>
                                <h3>SKILLS</h3>
                                <input type="text"/>
                            </div>
                            <div>
                                <h3>LANGUAGES</h3>
                                <input type="text"/>
                            </div>
                            <div>
                                <h3>HOBBIES</h3>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="becomeAgent--btn">
                        <button>Save</button>
                        <button>Console</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeAgent;