/*
*
@author thinhth on 9/12/21
*
*/

import React, {memo} from 'react';
import {View} from 'react-native';
import {COLORS} from '@themes/colors';
import PropTypes from 'prop-types';
import styles from '@screens/main/styles';
import FilterItem from '@components/taks/filter-item';
import {FilterTypes} from '@contexts/task-context';

const FilterView = memo(props => {
  const {filterType, onSelect} = props;

  const onSelectFilter = type => {
    onSelect(type);
  };
  return (
    <View style={styles.filterView}>
      <FilterItem
        name={'All'}
        color={COLORS.blue}
        icon={'list-outline'}
        onSelect={() => onSelectFilter(FilterTypes.ALL)}
        isSelected={filterType === FilterTypes.ALL}
      />
      <FilterItem
        name={'Active'}
        color={COLORS.grey}
        icon={'checkmark-done-outline'}
        onSelect={() => {
          onSelectFilter(FilterTypes.ACTIVE);
        }}
        isSelected={filterType === FilterTypes.ACTIVE}
      />
      <FilterItem
        name={'Done'}
        color={COLORS.green}
        icon={'checkmark-done-outline'}
        onSelect={() => {
          onSelectFilter(FilterTypes.DONE);
        }}
        isSelected={filterType === FilterTypes.DONE}
      />
    </View>
  );
});

FilterView.propTypes = {
  filterType: PropTypes.oneOf([
    FilterTypes.ALL,
    FilterTypes.ACTIVE,
    FilterTypes.DONE,
  ]).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default FilterView;
