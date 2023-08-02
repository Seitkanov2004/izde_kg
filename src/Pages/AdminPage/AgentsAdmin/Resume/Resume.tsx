import React from 'react';
import "./Resume.scss"
import {BiArrowBack} from "react-icons/bi";
import user from "./../../../../img/resume-user.svg"
import {AiFillLinkedin, AiOutlineBehance} from "react-icons/ai";
import {NavLink, useNavigate} from "react-router-dom";
import work1 from "./../../../../img/work1.png"
import work2 from "./../../../../img/work2.png"

const Resume = () => {

    const nav = useNavigate()

    return (
        <div id="resume">
            <div className="container">
                <div className="resumeParent">
                    <div className="resume">
                        <BiArrowBack onClick={() => nav(-1)} className="resume--back"/>
                        <div className="resume--user">
                            <div className="resume--user__about">
                                <img src={user} alt="user" className="resume--user__about--img"/>
                                <div className="resume--user__about--name">
                                    <div className="resume--user__about--name__fullName">
                                        <h2>Leslie Alexander</h2>
                                        <h3>SENIOR PROPERTY ADVISOR</h3>
                                    </div>
                                    <div className="resume--user__about--name__secondBlock">
                                        <div className="resume--user__about--name__secondBlock--contact">
                                            <h3>CONTACT</h3>
                                            <div className="resume--user__about--name__secondBlock--contact__email">
                                                <div
                                                    className="resume--user__about--name__secondBlock--contact__email--first">
                                                    <h5>Email</h5>
                                                    <h5>Phone No.</h5>
                                                    <h5>Areas:</h5>
                                                </div>
                                                <div
                                                    className="resume--user__about--name__secondBlock--contact__email--second">
                                                    <h4>mail@yourwebsite.com</h4>
                                                    <h4>996+7003599733</h4>
                                                    <h4>Bishkek</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="resume--user__about--name__secondBlock--social">
                                            <h3>SOCIAL</h3>
                                            <div className="resume--user__about--name__secondBlock--social__web">
                                                <div>
                                                    <AiOutlineBehance/>
                                                    <h4>behance.net<span>/username</span></h4>
                                                </div>
                                                <div>
                                                    <AiOutlineBehance/>
                                                    <h4>headhunter<span>/@username</span></h4>
                                                </div>
                                                <div>
                                                    <AiFillLinkedin/>
                                                    <h4>linkedin.com<span>/username</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume--user__work">
                                <h3>SELECTED WORK</h3>
                                <div className="resume--user__work--parent">
                                    <div className="resume--user__work--parent__child">
                                        <img src={work1} alt=""/>
                                        <h2>Work name 1</h2>
                                        <p>Here a short explanation about the project. Not more than 2 or 3 lines. </p>
                                        <NavLink to="/">URL to work</NavLink>
                                    </div>
                                    <div className="resume--user__work--parent__child">
                                        <img src={work2} alt=""/>
                                        <h2>Work name 1</h2>
                                        <p>Here a short explanation about the project. Not more than 2 or 3 lines. </p>
                                        <NavLink to="/">URL to work</NavLink>
                                    </div>
                                    <div className="resume--user__work--parent__child">
                                        <img src={work2} alt=""/>
                                        <h2>Work name 1</h2>
                                        <p>Here a short explanation about the project. Not more than 2 or 3 lines. </p>
                                        <NavLink to="/">URL to work</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="resume--user__experience">
                                <div className="resume--user__experience--blocks">
                                    <div className="resume--user__experience--blocks--ex">
                                        <h3>EXPERIENCE</h3>
                                        <div className="resume--user__experience--blocks--ex__jobs">
                                            <div className="resume--user__experience--blocks--ex__jobs--job">
                                                <h2>Job title</h2>
                                                <h4>Company name</h4>
                                                <h5>Jan 2020 - Jan 2022 | 1 Year</h5>
                                                <p>Here a short explanation about what you did at this company. Not more
                                                    than 3
                                                    or 4
                                                    lines. </p>
                                            </div>
                                            <div className="resume--user__experience--blocks--ex__jobs--job">
                                                <h2>Job title</h2>
                                                <h4>Company name</h4>
                                                <h5>Jan 2020 - Jan 2022 | 1 Year</h5>
                                                <p>Here a short explanation about what you did at this company. Not more
                                                    than 3
                                                    or 4
                                                    lines. </p>
                                            </div>
                                            <div className="resume--user__experience--blocks--ex__jobs--job">
                                                <h2>Job title</h2>
                                                <h4>Company name</h4>
                                                <h5>Jan 2020 - Jan 2022 | 1 Year</h5>
                                                <p>Here a short explanation about what you did at this company. Not more
                                                    than 3
                                                    or 4
                                                    lines. </p>
                                            </div>
                                            <div className="resume--user__experience--blocks--ex__jobs--job">
                                                <h2>Job title</h2>
                                                <h4>Company name</h4>
                                                <h5>Jan 2020 - Jan 2022 | 1 Year</h5>
                                                <p>Here a short explanation about what you did at this company. Not more
                                                    than 3
                                                    or 4
                                                    lines. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="resume--user__experience--blocks__education">
                                        <h3>EDUCATION</h3>
                                        <div className="resume--user__experience--blocks__education--name">
                                            <div className="resume--user__experience--blocks__education--name__block">
                                                <h2>Degree & Name</h2>
                                                <h4>University/School name</h4>
                                                <h5>Jan 2020 - Jan 2022</h5>
                                            </div>
                                            <div className="resume--user__experience--blocks__education--name__block">
                                                <h2>Degree & Name</h2>
                                                <h4>University/School name</h4>
                                                <h5>Jan 2020 - Jan 2022</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="resume--user__experience--right">
                                    <div className="resume--user__experience--right__skills">
                                        <h3>SKILLS</h3>
                                        <h4>User Interface Design <br/>
                                            Typography <br/>
                                            Design System <br/>
                                            Usability Testing <br/>
                                            HTML/CSS</h4>
                                    </div>
                                    <div className="resume--user__experience--right__skills">
                                        <h3>LANGUAGES</h3>
                                        <h4>French (mother language) <br/>
                                            German (fluent level) <br/>
                                            English (advanced level)</h4>
                                    </div>
                                    <div className="resume--user__experience--right__skills">
                                        <h3>HOBBIES</h3>
                                        <h4>Piano <br/>
                                            Lettering <br/>
                                            Screenprinting <br/>
                                            Swimming <br/>
                                            Photography</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resumeParent--btn">
                        <button>Decline</button>
                        <button>Accept</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;