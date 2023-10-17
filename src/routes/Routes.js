import React from 'react';

import UserRegistration from '../components/Userlogin';
import Home from "../components/home.jsx";
import { Route, Routes } from 'react-router-dom';


function GlobalRoutes() {
    const handleOut = () =>{
        localStorage.removeItem("sesionToken")
    }

    return (
        <Routes>

                <Route path='/' element={<UserRegistration/>} action={handleOut}/>
                <Route path='/home' element={<Home/>} />


        </Routes>
     );
}

export default GlobalRoutes;
