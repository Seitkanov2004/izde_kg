import React, {useRef, useState} from 'react';
import "./BecomeAgent.scss"
import {BiArrowBack} from "react-icons/bi";
import {CiEdit} from "react-icons/ci";
import {BsDownload, BsTrash3} from "react-icons/bs";

const BecomeAgent = () => {

    const [file, setFile] = useState<any>()
    const handleRef = useRef<any>()

    return (
        <div id="becomeAgent">
            <div className="container">
                <div className="becomeAgent">
                    <div className="becomeAgent--close">
                        <BiArrowBack className="becomeAgent--close__back"/>
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
                            <input type="file" ref={handleRef}/>
                        </div>
                        <div className="becomeAgent--user__name">
                            <input type="text" placeholder="Firstname Lastname"
                                   className="becomeAgent--user__name--firstName"/>
                            <input type="text" placeholder="Your job title"
                                   className="becomeAgent--user__name--jobTitle"/>
                            <div className="becomeAgent--user__name--contact">
                                <div className="becomeAgent--user__name--firstBlock">
                                    <h3>CONTACT</h3>
                                    <input type="text" placeholder="Email"/>
                                    <input type="text" placeholder="Phone No."/>
                                    <input type="text" placeholder="Areas:"/>
                                </div>
                                <div className="becomeAgent--user__name--secondBlock">
                                    <h3>SOCIAL</h3>
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeAgent;