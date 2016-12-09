import React from 'react';
import {Link} from 'react-router';

export const MenuItem = props => {
	const {style, to, children, selected} = props;
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