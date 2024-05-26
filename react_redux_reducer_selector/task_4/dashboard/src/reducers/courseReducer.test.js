// reducers/courseReducer.test.js
import { Map } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = Map();

  const courses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
  ];

  it('should return the initial state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS and update state correctly', () => {
    const normalizedData = {
      1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
      2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      3: { id: 3, name: 'React', credit: 40, isSelected: false }
    };
    const expectedState = Map(normalizedData);
    const state = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courses });
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SELECT_COURSE and update the isSelected property correctly', () => {
    const initialStateWithCourses = Map({
      1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
      2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      3: { id: 3, name: 'React', credit: 40, isSelected: false }
    });
    const expectedState = initialStateWithCourses.setIn(['2', 'isSelected'], true);
    const state = courseReducer(initialStateWithCourses, { type: SELECT_COURSE, index: 2 });
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle UNSELECT_COURSE and update the isSelected property correctly', () => {
    const initialStateWithCourses = Map({
      1: { id: 1, name: "ES6", credit: 60, isSelected: false },
      2: { id: 2, name: "Webpack", credit: 20, isSelected: true },
      3: { id: 3, name: "React", credit: 40, isSelected: false }
    });
    const expectedState = initialStateWithCourses.setIn(['2', 'isSelected'], false);
    const state = courseReducer(initialStateWithCourses, { type: UNSELECT_COURSE, index: 2 });
    expect(state.toJS()).toEqual(expectedState.toJS());
  });
});
