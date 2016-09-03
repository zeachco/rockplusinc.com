import React from 'react';
import SkyLight from 'react-skylight';

const dialogStyle = {
  color: '#000000',
  width: '50%',
  height: '550px',
  marginTop: '-300px',
  marginLeft: '-25%',
  backgroundColor: 'rgba(255, 255, 255, 0.8)'
};

class LightBox extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  open() {
    this.refs.customDialog.show();
    let {src} = this.props;
    console.log('load image...', this.props);
    let img = new Image();
    img.src = src;

    img.addEventListener('loadprogress', function(e) {
      this.setState({
        loadPercent: e.loaded / e.total
      });
    });
    img.addEventListener('load', () => {
      console.log('componentDidMount', src);
      this.setState({loading: false});
    });
  }

  render() {
    const {thumbsSrc, src, title, imgClassName} = this.props;
    const {loading} = this.state;
    const bg = {
      'background-image': `url("${loading
        ? thumbsSrc
        : src}")`
    };
    const classes = `lightboxImg ${loading
      ? 'loading'
      : ''}`
    return (
      <div>
        <img className={imgClassName} src={thumbsSrc} alt={title} onClick={this.open.bind(this)}></img>
        <SkyLight dialogStyles={dialogStyle} hideOnOverlayClicked ref="customDialog" title={title}>
          <div className={classes} style={bg}></div>
        </SkyLight>
      </div>
    )
  }
}

LightBox.displayName = 'LightBox';

export default LightBox;
