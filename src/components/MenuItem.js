import React from 'react';
import PropTypes from 'prop-types';
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

MenuItem.propTypes = {
	style: PropTypes.object,
	to: PropTypes.string,
	selected: PropTypes.bool
}

export default MenuItem;
