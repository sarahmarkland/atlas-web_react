// reducers/courseReducer.test.js

import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = [];

  const courses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
  ];

  const coursesWithSelection = [
    { id: 1, name: "ES6", credit: 60, isSelected: false },
    { id: 2, name: "Webpack", credit: 20, isSelected: false },
    { id: 3, name: "React", credit: 40, isSelected: false }
  ];

  it('should return the initial state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS and update state correctly', () => {
    const expectedState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ];
    const state = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courses });
    expect(state).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and update the correct course', () => {
    const initialState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ];
    const expectedState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: true },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ];
    const state = courseReducer(initialState, { type: SELECT_COURSE, index: 2 });
    expect(state).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and update the correct course', () => {
    const initialState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: true },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ];
    const expectedState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ];
    const state = courseReducer(initialState, { type: UNSELECT_COURSE, index: 2 });
    expect(state).toEqual(expectedState);
  });
});
