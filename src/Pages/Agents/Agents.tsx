import React from "react";
import "./Agents.scss";
import { BsSearchHeart } from 'react-icons/bs';
import { BiSolidMedal } from 'react-icons/bi';
import Ropp from "../../img/Rectangle 73.png"
import Rop1 from "../../img/rop.png"
import Rop2 from "../../img/rop2.png"
import Rop3 from "../../img/rop3.png"
import Rop4 from "../../img/rop4.png"
import Rop5 from "../../img/rop5.png"
import Rop6 from "../../img/rop6.png"
import Rop7 from "../../img/rop7.png"
import { url } from "inspector";
import { NavLink } from "react-router-dom";

const Agents = () => {
  return (
    <div id="agents">
      <div className="persons">
        <h1>Find your agent to find your home</h1>
      </div>
      <div className="container">
        <div className="agents">
          <div className="agents--inli">
            <div className="agents--inli__search">
                <input type="text" placeholder="Name or the location of the agent" />
                <button><BsSearchHeart/>Search</button>
            </div>
              <select>
                <option value="#">Language</option>
                <option value="#">Language</option>
                <option value="#">Language</option>
                <option value="#">Language</option>
              </select>

          </div>
          <div className="agents--hooks">
            <div className="agents--hooks__per">
             <NavLink to={"/detailAg"}><img src={Ropp} alt="" style={{
                borderRadius:"32px 32px 0 0"
              }} />
              </NavLink> 
              <h3>Leslie Alexander</h3>
              <p>SENIOR PROPERTY ADVISOR</p>
              <button><BiSolidMedal/>SUPERAGENT</button>
            </div>
            <div className="agents--hooks__per">
              <img src={Rop1} alt="" style={{
                borderRadius:"32px 32px 0 0"
              }} />
              <h3>Eleanor Pena</h3>
              <p>SENIOR PROPERTY ADVISOR</p>
              <button><BiSolidMedal/>SUPERAGENT</button>
            </div>
            <div className="agents--hooks__per">
              <img src={Rop2} alt="" style={{
                borderRadius:"32px 32px 0 0"
              }} />
              <h3>Marvin McKinney</h3>
              <p>SENIOR PROPERTY ADVISOR</p>
              <button><BiSolidMedal/>SUPERAGENT</button>
            </div>
            <div className="agents--hooks__per">
              <img src={Rop3} alt="" style={{
                borderRadius:"32px 32px 0 0"
              }} />
              <h3>Robert Fox</h3>
              <p>SENIOR PROPERTY ADVISOR</p>
              <button><BiSolidMedal/>SUPERAGENT</button>
            </div>
            <div className="agents--hooks__per">
              <img src={Rop4} alt="" style={{
                borderRadius:"32px 32px 0 0"
              }} />
              <h3>Bessie Cooper</h3>
              <p>SENIOR PROPERTY ADVISOR</p>
              <button><BiSolidMedal/>SUPERAGENT</button>
            </div>
            <div className="agents--hooks__per">
              <img src={Rop5} alt="" style={{
                borderRadius:"32px 32px 0 0"
              }} />
              <h3>Jenny Wilson</h3>
              <p>SENIOR PROPERTY ADVISOR</p>
              <button><BiSolidMedal/>SUPERAGENT</button>
            </div>
            <div className="agents--hooks__per">
              <img src={Rop6} alt="" style={{
                borderRadius:"32px 32px 0 0"
              }} />
              <h3>Jacob Jones</h3>
              <p>SENIOR PROPERTY ADVISOR</p>
              <button><BiSolidMedal/>SUPERAGENT</button>
            </div>
            <div className="agents--hooks__per">
              <img src={Rop7} alt="" style={{
                borderRadius:"32px 32px 0 0"
              }} />
              <h3>Brooklyn Simmons</h3>
              <p>SENIOR PROPERTY ADVISOR</p>
              <button><BiSolidMedal/>SUPERAGENT</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
