import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {media} from '../../utils/api'
import Price from '../Price';
import AddToCart from '../AddToCart';

import Details from './Details';
import NoImageAvail from '../../img/nopic.png';

const randomItemFromList = list => list[Math.ceil(Math.random() * list.length - 1)];

const newPriceIcons = [
  require('../../img/newprice/new-price-1.gif'),
  require('../../img/newprice/new-price-2.gif'),
  require('../../img/newprice/new-price-3.gif'),
  require('../../img/newprice/new-price-4.gif')
];

const newIcons = [
  require('../../img/new/new1.gif'),
  require('../../img/new/new2.gif'),
  require('../../img/new/new3.gif'),
  require('../../img/new/new4.gif'),
  require('../../img/new/new5.gif'),
  require('../../img/new/new6.gif'),
  require('../../img/new/new7.gif'),
  require('../../img/new/new8.gif'),
  require('../../img/new/new9.gif')
];

const newArrivalIcons = [
  require('../../img/newarrival/new-arrival-1.gif'),
  require('../../img/newarrival/new-arrival-2.gif'),
  require('../../img/newarrival/new-arrival-3.gif'),
  require('../../img/newarrival/new-arrival-4.gif')
];

const backorderIcons = [
  require('../../img/backorder/bo-1.png'),
  require('../../img/backorder/bo2.png')
];

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

  const NewArrivalImage = randomItemFromList(newArrivalIcons)
  const NewImage = randomItemFromList(newIcons);
  const NewPriceImage = randomItemFromList(newPriceIcons);
  const BackorderImage = randomItemFromList(backorderIcons);
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
              src={media(imgFull)}
              thumbsSrc={media(imgThumb)}
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

export default Item;
