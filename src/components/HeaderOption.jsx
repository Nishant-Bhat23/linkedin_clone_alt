import React from 'react';
import "./HeaderOption.css";




export default function HeaderOption({Icon,title})
{

return(
        <div className="header-option">
             { Icon  && <Icon className="HeaderOption-icon" />}
             <h4 className="HeaderOption-text"> {title} </h4>
        </div>

);
}