import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    const props = {
      isLoggedIn: false,
      displayDrawer: false,
      displayNotificationDrawer: jest.fn(),
      hideNotificationDrawer: jest.fn(),
    };
    wrapper = shallow(<App {...props} />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
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
      const loggedInProps = {
        isLoggedIn: true,
        displayDrawer: false,
        displayNotificationDrawer: jest.fn(),
        hideNotificationDrawer: jest.fn(),
      };
      wrapper = shallow(<App {...loggedInProps} />);
    });

    it('should not include the Login component', () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('should include the CourseList component', () => {
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });
});

describe('mapStateToProps', () => {
  it('should return the correct props based on the state', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      },
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
