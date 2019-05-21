import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
				<Link className="navbar-brand" to="/">Navbar</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
					<ul className="navbar-nav justify-content-end" >
						<li className="nav-item">
							<Link className="nav-link" to="/">All <span className="sr-only">(current)</span></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/active">Active</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/completed">Completed</Link>
						</li>
					</ul>
				</div>
			</nav>
	);
}

export default Navbar;