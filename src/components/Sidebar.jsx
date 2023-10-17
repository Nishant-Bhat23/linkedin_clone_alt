import React from 'react';
import '../styles/SideBar.css';
import AvatarIcon from '@mui/icons-material/AccountCircle';


export default function SideBar()
{


return(
      <div className="sidebar">
         <div className="sidebar-top">
             <img src="https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1380&t=st=1697438511~exp=1697439111~hmac=704212d3be0af0d3cb2357538481daaaf76d1b2dcb2f720e20ccc909a7d4feca"
             alt=""/>
             <AvatarIcon className="sidebar-avatar"/>
             <h2 className='sidebar_userName'>USER_NAME</h2>
             <h4 className='sidebar__userDescription '>EMAIL_ID</h4>

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
                       <li className="sidebar__discoverItem">Jobs</li>
                       <li className="sidebar__discoverItem">Groups</li>
                     </ul>
         </div>

      </div>


);
}