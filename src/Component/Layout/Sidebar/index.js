import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import UserInfo from './UserInfo';
import Nav from './Nav';
import './sidebar.scss';
import { Store } from '../../../flux/index';

class SideBar extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          menuVisible: false,
          sidebarNavItems: Store.getMenuItems()
        };
    
        this.onChange = this.onChange.bind(this);
      }
    
      componentWillMount() {
        Store.addChangeListener(this.onChange);
      }
    
      componentWillUnmount() {
        Store.removeChangeListener(this.onChange);
      }
    
      onChange() {
        this.setState({
          ...this.state,
          menuVisible: Store.getMenuState(),
          sidebarNavItems: Store.getMenuItems()
        });
      }
    render() {
       
        return (
             <div className="sidebar" >
                <div className="sidebar-wrapper">
                    <UserInfo/>
                    <div className="line"></div>
                    <Nav/>
                </div>
                <div className="sidebar-background">
                </div>
             </div>
        );
    }
}

// const mapStateToProps = state => ({
//     enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
//     backgroundColor: state.ThemeOptions.backgroundColor,
//     backgroundImage: state.ThemeOptions.backgroundImage
//   });
  
  export default SideBar;