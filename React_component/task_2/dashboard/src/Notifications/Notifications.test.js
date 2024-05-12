import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
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

  // it('should close the notification menu when the close button is clicked', () => {
  //   const wrapper = shallow(<Notifications />);
  //   // Initially, the notification menu should be visible
  //   expect(wrapper.find('.Notifications').exists()).toBe(true);
  //   // Simulate a click event on the close button
  //   wrapper.find('button[aria-label="Close"]').simulate('click');
  //   // After clicking, the notification menu should not be visible
  //   expect(wrapper.find('.Notifications').exists()).toBe(false);
  // });  
});
