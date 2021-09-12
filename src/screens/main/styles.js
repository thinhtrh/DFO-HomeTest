/*
*
@author thinhth on 9/9/21
*
*/

import {StyleSheet} from 'react-native';
import {COLORS} from '@themes/colors';
import {FontSizes} from '@themes/fonts';
import {METRICS} from '@themes/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    right: METRICS.spacingL,
  },
  topView: {
    padding: METRICS.spacingXXL,
  },
  titleText: {
    color: COLORS.blue,
    fontWeight: 'bold',
    fontSize: FontSizes.large,
  },
  taskList: {
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopLeftRadius: METRICS.spacingXXL,
    borderTopRightRadius: METRICS.spacingXXL,
    paddingTop: METRICS.spacingL,
  },
  filterView: {
    flexDirection: 'row',
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  nodata: {
    fontSize: FontSizes.mLarge,
    padding: METRICS.spacingXXL,
    color: COLORS.grey,
  },
});

export default styles;
