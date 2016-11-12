import React from 'react';

export class AnR extends React.Component{

  handleClick(){
    console.log("item qty changed");
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>

      </div>
    );
  }
};

export default AnR;
