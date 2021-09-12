/*
*
@author thinhth on 9/10/21
*
*/

import moment from 'moment';

const getNowUTCTime = () => {
  return new Date().toISOString();
};

const convertUTCToLocalTime = (utc, format = 'MM/DD/YYYY, HH:mm:ss') =>
  moment(utc).format(format);

export const DateUtils = {
  getNowUTCTime,
  convertUTCToLocalTime,
};
