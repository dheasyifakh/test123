import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Collapse} from 'react-bootstrap';

class Main extends Component{
	constructor(props, context) {
		super(props, context);
	
		this.state = {
		  open: false,
		};
	  }
    render(){
		const { open } = this.state;
        return(
            <Fragment>
                <ul className="main-menu__lists">
					<li className="main-menu__title">
						<span className="main-menu__title-text">Main</span>
					</li>
					<li className="main-menu__list" onClick={() => this.setState({ open: !open })}
          					aria-controls="sub-menu"
          					aria-expanded={open}>
						<Link to="/dashboard" >
							<i data-feather="anchor"></i>
							<span>Dashboard</span>
							<span 
							className="icon-arrow" data-toggle="collapse"></span>
						</Link>
						<Collapse in={this.state.open}>
						<ul className="sub-menu"  id="sub-menu">
							<li className="sub-menu__list ">
								<a href="./page-lists.html">View All Pages</a>
							</li>
							<li className="sub-menu__list">
								<a href="./page-create.html">Create New Page</a>
							</li>
						</ul>
						</Collapse>
					</li>
					<li className="main-menu__list">
						<Link to="/pages"  onClick={() => this.setState({ open: !open })}
          					aria-controls="sub-menu"
          					aria-expanded={open}>
							<i data-feather="anchor"></i>
							<span>Pages</span>
							<span 
							className="icon-arrow" data-toggle="collapse"></span>
						</Link>
						
					</li>
					<li className="main-menu__list">
						<Link to="/form">
							<i data-feather="anchor"></i>
							<span>Form</span>
						</Link>
					</li>
					<li className="main-menu__list">
						<Link to="/media">
							<i data-feather="anchor"></i>
							<span>Media</span>
						</Link>
					</li>
					<li className="main-menu__list">
						<Link to="/listing">
							<i data-feather="anchor"></i>
							<span>Listing</span>
						</Link>
					</li>
					<li className="main-menu__list">
						<Link to="/profile">
							<i data-feather="anchor"></i>
							<span>Profile</span>
						</Link>
					</li>
				</ul>
            </Fragment>
        );
    }
}

export default Main;