import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import "../styles/home.css";
import Feed from './Feed.jsx';


function Home() {
     const navigate = useNavigate()
        useEffect(() => {
            if(!localStorage.getItem('sessionToken')){
                navigate('/')
            }
        },[])

    return (
    <>
        <div className="Home">
            <Header/>
            <div className='container'>
               <Sidebar/>
               <Feed/>
            </div>
        </div>
    </>
      );
}

export default Home;