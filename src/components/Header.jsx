import "../styles/Header.css";
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from"./HeaderOption.jsx";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';



function Header() {
     const navigate = useNavigate();
         const handleLogout = e =>{
             localStorage.removeItem("sessionToken");
             navigate("/");
         }
         const handleOpenURL = () => {
             const url="https://www.linkedin.com/jobs/search?trk=guest_homepage-basic_guest_nav_menu_jobs&position=1&pageNum=0";
             window.open(url, '_blank'); // Opens the URL in a new tab/window
         };
  return (

          <div className="header">

                      <div  className="header-left" >
                             <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt=" " />
                             <div className="header-search">
                               <SearchIcon/>
                               <input type="text" placeholder="search"/>
                             </div>


                      </div>


                      <div  className="header-right">
                            <HeaderOption  Icon={HomeIcon} title="Home " onClick={e=>{navigate('/home')}}/>
                            <HeaderOption  Icon={SupervisorAccountIcon} title="MyNetwork" />
                            <HeaderOption  Icon={ BusinessCenterIcon } title="Jobs"  onClick={handleOpenURL} />
                            <HeaderOption  Icon={ NotificationsIcon } title="Notification"/>
                            <HeaderOption Icon={PersonIcon} title="Profile"  onClick={e=>{navigate('/home/MyProfile')}}/>
                            <HeaderOption  Icon={LogoutIcon} title="Logout" onClick={handleLogout} navigate={navigate} />
                      </div>
           </div>

  );
}

export default Header;
