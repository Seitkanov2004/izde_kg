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
import {LoadScript, useJsApiLoader} from "@react-google-maps/api";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {addCenter} from "../../store/Reducers/MapSlice";
import {CiEdit} from "react-icons/ci";
import {Simulate} from "react-dom/test-utils";
import dragOver = Simulate.dragOver;

export const API_KEY_MAP = "AIzaSyC5MuluLr_iD9YTptKrZk5XUgKPVNV7qR0"

const AddProperty = (e: React.DragEvent<HTMLDivElement>) => {

        const libraries: any[] = ["places"]
        const [mode, setMode] = useState(MODES.MOVE)

        const {isLoaded}: any = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: API_KEY_MAP,
            libraries
        })

        const handleRef = useRef<any>()


        const localImages: any = localStorage.getItem("imagesL")

        const [images, setImages] = useState<any[]>(Array(5).fill({
            id: Math.round(Math.random() * 100),
            image: null,
            idDone: false
        }));


        const [check, setCheck] = useState("")

        const handleMultipleImages = (e: any) => {
            const selectedFiles: any = [];
            const targetFiles = e.target.files;
            const targetFilesObject = [...targetFiles]
            targetFilesObject.map((file) => {
                return selectedFiles.unshift({
                    id: Math.round(Math.random() * 100),
                    image: URL.createObjectURL(file),
                    idDone: false
                })
            })





            // console.log(selectedFiles)

            // let num =  selectedFiles.length

            // console.log(num)
            //
            // setImages(images.slice(num))

            // images.slice(0,num)

            // setImages(images.splice(0, 0, ...selectedFiles));

            // if (images.length < 9) {
            //     images.unshift(...selectedFiles)
                // setImages([...selectedFiles, ...images]);

            // }




            // if (images.length < 5) {
            //     setImages([...selectedFiles, ...images.slice(num)]);
            // }

            // if (images.length === 4) {
            //     if (images.find(el => el === null)) {
            //         setImages([...selectedFiles, Array(3).fill({
            //             id: Math.round(Math.random() * 100),
            //             image: null,
            //             isDone: false,
            //         })])
            //     }
            // }
            // if (images.length === 0) {
            //     images.push(...selectedFiles, ...Array(4).fill({
            //         id: Math.round(Math.random() * 100),
            //         image: null,
            //         isDone: false,
            //     }))
            // }
            // else {
            //     setImages(images);
            // }

        }


        console.log(images)


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


        const [currentCard, setCurrentCard] = useState<any>(null)

        function startDrag(e: React.DragEvent<HTMLDivElement>, el: any) {
            setCurrentCard(el)
        }


        function handleDrop(e: React.DragEvent<HTMLDivElement>, el: any) {
            e.preventDefault()
            setImages(images.map(c => {
                if (c.id === el.id) {
                    return {...c, id: currentCard.id}
                }
                if (c.id === currentCard.id) {
                    return {...c, id: el.id}
                }
                return c
            }))
        }

        const sortCards = (a: any, b: any) => {
            if (a.id > b.id) {
                return 1
            } else {
                return -1
            }
        }

        const havingImages = (el: any, idx: any) => {

            if (idx === 0) {
                return el.image !== null ? (<div draggable={true}
                                                 onDragStart={(e) => startDrag(e, el)}
                                                 onDragOver={(e) => e.preventDefault()}
                                                 onDrop={(e) => handleDrop(e, el)}
                                                 style={{background: `url("${el.image}")no-repeat center/cover`}}
                                                 className="addProperty--images__blocks--bigBlock"></div>)
                    : (<div draggable={true}
                            className="addProperty--images__blocks--bigBlock">
                        <BiSolidImageAlt/></div>)
            }
            if (el.image) {
                return (<div draggable={true}
                             onDragStart={(e) => startDrag(e, el)}
                             onDragOver={(e) => e.preventDefault()}
                             onDrop={(e) => handleDrop(e, el)}
                             style={{background: `url("${el.image}")no-repeat center/cover`}}
                             className="addProperty--images__blocks--letBlock"></div>)
            }
            if (el.image === null) {
                return (<div draggable={true}
                             className="addProperty--images__blocks--letBlock"><BiSolidImageAlt/></div>)
            } else {
                return (<div draggable={true}
                             onDragStart={(e) => startDrag(e, el)}
                             onDragOver={(e) => e.preventDefault()}
                             onDrop={(e) => handleDrop(e, el)}
                             className="addProperty--images__blocks--letBlock"><BiSolidImageAlt/></div>)
            }
        }


        const [notImages, setNotImages] = useState([1, 2, 3, 4, 5])


        return (
            <div id="addProperty">
                <div className="container">
                    <div className="addProperty">
                        <h2>Property characteristics</h2>
                        <div className='addProperty--images'>
                            <div className="addProperty--images__blocks">
                                {
                                    images ? images.sort(sortCards).map((el, idx) => havingImages(el, idx))
                                        : notImages.map((el, idx) => el === 1 ? (<div draggable={true}
                                                                                      className="addProperty--images__blocks--bigBlock">
                                                <BiSolidImageAlt/></div>)
                                            : (<div draggable={true} className="addProperty--images__blocks--letBlock">
                                                <BiSolidImageAlt/></div>))
                                }
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
                    <LoadScript googleMapsApiKey={API_KEY_MAP}>
                        {
                            isLoaded ? <AddMap isLoaded={isLoaded} mode={mode} setMode={setMode}/> : <h2>Loading</h2>
                        }
                    </LoadScript>
                </div>
            </div>
        )
            ;
    }
;

export default AddProperty;