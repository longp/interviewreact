import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'
import './Header.css';

class Header extends Component {

	render() {
		function addInterview() {
		
		}
		return (
		  <div>
			  <Navbar brand="Interviewz" left>

				<NavItem onClick={addInterview} href='/'><Icon>note add</Icon></NavItem>
				{/* <NavItem href='/'><Icon>view_module</Icon></NavItem>
				<NavItem href='/'><Icon>refresh</Icon></NavItem>
				<NavItem href='/'><Icon>more_vert</Icon></NavItem> */}

			 </Navbar>
		  </div>
		);
	}
}

export default Header
