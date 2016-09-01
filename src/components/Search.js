import React from 'react';
import {browserHistory} from 'react-router';

export class Search extends React.Component {
  constructor(...props) {
    super(...props);
    this.word = '';
    this.state = {
      loading: false
    };
  }
  search(e) {
    if (e) {
      e.preventDefault();
    }
    clearTimeout(this.timer);
    this.setState({loading: false});
    if (this.word) {
      browserHistory.push('/search/' + this.word);
      // console.log(`will search for "${this.word}"...`);
    }
  }
  onType(e) {
    e.preventDefault();
    this.word = e.target.value;
    if (this.word) {
      this.setState({loading: true});
      clearTimeout(this.timer);
      this.timer = setTimeout(this.search.bind(this), 1750);
    } else {
      this.setState({loading: false});
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    const classes = this.state.loading
      ? 'loading'
      : '';
    return (
      <div id="search">
        <form onSubmit={this.search.bind(this)}>
          <input className={classes} onChange={this.onType.bind(this)} type="text" autoFocus={true} autoComplete={false} name="search" placeholder="search items..."/>
        </form>
      </div>
    );
  }
}

export default Search;
