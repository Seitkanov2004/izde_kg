import React from 'react';
import HomeSearch from "./Pages/Home/HomeSearch/HomeSearch";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;