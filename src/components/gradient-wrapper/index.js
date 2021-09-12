/*
*
@author thinhth on 9/10/21
*
*/

import React, {memo} from 'react';
import {ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '@themes/colors';

const GradientWrapper = memo(props => {
  const {children, colors, style} = props;
  return (
    <LinearGradient
      colors={colors || [COLORS.grey, COLORS.white]}
      locations={[0, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={style}>
      {children}
    </LinearGradient>
  );
});

GradientWrapper.propTypes = {
  children: PropTypes.node,
  colors: PropTypes.array,
  style: ViewPropTypes.style,
};

GradientWrapper.defaultProps = {
  children: null,
  colors: [COLORS.grey, COLORS.white],
  style: null,
};

export default GradientWrapper;
