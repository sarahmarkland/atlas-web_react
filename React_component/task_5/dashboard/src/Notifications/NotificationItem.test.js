import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import '../../config/setupTests';

describe('NotificationItem component', () => {
  // Restore console function after all tests
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render without crashing', () => {
    const id = 1;
    const type = 'default';
    const value = 'Test Notification';
    const wrapper = shallow(<NotificationItem id={id} type={type} value={value} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with correct type and value props', () => {
    const id = 1;
    const type = 'default';
    const value = 'Test Notification';
    const wrapper = shallow(<NotificationItem id={id} type={type} value={value} />);

    expect(wrapper.find('li').exists()).toBe(true);
    expect(wrapper.find('li').prop('data-priority')).toBe(type);
    expect(wrapper.text()).toBe(value);
  });

  it('should render with correct html prop', () => {
    const id = 1;
    const type = 'default';
    const value = 'Test Notification';
    const html = { __html: '<u>Test Notification</u>' };
    const wrapper = shallow(<NotificationItem id={id} type={type} value={value} html={html} />);
    
    expect(wrapper.find('li').exists()).toBe(true);
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(html);
  });

  it('should call markAsRead with the correct ID when clicked', () => {
    const id = 1;
    const type = 'default';
    const value = 'Test Notification';
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem id={id} type={type} value={value} markAsRead={markAsReadMock} />);
    
    wrapper.find('li').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(id);
  });
});
