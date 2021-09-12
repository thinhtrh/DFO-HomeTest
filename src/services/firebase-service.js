/*
*
@author thinhth on 9/10/21
*
*/

import firestore from '@react-native-firebase/firestore';
import {TaskStatuses} from '@contexts/task-context';

const getTasks = async deviceId => {
  try {
    const res = await firestore()
      .collection(deviceId)
      .orderBy('createdDate', 'desc')
      .get();
    if (res) {
      let arr = [];
      res.forEach(documentSnapshot => {
        arr = [...arr, ...[documentSnapshot.data()]];
      });
      return {
        data: arr,
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  } catch (e) {
    return {
      success: false,
    };
  }
};

const addTask = async (deviceId, task) => {
  try {
    await firestore().collection(deviceId).doc(task.taskId).set(task);
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};

const finishTask = async (deviceId, taskId, finishedDate) => {
  try {
    await firestore().collection(deviceId).doc(taskId).update({
      finishedDate,
      status: TaskStatuses.DONE,
    });
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};

const deleteTask = async (deviceId, taskId) => {
  try {
    await firestore().collection(deviceId).doc(taskId).delete();
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};
export const FirebaseService = {
  getTasks,
  addTask,
  finishTask,
  deleteTask,
};
