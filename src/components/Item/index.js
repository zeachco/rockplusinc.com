import React from 'react';
import {Mesure, Mass} from './metric';
import Details from './Details';

const currency = n => n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

export const Item = props => (
  <div className="item">
    <div className="pre-item">
      {
        //Sorry for all that shitty code >> cannot find a way to Vars out of Props !
        // And i never saw that : "export const Item = props => ()" !!

        Boolean(parseInt(props.labels.backorder, 10)) // to check if backorder
        ? <img className={'backorder'} src={'/img/backorder/bo2.png'} alt={'Backorder'} /> // Image overlay
        : ''
      }
      { // New Arrival
        Boolean(parseInt(props.labels.arrival, 10)) && !Boolean(parseInt(props.labels.backorder, 10))
        ? <img src={`/img/newarrival/new-arrival-${Math.ceil(Math.random() * 4)}.gif`} className={'itemLabelImg'} alt="New arrival!" id={props._id}/>
        : ''
      }
      { // New Product
        Boolean(parseInt(props.labels.new, 10)) && !Boolean(parseInt(props.labels.backorder, 10))
        ? <img src={`/img/new/new${Math.ceil(Math.random() * 9)}.gif`} className={'itemLabelImg'} alt="New product!" id={props._id}/>
        : ''
      }
      { // New Price
        Boolean(parseInt(props.labels.price, 10)) && !Boolean(parseInt(props.labels.backorder, 10))
        ? <img src={`/img/newprice/new-price-${Math.ceil(Math.random() * 4)}.gif`} className={'itemLabelImg'} alt="New price!" id={props._id}/>
        : ''
      }
      <br/>
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
          {/* {<img className="png_alpha" alt={props.code} src={`//rockplusinc.com/img/full/thumbs/_${props.code}.png`}/>} */}
          <Details
            imgClassName={"png_alpha"}
            src={`//rockplusinc.com/img/full/_${props.code}.png`}
            thumbsSrc={`//rockplusinc.com/img/full/thumbs/_${props.code}.png`}
            title={props.name}
          />
        </small>
      </span><br/>
      2 Per Packs<br/>
      <span className={Boolean(parseInt(props.labels.clearance, 10)) ? "clearance" : ""}>
        {currency(props.price)}$
      </span><br/>
    </div>
  </div>
);

export default Item;
