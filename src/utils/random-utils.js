/*
*
@author thinhth on 9/12/21
*
*/

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const randomId = (): string => uuidv4();

export const RandomUtils = {
  randomId,
};
