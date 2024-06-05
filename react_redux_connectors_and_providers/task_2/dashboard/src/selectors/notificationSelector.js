// TASK 5 - REDUCERS: src/selectors/notificationSelector.js
import { createSelector } from 'reselect';

// Input selectors
const notificationsState = (state) => state.notifications;

// Selector for filter type
export const filterTypeSelected = createSelector(
  notificationsState,
  (notifications) => notifications.get('filter')
);

// Selector for all notifications
export const getNotifications = createSelector(
  notificationsState,
  (notifications) => notifications.get('notifications')
);

// Selector for unread notifications
export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) => notifications.filter(notification => !notification.get('isRead'))
);
