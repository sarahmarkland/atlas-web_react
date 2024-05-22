// TASK 5: src/actions/notificationActionCreators.js

import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Action creator for marking a notification as read.
 * @param {number} index - The index of the notification to mark as read.
 * @returns {Object} - The action object with type MARK_AS_READ and the index.
 */
export function markAsRead(index) {
return {
  type: MARK_AS_READ,
  index
};
}

/**
 * Action creator for setting the notification filter.
 * @param {string} filter - The filter type to set.
 * @returns {Object} - The action object with type SET_TYPE_FILTER and the filter.
 */
export function setNotificationFilter(filter) {
return {
  type: SET_TYPE_FILTER,
  filter
};
}
