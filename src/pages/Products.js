import React, { PropTypes } from 'react';
import { connect} from 'react-redux';

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
      searchItems(params.search);
    }
  }
  render() {
    const {items, isLoading} = this.props;
    return (
      <div>
        <Sidebar {...this.props}/>
        <div
          id="item_list"
          style={{
          opacity: isLoading
            ? 0.1
            : 1
        }}>
          {items.map(i => {
            return (<Item key={i.get('_id')} item={i} />);
          })}
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
