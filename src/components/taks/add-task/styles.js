/*
*
@author thinhth on 9/11/21
*
*/

import {StyleSheet} from 'react-native';
import {METRICS} from '@themes/metrics';
import {COLORS} from '@themes/colors';
import {FontSizes} from '@themes/fonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    alignSelf: 'stretch',
    width: METRICS.screenWidth,
    padding: METRICS.spacingXXL,
    position: 'absolute',
    left: 0,
  },
  title: {
    color: COLORS.white,
    fontSize: FontSizes.mLarge,
    fontWeight: 'bold',
    marginBottom: METRICS.spacingL,
  },
});

export default styles;
