/*
*
@author thinhth on 9/9/21
*
*/

import React, {memo} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from '@components/text-wrapper/styles';
import {FontSizes} from '@themes/fonts';

const TextWrapper = memo(props => {
  const {text, numberOfLines, style} = props;
  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={[
        styles.default,
        {lineHeight: (style?.fontSize || FontSizes.medium) * 1.3},
        style,
      ]}>
      {text}
    </Text>
  );
});

TextWrapper.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: Text.propTypes.style,
  numberOfLines: PropTypes.number,
};

TextWrapper.defaultProps = {
  text: '',
  style: null,
  numberOfLines: 1,
};

export default TextWrapper;
