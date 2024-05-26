// TASK 3 - reducers: reducers/notificationReducer.test.js
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = {
    notifications: [],
    filter: 'DEFAULT'
  };

  const notifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" }
  ];

  const notificationsWithReadFlag = [
    { id: 1, type: "default", value: "New course available", isRead: false },
    { id: 2, type: "urgent", value: "New resume available", isRead: false },
    { id: 3, type: "urgent", value: "New data available", isRead: false }
  ];

  it('should return the initial state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and update state correctly', () => {
    const expectedState = {
      filter: 'DEFAULT',
      notifications: notificationsWithReadFlag
    };
    const state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications });
    expect(state).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and update the correct notification', () => {
    const initialStateWithNotifications = {
      filter: 'DEFAULT',
      notifications: notificationsWithReadFlag
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };
    const state = notificationReducer(initialStateWithNotifications, { type: MARK_AS_READ, index: 2 });
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter correctly', () => {
    const initialStateWithNotifications = {
      filter: 'DEFAULT',
      notifications: notificationsWithReadFlag
    };
    const expectedState = {
      filter: 'URGENT',
      notifications: notificationsWithReadFlag
    };
    const state = notificationReducer(initialStateWithNotifications, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(state).toEqual(expectedState);
  });
});
