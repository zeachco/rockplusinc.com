import React from 'react';
import SkyLight from 'react-skylight';

class LightBox extends React.Component {
  constructor() {
    super()
    this.state = {
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
        <SkyLight hideOnOverlayClicked ref="customDialog" title={title}>
          <div className={classes} style={bg}></div>
        </SkyLight>
      </div>
    )
  }
}

LightBox.displayName = 'LightBox';

export default LightBox;
