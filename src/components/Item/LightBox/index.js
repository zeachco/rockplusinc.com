import React from 'react';
import SkyLight from 'react-skylight';

class LightBox extends React.Component {

  render() {

    var style = {
      backgroundColor: '#ffffff',
      color: '#000000',
      width: '50%',
      height: '550px',
      marginTop: '-300px',
      marginLeft: '-25%',
    };

    return (
      <div>
        <img
          className={this.props.imgClassName}
          src={this.props.thumbsSrc}
          alt={this.props.title}
          onClick={() => this.refs.customDialog.show()}>
        </img>
        <SkyLight dialogStyles={style} hideOnOverlayClicked ref="customDialog" title={this.props.title}>
          <img src={this.props.src} alt={this.props.title}/>
        </SkyLight>
      </div>
    )
  }
}

LightBox.displayName = 'LightBox';

export default LightBox;
