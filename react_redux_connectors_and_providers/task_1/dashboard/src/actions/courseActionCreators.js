// TASK 4 - REDUCERS (no code change): actions/courseActionCreators.js

import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

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

/**
 * Action creator to fetch courses successfully.
 * @param {Array} data - The array of courses fetched from API.
 * @returns {Object} - The action object with type and data.
 */
export function fetchCourseSuccess(data) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
}

/**
 * Custom hook to bind course action creators.
 * @returns {Object} - The bound action creators.
 */
export function useBoundCourseActions() {
  const dispatch = useDispatch();
  return bindActionCreators({ selectCourse, unSelectCourse, fetchCourseSuccess }, dispatch);
}
