/*
*
@author thinhth on 9/11/21
*
*/

import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AddTask from '@components/taks/add-task';
import {TaskContext} from '@contexts/task-context';

export const withAddTask = WrappedComponent => {
  return props => {
    const {addTask} = useContext(TaskContext);
    const [showing, setShowing] = useState(false);

    const showAddView = () => {
      setShowing(true);
    };
    const onAddTask = taskName => {
      addTask(taskName);
    };
    return (
      <View style={styles.container}>
        <WrappedComponent {...props} showAddView={showAddView} />
        <AddTask
          onAddTask={taskName => onAddTask(taskName)}
          isShowing={showing}
          onHide={() => setShowing(false)}
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
