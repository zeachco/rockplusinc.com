import React from 'react';
import SkyLight from 'react-skylight';
import Glyph from '../../img/cart.png';
import Increment from './increment';
import Decrement from './decrement';
import Remove from './remove';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { clearCart, sendCart } from '../../store/actions';

const currency = n => n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export class Cart extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
		this.sendOrder = this.sendOrder.bind(this);
		this.updateNotes = this.updateNotes.bind(this);
		this.printRow = this.printRow.bind(this);
	}

	handleClick() {
		this.refs.customDialog.show();
	}

	updateNotes(ev) {
		this.setState({
			notes: ev.target.value
		});
	}

	sendOrder() {
		//send order by e-mail
		const preparedItems = this.props.cart.map((i) => {
			return {
				name: i.name || 'N/A',
				code: i.code || 'N/A',
				description: i.description || 'N/A',
				quantity: i.quantity
			}
		});

		sendCart({
			items: preparedItems,
			notes: this.state.notes
		});
		this.props.clearCart();
		this.refs.customDialog.hide();
	}

	printRow(i, index) {
		const {id, name, price, quantity, description} = i;

		this.total += (((price > 0) ? price : 0) * quantity)
    this.totalQty += i.quantity;

		return (<div key={index} className="row">
			<span className="small-col">
				{name || '-'} {description || '-'}
			</span>
			<span className="small-col">
				{currency((price > 0) ? price : 0) + '$'}
			</span>
			<span className="addAndRemove small-col">
				<Increment item={i}/>&nbsp;{quantity}&nbsp;<Decrement item={i}/>
			</span>
			<span className="small-col">
				{currency(((price > 0) ? price : 0) * quantity) + '$'}
			</span>
			<Remove id={id} />
		</div>);
	}

	render() {
		this.total = 0;
		this.totalQty = 0;

		return (
			<span className='cart-modal'>
				<div className='cart' onClick={this.handleClick}>
					Checkout&nbsp;<img src={Glyph} alt='glyph-cart'/>
				</div>
				<SkyLight hideOnOverlayClicked ref="customDialog" title='Checkout'>
					<div className="scrolling-content">
						{this.props.cart.map(this.printRow)}
					</div>
					<div className="row">
						<textarea rows="6" onChange={this.updateNotes}
							placeholder="Notes"></textarea>
					</div>
					<div className="row summary">
						Total = {currency(this.total) + '$'} for  {this.totalQty} product(s)
						<button className="btn-cart" onClick={this.sendOrder}>Send order</button>
					</div>
				</SkyLight>
			</span>
		);
	}
};

var mapStateToProps = (store) => {
	return{
		cart: store.cart
	};
};

var matchDispatchToProps = (dispatch) => {
	return bindActionCreators({clearCart: clearCart}, dispatch)
};

const ConnectedCart = connect(mapStateToProps, matchDispatchToProps)(Cart);
export {ConnectedCart as Cart};
