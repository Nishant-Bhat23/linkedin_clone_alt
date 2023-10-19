import React from 'react';

import UserRegistration from '../components/Userlogin';
import Home from "../components/home.jsx";
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../components/AboutUs.jsx';
import MyProfile from '../components/MyProfile.jsx';
import AddExp from '../components/AddExperience.jsx';
import AddEducationPage from '../components/AddEducationPage.jsx'
import AddSkills from '../components/AddSkills.jsx'
function GlobalRoutes() {
    const handleOut = () =>{
        localStorage.removeItem("sesionToken")
    }

    return (
        <Routes>

                <Route path='/H' element={<UserRegistration/>} action={handleOut}/>
                <Route path='/' element={<Home/>} />
                <Route path='/AboutUs' element={<AboutUs/>} />
                <Route path='/MyProfile' element={<MyProfile/>} />
                <Route path='/MyProfile/AddExp' element={<AddExp/>} />
                <Route path='/MyProfile/AddEdu' element={<AddEducationPage/>}/>
                <Route path='/MyProfile/AddSkills' element={<AddSkills/>}  />

        </Routes>
     );
}

export default GlobalRoutes;
