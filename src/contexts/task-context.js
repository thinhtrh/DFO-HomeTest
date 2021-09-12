/*
*
@author thinhth on 9/9/21
*
*/

import React, {createContext, useReducer} from 'react';
import {ACTIONS, taskReducer} from '@reducers/task-reducer';
import {FirebaseService} from '../services/firebase-service';
import {DateUtils} from '@utils/date-utils';
import {RandomUtils} from '@utils/random-utils';

export const FilterTypes = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  DONE: 'DONE',
};

export const TaskStatuses = {
  ACTIVE: 'ACTIVE',
  DONE: 'DONE',
};

export const TaskContext = createContext();
const TaskContextProvider = props => {
  const {children} = props;

  const [tasksRe, dispatch] = useReducer(taskReducer, {
    deviceId: null,
    tasks: [],
    orgTasks: [],
    filterType: FilterTypes.ALL,
    isFetching: false,
  });

  const getTasks = async deviceId => {
    dispatch({
      type: ACTIONS.GET_TASK,
      deviceId,
    });
    const response = await FirebaseService.getTasks(deviceId);
    if (response?.success && response?.data) {
      dispatch({
        type: ACTIONS.GET_TASKS_SUCCESS,
        tasks: response.data,
      });
    } else {
      dispatch({
        type: ACTIONS.GET_TASK_FAILURE,
      });
    }
  };

  const addTask = async name => {
    dispatch({
      type: ACTIONS.ADD_TASK,
    });
    const task = {
      taskId: RandomUtils.randomId(),
      taskName: name,
      createdDate: DateUtils.getNowUTCTime(),
      finishedDate: null,
      status: TaskStatuses.ACTIVE,
    };
    const response = await FirebaseService.addTask(tasksRe.deviceId, task);
    if (response?.success) {
      dispatch({
        type: ACTIONS.ADD_TASK_SUCCESS,
        task: task,
      });
    } else {
      dispatch({
        type: ACTIONS.ADD_TASK_FAILURE,
      });
    }
  };

  const finishTask = async taskId => {
    dispatch({
      type: ACTIONS.FINISH_TASK,
    });
    const finishedDate = DateUtils.getNowUTCTime();
    const response = await FirebaseService.finishTask(
      tasksRe.deviceId,
      taskId,
      finishedDate,
    );
    if (response?.success) {
      dispatch({
        type: ACTIONS.FINISH_TASK_SUCCESS,
        taskId,
        finishedDate,
      });
    } else {
      dispatch({
        type: ACTIONS.FINISH_TASK_FAILURE,
      });
    }
  };

  const deleteTask = async taskId => {
    dispatch({
      type: ACTIONS.DELETE_TASK,
    });
    const response = await FirebaseService.deleteTask(tasksRe.deviceId, taskId);
    if (response?.success) {
      dispatch({
        type: ACTIONS.DELETE_TASK_SUCCESS,
        taskId,
      });
    } else {
      dispatch({
        type: ACTIONS.DELETE_TASK_FAILURE,
      });
    }
  };

  const filterTasks = async filterType => {
    dispatch({
      type: ACTIONS.FILTER_TASKS,
      filterType,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasksRe.tasks,
        finishTask,
        getTasks,
        addTask,
        deleteTask,
        filterTasks,
        deviceId: tasksRe.deviceId,
        filterType: tasksRe.filterType,
        isFetching: tasksRe.isFetching,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
