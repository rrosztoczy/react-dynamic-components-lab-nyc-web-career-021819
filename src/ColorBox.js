import React, { Component } from 'react';

export default class ColorBox extends Component {
  // My current issue is... I need to decrement AFTER using the opacity...
  render() {
    const initialOpacity = this.props.opacity;
    const newOpacity = initialOpacity - 0.1

    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: initialOpacity}}>
              <ColorBox opacity={newOpacity} />
        </div>
      )
      } else {
        return null
      }
  }
  
}
