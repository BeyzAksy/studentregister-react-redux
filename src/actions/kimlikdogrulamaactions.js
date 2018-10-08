import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER,
         LOGIN_USER_SUCCES,
         LOGIN_FAIL } from './types';

export const emailChanged = (email) => {
  return (dispatch) => {
    dispatch({
      type: EMAIL_CHANGED,
      payload: email
    });
  };
};

export const passwordChanged = (password) => {
  return (dispatch) => {
    dispatch({
      type: PASSWORD_CHANGED,
      payload: password
    });
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    if (email === '' || password === '') {
      Alert.alert(
        'Mesaj',
        'Her iki alan da dolu olamalıdır.',
        [
          { text: 'tamam', onpress: () => null }
        ]
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSucces(dispatch, user))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginSucces(dispatch, user))
          .catch(() => loginFail(dispatch));
        });
    }
  };
};

const loginSucces = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCES,
    payload: user
  });
  Actions.main();
};

const loginFail = (dispatch) => {
  Alert.alert(
    'Mesaj',
    'Kullanıcı veya adı şifre yanlış',
    [
      { text: 'tamam', onpress: () => null }
    ]
  );

  dispatch({
    type: LOGIN_FAIL,
  });
};
