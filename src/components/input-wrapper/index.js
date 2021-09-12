/*
*
@author thinhth on 9/9/21
*
*/

import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {TextInput, View} from 'react-native';
import styles from '@components/input-wrapper/styles';
import PressableWrapper from '@components/pressable-wrapper';
import IconWrapper from '@components/icon-wrapper';
import {COLORS} from '@themes/colors';
import PropTypes from 'prop-types';
import {width} from '@utils/ui-utils';

const InputWrapper = forwardRef((props, ref) => {
  const {value, onChangeText, placeholder} = props;

  const inputRef = useRef(null);
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      />
      {value?.toString() !== '' && (
        <PressableWrapper onPress={() => onChangeText('')}>
          <IconWrapper
            name={'close-circle-outline'}
            size={width(25)}
            color={COLORS.grey}
          />
        </PressableWrapper>
      )}
    </View>
  );
});

InputWrapper.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeText: PropTypes.func.isRequired,
};

InputWrapper.defaultProps = {
  placeholder: 'place holder',
};

export default InputWrapper;
