import React from 'react';
import {Mesure, Mass} from './metric';
import Details from './Details';

const currency = n => n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export const Item = props => {

  const {
    _id,
    labels,
    code,
    price,
    name,
    width,
    height,
    depth,
    weight
  } = props;

  const showBackorder = !!(+ labels.backorder);
  const showNewArrival = !!(+ labels.arrival) && !showBackorder;
  const showNew = !!(+ labels.new) && !showBackorder;
  const showNewPrice = !!(+ labels.price) && !showBackorder;

  const NewArrivalImage = require(`../../img/newarrival/new-arrival-${Math.ceil(Math.random() * 4)}.gif`);
  const NewImage = require(`../../img/new/new${Math.ceil(Math.random() * 9)}.gif`);
  const NewPriceImage = require(`../../img/newprice/new-price-${Math.ceil(Math.random() * 4)}.gif`);
  const BackorderImage = require('../../img/backorder/bo2.png');

  return (
    <div className="item">
      <div className="pre-item">
        {showBackorder && (<img className={'backorder'} src={BackorderImage} alt={'Backorder'}/>)}
        {showNewArrival && (<img src={NewArrivalImage} className={'itemLabelImg'} alt="New arrival!" id={_id}/>)}
        {showNew && (<img src={NewImage} className={'itemLabelImg'} alt="New product!" id={_id}/>)}
        {showNewPrice && (<img src={NewPriceImage} className={'itemLabelImg'} alt="New price!" id={_id}/>)}
        <br/>
        <b>{name}</b><br/>
        <div className="side_item" style={{
          float: 'right'
        }}>
          <Mesure value={width}/><br/>
          <Mesure value={height}/><br/>
          <Mesure value={depth}/><br/>
          <Mass value={weight}/><br/>
        </div>
        <span>
          <small>
            {/* {<img className="png_alpha" alt={code} src={`//rockplusinc.com/img/full/thumbs/_${code}.png`}/>} */}
            <Details imgClassName={"png_alpha"} src={`//rockplusinc.com/img/full/_${code}.png`} thumbsSrc={`//rockplusinc.com/img/full/thumbs/_${code}.png`} title={name}/>
          </small>
        </span><br/>
        2 Per Packs<br/>
        <span className={+ labels.clearance
          ? 'clearance'
          : ''}>
          {price
            ? currency(price)
            : 'no price'}$
        </span><br/>
      </div>
    </div>
  )
};

export default Item;
