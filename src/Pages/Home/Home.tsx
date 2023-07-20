import React from 'react';
import Hero from "./Hero/Hero";
import HomeSearch from "./HomeSearch/HomeSearch";
import NewProperties from "./NewProperties/NewProperties";
import SuperAgents from "./SuperAgents/SuperAgents";
import GetStarted from "./GetStarted/GetStarted";



const Home = () => {
    return (
        <>
            <Hero/>
            <HomeSearch/>
           <NewProperties/>
            <SuperAgents/>
            <GetStarted/>
        </>
    );
};

export default Home;