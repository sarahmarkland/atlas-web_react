import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-mock-store';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import { fromJS } from 'immutable';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

const mockStore = configureStore([]);
let store;

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    store = mockStore({
      ui: fromJS({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
      }),
    });
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive();
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
      store = mockStore({
        ui: fromJS({
          isNotificationDrawerVisible: false,
          isUserLoggedIn: true,
        }),
      });
      wrapper = shallow(
        <Provider store={store}>
          <App />
        </Provider>
      ).dive();
    });

    it('should not include the Login component', () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('should include the CourseList component', () => {
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });

  describe ('when user is logged in', () => {
    beforeEach(() => {
      store = mockStore({
        ui: fromJS({
          isNotificationDrawerVisible: false,
          isUserLoggedIn: true,
        }),
      });
      wrapper = shallow(
        <Provider store={store}>
          <App />
        </Provider>
      ).dive();
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
      uiReducer: {
        isUserLoggedIn: true,
      },
    });
    const expectedProps = {
      isLoggedIn: true,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
