/*
*
@author thinhth on 9/11/21
*
*/

import {useEffect, useState} from 'react';
import {Keyboard, Platform} from 'react-native';

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardDidShow(e) {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setTimeout(() => {
      setKeyboardHeight(0);
    }, 250);
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
      Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    } else {
      Keyboard.addListener('keyboardWillShow', onKeyboardDidShow);
      Keyboard.addListener('keyboardWillHide', onKeyboardDidHide);
    }
    return () => {
      if (Platform.OS === 'android') {
        Keyboard.addListener('keyboardDidShow', onKeyboardDidShow).remove();
        Keyboard.addListener('keyboardDidHide', onKeyboardDidHide).remove();
      } else {
        Keyboard.addListener('keyboardWillShow', onKeyboardDidShow).remove();
        Keyboard.addListener('keyboardWillHide', onKeyboardDidHide).remove();
      }
    };
  }, []);

  return {keyboardHeight};
};
