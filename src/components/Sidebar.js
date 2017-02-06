import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

const Sidebar = ({categories, displayName, isMobile, params}) => {
	const current = params && params.category;

	const navigate = ev => {
		browserHistory.push('/category/' + ev.target.value + '2');
	}

	const renderCategory = cat => {
		let classes = 'category__' + cat.value;
		if (cat.value === current) {
			classes += ' current';
		}
		return (
			<li key={cat.value}>
				<Link style={cat.style} className={classes} to={`/category/${cat.value}`}>{cat.label}</Link>
			</li>
		);
	}

	if (!isMobile) {
		return (
			<div id="sidenav">
				<ul>
					Welcome<br/> {displayName}
					<hr/>
					<li>
						<Link to='/' className={!current
							? 'current'
							: ''}>Home</Link>
					</li>
					<li>
							<Link to="/logout">logout</Link>
					</li>
					<li>
						<Link style={{
							color: 'red'
						}} to="/category/new">New Products</Link>
					</li>
					<li>
						<Link
							style={{
							color: 'orange'
						}}
							to="/category/arrival">New Arrivals</Link>
					</li>
					<li>
						<Link
							style={{
							color: 'teal'
						}}
							to="/category/clearance">Clearance</Link>
					</li>
					<hr/> {categories.map(renderCategory)}
				</ul>
			</div>
		);
	} else {
		return <div className="mobile_categories">
			<select onChange={navigate} value={current || 'home'}>
				{[
					{
						value: 'home',
						label: 'Home'
					},
					...categories
				].map(cat => (
					<option style={cat.style} key={cat.value} value={cat.value}>{cat.label}</option>
				))}
			</select>
		</div>
	}
}

const mapStatetoProps = (store, ownProps) => {
	return ({
		isAuth: store.session.isAuth,
		isLoading: store.session.isLoading,
		session: store.session,
		categories: store.categories,
		displayName: store.session.firstName || store.session.username,
		isMobile: store.geometry.innerWidth <= 800
	})
};

const ConnectedSidebar = connect(mapStatetoProps)(Sidebar)

export {ConnectedSidebar as Sidebar};
