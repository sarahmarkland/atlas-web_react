// task_4/dashboard/src/HOC/WithLogging.test.js
import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
// import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('should log mount and unmount events with "Component" for pure HTML elements', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted on componentDidMount()');
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount on componentWillUnmount()');
  });

  it('should log mount and unmount events with the component name for Login component', () => {
    const Login = () => <div />;
    Login.displayName = 'Login';
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
