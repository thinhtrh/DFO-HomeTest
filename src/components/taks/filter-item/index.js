/*
*
@author thinhth on 9/10/21
*
*/

import React, {memo} from 'react';
import TextWrapper from '@components/text-wrapper';
import IconWrapper from '@components/icon-wrapper';
import styles from '@components/taks/filter-item/styles';
import PressableWrapper from '@components/pressable-wrapper';
import {FontSizes} from '@themes/fonts';
import PropTypes from 'prop-types';
import {COLORS} from '@themes/colors';
import {width} from '@utils/ui-utils';

const MemoizedFilter = memo(props => {
  const {onSelect, isSelected, name, color, icon} = props;
  return (
    <PressableWrapper
      defaultStyle={[
        styles.container,
        isSelected && {borderBottomWidth: 1, borderColor: color},
      ]}
      onPress={onSelect}>
      <IconWrapper
        name={icon}
        size={isSelected ? width(40) : width(20)}
        color={color}
      />
      <TextWrapper
        text={name}
        style={[
          styles.textStyle,
          {
            color: color,
            fontWeight: isSelected ? 'bold' : '500',
            fontSize: isSelected ? FontSizes.mLarge : FontSizes.medium,
          },
        ]}
      />
    </PressableWrapper>
  );
});

MemoizedFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  icon: PropTypes.string,
};

MemoizedFilter.defaultProps = {
  isSelected: false,
  name: '',
  color: COLORS.grey,
};

const filterPropsAreEqual = (prev, next) => {
  return prev.isSelected === next.isSelected;
};

const FilterItem = memo(MemoizedFilter, filterPropsAreEqual);

export default FilterItem;
