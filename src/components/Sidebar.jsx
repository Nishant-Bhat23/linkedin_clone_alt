import React,{useEffect,useState} from 'react';
import axios from 'axios';
import '../styles/SideBar.css';

import { useNavigate } from 'react-router-dom';

export default function SideBar()
{
const [currentUser,setCurrentUser] = useState([])

    async function handleCurrentUser(){
        const loggedInUser = localStorage.getItem("sessionToken")
        try {
            const response = await axios.get('http://localhost:8080/users/' + loggedInUser + '/getUser')
            setCurrentUser(response.data)
        } catch (error) {
            console.log("error")
        }
    }

    useEffect(()=>{
        handleCurrentUser()
    },[])


const navigate = useNavigate();
const handleOpenURL = () => {
             const url="https://www.linkedin.com/jobs/search?trk=guest_homepage-basic_guest_nav_menu_jobs&position=1&pageNum=0";
             window.open(url, '_blank'); // Opens the URL in a new tab/window
         };

return(
      <div className="sidebar">
         <div className="sidebar-top">
             <img className="a0" src="https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1380&t=st=1697438511~exp=1697439111~hmac=704212d3be0af0d3cb2357538481daaaf76d1b2dcb2f720e20ccc909a7d4feca"
             alt=""/>
             <img src={`${currentUser.picture}`} className="sidebar-avatar"/>
             <h2 className='sidebar_userName'>{currentUser.username}</h2>
             <h4 className='sidebar__userDescription '>{currentUser.email}</h4>

         </div>
         <div className="sidebar_status">
            <div className="sidebar_stat">
                 <p>who viewed you</p>
                 <p className="sidebar_stat_num">2,453</p>
            </div>
             <div className="sidebar_stat">
                 <p>views on post</p>
                 <p className="sidebar_stat_num">2,553</p>
             </div>
         </div>
         <div className="sidebar_bottom">
             <h3 className="sidebar__discoverHeader">Discover</h3>
                     <ul className="sidebar__discoverList">
                       <li className="sidebar__discoverItem">People You May Know</li>
                       <li className="sidebar__discoverItem" onClick={handleOpenURL}>Jobs</li>
                       <li className="sidebar__discoverItem">Groups</li>
                       <li className="sidebar__discoverItem" onClick={e =>{ navigate("/AboutUs")}}>AboutUs</li>
                     </ul>
         </div>

      </div>


);
}