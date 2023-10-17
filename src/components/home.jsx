// i have changed here
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import "../styles/home.css";

function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('sessionToken')){
            navigate('/')
        }
    },[])

    return (
        <>
        <main className="Home">
            <navbar/>
            <div className='container'>
               <Sidebar/>
               <feed/>
            </div>
        </main>
        </>
      );
}

export default Home;
