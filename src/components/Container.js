import React, { Fragment } from 'react';
import Menu from './Menu';

function Container({ children }) {
	return (
		<Fragment>
			<Menu />
			<main>{children}</main>
		</Fragment>
	);
}

export default Container;
