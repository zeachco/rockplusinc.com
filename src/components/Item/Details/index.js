import React from 'react';
import SkyLight from 'react-skylight';
import VisibilitySensor from 'react-visibility-sensor';
import AddToCart from './AddToCart';
import cx from 'classnames';
import { Price } from 'components';

class ItemDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      loading: true
    };
  }

  open() {
    this
      .refs
      .customDialog
      .show();
    let {src} = this.props;
    let img = new Image();
    img.src = src;
    this.setState({
      loading: !img.complete
    });
    img.addEventListener('load', this.loaded.bind(this));
  }

  loaded(e) {
    this.setState({loading: false});
  }

  onVisibleChange(isVisible) {
    this.setState({isVisible});
  }

  render() {
    const {imgClassName, item, thumbsSrc, src} = this.props;
    const {
      title,
      options,
      name,
      shortDescription,
      description
    } = item.data;
    const {loading, isVisible} = this.state;
    const price = item.getPrice();
    const bg = {
      'backgroundImage': `url("${loading
        ? thumbsSrc
        : src}")`
    };
    const classes = cx('lightboxImg_container', {
      loading: !!loading
    });

    const listingSrcImg = isVisible
      ? thumbsSrc
      : null

    return (
      <VisibilitySensor
        partialVisibility={true}
        onChange={isVisible
        ? () => {}
        : this
          .onVisibleChange
          .bind(this)}>
        <div className="item-detail">
          <img
            className={imgClassName}
            style={{
            opacity: isVisible
              ? 1
              : 0
          }}
            src={listingSrcImg}
            alt={title}
            onClick={this
            .open
            .bind(this)}></img>
          <SkyLight hideOnOverlayClicked ref="customDialog" title={title}>
            <div className="info">
              <h3>Details</h3>
              <center>
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>{name}</td>
                    </tr>
                    {shortDescription && (
                      <tr>
                        <td>Size:</td>
                        <td>{shortDescription}</td>
                      </tr>
                    )}
                    <tr>
                      <td>Price:</td>
                      <td><Price value={price} /></td>
                    </tr>
                  </tbody>
                </table>
                <div
                  className="item_description"
                  dangerouslySetInnerHTML={{
                  __html: description.replace(/\n/g, '<br/>')
                }}></div>
                {options.map(og => (
                  <div className="item-option-select" key={og.code}>
                    <label>{og.code}</label>
                    <select
                      onChange={e => {
                      e.preventDefault();
                      item.selectOption(og.code, e.target.value);
                      this.setState({dynamicPrice: item.getPrice()});
                    }}>
                      {og
                        .options
                        .map((o, index) => (
                          <option value={o.code} key={o.code}>{o.code}</option>
                        ))}
                    </select>
                  </div>
                ))}
              </center>
            </div>
            <div className={classes}>
              <div className="lightboxImg" style={bg}></div>
            </div>
          </SkyLight>
        </div>
      </VisibilitySensor>
    )
  }
}

export default ItemDetails;
