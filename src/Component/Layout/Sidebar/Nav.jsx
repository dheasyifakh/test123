import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Collapse, NavItem, NavLink} from 'react-bootstrap';


const SidebarNavItem = ({item}) =>(
    <NavItem as ="ul">
        {/* <NavLink tag={RouteNavLink} to={item.to}>

        </NavLink> */}
        <span>Main</span>
        <NavItem as="li">
            <Link to="/">Dashboard</Link>
        </NavItem>
        <NavItem as ="li">
            <Link to="/tables">Tables</Link>
        </NavItem>
        <NavItem as="li">
            <Link to="/post">Post</Link>
        </NavItem>
        
    </NavItem>
);

export default SidebarNavItem;