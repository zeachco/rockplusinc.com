import React from 'react';
import {Mesure, Mass} from './metric';

const currency = n => n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export const Item = props => (
  <div className="item">
    <img src={`/img/newprice/new-price-${Math.ceil(Math.random() * 4)}.gif`} alt="New price!" id={props._id}/><br/>
    <small style={{
      color: '#ccc',
      float: 'left'
    }}>{props.price || 'no price'}</small>
    <b>{props.name}</b><br/>
    <div className="side_item" style={{
      float: 'right'
    }}>
      <Mesure value={props.width}/><br/>
      <Mesure value={props.height}/><br/>
      <Mesure value={props.depth}/><br/>
      <Mass value={props.weight}/><br/>
    </div>
    <span>
      <small>
        <img className="png_alpha" alt={props.code} src={`//rockplusinc.com/img/full/thumbs/_${props.code}.png`}/>
      </small>
    </span><br/>
    2 Per Packs<br/>
    <span className="clearance">{currency(props.price)}
      $</span><br/>
  </div>
);

export default Item;
