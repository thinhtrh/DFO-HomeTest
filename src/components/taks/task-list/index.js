/*
*
@author thinhth on 9/10/21
*
*/

import React, {memo, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import TaskItem from '@components/taks/task-item';
import PropTypes from 'prop-types';
import styles from '@components/taks/task-list/styles';

const TaskList = memo(props => {
  const {data, onFinishTask, onShowDeleteTask, showingDeleteId, onDeleteTask} =
    props;

  const renderItem = useCallback(
    item => {
      const {taskId} = item;
      const onFinish = () => {
        if (typeof onFinishTask === 'function') {
          onFinishTask(taskId);
        }
      };

      const onShowDelete = () => {
        if (typeof onShowDeleteTask === 'function') {
          onShowDeleteTask(taskId);
        }
      };

      const onDelete = () => {
        if (typeof onDeleteTask === 'function') {
          onDeleteTask(taskId);
        }
      };
      return (
        <TaskItem
          data={item}
          onFinishTask={onFinish}
          onShowDeleteTask={onShowDelete}
          isShowingDeleteTask={taskId === showingDeleteId}
          onDeleteTask={onDelete}
        />
      );
    },
    [showingDeleteId],
  );
  return (
    <FlatList
      data={data}
      renderItem={({item}) => renderItem(item)}
      contentContainerStyle={styles.container}
      keyExtractor={item => item.taskId}
      showsVerticalScrollIndicator={false}
      initialNumToRender={8}
      maxToRenderPerBatch={8}
      updateCellsBatchingPeriod={30}
      windowSize={17}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
});

TaskList.propTypes = {
  data: PropTypes.array.isRequired,
  onFinishTask: PropTypes.func,
  showingDeleteId: PropTypes.string,
  onShowDeleteTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};

TaskList.defaultProps = {
  onFinishTask: null,
  showingDeleteId: '',
  onShowDeleteTask: null,
  onDeleteTask: null,
};

export default TaskList;
