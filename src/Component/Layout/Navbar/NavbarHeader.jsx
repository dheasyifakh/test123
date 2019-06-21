import React, {Component} from 'react';
import {Navbar, Image} from 'react-bootstrap';
import navbarLogo from '../../../assets/images/default/img-logo-cp.png';
//import navLogo from '../../../assets/images/default/logo-cp-white-simplified.png';


class NavbarHeader extends Component{
render() {
    return (
        <div className="navbar__header">
            <Navbar.Brand title="Dashboard">
                <a className="navbar__brand" href="/">
                    <Image className="navbar__logo"src={navbarLogo} alt=""/>
                    {/* <Image className="navbar__logo"src={navLogo} alt=""/> */}
                </a>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </div> 
    );
}

}

export default NavbarHeader;