import React from 'react';
import "../styles/HeaderOption.css";
import { useNavigate } from 'react-router-dom';



export default function HeaderOption({Icon,title,onClick,navigate})
{

         const handleLogout = e =>{
             localStorage.removeItem("sessionToken");
             navigate("/");
         }
         const handleOpenURL = () => {
             const url="https://www.linkedin.com/jobs/search?trk=guest_homepage-basic_guest_nav_menu_jobs&position=1&pageNum=0";
             window.open(url, '_blank'); // Opens the URL in a new tab/window
         };

return(
        <div className="header-option">
             { Icon  && <Icon className="HeaderOption-icon" />}
             <h4 className="HeaderOption-text" onClick={onClick}> {title} </h4>

        </div>

);
}