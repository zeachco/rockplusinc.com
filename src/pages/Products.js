import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import UmsgContainer from '../containers/UmsgContainer';

const Sidebar = require('../components/Sidebar');
const Item = require('../components/Item');
const { fetchCategory, searchItems } = require('../store/actions/items');

class Products extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.refresh();
  }
  componentDidUpdate(nextProps) {
    if (nextProps.params !== this.props.params) {
      this.refresh();
    }
  }
  refresh() {
    const { params } = this.props;
    if (params.category) {
      fetchCategory(params.category);
    } else {
      searchItems(encodeURIComponent(params.search));
    }
  }
  render() {
    const {items, isLoading} = this.props;
    let content = items.map(i => (<Item key={i.get('_id')} item={i} />));
    if (items.length === 0) {
      content = (<h3>No items found with search "{this.props.params.search}"</h3>);
    }
    return (
      <div>
        <Sidebar {...this.props}/>
        <UmsgContainer />
        <div
          id="item_list"
          style={{
          opacity: isLoading
            ? 0.1
            : 1
        }}>
          {content}
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  params: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStatetoProps = store => {
  return ({
    items: store.itemReducer.data,
    isLoading: store.itemReducer.isLoading
  });
};

module.exports = connect(mapStatetoProps)(Products);
