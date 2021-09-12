/*
*
@author thinhth on 9/9/21
*
*/

import {StyleSheet} from 'react-native';
import {COLORS} from '@themes/colors';
import {METRICS} from '@themes/metrics';
import {FontSizes} from '@themes/fonts';
import {height} from '@utils/ui-utils';

const inputHeight = height(50);
export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: inputHeight,
    backgroundColor: COLORS.white,
    paddingHorizontal: METRICS.spacingXXL,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: inputHeight / 2,
  },
  input: {
    color: COLORS.grey,
    height: inputHeight,
    fontSize: FontSizes.mLarge,
    flex: 1,
  },
});
