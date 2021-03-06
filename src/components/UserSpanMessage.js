import React from 'react';
import PropTypes from 'prop-types';

const UserSpanMessage = ({text, shouldAppear, errorWarningOrInfo = "error"}) => {
  if (shouldAppear !== 'true' || !text) return null;
  var textClass = 'error';
  if (errorWarningOrInfo === 'warning')  textClass = 'warning';
  if (errorWarningOrInfo === 'info')  textClass = 'info';

	return (
    <span className={textClass}>
      {text}
    </span>
	);
};
UserSpanMessage.propTypes = {
  text: PropTypes.string,
  shouldAppear: PropTypes.bool,
  errorWarningOrInfo: PropTypes.string
};

export default UserSpanMessage;

/* const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(UserSpanMessage);
*/
