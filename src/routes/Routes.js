import React from 'react';

import UserRegistration from '../components/Userlogin';
import Home from "../components/home.jsx";
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../components/AboutUs.jsx';

function GlobalRoutes() {
    const handleOut = () =>{
        localStorage.removeItem("sesionToken")
    }

    return (
        <Routes>

                <Route path='/H' element={<UserRegistration/>} action={handleOut}/>
                <Route path='/' element={<Home/>} />
                <Route path='/AboutUs' element={<AboutUs/>} />

        </Routes>
     );
}

export default GlobalRoutes;
