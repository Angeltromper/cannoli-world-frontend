import NavBar from "../navBar/NavBar";
import './MobileNavBar.css';

function MobileNavBar({open}) {

    return (
        <div className={`mobile-navbar ${open ? 'active' : ''}`}>
            <div className="container">
                <div className="navbar-menu">
                    <NavBar/>
                </div>
            </div>
        </div>
    );
}

export default MobileNavBar;