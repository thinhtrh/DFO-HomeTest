/*
*
@author thinhth on 9/9/21
*
*/

import React, {memo, useCallback} from 'react';
import {Pressable, ViewPropTypes} from 'react-native';
import styles from '@components/pressable-wrapper/styles';
import PropTypes from 'prop-types';

const PressableWrapper = memo(props => {
  const {onPress} = props;
  const onPressed = useCallback(() => {
    onPress();
  }, []);

  return (
    <Pressable
      onPress={onPressed}
      style={({pressed}) => [
        styles.default,
        props.defaultStyle,
        pressed && [styles.pressed, props.pressedStyle],
        props.disabled && [styles.disabled, props.disabledStyle],
      ]}
      hitSlop={props?.hitSlop || 10}>
      {props.children}
    </Pressable>
  );
});

PressableWrapper.propTypes = {
  children: PropTypes.node,
  defaultStyle: ViewPropTypes.style,
  pressedStyle: ViewPropTypes.style,
  disabledStyle: ViewPropTypes.style,
};

PressableWrapper.defaultProps = {
  children: null,
  defaultStyle: null,
  pressedStyle: null,
  disabledStyle: null,
};

export default PressableWrapper;
