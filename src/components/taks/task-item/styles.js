/*
*
@author thinhth on 9/10/21
*
*/

import {StyleSheet} from 'react-native';
import {METRICS} from '@themes/metrics';
import {FontSizes} from '@themes/fonts';
import {COLORS} from '@themes/colors';
import {width} from '@utils/ui-utils';

const styles = StyleSheet.create({
  container: {
    marginLeft: METRICS.spacingXXL,
    borderTopLeftRadius: METRICS.spacingM,
    borderBottomLeftRadius: METRICS.spacingM,
    // marginTop: METRICS.spacingM,
  },
  gradientView: {
    borderTopLeftRadius: METRICS.spacingM,
    borderBottomLeftRadius: METRICS.spacingM,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: METRICS.spacingXL,
  },
  leftView: {
    flex: 1,
    marginRight: METRICS.spacingM,
  },
  taskName: {
    fontWeight: 'bold',
    fontSize: FontSizes.mLarge,
    color: COLORS.white,
    flex: 1,
  },
  date: {
    fontSize: FontSizes.small,
    color: COLORS.white,
    flex: 1,
  },
  rectButton: {
    width: width(50),
    borderRadius: width(25),
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  rectView: {
    width: width(40),
    height: width(40),
    backgroundColor: COLORS.red,
    borderRadius: width(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
