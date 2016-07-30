import React from 'react';
import { ActivityIndicator } from 'react-native';

export default class Loading extends React.Component {
  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render () {
    return (
      <ActivityIndicator
        color={this.props.color}
        ref={c => this._root = c}
        style={this.props.style}
        animating={true}
        size="large"
      />
    );
  }
}
