import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
	return (
		<div>
			<ul>
				<li>
					<Link to='/'>
						<p>Home</p>
					</Link>
				</li>

				<li>
					<Link to='/about'>
						<p>About</p>
					</Link>
				</li>

				<li>
					<Link to='/todolist'>
						<p>To Do List</p>
					</Link>
				</li>

				<li>
					<Link to='/followers'>
						<p>Followers</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
