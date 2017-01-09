import React from 'react';
import Details from './Details';
import NoImageAvail from '../../img/nopic.png';
import AddToCart from './Details/AddToCart';
import Counter from './Details/counter';

const currency = n => n
  .toFixed(2)
  .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export const Item = props => {
  const {
    _id,
    labels,
    price,
    name,
    shortDescription,
    files
  } = props;

  const showBackorder = !!(labels.indexOf('backorder') !== -1);
  const showNewArrival = !!(labels.indexOf('arrival') !== -1) && !showBackorder;
  const showNew = !!(labels.indexOf('new') !== -1) && !showBackorder;
  const showNewPrice = !!(labels.indexOf('price') !== -1) && !showBackorder;
  const showClearance = !!(labels.indexOf('clearance') !== -1) && !showBackorder;

  const NewArrivalImage = require(`../../img/newarrival/new-arrival-${Math.ceil(Math.random() * 4)}.gif`);
  const NewImage = require(`../../img/new/new${Math.ceil(Math.random() * 9)}.gif`);
  const NewPriceImage = require(`../../img/newprice/new-price-${Math.ceil(Math.random() * 4)}.gif`);
  const BackorderImage = require('../../img/backorder/bo2.png');
  const imgFull = files[0] || NoImageAvail;
  const imgThumb = files[0]
    ? imgFull + '/thumb'
    : NoImageAvail;

  return (
    <div className="item">
      <div className="pre-item">
        {showBackorder && (<img className={'backorder'} src={BackorderImage} alt={'Backorder'}/>)}
        {showNewArrival && (<img
          src={NewArrivalImage}
          className={'itemLabelImg'}
          alt="New arrival!"
          id={_id}/>)}
        {showNew && (<img src={NewImage} className="itemLabelImg" alt="New product!" id={_id}/>)}
        {showNewPrice && (<img src={NewPriceImage} className={'itemLabelImg'} alt="New price!" id={_id}/>)}
        <br/>
        <b>{name}</b><br/>
        <b>{shortDescription}</b><br/>
        <div className="side_item" style={{
          float: 'right'
        }}></div>
        <span>
          <small>
            <Details
              imgClassName="png_alpha"
              src={imgFull}
              thumbsSrc={imgThumb}
              title={name}
              {...props}/>
          </small>
        </span><br/>
        <span className={showClearance
          ? 'clearance'
          : ''}>
          {!!price && !showBackorder && (
            <div>{currency((price > 0)
                ? price
                : 0) + '$'}<AddToCart {...props}/><Counter {...props}/></div>
          )}
        </span><br/>
      </div>
    </div>
  )
};

export default Item;
