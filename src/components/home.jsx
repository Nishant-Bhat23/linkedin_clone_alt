import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import "../styles/home.css";
import Feed from './Feed.jsx';
function Home() {


    return (
    <>
        <div className="Home">
            <Header/>
            <div className='container'>
               <Sidebar/>
               <Feed/>
            </div>
        </div>
    </>
      );
}

export default Home;