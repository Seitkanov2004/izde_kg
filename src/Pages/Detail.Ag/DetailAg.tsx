import React from "react";
import "../Detail.Ag/DetailAg.scss";
import  "./media.scss"
import Lop from "../../img/Rectangle 73.png";
import { BiSolidMedal } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Para from "../../img/paragon.png"

const DetailAg = () => {
  return (
    <div id="detailes">
      <div className="container">
        <div className="detailes">
          <div className="detailes--one">
            <div className="detailes--one__jon">
              <img
                src={Lop}
                style={{
                  borderRadius: "30px",
                  
                }}
                alt=""
              />
              <div className="detailes--one__jon--info">
                <h2>Leslie Alexander</h2>
                <h6>SENIOR PROPERTY ADVISOR</h6>
                <button>
                  <BiSolidMedal />
                  SUPERAGENT
                </button>
                <p>
                  Languages: <span>English, Russian</span>
                </p>
              </div>
            </div>
            <hr />
            <h1>Personal information</h1>
            <p>
              Areas: <span>Bishkek</span>{" "}
            </p>
            <p className="detailes--one__acti">
              Active listings: <span>15 Properties</span>{" "}
            </p>
            <p>
              Experience since: <span> 2020</span>{" "}
            </p>
          </div>
          <div className="detailes--two">
            <div className="detailes--two__all">
                <p>Contact this agent</p>
              <div className="detailes--two__all--calls">
                
                <NavLink to={"#"}>
                  
                    <BsTelephone style={{
                        color:"black",
                        fontSize:"20px"
                    }} />
                    Call agent
                  
                </NavLink>
              </div>
              <div className="detailes--two__all--ema">
                <NavLink to={"#"}>
                  
                    <AiOutlineMail  style={{
                        color:"black",
                        fontSize:"20px"
                    }}  />
                    Email agent
                  
                </NavLink>
              </div>
            </div>
            <div className="detailes--two__end">
                <h5>Company</h5>
                <img src={Para} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAg;
