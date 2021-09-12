/*
*
@author thinhth on 9/9/21
*
*/

import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from '@screens/main/styles';
import {TaskContext} from '@contexts/task-context';
import TaskList from '@components/taks/task-list';
import TextWrapper from '@components/text-wrapper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {METRICS} from '@themes/metrics';
import AddTaskButton from '@components/taks/add-button';
import Loading from '@components/loading';
import FilterView from '@components/taks/filter-view';
import {withAddTask} from '@hocs/with-add-task';
import GradientWrapper from '@components/gradient-wrapper';
import {COLORS} from '@themes/colors';
import {getUniqueId} from 'react-native-device-info';

const MainScreen = withAddTask(props => {
  const {showAddView} = props;
  const {
    tasks,
    getTasks,
    finishTask,
    filterTasks,
    filterType,
    deleteTask,
    isFetching,
  } = useContext(TaskContext);

  const insets = useSafeAreaInsets();
  const [showingDeleteId, setShowingDeleteId] = useState(null);

  useEffect(() => {
    const deviceId = getUniqueId();
    getTasks(deviceId);
  }, []);

  const onFinishTask = taskId => {
    finishTask(taskId);
  };

  const onDeleteTask = taskId => {
    deleteTask(taskId);
  };

  const selectFilter = type => {
    setShowingDeleteId(null);
    filterTasks(type);
  };

  return (
    <View style={[styles.container]}>
      <GradientWrapper
        style={[styles.container, {paddingTop: insets.top}]}
        colors={[COLORS.white, COLORS.blue]}>
        <View style={styles.topView}>
          <TextWrapper text={'My Todo List'} style={styles.titleText} />
        </View>
        <View style={styles.taskList}>
          <FilterView
            filterType={filterType}
            onSelect={type => selectFilter(type)}
          />
          {tasks?.length > 0 ? (
            <TaskList
              data={tasks}
              onFinishTask={taskId => onFinishTask(taskId)}
              showingDeleteId={showingDeleteId}
              onShowDeleteTask={taskId => setShowingDeleteId(taskId)}
              onDeleteTask={taskId => onDeleteTask(taskId)}
            />
          ) : isFetching ? null : (
            <TextWrapper text={'No data found'} style={styles.nodata} />
          )}
        </View>
        <AddTaskButton
          style={[styles.addButton, {bottom: insets.bottom + METRICS.spacingL}]}
          onPress={() => {
            showAddView();
          }}
        />
        <Loading loading={isFetching} />
      </GradientWrapper>
    </View>
  );
});

export default MainScreen;
