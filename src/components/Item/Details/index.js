import React from 'react';
import SkyLight from 'react-skylight';
import VisibilitySensor from 'react-visibility-sensor';
import AddToCart from './AddToCart';

const currency = n => n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

class LightBox extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      loading: true
    };
  }

  open() {
    this.refs.customDialog.show();
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
    // console.log(this.props.title, isVisible);
    this.setState({isVisible});
  }

  render() {
    const {thumbsSrc, src, title, imgClassName, price, name, size, code, description} = this.props;
    const {loading, isVisible} = this.state;
    const bg = {
      'backgroundImage': `url("${loading
        ? thumbsSrc
        : src}")`
    };
    const classes = `lightboxImg_container ${loading
      ? 'loading'
      : ''}`

    return (
      <VisibilitySensor partialVisibility={true} onChange={isVisible
        ? () => {}
        : this.onVisibleChange.bind(this)}>
        <div className="item-detail">
          <img className={imgClassName} style={{
            opacity: isVisible
              ? 1
              : 0
          }} src={isVisible
            ? thumbsSrc
            : null} alt={title} onClick={this.open.bind(this)}></img>
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
                  <tr>
                    <td>Code:</td>
                    <td>{code}</td>
                  </tr>
                  <tr>
                    <td>Size:</td>
                    <td>{size}</td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td>{currency(price) + '$'}</td>
                  </tr>
                  <tr>
                    <td>Description:</td>
                    <td>{description}</td>
                  </tr>
                </tbody>
              </table>
              <AddToCart {...this.props}/>
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
