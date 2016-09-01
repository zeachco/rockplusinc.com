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
    const {items} = this.props;
    return (
      <div>
        <Sidebar {...this.props}/>
        <div id="item_list" style={{
          opacity: this.state.loading
            ? .5
            : 1
        }}>
          {items.map(i => (<Item key={i._id} {...i}/>))}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (store, ownProps) => ({items: store.items});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const ConectedProducts = connect(mapStatetoProps, mapDispatchToProps)(Products);

export {ConectedProducts as Products};
export default ConectedProducts;
