/*
*
@author thinhth on 9/10/21
*
*/

import React, {memo, useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import TextWrapper from '@components/text-wrapper';
import IconWrapper from '@components/icon-wrapper';
import styles from '@components/taks/task-item/styles';
import {COLORS} from '@themes/colors';
import PressableWrapper from '@components/pressable-wrapper';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import GradientWrapper from '@components/gradient-wrapper';
import {DateUtils} from '@utils/date-utils';
import PropTypes from 'prop-types';
import {width} from '@utils/ui-utils';

const MemoizedTaskItem = props => {
  const {
    data,
    onFinishTask,
    isShowingDeleteTask,
    onShowDeleteTask,
    onDeleteTask,
  } = props;
  const swipeRef = useRef(null);

  useEffect(() => {
    if (!isShowingDeleteTask) {
      swipeRef.current?.close();
    }
  }, [isShowingDeleteTask]);

  const onDelete = () => {
    if (typeof onDeleteTask === 'function') {
      onDeleteTask();
    }
  };

  const onFinish = () => {
    if (typeof onFinishTask === 'function') {
      onFinishTask();
    }
  };

  const onShowDelete = () => {
    if (typeof onShowDeleteTask === 'function') {
      onShowDeleteTask();
    }
  };

  const renderDeleteButton = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
    });
    return (
      <RectButton
        activeOpacity={0}
        style={styles.rectButton}
        onPress={() => onDelete()}>
        <Animated.View
          style={[
            styles.rectView,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          <IconWrapper
            name={'trash-outline'}
            size={width(30)}
            color={COLORS.white}
          />
        </Animated.View>
      </RectButton>
    );
  };

  return (
    <View>
      <Swipeable
        ref={swipeRef}
        onSwipeableRightWillOpen={() => onShowDelete()}
        renderRightActions={renderDeleteButton}>
        <View style={styles.container}>
          <GradientWrapper
            style={styles.gradientView}
            colors={
              data.finishedDate
                ? [COLORS.green, COLORS.white]
                : [COLORS.grey, COLORS.white]
            }>
            <View style={styles.itemContainer}>
              <View style={styles.leftView}>
                <TextWrapper
                  text={data.taskName}
                  style={styles.taskName}
                  numberOfLines={2}
                />
                <TextWrapper
                  text={`Created At: ${DateUtils.convertUTCToLocalTime(
                    data.createdDate,
                  )}`}
                  style={styles.date}
                />
                {data.finishedDate && (
                  <TextWrapper
                    text={`Finished At: ${DateUtils.convertUTCToLocalTime(
                      data.finishedDate,
                    )}`}
                    style={styles.date}
                  />
                )}
              </View>
              <PressableWrapper onPress={() => onFinish()}>
                <IconWrapper
                  name={'checkmark-done-outline'}
                  size={50}
                  color={data.finishedDate ? COLORS.green : COLORS.grey}
                />
              </PressableWrapper>
            </View>
          </GradientWrapper>
        </View>
      </Swipeable>
    </View>
  );
};

MemoizedTaskItem.propTypes = {
  data: PropTypes.object.isRequired,
  onFinishTask: PropTypes.func,
  isShowingDeleteTask: PropTypes.bool,
  onShowDeleteTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};

MemoizedTaskItem.defaultProps = {
  onFinishTask: null,
  isShowingDeleteTask: false,
  onShowDeleteTask: null,
  onDeleteTask: null,
};

const taskItemPropsAreEqual = (prev, next) => {
  return (
    JSON.stringify(prev.data) === JSON.stringify(next.data) &&
    prev.isShowingDeleteTask === next.isShowingDeleteTask
  );
};

const TaskItem = memo(MemoizedTaskItem, taskItemPropsAreEqual);
export default TaskItem;
