import React, {Component, PropTypes} from 'react';
import SkyLight from 'react-skylight';
import VisibilitySensor from 'react-visibility-sensor';
import cx from 'classnames';
import autoBind from 'auto-bind-es5';
import {connect} from'react-redux';

import Price from 'cms-core/src/components/Price/Price';

const noop = () => {};

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      loading: true,
      mainImage: props.item.get('files')[0] || ''
    };
    autoBind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      mainImage: nextProps.item.get('files')[0]
    });
  }

  open() {
    this
      .refs
      .customDialog
      .show();
    const { src } = this.props;
    const img = new Image();
    img.src = src;
    this.setState({
      loading: !img.complete
    });
    img.addEventListener('load', this.loaded);
  }

  loaded() {
    this.setState({ loading: false });
  }

  onVisibleChange( isVisible ) {
    this.setState({ isVisible });
  }

  render() {
    const {
      imgClassName,
      item,
      thumbsSrc,
      canSeePrices
    } = this.props;

    const {mainImage} = this.state;

    const {
      title,
      options,
      name,
      code,
      shortDescription,
      description
    } = item.data;
    const isVisible = item.get('visible');
    const { loading, dynamicPrice = item.getPrice() } = this.state;
    const bg = {
      backgroundImage: `url("${loading
        ? thumbsSrc
        : mainImage}")`
    };
    const imgClasses = cx('lightboxImg_container', {
      loading: !!loading
    });

    const listingSrcImg = isVisible ? thumbsSrc : null;

    const priceJsx = canSeePrices ? (
      <tr>
        <td>Price:</td>
        <td><Price value={dynamicPrice} /></td>
      </tr>
    ) : null;

    return (
      <VisibilitySensor
        partialVisibility
        onChange={isVisible ? noop : this.onVisibleChange}
      >
        <div className="item-detail">
          <img
            className={imgClassName}
            style={{ opacity: isVisible ? 1 : 0 }}
            src={listingSrcImg}
            alt={title}
            onClick={this.open}
          />
          <SkyLight hideOnOverlayClicked ref="customDialog" title={title}>
            <div>
              <div className="col-half">
                <div className={imgClasses}>
                  <div className="lightboxImg" style={bg} />
                </div>
                {item.get('files').filter(f => mainImage !== f).map(img => (
                  <img
                    className="otherImages"
                    onClick={() => this.setState({mainImage: img})}
                    src={img}
                  />
                ))}
              </div>
              <div className="col-half">
                <h3>Details</h3>
                <center>
                  <table>
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>{name}</td>
                      </tr>
                      {name !== code && (<tr>
                        <td>Code:</td>
                        <td>{code}</td>
                      </tr>)}
                      {shortDescription && (
                        <tr>
                          <td>Size:</td>
                          <td>{shortDescription}</td>
                        </tr>
                      )}
                      { priceJsx }
                      <tr>
                        <td colSpan={2} className="item_description" dangerouslySetInnerHTML={{ __html: description }} />
                      </tr>
                    </tbody>
                  </table>
                  {options.map(og => (
                    <div className="item-option-select" key={og.code}>
                      <label>{og.code}</label>
                      <select
                        onChange={(e) => {
                          e.preventDefault();
                          item.selectOption(og.code, e.target.value);
                          this.setState({ dynamicPrice: item.getPrice() });
                        }}
                      >
                        {og.options.map((o, index) => (
                          <option value={o.code} key={`${index}_${o.code}`}>{o.code}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </center>
              </div>
            </div>
          </SkyLight>
        </div>
      </VisibilitySensor>
    );
  }
}

ItemDetails.propTypes = {
  src: PropTypes.string.isRequired,
  imgClassName: PropTypes.string.isRequired,
  thumbsSrc: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  canSeePrices: PropTypes.bool.isRequired
};

module.exports = connect(state => ({
  canSeePrices: state.session.meta.prices
}))(ItemDetails);
