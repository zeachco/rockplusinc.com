import React from 'react';
import icon from '../../img/trash.png'

export class Remove extends React.Component{

  handleClick(){
    console.log("item removed");
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <img src={icon} alt="delete"/>
      </div>
    );
  }
};

export default Remove;
