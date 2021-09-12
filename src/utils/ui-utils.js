/*
*
@author thinhth on 9/11/21
*
*/

import {METRICS} from '@themes/metrics';

//Guideline sizes are based on iPhone X screen
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const width = size => {
  return (METRICS.screenWidth / guidelineBaseWidth) * size;
};
const height = size => {
  let screenRatio = METRICS.screenHeight / guidelineBaseHeight;
  return screenRatio * size;
};

const fontSize = (size, factor = 0.5) => {
  return size + (width(size) - size) * factor;
};

export {width, height, fontSize};
