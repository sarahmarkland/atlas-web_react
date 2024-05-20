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

  describe('when user is logged in', () => {
    beforeEach(() => {
      wrapper.setState({
        user: {
          email: 'test@example.com',
          password: 'password',
          isLoggedIn: true,
        },
      });
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
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      const mockEvent = { ctrlKey: true, key: 'h', preventDefault: jest.fn() };

      // trigger keydown event with ctrl+h keys
      wrapper.instance().handleKeyDown(mockEvent);

      expect(alertMock).toHaveBeenCalledWith('Logging you out');
      expect(wrapper.state().user.isLoggedIn).toBe(false);

      alertMock.mockRestore();
    });
  });

  describe('displayDrawer state', () => {
    it('should have displayDrawer state set to false by default', () => {
      expect(wrapper.state().displayDrawer).toBe(false);
    });

    it('should set displayDrawer to true when handleDisplayDrawer is called', () => {
      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state().displayDrawer).toBe(true);
    });

    it('should set displayDrawer to false when handleHideDrawer is called', () => {
      wrapper.instance().handleDisplayDrawer(); // First, set it to true
      expect(wrapper.state().displayDrawer).toBe(true); // Ensure it's true first
      wrapper.instance().handleHideDrawer();
      expect(wrapper.state().displayDrawer).toBe(false);
    });
  });

  describe('login and logout functions', () => {
    it('should update state correctly when logIn is called', () => {
      wrapper.instance().logIn('test@example.com', 'password');
      expect(wrapper.state().user).toEqual({
        email: 'test@example.com',
        password: 'password',
        isLoggedIn: true,
      });
    });

    it('should update state correctly when logOut is called', () => {
      wrapper.setState({
        user: {
          email: 'test@example.com',
          password: 'password',
          isLoggedIn: true,
        },
      });
      wrapper.instance().logOut();
      expect(wrapper.state().user).toEqual({
        email: '',
        password: '',
        isLoggedIn: false,
      });
    });
  });
});
