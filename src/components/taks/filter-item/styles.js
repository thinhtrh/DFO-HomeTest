/*
*
@author thinhth on 9/10/21
*
*/

import {StyleSheet} from 'react-native';
import {FontSizes} from '@themes/fonts';
import {METRICS} from '@themes/metrics';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: FontSizes.medium,
    marginLeft: METRICS.spacingS,
  },
});

export default styles;
