import React from 'react';
import './SearchFilter.scss'
import {RiSearchLine} from 'react-icons/ri'
import {RiMedalFill} from 'react-icons/ri'
import {RiCheckboxCircleFill} from 'react-icons/ri'


const SearchFilter = () => {
    return (
        <div id='SearchFilter'>
            <div className="container">
                <div className="SearchFilter">
                    <div className="SearchFilter--SearchBlock">
                        <div className="SearchFilter--SearchBlock__search">
                            <input type="text" placeholder='Enter an address or city '/>
                            <button><RiSearchLine className='searchLine'/>Search</button>
                        </div>
                        <div className="SearchFilter--SearchBlock__options">
                            <select className='type'>
                                <option>Property type</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Townhouse</option>
                                <option>Penthouse</option>
                                <option>Whole Building</option>
                            </select>
                            <select className='roomPrice'>
                                <option>Rooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>5 +</option>
                            </select>
                            <select className='roomPrice'>
                                <option>Price</option>
                                <option>| Min</option>
                                <option>| Max</option>
                            </select>
                        </div>
                    </div>
                    <div className="SearchFilter--Filter">
                        <div className="SearchFilter--Filter__block">
                                <button className='super'>SuperAgents<RiMedalFill className='icon'/></button>
                               <button className='verified'>Verified<RiCheckboxCircleFill className='icon'/></button>
                        </div>
                        <div className="SearchFilter--Filter__sort">
                            <p>Sort by:</p>
                            <select>
                                <option>Featured</option>
                                <option>Featured</option>
                                <option>Featured</option>
                                <option>Featured</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;