/*
*
@author thinhth on 9/9/21
*
*/

import React, {memo} from 'react';
import {ViewPropTypes} from 'react-native';
import PressableWrapper from '@components/pressable-wrapper';
import IconWrapper from '@components/icon-wrapper';
import {COLORS} from '@themes/colors';
import PropTypes from 'prop-types';
import {width} from '@utils/ui-utils';

const AddTaskButton = memo(props => {
  const {onPress, style} = props;
  return (
    <PressableWrapper defaultStyle={style} onPress={onPress}>
      <IconWrapper name="add-circle" size={width(60)} color={COLORS.blue} />
    </PressableWrapper>
  );
});

AddTaskButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

AddTaskButton.defaultProps = {
  style: null,
};

export default AddTaskButton;
