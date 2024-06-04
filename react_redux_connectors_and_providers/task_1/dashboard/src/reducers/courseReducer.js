// TASK 4 - REDUCERS: reducers/courseReducer.js
import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

// Initial state
const initialState = Map();

// Course reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data and convert it to an Immutable Map
      const normalizedData = coursesNormalizer(action.data);
      return state.merge(normalizedData);

    case SELECT_COURSE:
      // Use setIn to update isSelected prop of the specific course
      return state.setIn([String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;
