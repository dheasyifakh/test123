import React from 'react';
import {Navbar} from 'react-bootstrap';
import NavbarNav from './navbarnav/NavbarNav';
//import NavbarNavLink from './navbarnav/NavbarNavLink';

export default () =>(
    <div>
        <Navbar className="navbar__body">
            <NavbarNav/>
        </Navbar>
    </div>
);
