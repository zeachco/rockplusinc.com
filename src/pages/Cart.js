import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Sidebar from '../components/Sidebar';

const CartPage = ({
  cartItems
}) => (
  <div>
    <Sidebar />
    <div id="home_content">
      <table className="cart">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Individual Price</th>
        </tr>
        {cartItems.map(row => (
          <tr key={row.id}>
            <td>{row.name}</td>
          </tr>
        ))}
      </table>
      <footer>
        <p>
          <a className="button-link" href="mailto:info@rockplusinc.com">info@rockplusinc.com</a><br/>
          <a className="button-link" href="tel:450-651-6366">phone: 450-651-6366</a><br/>
          <a className="button-link" href="tel:450-651-3695">fax: 450-651-3695</a><br/>
          <a className="button-link" href="tel:1-866-651-6366">international: 1-866-651-6366</a>
        </p>
        <p>
          1700 Ch. Chambly, Longueuil
          Qc, Canada, J4J 3X5
        </p>
      </footer>
    </div>
  </div>
);

CartPage.propTypes = {
  cartItems: PropTypes.array.isRequired
};

export default connect(state => ({
  cartItems: state.cart.items
}))(CartPage);
