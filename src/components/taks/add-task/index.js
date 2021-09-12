/*
*
@author thinhth on 9/11/21
*
*/

import React, {createRef, memo, useEffect, useRef, useState} from 'react';
import {Animated, Easing, View} from 'react-native';
import InputWrapper from '@components/input-wrapper';
import TextWrapper from '@components/text-wrapper';
import styles from '@components/taks/add-task/styles';
import {METRICS} from '@themes/metrics';
import {useKeyboard} from '@hooks/use-keyboard';
import GradientWrapper from '@components/gradient-wrapper';
import {COLORS} from '@themes/colors';
import PropTypes from 'prop-types';

const AddTask = memo(props => {
  const {isShowing, onHide, onAddTask} = props;

  const [taskName, setTaskName] = useState('');
  const [viewHeight, setViewHeight] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const inputRef = createRef();

  const {keyboardHeight} = useKeyboard();

  const startAnimation = toValue => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isShowing) {
      inputRef.current?.focus();
      startAnimation(1);
    } else {
      startAnimation(0);
    }
  }, [isShowing]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      METRICS.screenHeight + viewHeight,
      METRICS.screenHeight - keyboardHeight - viewHeight,
    ],
  });

  const onSubmit = () => {
    if (taskName !== '') {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  const onLayout = e => {
    const {height} = e.nativeEvent.layout;
    setViewHeight(height);
  };

  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY}]}]}
      onLayout={e => onLayout(e)}>
      <TextWrapper text={'Add new Todo'} style={styles.title} />
      <InputWrapper
        ref={inputRef}
        value={taskName}
        onChangeText={text => setTaskName(text)}
        placeholder={'Enter todo name here'}
        onSubmitEditing={() => onSubmit()}
        autoCorrect={false}
        onBlur={() => {
          if (typeof onHide === 'function') onHide();
        }}
        returnKeyType={'done'}
        returnKeyLabel={'Done'}
        autoCompleteType={'off'}
      />
    </Animated.View>
  );
});

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onHide: PropTypes.func,
  isShowing: PropTypes.bool.isRequired,
};

AddTask.defaultProps = {
  onHide: null,
};

export default AddTask;
