import React from 'react';
import GrandEtate from './GrandEstate/GrandEtate';
import Amenties from './Amenties/Amenties';
import Location from './Location/Location';
import Similar from './Similar/Similar';

const DetailsPage = () => {
    return (
        <>
           <GrandEtate/>
           <Amenties/> 
           <Location/>
           <Similar/>
        </>
    );
};

export default DetailsPage;