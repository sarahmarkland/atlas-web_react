// TASK 7: src/actions/uiActionCreators.js
// Actions are like messages that you send to Redux to let it know something
// happened and it might need to update the state accordingly.
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
  } from './uiActionTypes';

/**
 * Action creator for logging in.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Object} - The action object with type LOGIN and user data.
 */
export function login(email, password) {
  return {
      type: LOGIN,
      user: { email, password },
  };
}

/**
 * Action creator for login success.
 * @param {Object} user - The user data.
 * @returns {Object} - The action object with type LOGIN_SUCCESS and user data.
 */
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

/**
 * Action creator for login failure.
 * @param {string} error - The error message.
 * @returns {Object} - The action object with type LOGIN_FAILURE and error message.
 */
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

/**
 * Action creator for logging out.
 * @returns {Object} - The action object with type LOGOUT.
 */

export function logout() {
  return {
      type: LOGOUT,
  };
}

/**
 * Action creator for displaying the notification drawer.
 * @returns {Object} - The action object with type DISPLAY_NOTIFICATION_DRAWER.
 */

export function displayNotificationDrawer() {
  return {
      type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

/**
 * Action creator for hiding the notification drawer.
 * @returns {Object} - The action object with type HIDE_NOTIFICATION_DRAWER.
 */
export function hideNotificationDrawer() {
  return {
      type: HIDE_NOTIFICATION_DRAWER,
  };
}

/**
 * Async action creator for logging in.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Function} - A function to dispatch login success or failure.
 */
export function loginRequest(email, password) {
  return(dispatch) => {
    dispatch(login(email, password));
    return axios
    .post('/dist/login-success.json', { email, password })
    .then((response) => {
      dispatch(loginSuccess(response.data));
    })
    .catch((error) => {
      dispatch(loginFailure(error.message));
    });
  };
}

/**
 * Custom hook to bind UI action creators.
 * @returns {Object} - The bound action creators.
 */
export function useBoundUIActions() {
  const dispatch = useDispatch();
  return bindActionCreators({
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginRequest,
  }, dispatch);
}
