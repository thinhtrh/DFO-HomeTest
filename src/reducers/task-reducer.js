/*
*
@author thinhth on 9/10/21
*
*/

import {FilterTypes, TaskStatuses} from '@contexts/task-context';
import _ from 'lodash';

export const ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  ADD_TASK_SUCCESS: 'ADD_TASK_SUCCESS',
  ADD_TASK_FAILURE: 'ADD_TASK_FAILURE',
  FINISH_TASK: 'FINISH_TASK',
  FINISH_TASK_SUCCESS: 'FINISH_TASK_SUCCESS',
  FINISH_TASK_FAILURE: 'FINISH_TASK_FAILURE',
  DELETE_TASK: 'DELETE_TASK',
  DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
  DELETE_TASK_FAILURE: 'DELETE_TASK_FAILURE',
  GET_TASK: 'GET_TASK',
  GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS',
  GET_TASK_FAILURE: 'GET_TASK_FAILURE',
  FILTER_TASKS: 'FILTER_TASKS',
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_TASK: {
      return {
        ...state,
        deviceId: action.deviceId,
        isFetching: true,
      };
    }
    case ACTIONS.ADD_TASK:
    case ACTIONS.DELETE_TASK:
    case ACTIONS.FINISH_TASK: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTIONS.ADD_TASK_FAILURE:
    case ACTIONS.GET_TASK_FAILURE:
    case ACTIONS.DELETE_TASK_FAILURE:
    case ACTIONS.FINISH_TASK_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case ACTIONS.ADD_TASK_SUCCESS: {
      return {
        ...state,
        orgTasks: [...[action.task], ...state.orgTasks],
        tasks:
          state.filterType !== FilterTypes.DONE
            ? [...[action.task], ...state.tasks]
            : state.tasks,
        isFetching: false,
      };
    }
    case ACTIONS.DELETE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: _.filter(state.tasks, task => task.taskId !== action.taskId),
        orgTasks: _.filter(
          state.orgTasks,
          task => task.taskId !== action.taskId,
        ),
        isFetching: false,
      };
    }
    case ACTIONS.GET_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.tasks,
        orgTasks: action.tasks,
        isFetching: false,
      };
    }
    case ACTIONS.FILTER_TASKS: {
      return {
        ...state,
        filterType: action.filterType,
        tasks:
          action.filterType === FilterTypes.ALL
            ? state.orgTasks
            : _.filter(
                state.orgTasks,
                task =>
                  (action.filterType === FilterTypes.ACTIVE &&
                    task.status === TaskStatuses.ACTIVE) ||
                  (action.filterType === FilterTypes.DONE &&
                    task.status === TaskStatuses.DONE),
              ),
      };
    }

    case ACTIONS.FINISH_TASK_SUCCESS: {
      return {
        ...state,
        tasks:
          state.filterType === FilterTypes.ACTIVE
            ? _.filter(state.tasks, task => task.taskId !== action.taskId)
            : _.map(state.tasks, task => {
                if (task.taskId !== action.taskId) {
                  return task;
                } else {
                  return {
                    ...task,
                    finishedDate: action.finishedDate,
                    status: TaskStatuses.DONE,
                  };
                }
              }),
        orgTasks: _.map(state.orgTasks, task => {
          if (task.taskId !== action.taskId) {
            return task;
          } else {
            return {
              ...task,
              finishedDate: action.finishedDate,
              status: TaskStatuses.DONE,
            };
          }
        }),
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
