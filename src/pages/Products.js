import React from 'react';
import {Sidebar, Item} from '../components';
import {connect} from 'react-redux';
import {fetchCategory, searchItems} from '../store/actions';

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
    if (this.props.params.category) {
      fetchCategory(this.props.params.category);
    } else {
      searchItems(this.props.params.search);
    }
  }
  render() {
    const {items, isLoading} = this.props;
    return (
      <div>
        <Sidebar {...this.props}/>
        <div id="item_list" style={{
          transform: isLoading ? 'translateY(100%)': 'none'
        }}>
          {items.map(i => (<Item key={i._id} {...i}/>))}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = store => ({
  items: store.itemReducer.data,
  isLoading: store.itemReducer.isLoading
});

const ConectedProducts = connect(mapStatetoProps)(Products);
export {ConectedProducts as Products};
