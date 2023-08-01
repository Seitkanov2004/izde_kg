import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import img from "./../../img/ad.svg"
import AddMap, {MODES} from "./Map/addMap";
import {useJsApiLoader} from "@react-google-maps/api";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {addCenter} from "../../store/Reducers/MapSlice";


const AddProperty = () => {

        const libraries: any[] = ["places"]
        const API_KEY_MAP = "AIzaSyC5MuluLr_iD9YTptKrZk5XUgKPVNV7qR0"
        const [mode, setMode] = useState(MODES.MOVE)

        const {isLoaded}: any = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: API_KEY_MAP,
            libraries
        })

        const [images, setImages] = useState<any>([]);

        const [check, setCheck] = useState("")

        const handleMultipleImages = (e: any) => {
            const selectedFiles: any = [];
            const targetFiles = e.target.files;
            const targetFilesObject = [...targetFiles]
            targetFilesObject.map((file) => {
                return selectedFiles.push(URL.createObjectURL(file))
            })
            if (images.length < 5) {
                setImages([...selectedFiles, ...images]);
            } else {
                setImages(images)
            }

        }


        const handleRef = useRef<any>()

        const toggleMode = useCallback(() => {
            switch (mode) {
                case MODES.MOVE:
                    setMode(MODES.SET_MARKER)
                    break;
                case MODES.SET_MARKER:
                    setMode(MODES.MOVE);
                    break;
                default:
                    setMode(MODES.MOVE)
            }
            console.log(mode)
        }, [mode])


        ///////////////////////////////////////////
        const dispatch = useAppDispatch()

        const mapRef = useRef<any>(undefined)


        const {
            ready,
            value,
            suggestions: {status, data},
            setValue,
            init,
            clearSuggestions,
        } = usePlacesAutocomplete({
            initOnMount: false,
            debounce: 300,
        });


        const ref = useOnclickOutside(() => {
            clearSuggestions();
        });

        const handleSelect = ({description}: any) => () => {
            setValue(description, false);
            clearSuggestions();
            console.log(description)
            getGeocode({address: description}).then((results) => {
                const {lat, lng} = getLatLng(results[0]);
                dispatch(addCenter({lat, lng}))
                console.log({lat, lng})
            });
        };

        const renderSuggestions = () =>
            data.map((suggestion) => {
                const {
                    place_id,
                    structured_formatting: {main_text, secondary_text},
                } = suggestion;

                return (
                    <li key={place_id} onClick={handleSelect(suggestion)}>
                        <strong>{main_text}</strong> <small>{secondary_text}</small>
                    </li>
                );
            });

        useEffect(() => {
            if (isLoaded) {
                init()
            }
        }, [isLoaded, init])


        return (
            <div id="addProperty">
                <div className="container">
                    <div className="addProperty">
                        <h2>Property characteristics</h2>
                        <div className='addProperty--images'>
                            <div className="addProperty--images__blocks">
                                <div style={{background: images[0] ? `url("${images[0]}") no-repeat center/cover` : ""}}
                                     className="addProperty--images__blocks--bigBlock"><BiSolidImageAlt/></div>
                                <div className="addProperty--images__blocks--letBlock">
                                    <div
                                        style={{background: images[1] ? `url("${images[1]}") no-repeat center/cover` : ""}}>
                                        <BiSolidImageAlt/>
                                    </div>
                                    <div style={{background: images[2] ? `url("${images[2]}") no-repeat center/cover` : ""}}
                                         className="addProperty--images__blocks--letBlock__border1"><BiSolidImageAlt/>
                                    </div>
                                    <div
                                        style={{background: images[3] ? `url("${images[3]}") no-repeat center/cover` : ""}}>
                                        <BiSolidImageAlt/>
                                    </div>
                                    <div style={{background: images[4] ? `url("${images[4]}") no-repeat center/cover` : ""}}
                                         className="addProperty--images__blocks--letBlock__border2"><BiSolidImageAlt/>
                                    </div>
                                </div>
                            </div>
                            <div className="addProperty--images__blocksModal">
                                <div className="addProperty--images__blocksModal--bigBlock">
                                    <img src={images[0] ? images[0] : img} alt=""/>
                                    <img src={images[1] ? images[1] : img} alt=""/>
                                    <img src={images[2] ? images[2] : img} alt=""/>
                                    <img src={images[3] ? images[3] : img} alt=""/>
                                    <img src={images[4] ? images[4] : img} alt=""/>
                                </div>
                            </div>
                            <button onClick={() => handleRef.current.click()} className="addProperty--images__btn">+ Add
                                photo
                            </button>
                            <input type="file" style={{display: "none"}} onChange={handleMultipleImages} multiple
                                   accept="image/*" ref={handleRef}/>
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
                                <label ref={ref}>
                                    <span>Location: </span>
                                    <div>
                                        <div>
                                            <input
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                                disabled={!ready}
                                                placeholder="Where your location?"
                                            />
                                            {status === "OK" && <ul>{renderSuggestions()}</ul>}
                                        </div>
                                        <a href="#addMap" onClick={toggleMode} className="choosePlace">Choose place 📍
                                        </a>
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
                                            <input onChange={(e) => setCheck(e.target.value)} type="checkbox"
                                                   value="Microwave"/>
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
                <div className="addProperty--location">
                    {
                        isLoaded ? <AddMap isLoaded={isLoaded} mode={mode} setMode={setMode}/> : <h2>Loading</h2>
                    }
                </div>
            </div>
        );
    }
;

export default AddProperty;