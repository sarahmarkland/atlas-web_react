// TASK 1 - reducers/uiReducer.js: utilize Map from Immutable.js and
// modify state updates accordingly
import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

// Define an object with three properties; this intial state provides 
// default values that the application can rely on when it first starts.
// Define the initial state as an Immutable Map
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

// For each action type, the reducer returns a new state object with the
// updated values.
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
      case DISPLAY_NOTIFICATION_DRAWER:
          return state.set('isNotificationDrawerVisible', true)
              ;
      case HIDE_NOTIFICATION_DRAWER:
          return state.set('isNotificationDrawerVisible', false);
      case LOGIN_SUCCESS:
          return state.set('isUserLoggedIn', true);
      case LOGIN_FAILURE:
          return state.set('isUserLoggedIn', false);
      case LOGOUT:
          return state.set('isUserLoggedIn', false);
      default:
          return state;
  }
};

export default uiReducer;
