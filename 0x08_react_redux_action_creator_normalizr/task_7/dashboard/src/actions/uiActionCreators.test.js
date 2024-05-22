// TASK 7: src/actions/uiActionCreators.test.js
import { configureMockStore } from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { fetchMock } from 'fetch-mock';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginRequest,
    loginSuccess,
    loginFailure
  } from './uiActionCreators';
  
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

const middlewaares = [thunk];
const mockStore = configureMockStore(middlewaares);
  
describe('uiActionCreators', () => {
  it('login should create an action to log in', () => {
    const email = 'user@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });
  
  it('logout should create an action to log out', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });
  
  it('displayNotificationDrawer should create an action to display the notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });
  
  it('hideNotificationDrawer should create an action to hide the notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('loginRequest action', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('creates LOGIN and LOGIN_SUCCESS when loginRequest is successful', () => {
    const email = 'user@example.com';
    const password = 'password123';
    const user = { id: 1, name: 'John Doe' };

    mock.onPost('/dist/login-success.json').reply(200, user);

    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_SUCCESS, user },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN and LOGIN_FAILURE when loginRequest fails', () => {
    const email = 'user@example.com';
    const password = 'password123';
    const errorMessage = 'Request failed with status code 500';

    mock.onPost('/dist/login-success.json').reply(500);

    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_FAILURE, error: errorMessage },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
