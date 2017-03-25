import React from 'react';
import { Link } from 'react-router';

const MenuItem = ({style, to, children, selected}) => {
	const target = /[^\/]+$/.exec(to);
	return (
		<li>
			<Link
				style={style}
				to={to}
				className={selected === target && target[1]
				? 'current'
				: ''}>
				{children}
				({target})
			</Link>
		</li>
	);
};

module.exports = MenuItem;