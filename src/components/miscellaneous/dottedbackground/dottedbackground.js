import React from "react";
import PropTypes from "prop-types";

import "./dottedbackground.scss";

export default class DottedBackground extends React.Component {

    render() {
      const offsetX = `-${this.props.offsetX}px`;
      const offsetY = `-${this.props.offsetY}px`;
      const width = `${this.props.width}px`;
      const height = `${this.props.height}px`;

      return (
        <div 
          className="dotted-background"
          style={{
            width:  width,
            height: height,
            top:    this.props.top    ? offsetY : "",
            bottom: this.props.bottom ? offsetY : "",
            left:   this.props.left   ? offsetX : "",
            right:  this.props.right  ? offsetX : "",
          }}
        />
      );
    }

}

DottedBackground.defaultProps = {
  offsetX: 30,
  offsetY: 30,
  width:  200,
  height: 100,
  top:    false,
  bottom: false,
  left:   false,
  right:  false,
}
  
DottedBackground.propTypes = {
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  height: PropTypes.number,
  width:  PropTypes.number,
  top:    PropTypes.bool,
  bottom: PropTypes.bool,
  left:   PropTypes.bool,
  right:  PropTypes.bool,
}
