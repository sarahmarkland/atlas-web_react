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
