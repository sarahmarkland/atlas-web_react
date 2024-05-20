import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render 2 input and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('should have the submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('should enable the submit button when both inputs are filled', () => {
    const wrapper = shallow(<Login />);
    
    // Simulate changing email input
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    // Simulate changing password input
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password123' } });

    // Check if the submit button is enabled
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});
