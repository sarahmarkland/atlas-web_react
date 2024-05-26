import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

const mockContext = {
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  logOut: jest.fn(),
};

describe('Header Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('should not create logoutSection with default context value', () => {
    const wrapper = mount(
      <AppContext.Provider value={mockContext}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('should create logoutSection when user is logged in', () => {
    const loggedInContext = {
      ...mockContext,
      user: {
        ...mockContext.user,
        email: 'test@example.com',
        isLoggedIn: true,
      },
    };
    const wrapper = mount(
      <AppContext.Provider value={loggedInContext}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com (logout)');
  });

  it('should call logOut function when logout link is clicked', () => {
    const loggedInContext = {
      ...mockContext,
      user: {
        ...mockContext.user,
        email: 'test@example.com',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };
    const wrapper = mount(
      <AppContext.Provider value={loggedInContext}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(loggedInContext.logOut).toHaveBeenCalled();
  });
});
