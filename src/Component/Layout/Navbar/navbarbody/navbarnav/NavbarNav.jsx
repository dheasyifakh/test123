import React, {Component} from 'react';
import {Navbar, NavDropdown, Image, Nav} from 'react-bootstrap';
import avrPhoto from '../../../../../assets/images/default/img-profile-md.jpg';

export default class NavbarNav extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render() {
        return (
            <div>
                <Navbar.Collapse className="navbar-collapse" id="navbarForMobile">
                    <Nav.Item as="ul" className="navbar__nav">
                        <Nav.Item as="li" className="d-none d-md-block" onClick={0}>
                            <Nav.Link className="navbar__link">Zen Mode</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="navbar__link" href="http://webdev.cyberprimatama.co.id/" target="_blank">
                            <span>Visit Site</span> </Nav.Link>
                        </Nav.Item>
                    </Nav.Item>
                    
                    <Nav.Item as="ul" className="navbar__nav1" >
                        <Nav.Item as="li" className="dropdown navbar__dropdown">
                            <span className="navbar__dropdown-text">Howdy</span>
                            <Nav.Link className="button button--link navbar__dropdown-toggle is-online" data-toggle="dropdown">
                                <span className="avatar-name">Natalie Dormer</span>
                                <span className="avr-photo">
                                    <Image src={avrPhoto} roundedCircle/>
                                </span>
                                <i></i>
                            </Nav.Link>
                            <NavDropdown className="navbar__dropdwon-menu">
                                <Nav.Link href="" className="dropdown-item">
                                    <i className="navbar__icon" data-feather="user-check"></i>
                                    <span>Edit Profile</span>
                                </Nav.Link>
                                <Nav.Link href="" className="dropdown-item">
                                    <i className="navbar__icon" data-feather="help-circle"></i>
                                    <span>Help</span>
                                </Nav.Link>
                                <Nav.Link href="" className="dropdown-item">
                                    <i className="navbar__icon" data-feather="log-out"></i>
                                    <span>Logout</span>     
                                </Nav.Link>
                            </NavDropdown>
                        </Nav.Item>
                    </Nav.Item>
                </Navbar.Collapse>
            </div>
        );
    }
}