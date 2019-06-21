import React from 'react';
import {Navbar} from 'react-bootstrap';
import NavbarHeader from './NavbarHeader';
import NavbarBody from './navbarbody/NavbarBody';
//import './MainNavbar.css'


const MainNavbar = ({ layout }) =>{

    return(
    
        <Navbar className="navbar--image" expand="md" >
            <div className="navbar__wrapper">
                <NavbarHeader/>
                <NavbarBody/>
            </div>
        </Navbar> 
    )
}



export default MainNavbar;
