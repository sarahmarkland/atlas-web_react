// Reducer/Selector TASK 0 - implement a basic reducer
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/uiActionTypes';

// Define an object with three properties; this intial state provides 
// default values that the application can rely on when it first starts.
const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

// For each action type, the reducer returns a new state object with the
// updated values.
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true,
            };
        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false,
            };
        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false,
            };
        default:
            return state;
    }
};

export default uiReducer;
