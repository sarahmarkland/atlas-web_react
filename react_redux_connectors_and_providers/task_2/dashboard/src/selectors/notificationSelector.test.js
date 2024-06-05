// TASK 5 - REDUCERS: src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = {
    notifications: fromJS({
      filter: 'URGENT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    }),
  };

  it('should return the filter type selected', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual('URGENT');
  });

  it('should return the list of notifications', () => {
    const notifications = getNotifications(state).toJS();
    const expectedNotifications = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ];
    expect(notifications).toEqual(expectedNotifications);
  });

  it('should return the list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state).toJS();
    const expectedUnreadNotifications = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ];
    expect(unreadNotifications).toEqual(expectedUnreadNotifications);
  });
});
