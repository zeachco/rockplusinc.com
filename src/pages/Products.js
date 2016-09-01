import React from 'react';
// import bridge from 'core/bridge';
import {Sidebar, Item} from '../components';
import {connect} from 'react-redux';
// import store from 'core/store';

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
    if (!this.state.loading) {
      this.setState({loading: true});
      // const path = this.props.params.category
      //   ? '/category/' + this.props.params.category
      //   : '/search/' + this.props.params.search;
      // bridge.get('/api/v2/items' + path).then(data => {
      //   this.setState({'items': data, loading: false});
      //   store.set('items', data);
      // });
    }
  }
  render() {
    return (
      <div>
        <Sidebar {...this.props}/>
        <div id="item_list" style={{
          opacity: this.state.loading
            ? .5
            : 1
        }}>
          {this.state.items.map(i => (<Item key={i._id} {...i}/>))}
        </div>
      </div>
    );
  }
}

const ConectedProducts = connect()(Products);

export {ConectedProducts as Products};
export default ConectedProducts;
