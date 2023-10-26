import React from 'react';

import UserRegistration from '../components/Userlogin';
import Home from "../components/home.jsx";
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../components/AboutUs.jsx';
import MyProfile from '../components/MyProfile.jsx';
import AddExp from '../components/AddExperience.jsx';
import AddEducationPage from '../components/AddEducationPage.jsx'
import AddSkills from '../components/AddSkills.jsx'
import AddAddress from '../components/AddAddress.jsx'
function GlobalRoutes() {
    const handleOut = () =>{
        localStorage.removeItem("sesionToken")
    }

    return (
        <Routes>

                <Route path='/' element={<UserRegistration/>} action={handleOut}/>
                <Route path='/home' element={<Home/>} />
                <Route path='/AboutUs' element={<AboutUs/>} />
                <Route path='/home/MyProfile' element={<MyProfile/>} />
                <Route path='/home/MyProfile/AddExp' element={<AddExp/>} />
                <Route path='/home/MyProfile/AddEdu' element={<AddEducationPage/>}/>
                <Route path='/home/MyProfile/AddSkills' element={<AddSkills/>}  />
                <Route path='/home/MyProfile/AddAddress' element={<AddAddress/>}  />

        </Routes>
     );
}

export default GlobalRoutes;
