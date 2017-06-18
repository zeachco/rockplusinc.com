import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Price from 'cms-core/src/components/Price/Price';
import AddToCart from '../AddToCart';

const Details = require('./Details');
const NoImageAvail = require('../../img/nopic.png');

const Item = ({item}) => {
  const id = item.get('_id');
  const name = item.get('name');
  const shortDescription = item.get('shortDescription');
  const price = item.getPrice();
  const code = item.get('code');
  const showBackorder = item.flag('backorder');
  const showNewArrival =  item.flag('arrival') && !showBackorder;
  const showNew = item.flag('new') && !showBackorder;
  const showNewPrice = item.flag('price') && !showBackorder;
  const showClearance = item.flag('clearance') && !showBackorder;

  const NewArrivalImage = require(`img/newarrival/new-arrival-${Math.ceil(Math.random() * 4)}.gif`);
  const NewImage = require(`img/new/new${Math.ceil(Math.random() * 9)}.gif`);
  const NewPriceImage = require(`img/newprice/new-price-${Math.ceil(Math.random() * 4)}.gif`);
  const BackorderImage = require('img/backorder/bo2.png');
  const imgFull = item.get('files')[0] || NoImageAvail;
  const imgThumb = item.get('files')[0] ? imgFull + '/thumb' : NoImageAvail;
  return (
    <div className="item">
      <div className="pre-item">
        {showBackorder && (<img className="backorder" src={BackorderImage} alt="Backorder" />)}
        {showNewArrival && (<img
          src={NewArrivalImage}
          className="itemLabelImg"
          alt="New arrival!"
          id={id}/>)}
        {showNew && (<img src={NewImage} className="itemLabelImg" alt="New product!" id={id}/>)}
        {showNewPrice && (<img src={NewPriceImage} className="itemLabelImg" alt="New price!" id={id}/>)}
        <br/>
        <b>{name}</b><br/>
        <b>{shortDescription}</b><br/>
        <div className="side_item" style={{ float: 'right' }}></div>
        <span>
          <small>
            <Details
              imgClassName="png_alpha"
              src={imgFull}
              thumbsSrc={imgThumb}
              title={name}
              item={item}/>
          </small>
        </span><br/>
        <small>{code !== name ? code : ''}</small><br/>
        <span className={cx({clearance: showClearance})}>
          {!!price && !showBackorder && (<div><Price value={+price} /><AddToCart item={item} /></div>)}
        </span><br/>
      </div>
    </div>
  )
};

Item.propTypes = {
  item: PropTypes.object
};

module.exports = Item;
