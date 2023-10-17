import React from 'react';
import UserRegister from '../components/Userlogin';
import { Route, Routes } from 'react-router-dom';


function GlobalRoutes() {
    const handleOut = () =>{
        localStorage.removeItem("sesionToken")
    }

    return (
        <Routes>
                <Route path='/' element={<UserRegister/>} action={handleOut}/>


        </Routes>
     );
}

export default GlobalRoutes;
