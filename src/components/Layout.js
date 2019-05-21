import React from 'react';
import Navbar from './Navbar';

class Layout extends React.Component {
	
	
	render () {
		console.log(this.props.children);
		
		return (
			<div>
				<Navbar/>
				{this.props.children}
			</div>
		);
	}
}

export default Layout;

