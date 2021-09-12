/*
*
@author thinhth on 9/11/21
*
*/

import {StyleSheet} from 'react-native';
import {COLORS} from '@themes/colors';
import {METRICS} from '@themes/metrics';
import {FontSizes} from '@themes/fonts';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignSelf: 'stretch',
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
  },
  content: {
    padding: METRICS.spacingL,
    backgroundColor: COLORS.white,
    borderRadius: METRICS.spacingL,
  },
  text: {
    color: COLORS.grey,
    fontSize: FontSizes.medium,
    marginTop: METRICS.spacingL,
    fontWeight: 'bold',
  },
});
