import React from 'react';
import Details from './Details';
import NoImageAvail from 'img/nopic.png';
import AddToCart from './Details/AddToCart';
import {Price} from 'components';
// import Counter from './Details/counter';

export const Item = ({item}) => {
  const {
    _id,
    labels,
    name,
    shortDescription,
    files
  } = item.data || item;
  const price = item.getPrice();

  const showBackorder = item.flag('backorder');
  const showNewArrival =  item.flag('arrival') && !showBackorder;
  const showNew = item.flag('new') && !showBackorder;
  const showNewPrice = item.flag('price') && !showBackorder;
  const showClearance = item.flag('clearance') && !showBackorder;

  const NewArrivalImage = require(`img/newarrival/new-arrival-${Math.ceil(Math.random() * 4)}.gif`);
  const NewImage = require(`img/new/new${Math.ceil(Math.random() * 9)}.gif`);
  const NewPriceImage = require(`img/newprice/new-price-${Math.ceil(Math.random() * 4)}.gif`);
  const BackorderImage = require('img/backorder/bo2.png');
  const imgFull = files[0] || NoImageAvail;
  const imgThumb = files[0] ? imgFull + '/thumb' : NoImageAvail;

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
        <span className={showClearance
          ? 'clearance'
          : ''}>
          {!!price && !showBackorder && (
            <div><Price value={price} /></div>
          )}
        </span><br/>
      </div>
    </div>
  )
};

const {object} = React.PropTypes;
Item.propTypes = {
  item: object
};

export default Item;
