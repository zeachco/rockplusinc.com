import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SkyLight from 'react-skylight';
import VisibilitySensor from 'react-visibility-sensor';
import cx from 'classnames';
import autoBind from 'auto-bind-es5';
import {connect} from'react-redux';

import Price from '../../Price';
import AddToCart from '../../AddToCart';
import ItemOptions from './ItemOptions';
import { open as openItemDetails, close as closeItemDetails } from '../../../store/actions/itemDetails';
import {media} from '../../../utils/api'

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
    openItemDetails(this.props.item);
    this.customDialog.show();
    const { src, canSeeImages } = this.props;
    if(canSeeImages){
      const img = new Image();
      img.src = src;
      this.setState({
        loading: !img.complete
      });
      img.addEventListener('load', this.loaded);
    }  else {
      this.loaded();
    }
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
      canSeeImages,
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
    const { loading } = this.state;
    const bgStyle = {};

    if(canSeeImages) {
      bgStyle.backgroundImage = `url("${loading
        ? thumbsSrc
        : media(mainImage)}")`
    }
    const imgClasses = cx('lightboxImg_container', {
      loading: !!loading
    });

    const listingSrcImg = isVisible ? thumbsSrc : null;

    const priceJsx = canSeePrices ? (
      <tr>
        <td>Price:</td>
        <td><Price value={ this.props.calculatedPrice } /><AddToCart item={item} /></td>
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
          <SkyLight 
            hideOnOverlayClicked
            ref={el => this.customDialog = el}
            afterClose={closeItemDetails}
            title={title}>
            <div>
              <div className="col-half">
                <div className={imgClasses}>
                  <div className="lightboxImg" style={bgStyle} />
                </div>
                {item.get('files').filter(f => mainImage !== f).map(img => (
                  <img
                    key={img}
                    className="otherImages"
                    onClick={() => this.setState({mainImage: img})}
                    src={media(img)}
                    alt="thumb"
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
                  <ItemOptions options={options} initialValues={item.selectedOptions} />
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
  canSeePrices: PropTypes.bool.isRequired,
  canSeeImages: PropTypes.bool.isRequired,
  calculatedPrice: PropTypes.number.isRequired
};

export default connect(state => {
  return {
    calculatedPrice: state.itemDetails.calculatedPrice,
    canSeePrices: state.session.meta.prices,
    canSeeImages: state.session.meta.images
  };
})(ItemDetails);
