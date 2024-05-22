// TASK 3: actions/courseActionCreators.js

import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Action creator to select a course.
 * @param {number} index - The index of the course to select.
 * @returns {Object} - The action object with type and index.
 */
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

/**
 * Action creator to unselect a course.
 * @param {number} index - The index of the course to unselect.
 * @returns {Object} - The action object with type and index.
 */
export function unSelectCourse(index) {
  return {
  type: UNSELECT_COURSE,
  index,
  };
}

// TASK 6: Bind course action creators
// Uses bindActionCreators to bind selectCourse and unSelectCourse action
// creators to the dispatch function from Redux.
// This allows you to call these action creators directly without needing
// to manually dispatch them.
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { selectCourse, unSelectCourse } from './courseActionCreators';

/**
 * Custom hook to bind course action creators.
 * @returns {Object} - The bound action creators.
 */
export function useBoundCourseActions() {
  const dispatch = useDispatch();
  return bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
}
