// src/CourseList/CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseListRow component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe('When isHeader is true', () => {
    it('should render one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);

      const th = wrapper.find('th');
      expect(th).toHaveLength(1);
      expect(th.prop('colSpan')).toEqual('2');
    });

    it('should render two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" textSecondCell="Subheader" />);
      expect(wrapper.find('th')).toHaveLength(2);
    });
  });

  describe('When isHeader is false', () => {
    it('should render two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow textFirstCell="Data" textSecondCell="Value" />);
      expect(wrapper.find('td')).toHaveLength(2);
      expect(wrapper.find('tr').exists()).toBe(true);
    });
  });
});
