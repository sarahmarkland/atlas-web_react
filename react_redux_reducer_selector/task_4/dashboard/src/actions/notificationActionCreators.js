// TASK 3 - reducer: src/actions/notificationActionCreators.js
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { FETCH_NOTIFCATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Action creator for fetching notifications successfully.
 * @param {Array} data - The notifications data to set.
 * @returns {Object} - The action object with type and data.
 */
export const fetchNotificationsSuccess = (data) => ({
  type: FETCH_NOTIFCATIONS_SUCCESS,
  data
});

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

/**
 * Custom hook to bind notification action creators.
 * @returns {Object} - The bound action creators.
 */
export function useBoundNotificationActions() {
  const dispatch = useDispatch();
  return bindActionCreators({ fetchNotificationsSuccess, markAsRead, setNotificationFilter }, dispatch);
}
