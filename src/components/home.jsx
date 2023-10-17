import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';
import Right from './Right';

function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('sessionToken')){
            navigate('/')
        }
    },[])

    return (
        <>
        <navbar/>
        <main>
        <div className='container'>
        <Sidebar/>
        <feed/>
        </div>
        </main>
        </>
      );
}

export default Home;