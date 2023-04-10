
import NavBar from "../navBar/NavBar";
import './MobileNavBar.css';

function MobileNavBar({open}) {

    return (
        <div className={`mobile-nav ${open ? 'active' : ''}`}>
           <div className="navbar-menu">
               <NavBar/>
           </div>
        </div>
    );
}

export default MobileNavBar;