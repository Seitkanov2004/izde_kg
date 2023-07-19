import React from 'react';
import logo from "./../../img/Logo.svg"
import {NavLink} from "react-router-dom";
import "./Footer.scss"
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--start">
                        <div className="footer--start__logoBlock">
                            <div><span>find.kg</span><img src={logo} alt=""/></div>
                            <p>The shortest distance between paradise and the place you call home.</p>
                        </div>
                        <div className="footer--start__navigateBlock">
                            <div className="footer--start__navigateBlock--block">
                                <h3>About</h3>
                                <NavLink to="/">About us</NavLink>
                                <NavLink to="/">Features</NavLink>
                                <NavLink to="/">News & Blogs</NavLink>
                            </div>
                            <div className="footer--start__navigateBlock--block">
                                <h3>Company</h3>
                                <NavLink to="/">How we work</NavLink>
                                <NavLink to="/">Capital</NavLink>
                                <NavLink to="/">Security</NavLink>
                            </div>
                            <div className="footer--start__navigateBlock--block">
                                <h3>Support</h3>
                                <NavLink to="/">FAQ</NavLink>
                                <NavLink to="/">Support Center</NavLink>
                                <NavLink to="/">Contact Us</NavLink>
                            </div>
                            <div className="footer--start__navigateBlock--block">
                                <h3>Follow us</h3>
                                <div className="footer--start__navigateBlock--block__icons">
                                    <NavLink to="/" className="footer--start__navigateBlock--block__icons--nav"><AiFillFacebook/></NavLink>
                                    <NavLink to="/" className="footer--start__navigateBlock--block__icons--nav"><AiFillLinkedin/></NavLink>
                                    <NavLink to="/" className="footer--start__navigateBlock--block__icons--nav"><AiFillInstagram/></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer--end">
                        <NavLink to="/">Terms & Agreements</NavLink>
                        <NavLink to="/">Privacy Policy</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;