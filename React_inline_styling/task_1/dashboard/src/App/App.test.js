import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.restoreAllMocks();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('should contain the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('should contain the Login component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('should not display CourseList by default', () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  describe('when isLoggedIn is true', () => {
    beforeEach(() => {
      wrapper.setProps({ isLoggedIn: true });
    });

    it('should not include the Login component', () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('should include the CourseList component', () => {
      expect(wrapper.find(CourseList).exists()).toBe(true);
  });
});

  describe('key event handling', () => {
    it('should call logOut function and alert when Ctrl + h keys are pressed', () => {
      
      const logOutMock = jest.fn();
      const wrapper = shallow(<App logOut={logOutMock} />);
      // const alertMock = jest.spyOn(window, 'alert');

      const mockEvent = { ctrlKey: true, key: 'h', preventDefault: jest.fn() };

      // trigger keydown event with ctrl+h keys
      wrapper.instance().handleKeyDown(mockEvent);

      // expect(alertMock).toHaveBeenCalledWith('Logging you out');
      expect(global.alert).toHaveBeenCalledWith('Logging you out');
      expect(logOutMock).toHaveBeenCalled();
    });
  });
});
