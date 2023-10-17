import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "src/styles/navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from"./HeaderOption.js";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

export default function navbar(){


   return
<div className="header">

                      <div  className="header-left" >
                             <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt=" " />
                             <div className="header-search">
                               <SearchIcon/>
                               <input type="text" placeholder="search"/>
                             </div>


                      </div>


                      <div  className="header-right">
                            <HeaderOption  Icon={HomeIcon}title="Home "/>
                            <HeaderOption  Icon={SupervisorAccountIcon} title="MyNetwork"/>
                            <HeaderOption  Icon={ BusinessCenterIcon } title="Jobs"/>
                            <HeaderOption  Icon={ NotificationsIcon } title="Notification"/>
                            <HeaderOption Icon={PersonIcon} title="Profile"/>
                      </div>
           </div>
}

/*hello
*/
