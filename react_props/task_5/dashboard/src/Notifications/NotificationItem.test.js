// task_1/dashboard/src/Notifications/NotificationItem.test.js

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import '../../config/setupTests';

describe('NotificationItem component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NotificationItem   />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with correct type and value props', () => {
    const type = 'default';
    const value = 'Test Notification';
    const wrapper = shallow(<NotificationItem type={type} value={value} />);
    expect(wrapper.find('li').prop('data-notification-type')).toBe(type);
    expect(wrapper.text()).toBe(value);
  });

  it('should render with correct html prop', () => {
    const html = { __html: '<u>Test Notification</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.find('li').html()).toContain(html.__html);
  });
});
