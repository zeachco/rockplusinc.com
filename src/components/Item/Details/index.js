import React from 'react';
import SkyLight from 'react-skylight';
import VisibilitySensor from 'react-visibility-sensor';
import AddToCart from './AddToCart';
import Counter from './counter';
import {currency} from '../../../core/utils'

class LightBox extends React.Component {
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
    const {
      thumbsSrc,
      src,
      title,
      imgClassName,
      getPrice,
      selectOption,
      options,
      name,
      shortDescription,
      description
    } = this.props;
    const {loading, isVisible} = this.state;
    const price = getPrice().value;
    const bg = {
      'backgroundImage': `url("${loading
        ? thumbsSrc
        : src}")`
    };
    const classes = `lightboxImg_container ${loading
      ? 'loading'
      : ''}`

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
                      <td>{currency((price > 0)
                          ? price
                          : 0) + '$'}</td>
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
                    <select onChange={e => {
                      e.preventDefault();
                      selectOption(og.code, e.target.value);
                      this.setState({dynamicPrice: getPrice()});
                    }}>
                      {og
                        .options
                        .map((o, index) => (
                          <option value={index} key={o.code}>{o.code}</option>
                        ))}
                    </select>
                  </div>
                ))}
                <AddToCart {...this.props}/>
                <Counter {...this.props}/>
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

export default LightBox;
