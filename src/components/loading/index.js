/*
*
@author thinhth on 9/11/21
*
*/

import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {COLORS} from '@themes/colors';
import TextWrapper from '@components/text-wrapper';
import styles from '@components/loading/styles';
import PropTypes from 'prop-types';

const Loading = memo(props => {
  const {loading} = props;

  if (!loading) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator color={COLORS.grey} />
        <TextWrapper text={'Loading...'} style={styles.text} />
      </View>
    </View>
  );
});

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
