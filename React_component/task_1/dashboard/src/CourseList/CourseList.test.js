import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render "No course available yet" when listCourses is empty', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.text()).toContain('No course available yet');
    expect(wrapper.find(CourseListRow)).toHaveLength(1);
  });

  it('should render the list of courses when listCourses is not empty', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3); // Header + 2 rows
  });
});
