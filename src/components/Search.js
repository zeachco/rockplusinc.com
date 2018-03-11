import React from 'react';
import { browserHistory } from 'react-router';
import autoBind from 'auto-bind-es5';

class Search extends React.Component {
  constructor(...props) {
    super(...props);
    this.word = '';
    this.state = {
      loading: false
    };
    autoBind(this);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  onType(e) {
    e.preventDefault();
    this.word = encodeURIComponent(e.target.value);
    if (this.word) {
      this.setState({loading: true});
      clearTimeout(this.timer);
      this.timer = setTimeout(this.search, 1750);
    } else {
      this.setState({loading: false});
    }
  }
  search(e) {
    if (e) {
      e.preventDefault();
    }
    clearTimeout(this.timer);
    this.setState({ loading: false });
    if (this.word) browserHistory.push(`/search/${this.word}`);
  }
  render() {
    const classes = this.state.loading ? 'loading' : '';
    return (
      <div id="search">
        <form onSubmit={this.search} >
          <input className={classes} onChange={this.onType} type="text" autoComplete={false} name="search" placeholder="search items..." />
        </form>
      </div>
    );
  }
}

export default Search;
