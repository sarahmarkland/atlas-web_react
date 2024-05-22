// TASK 4: src/actions/uiActionCreators.js
// Actions are like messages that you send to Redux to let it know something
// happened and it might need to update the state accordingly.

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
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

// TASK 6: Bind UI action creators
// The handlers (handleLogin, handleLogout, handleDisplayNotificationDrawer,
// and handleHideNotificationDrawer) call the respective action creators
// when buttons are clicked.
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';

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
    hideNotificationDrawer
  }, dispatch);
}
