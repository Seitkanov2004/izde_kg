import React from "react";
import "../Reviews/Reviews.scss";
import { BsSearchHeart, BsPencil, BsStarHalf } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { MdOutlineSms } from "react-icons/md";
import Imarat from "../../img/imarat.png";

import Buil from "../../img/build.svg";
import Nature from "../../img/Nature.png";
import "../Reviews/media.scss"

import Nature from "../../img/Nature.png";


const Reviews = () => {
  return (
    <div>
      <div id="agentsas">
        <img
          src={Nature}
          style={{
            width: "100%",
          }}

          alt="" className="bil1"
        /> 
        <img
          src={Buil}
          style={{
            width: "100%",
          }}
          alt="" className="bil2"

          alt=""

        />
        <div className="personsas">
          <h1>Building Reviews</h1>
        </div>
        <div className="container">
          <div className="agentsas">
            <div className="agentsxas--inlisas">
              <div className="agentsas--inlisas__searchsas">
                <input
                  type="text"
                  placeholder="Enter building name or community"
                />
                <button>
                  <BsSearchHeart />
                  Search
                </button>
              </div>
            </div>
            <div className="agentsas--hooksas mb-[128px]">
              <div className="agentsas--hooksas__persas">
                <h2>Top reviewed buildings in Bishkek</h2>
              </div>
              <div className="agentsas--hooksas__yed">
                <div className="flex items-center flex-wrap column gap-8 ml-[48px]">
                  <div className="agentsas--hooksas__yed--red">
                    <div className="agentsas--hooksas__yed--red__mini gap-4">
                      <img src={Imarat} alt="" />
                      <div className="agentsas--hooksas__yed--red__mini--tex">
                        <p>Apartment</p>
                        <h3>The Grand Estate</h3>
                        <h2 className="flex gap-2 mb-4">
                          <BiSolidStar />
                          5/5
                        </h2>
                        <div className="flex gap-2">
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <MdOutlineSms />
                            <h4>Read reviews</h4>
                          </div>
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <BsPencil />
                            <h4>Write review</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="agentsas--hooksas__yed--red">
                    <div className="agentsas--hooksas__yed--red__mini gap-4">
                      <img src={Imarat} alt="" />
                      <div className="agentsas--hooksas__yed--red__mini--tex">
                        <p>Apartment</p>
                        <h3>The Grand Estate</h3>
                        <h2 className="flex gap-2 mb-4">
                          <BiSolidStar />
                          5/5
                        </h2>
                        <div className="flex gap-2">
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <MdOutlineSms />
                            <h4>Read reviews</h4>
                          </div>
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <BsPencil />
                            <h4>Write review</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="agentsas--hooksas__yed--red">
                    <div className="agentsas--hooksas__yed--red__mini gap-4">
                      <img src={Imarat} alt="" />
                      <div className="agentsas--hooksas__yed--red__mini--tex">
                        <p>Apartment</p>
                        <h3>The Grand Estate</h3>
                        <h2 className="flex gap-2 mb-4">
                          <BiSolidStar />
                          5/5
                        </h2>
                        <div className="flex gap-2">
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <MdOutlineSms />
                            <h4>Read reviews</h4>
                          </div>
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <BsPencil />
                            <h4>Write review</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="agentsas--hooksas__yed--red">
                    <div className="agentsas--hooksas__yed--red__mini gap-4">
                      <img src={Imarat} alt="" />
                      <div className="agentsas--hooksas__yed--red__mini--tex">
                        <p>Apartment</p>
                        <h3>The Grand Estate</h3>
                        <h2 className="flex gap-2 mb-4">
                          <BiSolidStar />
                          5/5
                        </h2>
                        <div className="flex gap-2">
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <MdOutlineSms />
                            <h4>Read reviews</h4>
                          </div>
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <BsPencil />
                            <h4>Write review</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="agentsas--hooksas__yed--red">
                    <div className="agentsas--hooksas__yed--red__mini gap-4">
                      <img src={Imarat} alt="" />
                      <div className="agentsas--hooksas__yed--red__mini--tex">
                        <p>Apartment</p>
                        <h3>The Grand Estate</h3>
                        <h2 className="flex gap-2 mb-4">
                          <BiSolidStar />
                          5/5
                        </h2>
                        <div className="flex gap-2">
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <MdOutlineSms />
                            <h4>Read reviews</h4>
                          </div>
                          <div className="agentsas--hooksas__yed--red__mini--tex__gop">
                            <BsPencil />
                            <h4>Write review</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fold flex items-center flex-wrap column gap-8 ">
                <h2 className="dolb flex ml-[210px]">Latest reviews</h2>

                <div className="flex items-center flex-wrap column gap-8 mr-[134px]">

                  <div className="agentsas--hooksas__yed--yellow">
                    <p>Apartment</p>
                    <h3>The Grand Estate</h3>
                    <h2 className="flex gap-2 mb-4">
                      <BsStarHalf />
                      4/5
                    </h2>
                    <h6>
                      It’s an awesome home with a great view to a city. I would
                      definitely recommend to rent this property
                    </h6>

                    <div className="agentsas--hooksas__yed--red__mini--tex__gop flex mt-[15px]">

                    <div className="agentsas--hooksas__yed--yellow__tup">

                      <MdOutlineSms />
                      <h4>More reviews</h4>
                    </div>
                  </div>
                  <div className="agentsas--hooksas__yed--yellow">
                    <p>Apartment</p>
                    <h3>The Grand Estate</h3>
                    <h2 className="flex gap-2 mb-4">
                      <BsStarHalf />
                      4/5
                    </h2>
                    <h6>
                      It’s an awesome home with a great view to a city. I would
                      definitely recommend to rent this property
                    </h6>

                    <div className="agentsas--hooksas__yed--red__mini--tex__gop flex mt-[15px]">

                    <div className="agentsas--hooksas__yed--yellow__tup">

                      <MdOutlineSms />
                      <h4>More reviews</h4>
                    </div>
                  </div>
                  <div className="agentsas--hooksas__yed--yellow">
                    <p>Apartment</p>
                    <h3>The Grand Estate</h3>
                    <h2 className="flex gap-2 mb-4">
                      <BsStarHalf />
                      4/5
                    </h2>
                    <h6>
                      It’s an awesome home with a great view to a city. I would
                      definitely recommend to rent this property
                    </h6>

                    <div className="agentsas--hooksas__yed--red__mini--tex__gop flex mt-[15px]">

                    <div className="agentsas--hooksas__yed--yellow__tup">

                      <MdOutlineSms />
                      <h4>More reviews</h4>
                    </div>
                  </div>
                  <div className="agentsas--hooksas__yed--yellow">
                    <p>Apartment</p>
                    <h3>The Grand Estate</h3>
                    <h2 className="flex gap-2 mb-4">
                      <BsStarHalf />
                      4/5
                    </h2>
                    <h6>
                      It’s an awesome home with a great view to a city. I would
                      definitely recommend to rent this property
                    </h6>

                    <div className="agentsas--hooksas__yed--red__mini--tex__gop flex mt-[15px]">

                    <div className="agentsas--hooksas__yed--yellow__tup">

                      <MdOutlineSms />
                      <h4>More reviews</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
