import React, { PropTypes } from 'react';
// import SkyLight from 'react-skylight';
// import Glyph from 'img/cart.png';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Price } from 'components';
import { cartIncreaseQuantity, cartDecreaseQuantity, cartRemoveItem } from 'store/actions';

import imgTrash from 'img/trash.png';
import imgPlus from 'img/plus.png';
import imgMinus from 'img/minus.png';

const CartRow = ({ item, dispatch, increase, decrease, remove }) => (
  <div className="row">
    <span className="small-col" title={item.description}>
      {item.name || '?'}
    </span>
    <span className="addAndRemove small-col">
      <button onClick={e =>{
          e.preventDefault();
          dispatch(increase(item.getCartId()));
      }} >
        <img src={imgPlus} alt="increment" />
      </button>
      {item.quantity}
      <button onClick={e => {
          e.preventDefault();
          dispatch(decrease(item.getCartId()));
      }} >
        <img src={imgMinus} alt="decrement" />
      </button>
    </span>
    <span className="small-col"><Price value={ item.getPrice() } /></span>
    <button onClick={e => {
      e.preventDefault();
      dispatch(remove(item.getCartId()));
    }} >
      <img src={imgTrash} alt="delete" />
    </button>
  </div>
);

CartRow.propTypes = {
  item: PropTypes.object.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const matchDispatchToProps = dispatch =>({
  dispatch,
  increase: cartIncreaseQuantity,
  decrease: cartDecreaseQuantity,
  remove: cartRemoveItem,
});

const ConnectedCartRow = connect(null, matchDispatchToProps)(CartRow);
export { ConnectedCartRow as CartRow };
