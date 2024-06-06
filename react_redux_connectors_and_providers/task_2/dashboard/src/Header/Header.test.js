import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render img and h1 tags', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('should not create logoutSection with default context value', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('should create logoutSection when user is logged in', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: 'test@example.com' }} />);
    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com (logout)');
  });
});
