/*
*
@author thinhth on 9/9/21
*
*/

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {width} from '@utils/ui-utils'; // TODO add more icon provider later

const IconWrapper = memo(props => {
  const {name, size, color} = props;
  return <Icon name={name} size={size} color={color} />;
});

IconWrapper.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

IconWrapper.defaultProps = {
  name: 'add-circle',
  size: width(30),
  numberOfLines: '#fff',
};

export default IconWrapper;
