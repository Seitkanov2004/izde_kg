import React from 'react';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Buy from "./Pages/Buy/Buy";
import Rent from "./Pages/Rent/Rent";


const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/buy' element={<Buy/>}/>
                <Route path='/rent' element={<Rent/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;