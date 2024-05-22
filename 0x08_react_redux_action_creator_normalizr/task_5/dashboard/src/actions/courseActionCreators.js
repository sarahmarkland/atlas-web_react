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
