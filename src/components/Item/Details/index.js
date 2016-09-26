import React from 'react';
import SkyLight from 'react-skylight';
import VisibilitySensor from 'react-visibility-sensor';

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
    const {thumbsSrc, src, title, imgClassName} = this.props;
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
        <div>
          <img className={imgClassName} style={{
            opacity: isVisible
              ? 1
              : 0
          }} src={isVisible
            ? thumbsSrc
            : null} alt={title} onClick={this.open.bind(this)}></img>
          <SkyLight hideOnOverlayClicked ref="customDialog" title={title}>
            <div className={classes}>
              <div className="lightboxImg" style={bg}></div>
            </div>
          </SkyLight>
        </div>
      </VisibilitySensor>
    )
  }
}

LightBox.displayName = 'LightBox';

export default LightBox;
