import React from 'react';
import "../styles/HeaderOption.css";
import { useNavigate } from 'react-router-dom';



export default function HeaderOption({Icon,title,onClick,navigate})
{

         const handleLogout = e =>{
             localStorage.removeItem("sessionToken");
             navigate("/");
         }

return(
        <div className="header-option">
             { Icon  && <Icon className="HeaderOption-icon" />}
             <h4 className="HeaderOption-text" onClick={onClick}> {title} </h4>

        </div>

);
}