import React from 'react';

export class AnR extends React.Component{

  handleClick(){
    console.log("item qty changed");
  }

  render() {
    return (
      <span onClick={this.handleClick.bind(this)}>
        
      </span>
    );
  }
};

export default AnR;
