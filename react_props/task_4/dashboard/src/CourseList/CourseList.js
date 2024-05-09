// src/CourseList/CourseList.js
import React from 'react';
import CourseListRow from './CourseListRow';

function CourseList() {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
        <CourseListRow textFirstCell="React" textSecondCell="40" />
      </tbody>
    </table>
  );
}

export default CourseList;
