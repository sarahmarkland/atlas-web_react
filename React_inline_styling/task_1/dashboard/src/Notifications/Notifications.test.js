// TASK 11 - React_component; Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the text "Here is the list of notifications" when listNotifications is not empty', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } }
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
  it('should call markAsRead with the correct ID when a notification is marked as read', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);

    wrapper.instance().markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    consoleSpy.mockRestore();
  });

  it('should display "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('No new notification for now');
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
  });

  it('should render the message "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.text()).toContain('No new notification for now');
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
  });

  it('should display the list of notifications when listNotifications is not empty', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'default', value: 'New article available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
    expect(wrapper.text()).toContain('Here is the list of notifications');
    expect(wrapper.text()).not.toContain('No new notification for now');
  });

  test('when updating the props of the component with the same list, the component doesn’t rerender', () => {
    const listNotifications = [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    
    wrapper.setProps({ listNotifications: listNotifications });
    
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');
    wrapper.setProps({ listNotifications: listNotifications });

    expect(renderSpy).toHaveBeenCalledTimes(0);
    renderSpy.mockRestore();
}); 

// task 11
  it('should rerender when updating props with a longer list', () => {
    const initialListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];
    const updatedListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'default', value: 'New article available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={initialListNotifications} />);
    
    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: updatedListNotifications });
    expect(shouldComponentUpdateSpy).toHaveBeenCalled();
    shouldComponentUpdateSpy.mockRestore();
  });
});
