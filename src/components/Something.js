import React from 'react';
import LogoImage from './images/logo.png'
import './styles/something.css'

function Something(){


return(
<>
 <nav className=" navbar nav-underline navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
     <div className="navbar-brand" href="#">
       <img src={LogoImage} id="loogo"alt="Logo" width="20" height="30" className="d-inline-block align-text-top" />
       <h6 id='mam'> BLINKEDIN</h6>
     </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
           <li className="nav-item">
             <a className="nav-link " aria-current="page" href="#" id='man'>Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link " href="#" id='man'>Connections</a>
           </li>
           <li className="nav-item">
             <a className="nav-link " href="#" id='man' >Messages</a>
           </li> <br />
           <li className="nav-item">
             <a className="nav-link " href="#"id='man' >About Us</a>
           </li>

         <form className="d-flex mx-5" role="search">
           <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-success mx-2" type="submit"id='man' >Search</button>
         </form>
         </ul>
         <a ><i className="bi bi-gear-fill mx-3" width="" height="400"></i></a>
         <a><i className="bi bi-person-circle mx-3 " width="" height="400"> </i></a>

       </div>
     </div>
 </nav>
 <div className='container container-expand-lg'>
 <ul className="nav nav-underline flex-column ">
            <li className="nav-item ">
            <a className="nav-link "  href="#" >Active</a>
            </li>
            <li className="nav-item my-2">
            <a className="nav-link " href="#">Link</a>
            </li>
            <li className="nav-item my-2">
            <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item my-2">
            <a className="nav-link " href="#">Disabled</a>
            </li>
        </ul>
 </div>
</>
);};


export default Something;